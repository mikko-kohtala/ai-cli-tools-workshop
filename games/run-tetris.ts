#!/usr/bin/env tsx

import { TetrisGame } from './tetris.js';

// Simple runner for the Tetris game
console.log('Starting Tetris...');
console.log('Make sure your terminal supports ANSI colors and is in dark mode for best experience!');

// Import and run the main function from tetris.ts
import('./tetris.js').then(module => {
  if (module.main) {
    module.main().catch(console.error);
  }
}).catch(error => {
  console.error('Failed to start Tetris:', error);
  process.exit(1);
});