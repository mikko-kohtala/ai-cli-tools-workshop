import type { GameState, Tetromino, Position } from './types.js';
import {
  createTetromino,
  getRandomTetrominoType,
  rotateTetromino,
} from './pieces.js';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

// Create an empty board
function createEmptyBoard(): (string | null)[][] {
  return Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => null)
  );
}

// Initialize game state
export function createInitialState(): GameState {
  return {
    board: createEmptyBoard(),
    currentPiece: null,
    nextPiece: createTetromino(getRandomTetrominoType()),
    score: 0,
    lines: 0,
    level: 1,
    gameOver: false,
    paused: false,
  };
}

// Check if a piece position is valid (no collision)
function isValidPosition(
  board: (string | null)[][],
  piece: Tetromino,
  position: Position
): boolean {
  for (let row = 0; row < piece.shape.length; row++) {
    for (let col = 0; col < piece.shape[row].length; col++) {
      if (piece.shape[row][col]) {
        const newX = position.x + col;
        const newY = position.y + row;

        // Check boundaries
        if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
          return false;
        }

        // Check collision with existing blocks (only if not above board)
        if (newY >= 0 && board[newY][newX] !== null) {
          return false;
        }
      }
    }
  }
  return true;
}

// Spawn a new piece
export function spawnNewPiece(state: GameState): GameState {
  const newPiece = state.nextPiece;
  const nextPiece = createTetromino(getRandomTetrominoType());

  // Check if the new piece can be spawned
  if (newPiece && !isValidPosition(state.board, newPiece, newPiece.position)) {
    return { ...state, gameOver: true };
  }

  return {
    ...state,
    currentPiece: newPiece,
    nextPiece,
  };
}

// Move piece left
export function movePieceLeft(state: GameState): GameState {
  if (!state.currentPiece || state.gameOver || state.paused) return state;

  const newPosition = {
    x: state.currentPiece.position.x - 1,
    y: state.currentPiece.position.y,
  };

  if (isValidPosition(state.board, state.currentPiece, newPosition)) {
    return {
      ...state,
      currentPiece: { ...state.currentPiece, position: newPosition },
    };
  }

  return state;
}

// Move piece right
export function movePieceRight(state: GameState): GameState {
  if (!state.currentPiece || state.gameOver || state.paused) return state;

  const newPosition = {
    x: state.currentPiece.position.x + 1,
    y: state.currentPiece.position.y,
  };

  if (isValidPosition(state.board, state.currentPiece, newPosition)) {
    return {
      ...state,
      currentPiece: { ...state.currentPiece, position: newPosition },
    };
  }

  return state;
}

// Move piece down (soft drop)
export function movePieceDown(state: GameState): GameState {
  if (!state.currentPiece || state.gameOver || state.paused) return state;

  const newPosition = {
    x: state.currentPiece.position.x,
    y: state.currentPiece.position.y + 1,
  };

  if (isValidPosition(state.board, state.currentPiece, newPosition)) {
    return {
      ...state,
      currentPiece: { ...state.currentPiece, position: newPosition },
      score: state.score + 1, // Award 1 point for soft drop
    };
  }

  // Can't move down, lock the piece
  return lockPiece(state);
}

// Rotate piece
export function rotatePiece(state: GameState): GameState {
  if (!state.currentPiece || state.gameOver || state.paused) return state;

  const rotatedPiece = rotateTetromino(state.currentPiece);

  // Try the rotation at the current position
  if (isValidPosition(state.board, rotatedPiece, rotatedPiece.position)) {
    return { ...state, currentPiece: rotatedPiece };
  }

  // Try wall kicks (move left or right to make rotation fit)
  const wallKicks = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -2, y: 0 },
    { x: 2, y: 0 },
    { x: 0, y: -1 },
  ];

  for (const kick of wallKicks) {
    const kickedPosition = {
      x: rotatedPiece.position.x + kick.x,
      y: rotatedPiece.position.y + kick.y,
    };
    if (isValidPosition(state.board, rotatedPiece, kickedPosition)) {
      return {
        ...state,
        currentPiece: { ...rotatedPiece, position: kickedPosition },
      };
    }
  }

  return state; // Rotation not possible
}

// Hard drop (instant drop to bottom)
export function hardDrop(state: GameState): GameState {
  if (!state.currentPiece || state.gameOver || state.paused) return state;

  let newState = state;
  let dropDistance = 0;

  // Keep moving down until we can't
  while (newState.currentPiece) {
    const newPosition = {
      x: newState.currentPiece.position.x,
      y: newState.currentPiece.position.y + 1,
    };

    if (isValidPosition(newState.board, newState.currentPiece, newPosition)) {
      newState = {
        ...newState,
        currentPiece: { ...newState.currentPiece, position: newPosition },
      };
      dropDistance++;
    } else {
      break;
    }
  }

  // Award 2 points per cell dropped
  newState = { ...newState, score: newState.score + dropDistance * 2 };

  // Lock the piece
  return lockPiece(newState);
}

// Lock piece to board
function lockPiece(state: GameState): GameState {
  if (!state.currentPiece) return state;

  const newBoard = state.board.map((row) => [...row]);

  // Place the piece on the board
  for (let row = 0; row < state.currentPiece.shape.length; row++) {
    for (let col = 0; col < state.currentPiece.shape[row].length; col++) {
      if (state.currentPiece.shape[row][col]) {
        const boardY = state.currentPiece.position.y + row;
        const boardX = state.currentPiece.position.x + col;

        if (boardY >= 0 && boardY < BOARD_HEIGHT) {
          newBoard[boardY][boardX] = state.currentPiece.color;
        }
      }
    }
  }

  // Clear completed lines
  const { board: clearedBoard, linesCleared } = clearLines(newBoard);

  // Calculate score for cleared lines
  const lineScores = [0, 100, 300, 500, 800]; // 0, 1, 2, 3, 4 lines
  const lineScore = lineScores[linesCleared] * state.level;

  const newLines = state.lines + linesCleared;
  const newLevel = Math.floor(newLines / 10) + 1;

  return {
    ...state,
    board: clearedBoard,
    currentPiece: null,
    score: state.score + lineScore,
    lines: newLines,
    level: newLevel,
  };
}

// Clear completed lines
function clearLines(
  board: (string | null)[][]
): { board: (string | null)[][]; linesCleared: number } {
  let linesCleared = 0;
  const newBoard: (string | null)[][] = [];

  for (let row = BOARD_HEIGHT - 1; row >= 0; row--) {
    if (board[row].every((cell) => cell !== null)) {
      linesCleared++;
    } else {
      newBoard.unshift(board[row]);
    }
  }

  // Add empty lines at the top
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array(BOARD_WIDTH).fill(null));
  }

  return { board: newBoard, linesCleared };
}

// Calculate ghost piece position (where piece would land)
export function getGhostPiecePosition(state: GameState): Position | null {
  if (!state.currentPiece) return null;

  let ghostY = state.currentPiece.position.y;

  while (
    isValidPosition(state.board, state.currentPiece, {
      x: state.currentPiece.position.x,
      y: ghostY + 1,
    })
  ) {
    ghostY++;
  }

  return { x: state.currentPiece.position.x, y: ghostY };
}

// Toggle pause
export function togglePause(state: GameState): GameState {
  if (state.gameOver) return state;
  return { ...state, paused: !state.paused };
}

// Get drop interval based on level (milliseconds)
export function getDropInterval(level: number): number {
  return Math.max(100, 1000 - (level - 1) * 100);
}
