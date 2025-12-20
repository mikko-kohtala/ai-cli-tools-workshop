# Tetris Game

A classic terminal-based Tetris game built with TypeScript.

## How to Play

Run the game with:

```bash
tsx games/tetris.ts
```

## Controls

- **←/→ Arrow Keys**: Move piece left/right
- **↑ Arrow Key**: Rotate piece
- **↓ Arrow Key**: Soft drop (move piece down faster)
- **Space**: Hard drop (instantly drop piece to bottom)
- **Q**: Quit game

## Rules

- Classic Tetris gameplay with 7 standard tetromino pieces
- Clear lines by filling them completely
- Score increases with cleared lines (combo multiplier for multiple lines)
- Game ends when pieces stack to the top
- Optimized for dark terminal themes with bright colors

## Features

- Smooth piece movement and rotation
- Automatic piece falling
- Score tracking
- Line clearing with scoring
- Collision detection
- Game over detection
