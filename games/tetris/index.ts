#!/usr/bin/env node

import type { GameState } from './types.js';
import {
  createInitialState,
  spawnNewPiece,
  movePieceLeft,
  movePieceRight,
  movePieceDown,
  rotatePiece,
  hardDrop,
  togglePause,
  getDropInterval,
} from './tetris.js';
import { TetrisRenderer } from './renderer.js';

class TetrisGame {
  private state: GameState;
  private renderer: TetrisRenderer;
  private gameInterval: NodeJS.Timeout | null = null;
  private lastDropTime = 0;

  constructor() {
    this.state = createInitialState();
    this.renderer = new TetrisRenderer();
    this.setupInput();
  }

  private setupInput(): void {
    const screen = this.renderer.getScreen();

    screen.key(['q', 'Q', 'escape'], () => {
      this.cleanup();
      process.exit(0);
    });

    screen.key(['left'], () => {
      this.state = movePieceLeft(this.state);
      this.renderer.render(this.state);
    });

    screen.key(['right'], () => {
      this.state = movePieceRight(this.state);
      this.renderer.render(this.state);
    });

    screen.key(['down'], () => {
      this.state = movePieceDown(this.state);
      this.renderer.render(this.state);
    });

    screen.key(['up', 'z', 'Z'], () => {
      this.state = rotatePiece(this.state);
      this.renderer.render(this.state);
    });

    screen.key(['space'], () => {
      this.state = hardDrop(this.state);
      this.renderer.render(this.state);
    });

    screen.key(['p', 'P'], () => {
      this.state = togglePause(this.state);
      this.renderer.render(this.state);
    });

    screen.key(['r', 'R'], () => {
      if (this.state.gameOver) {
        this.restart();
      }
    });
  }

  private restart(): void {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
    }
    this.state = createInitialState();
    this.lastDropTime = Date.now();
    this.start();
  }

  private cleanup(): void {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
    }
    this.renderer.destroy();
  }

  public start(): void {
    // Spawn the first piece
    this.state = spawnNewPiece(this.state);
    this.renderer.render(this.state);

    this.lastDropTime = Date.now();

    // Game loop
    this.gameInterval = setInterval(() => {
      if (this.state.gameOver || this.state.paused) {
        return;
      }

      const now = Date.now();
      const dropInterval = getDropInterval(this.state.level);

      if (now - this.lastDropTime >= dropInterval) {
        this.state = movePieceDown(this.state);

        // If the piece was locked, spawn a new one
        if (!this.state.currentPiece && !this.state.gameOver) {
          this.state = spawnNewPiece(this.state);
        }

        this.lastDropTime = now;
        this.renderer.render(this.state);
      }
    }, 50); // Check every 50ms for smooth gameplay
  }
}

// Start the game
const game = new TetrisGame();
game.start();
