import blessed from 'blessed';
import type { GameState, Tetromino, Position } from './types.js';
import { getGhostPiecePosition } from './tetris.js';

const CELL_WIDTH = 2; // Each cell is 2 characters wide for square appearance
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

// Color map for blessed (works well on dark terminals)
const COLOR_MAP: Record<string, string> = {
  cyan: 'cyan',
  yellow: 'yellow',
  magenta: 'magenta',
  green: 'green',
  red: 'red',
  blue: 'blue',
  white: 'white',
};

export class TetrisRenderer {
  private screen: blessed.Widgets.Screen;
  private gameBox: blessed.Widgets.BoxElement;
  private nextBox: blessed.Widgets.BoxElement;
  private scoreBox: blessed.Widgets.BoxElement;
  private helpBox: blessed.Widgets.BoxElement;

  constructor() {
    this.screen = blessed.screen({
      smartCSR: true,
      title: 'Tetris',
    });

    // Main game board box
    this.gameBox = blessed.box({
      top: 1,
      left: 2,
      width: BOARD_WIDTH * CELL_WIDTH + 2,
      height: BOARD_HEIGHT + 2,
      border: {
        type: 'line',
      },
      style: {
        border: {
          fg: 'white',
        },
      },
      label: ' Tetris ',
      tags: true,
    });

    // Next piece preview box
    this.nextBox = blessed.box({
      top: 1,
      left: BOARD_WIDTH * CELL_WIDTH + 5,
      width: 12,
      height: 7,
      border: {
        type: 'line',
      },
      style: {
        border: {
          fg: 'white',
        },
      },
      label: ' Next ',
      tags: true,
    });

    // Score box
    this.scoreBox = blessed.box({
      top: 9,
      left: BOARD_WIDTH * CELL_WIDTH + 5,
      width: 12,
      height: 8,
      border: {
        type: 'line',
      },
      style: {
        border: {
          fg: 'white',
        },
      },
      label: ' Stats ',
      tags: true,
    });

    // Help box
    this.helpBox = blessed.box({
      top: 18,
      left: BOARD_WIDTH * CELL_WIDTH + 5,
      width: 12,
      height: 7,
      border: {
        type: 'line',
      },
      style: {
        border: {
          fg: 'white',
        },
      },
      label: ' Help ',
      content:
        '←→: Move\n↑/Z: Rotate\n↓: Soft Drop\nSpace: Hard Drop\nP: Pause\nQ: Quit',
      tags: true,
    });

    this.screen.append(this.gameBox);
    this.screen.append(this.nextBox);
    this.screen.append(this.scoreBox);
    this.screen.append(this.helpBox);
  }

  public render(state: GameState): void {
    // Render the game board
    this.renderBoard(state);

    // Render next piece
    this.renderNextPiece(state);

    // Render score and stats
    this.renderStats(state);

    // Render game over or pause message
    if (state.gameOver) {
      this.renderGameOver();
    } else if (state.paused) {
      this.renderPaused();
    }

    this.screen.render();
  }

  private renderBoard(state: GameState): void {
    let content = '';
    const ghostPosition = getGhostPiecePosition(state);

    // Create a visual representation of the board
    for (let row = 0; row < BOARD_HEIGHT; row++) {
      for (let col = 0; col < BOARD_WIDTH; col++) {
        const boardCell = state.board[row][col];
        let isCurrentPiece = false;
        let isGhostPiece = false;
        let pieceColor = '';

        // Check if this cell is part of the current piece
        if (state.currentPiece) {
          const pieceRow = row - state.currentPiece.position.y;
          const pieceCol = col - state.currentPiece.position.x;

          if (
            pieceRow >= 0 &&
            pieceRow < state.currentPiece.shape.length &&
            pieceCol >= 0 &&
            pieceCol < state.currentPiece.shape[pieceRow].length &&
            state.currentPiece.shape[pieceRow][pieceCol]
          ) {
            isCurrentPiece = true;
            pieceColor = state.currentPiece.color;
          }

          // Check if this cell is part of the ghost piece
          if (
            ghostPosition &&
            !isCurrentPiece &&
            pieceRow + state.currentPiece.position.y - ghostPosition.y >= 0 &&
            pieceRow + state.currentPiece.position.y - ghostPosition.y <
              state.currentPiece.shape.length &&
            pieceCol >= 0 &&
            pieceCol < state.currentPiece.shape[pieceRow + state.currentPiece.position.y - ghostPosition.y].length &&
            state.currentPiece.shape[
              pieceRow + state.currentPiece.position.y - ghostPosition.y
            ][pieceCol]
          ) {
            const ghostRow = row - ghostPosition.y;
            if (
              ghostRow >= 0 &&
              ghostRow < state.currentPiece.shape.length &&
              state.currentPiece.shape[ghostRow][pieceCol]
            ) {
              isGhostPiece = true;
              pieceColor = state.currentPiece.color;
            }
          }
        }

        // Render the cell
        if (isCurrentPiece) {
          const color = COLOR_MAP[pieceColor] || 'white';
          content += `{${color}-fg}{bold}██{/bold}{/${color}-fg}`;
        } else if (isGhostPiece) {
          const color = COLOR_MAP[pieceColor] || 'white';
          content += `{${color}-fg}░░{/${color}-fg}`;
        } else if (boardCell) {
          const color = COLOR_MAP[boardCell] || 'white';
          content += `{${color}-fg}{bold}██{/bold}{/${color}-fg}`;
        } else {
          content += '{gray-fg}··{/gray-fg}';
        }
      }
      content += '\n';
    }

    this.gameBox.setContent(content);
  }

  private renderNextPiece(state: GameState): void {
    if (!state.nextPiece) {
      this.nextBox.setContent('');
      return;
    }

    let content = '\n';
    const piece = state.nextPiece;
    const color = COLOR_MAP[piece.color] || 'white';

    for (let row = 0; row < piece.shape.length; row++) {
      content += '  ';
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col]) {
          content += `{${color}-fg}██{/${color}-fg}`;
        } else {
          content += '  ';
        }
      }
      content += '\n';
    }

    this.nextBox.setContent(content);
  }

  private renderStats(state: GameState): void {
    const content = `
Score: ${state.score}

Lines: ${state.lines}

Level: ${state.level}
`;
    this.scoreBox.setContent(content);
  }

  private renderGameOver(): void {
    const gameOverBox = blessed.box({
      top: 'center',
      left: 'center',
      width: 30,
      height: 7,
      border: {
        type: 'line',
      },
      style: {
        border: {
          fg: 'red',
        },
      },
      label: ' GAME OVER ',
      content: '\n\n   Press Q to quit\n   Press R to restart',
      tags: true,
    });

    this.screen.append(gameOverBox);
    this.screen.render();
  }

  private renderPaused(): void {
    const pauseBox = blessed.box({
      top: 'center',
      left: 'center',
      width: 30,
      height: 5,
      border: {
        type: 'line',
      },
      style: {
        border: {
          fg: 'yellow',
        },
      },
      label: ' PAUSED ',
      content: '\n\n   Press P to resume',
      tags: true,
    });

    this.screen.append(pauseBox);
    this.screen.render();
  }

  public getScreen(): blessed.Widgets.Screen {
    return this.screen;
  }

  public destroy(): void {
    this.screen.destroy();
  }
}
