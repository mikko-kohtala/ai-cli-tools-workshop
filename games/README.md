# Terminal Tetris Game

A classic Tetris game designed for terminal environments, optimized for dark themes.

## Features

- **Classic Tetris Gameplay**: All 7 standard tetromino pieces (I, O, T, S, Z, J, L)
- **Smooth Controls**: Responsive keyboard input with proper timing
- **Scoring System**: Points for line clears, soft drops, and hard drops
- **Progressive Difficulty**: Speed increases with each level
- **Dark Theme Optimized**: Colors and characters chosen for dark terminal backgrounds

## Controls

- **← →** : Move piece left/right
- **↓** : Soft drop (faster fall, +1 point)
- **Space** : Hard drop (instant drop, +2 points per row)
- **R** : Rotate piece
- **Ctrl+C** : Exit game

## Installation & Running

### Option 1: Direct execution (if tsx is globally installed)
```bash
cd games
tsx tetris.ts
```

### Option 2: Using npm scripts
```bash
cd games
npm install
npm start
```

### Option 3: Using the runner script
```bash
cd games
tsx run-tetris.ts
```

## Game Rules

- **Line Clearing**: Complete horizontal lines disappear and award points
- **Scoring**: 
  - 1 point per soft drop
  - 2 points per hard drop row
  - 100 × level points per line cleared
- **Level Progression**: Every 10 lines cleared increases the level and speed
- **Game Over**: When a new piece cannot be placed

## Technical Details

- Built with TypeScript and Node.js
- Uses ANSI escape codes for colors and terminal control
- Non-blocking input handling for smooth gameplay
- ~60 FPS game loop for responsive controls
- Optimized for terminals with dark backgrounds

## Requirements

- Node.js with TypeScript support
- Terminal with ANSI color support
- Terminal size: Minimum 80x24 characters recommended

Enjoy playing Tetris in your terminal! 🎮