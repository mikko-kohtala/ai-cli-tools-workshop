#!/usr/bin/env tsx

import { stdin, stdout } from 'process';

// Terminal colors for dark theme
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
};

// Game constants
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const EMPTY_CELL = '·';
const BLOCK_CHAR = '█';

// Tetromino pieces with their rotations and colors
const TETROMINOS = {
  I: {
    shape: [
      ['I', 'I', 'I', 'I']
    ],
    color: colors.cyan,
    blockChar: '█'
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: colors.yellow,
    blockChar: '█'
  },
  T: {
    shape: [
      [' ', 'T', ' '],
      ['T', 'T', 'T']
    ],
    color: colors.magenta,
    blockChar: '█'
  },
  S: {
    shape: [
      [' ', 'S', 'S'],
      ['S', 'S', ' ']
    ],
    color: colors.green,
    blockChar: '█'
  },
  Z: {
    shape: [
      ['Z', 'Z', ' '],
      [' ', 'Z', 'Z']
    ],
    color: colors.red,
    blockChar: '█'
  },
  J: {
    shape: [
      ['J', ' ', ' '],
      ['J', 'J', 'J']
    ],
    color: colors.blue,
    blockChar: '█'
  },
  L: {
    shape: [
      [' ', ' ', 'L'],
      ['L', 'L', 'L']
    ],
    color: colors.white,
    blockChar: '█'
  }
};

type TetrominoType = keyof typeof TETROMINOS;

interface Position {
  x: number;
  y: number;
}

interface Tetromino {
  type: TetrominoType;
  shape: string[][];
  position: Position;
  rotation: number;
  color: string;
  blockChar: string;
}

class TetrisGame {
  private board: string[][];
  private currentPiece: Tetromino | null = null;
  private nextPiece: Tetromino | null = null;
  private score: number = 0;
  private lines: number = 0;
  private level: number = 1;
  private gameOver: boolean = false;
  private paused: boolean = false;
  private dropTime: number = 0;
  private dropInterval: number = 1000; // milliseconds
  private lastTime: number = 0;

  constructor() {
    this.board = Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(EMPTY_CELL));
    this.spawnPiece();
    this.spawnNextPiece();
  }

  private spawnPiece(): void {
    if (this.nextPiece) {
      this.currentPiece = this.nextPiece;
    } else {
      const types = Object.keys(TETROMINOS) as TetrominoType[];
      const randomType = types[Math.floor(Math.random() * types.length)];
      this.currentPiece = this.createTetromino(randomType);
    }
    this.spawnNextPiece();
  }

  private spawnNextPiece(): void {
    const types = Object.keys(TETROMINOS) as TetrominoType[];
    const randomType = types[Math.floor(Math.random() * types.length)];
    this.nextPiece = this.createTetromino(randomType);
  }

  private createTetromino(type: TetrominoType): Tetromino {
    return {
      type,
      shape: TETROMINOS[type].shape.map(row => [...row]),
      position: { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 },
      rotation: 0,
      color: TETROMINOS[type].color,
      blockChar: TETROMINOS[type].blockChar
    };
  }

  private rotatePiece(): void {
    if (!this.currentPiece) return;

    const rotated = this.currentPiece.shape[0].map((_, i) =>
      this.currentPiece!.shape.map(row => row[i]).reverse()
    );

    const originalShape = this.currentPiece.shape;
    this.currentPiece.shape = rotated;

    if (this.checkCollision()) {
      this.currentPiece.shape = originalShape;
    }
  }

  private movePiece(dx: number, dy: number): boolean {
    if (!this.currentPiece) return false;

    this.currentPiece.position.x += dx;
    this.currentPiece.position.y += dy;

    if (this.checkCollision()) {
      this.currentPiece.position.x -= dx;
      this.currentPiece.position.y -= dy;
      return false;
    }

    return true;
  }

  private checkCollision(): boolean {
    if (!this.currentPiece) return false;

    for (let y = 0; y < this.currentPiece.shape.length; y++) {
      for (let x = 0; x < this.currentPiece.shape[y].length; x++) {
        if (this.currentPiece.shape[y][x] !== ' ') {
          const boardX = this.currentPiece.position.x + x;
          const boardY = this.currentPiece.position.y + y;

          if (
            boardX < 0 ||
            boardX >= BOARD_WIDTH ||
            boardY >= BOARD_HEIGHT ||
            (boardY >= 0 && this.board[boardY][boardX] !== EMPTY_CELL)
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }

  private placePiece(): void {
    if (!this.currentPiece) return;

    for (let y = 0; y < this.currentPiece.shape.length; y++) {
      for (let x = 0; x < this.currentPiece.shape[y].length; x++) {
        if (this.currentPiece.shape[y][x] !== ' ') {
          const boardX = this.currentPiece.position.x + x;
          const boardY = this.currentPiece.position.y + y;

          if (boardY >= 0) {
            // Store both the block character and color information
            this.board[boardY][boardX] = `${this.currentPiece.color}${this.currentPiece.blockChar}`;
          }
        }
      }
    }

    this.clearLines();
    this.spawnPiece();

    if (this.checkCollision()) {
      this.gameOver = true;
    }
  }

  private clearLines(): void {
    let linesCleared = 0;

    for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
      if (this.board[y].every(cell => cell !== EMPTY_CELL)) {
        this.board.splice(y, 1);
        this.board.unshift(Array(BOARD_WIDTH).fill(EMPTY_CELL));
        linesCleared++;
        y++; // Check the same line again
      }
    }

    if (linesCleared > 0) {
      this.lines += linesCleared;
      this.score += linesCleared * 100 * this.level;
      this.level = Math.floor(this.lines / 10) + 1;
      this.dropInterval = Math.max(50, 1000 - (this.level - 1) * 50);
    }
  }

  private hardDrop(): void {
    if (!this.currentPiece) return;

    while (this.movePiece(0, 1)) {
      this.score += 2; // Bonus points for hard drop
    }
    this.placePiece();
  }

  public update(deltaTime: number): void {
    if (this.gameOver || this.paused) return;

    this.dropTime += deltaTime;

    if (this.dropTime >= this.dropInterval) {
      if (!this.movePiece(0, 1)) {
        this.placePiece();
      }
      this.dropTime = 0;
    }
  }

  public handleInput(key: string): void {
    if (this.gameOver) return;

    switch (key) {
      case '\u001b[D': // Left arrow
        if (!this.paused) this.movePiece(-1, 0);
        break;
      case '\u001b[C': // Right arrow
        if (!this.paused) this.movePiece(1, 0);
        break;
      case '\u001b[B': // Down arrow
        if (!this.paused && this.movePiece(0, 1)) {
          this.score += 1; // Bonus points for soft drop
        }
        break;
      case ' ': // Space
        if (!this.paused) this.hardDrop();
        break;
      case 'r':
      case 'R':
        if (!this.paused) this.rotatePiece();
        break;
      case 'p':
      case 'P':
        this.paused = !this.paused;
        break;
    }
  }

  private renderBoard(): string {
    let output = '';
    
    // Create a copy of the board with the current piece
    const displayBoard = this.board.map(row => [...row]);
    
    if (this.currentPiece) {
      for (let y = 0; y < this.currentPiece.shape.length; y++) {
        for (let x = 0; x < this.currentPiece.shape[y].length; x++) {
          if (this.currentPiece.shape[y][x] !== ' ') {
            const boardX = this.currentPiece.position.x + x;
            const boardY = this.currentPiece.position.y + y;
            
            if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
              displayBoard[boardY][boardX] = `${this.currentPiece.color}${this.currentPiece.blockChar}`;
            }
          }
        }
      }
    }

    // Render the board
    output += `${colors.bright}┌${'─'.repeat(BOARD_WIDTH * 2)}┐${colors.reset}\n`;
    
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      output += `${colors.bright}│${colors.reset}`;
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (displayBoard[y][x] !== EMPTY_CELL) {
          // Check if it's a colored block (contains color codes)
          if (displayBoard[y][x].includes('\x1b[')) {
            output += `${displayBoard[y][x]}${displayBoard[y][x].slice(-1)}${colors.reset}`;
          } else {
            output += `${colors.cyan}${BLOCK_CHAR}${BLOCK_CHAR}${colors.reset}`;
          }
        } else {
          output += `${colors.dim}${EMPTY_CELL}${EMPTY_CELL}${colors.reset}`;
        }
      }
      output += `${colors.bright}│${colors.reset}\n`;
    }
    
    output += `${colors.bright}└${'─'.repeat(BOARD_WIDTH * 2)}┘${colors.reset}\n`;
    
    return output;
  }

  private renderNextPiece(): string {
    if (!this.nextPiece) return '';

    let output = `${colors.bright}Next:${colors.reset}\n`;
    for (let y = 0; y < this.nextPiece.shape.length; y++) {
      for (let x = 0; x < this.nextPiece.shape[y].length; x++) {
        if (this.nextPiece.shape[y][x] !== ' ') {
          output += `${this.nextPiece.color}${this.nextPiece.blockChar}${this.nextPiece.blockChar}${colors.reset}`;
        } else {
          output += '  ';
        }
      }
      output += '\n';
    }
    return output;
  }

  private renderStats(): string {
    return `${colors.bright}Score: ${colors.green}${this.score}${colors.reset}\n` +
           `${colors.bright}Lines: ${colors.yellow}${this.lines}${colors.reset}\n` +
           `${colors.bright}Level: ${colors.magenta}${this.level}${colors.reset}\n`;
  }

  public render(): string {
    let output = '\x1b[2J\x1b[H'; // Clear screen and move cursor to top
    
    if (this.gameOver) {
      output += `${colors.red}${colors.bright}GAME OVER!${colors.reset}\n\n`;
      output += this.renderStats();
      output += `\n${colors.dim}Press Ctrl+C to exit${colors.reset}\n`;
      return output;
    }

    output += `${colors.bright}${colors.cyan}TETRIS${colors.reset}`;
    if (this.paused) {
      output += ` ${colors.yellow}${colors.bright}[PAUSED]${colors.reset}`;
    }
    output += `\n\n`;
    
    // Main game area
    const boardOutput = this.renderBoard();
    const nextOutput = this.renderNextPiece();
    const statsOutput = this.renderStats();
    
    // Layout: Board on left, stats and next piece on right
    const boardLines = boardOutput.split('\n');
    const nextLines = nextOutput.split('\n');
    const statsLines = statsOutput.split('\n');
    
    const maxLines = Math.max(boardLines.length, nextLines.length + statsLines.length);
    
    for (let i = 0; i < maxLines; i++) {
      const boardLine = boardLines[i] || '';
      const nextLine = i < nextLines.length ? nextLines[i] : '';
      const statsLine = i < statsLines.length ? statsLines[i] : '';
      
      output += boardLine;
      if (nextLine || statsLine) {
        output += '  ' + (nextLine || statsLine);
      }
      output += '\n';
    }
    
    output += `\n${colors.dim}Controls:${colors.reset}\n`;
    output += `${colors.dim}← → Move${colors.reset}\n`;
    output += `${colors.dim}↓ Soft drop${colors.reset}\n`;
    output += `${colors.dim}Space Hard drop${colors.reset}\n`;
    output += `${colors.dim}R Rotate${colors.reset}\n`;
    output += `${colors.dim}P Pause${colors.reset}\n`;
    
    return output;
  }

  public isGameOver(): boolean {
    return this.gameOver;
  }
}

// Main game loop
export async function main() {
  const game = new TetrisGame();
  let lastTime = Date.now();

  // Set up input handling
  if (stdin.setRawMode) {
    stdin.setRawMode(true);
  }
  stdin.resume();
  stdin.setEncoding('utf8');

  const handleInput = (key: string) => {
    if (key === '\u0003') { // Ctrl+C
      process.exit(0);
    }
    game.handleInput(key);
  };

  stdin.on('data', handleInput);

  // Game loop
  const gameLoop = () => {
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    game.update(deltaTime);
    stdout.write(game.render());

    if (!game.isGameOver()) {
      setTimeout(gameLoop, 16); // ~60 FPS
    }
  };

  gameLoop();
}

// Start the game
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { TetrisGame };