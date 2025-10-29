import * as readline from "readline";

// Game constants
const COLS = 10;
const ROWS = 20;
const EMPTY_CELL = " ";
// Using a space character with a background color is more reliable for solid blocks
const FILLED_CELL = "  "; 

// ANSI Colors
const COLORS = {
  RESET: "\u001b[0m",
  // Using bright background colors for better visibility on dark themes
  BG_BRIGHT_RED: "\u001b[101m",
  BG_BRIGHT_GREEN: "\u001b[102m",
  BG_BRIGHT_YELLOW: "\u001b[103m",
  BG_BRIGHT_BLUE: "\u001b[104m",
  BG_BRIGHT_MAGENTA: "\u001b[105m",
  BG_BRIGHT_CYAN: "\u001b[106m",
  BG_BRIGHT_WHITE: "\u001b[107m",
};

const PIECE_SHAPES = {
  I: { shape: [[1, 1, 1, 1]], color: COLORS.BG_BRIGHT_CYAN },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: COLORS.BG_BRIGHT_YELLOW,
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: COLORS.BG_BRIGHT_MAGENTA,
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: COLORS.BG_BRIGHT_GREEN,
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: COLORS.BG_BRIGHT_RED,
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: COLORS.BG_BRIGHT_BLUE,
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: COLORS.BG_BRIGHT_WHITE,
  },
};

type ShapeName = keyof typeof PIECE_SHAPES;

class Tetris {
  private board: string[][];
  private currentPiece: { x: number; y: number; shape: number[][]; color: string };
  private score: number = 0;
  private isGameOver: boolean = false;
  private gameLoopInterval: NodeJS.Timeout | null = null;

  constructor() {
    this.board = this.createEmptyBoard();
    this.currentPiece = this.getNewPiece();
  }

  private createEmptyBoard(): string[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY_CELL));
  }

  private getNewPiece() {
    const pieceNames = Object.keys(PIECE_SHAPES) as ShapeName[];
    const pieceName = pieceNames[Math.floor(Math.random() * pieceNames.length)];
    const piece = PIECE_SHAPES[pieceName];
    return {
      x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2),
      y: 0,
      shape: piece.shape,
      color: piece.color,
    };
  }

  private isValidMove(x: number, y: number, shape: number[][]): boolean {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const newX = x + col;
          const newY = y + row;
          if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && this.board[newY][newX] !== EMPTY_CELL)) {
            return false;
          }
        }
      }
    }
    return true;
  }

  private rotatePiece() {
    const shape = this.currentPiece.shape;
    const newShape: number[][] = shape[0].map((_, colIndex) => shape.map((row) => row[colIndex]).reverse());
    if (this.isValidMove(this.currentPiece.x, this.currentPiece.y, newShape)) {
      this.currentPiece.shape = newShape;
    }
  }

  private movePiece(dx: number, dy: number) {
    if (this.isValidMove(this.currentPiece.x + dx, this.currentPiece.y + dy, this.currentPiece.shape)) {
      this.currentPiece.x += dx;
      this.currentPiece.y += dy;
      return true;
    }
    return false;
  }

  private hardDrop() {
    while (this.movePiece(0, 1)) {
      // continue dropping
    }
    this.placePiece();
  }

  private placePiece() {
    const { x, y, shape, color } = this.currentPiece;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          this.board[y + row][x + col] = color;
        }
      }
    }
    this.clearLines();
    this.currentPiece = this.getNewPiece();
    if (!this.isValidMove(this.currentPiece.x, this.currentPiece.y, this.currentPiece.shape)) {
      this.isGameOver = true;
    }
  }

  private clearLines() {
    let linesCleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) {
      if (this.board[y].every((cell) => cell !== EMPTY_CELL)) {
        this.board.splice(y, 1);
        this.board.unshift(Array(COLS).fill(EMPTY_CELL));
        linesCleared++;
        y++; // re-check the same line
      }
    }
    this.score += linesCleared * 100;
  }

  private draw() {
    // Hide cursor
    process.stdout.write("\u001b[?25l");
    // Clear screen
    process.stdout.write("\u001b[2J\u001b[0;0H");

    console.log("Terminal Tetris");
    console.log(`Score: ${this.score}`);
    console.log("┌" + "─".repeat(COLS * 2) + "┐");

    const tempBoard = this.board.map((row) => [...row]);
    const { x, y, shape, color } = this.currentPiece;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          if (y + row >= 0) {
            tempBoard[y + row][x + col] = color;
          }
        }
      }
    }

    tempBoard.forEach((row) => {
      let line = "│";
      row.forEach((cell) => {
        if (cell === EMPTY_CELL) {
          line += "  ";
        } else {
          // Render a full-colored block using background color on spaces
          line += `${cell}${FILLED_CELL}${COLORS.RESET}`;
        }
      });
      line += "│";
      console.log(line);
    });

    console.log("└" + "─".repeat(COLS * 2) + "┘");
    console.log("\nControls:");
    console.log("← →: Move | ↑: Rotate | ↓: Soft Drop | Space: Hard Drop | q: Quit | Ctrl+C: Exit");

    if (this.isGameOver) {
      console.log("\nGAME OVER");
    }
  }

  private step() {
    if (!this.movePiece(0, 1)) {
      this.placePiece();
    }
    this.draw();
  }

  public start() {
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }

    process.stdin.on("keypress", (_, key) => {
      if (this.isGameOver) return;
      if ((key.name === "c" && key.ctrl) || key.name === "q") {
        this.stop();
        process.exit();
      }
      switch (key.name) {
        case "left":
          this.movePiece(-1, 0);
          break;
        case "right":
          this.movePiece(1, 0);
          break;
        case "down":
          this.step();
          break;
        case "up":
          this.rotatePiece();
          break;
        case "space":
          this.hardDrop();
          break;
      }
      this.draw();
    });

    this.gameLoopInterval = setInterval(() => {
      if (this.isGameOver) {
        this.stop();
        return;
      }
      this.step();
    }, 1000);

    this.draw();
  }

  public stop() {
    if (this.gameLoopInterval) {
      clearInterval(this.gameLoopInterval);
    }
    // Show cursor
    process.stdout.write("\u001b[?25h");
  }
}

const game = new Tetris();
game.start();