# Terminal Tetris

A fully-featured terminal-based Tetris game built with TypeScript and Blessed.

## Features

- **Classic Tetris gameplay** with all 7 tetromino pieces (I, O, T, S, Z, J, L)
- **Smooth controls** using arrow keys
- **Score & Level system** with progressive difficulty
- **Next piece preview** to plan your moves
- **Ghost piece** showing where your piece will land
- **Pause functionality** to take breaks
- **Optimized for dark terminals** with bright, vivid colors

## How to Play

### Starting the Game

From the project root directory, run:

```bash
pnpm tetris
```

### Controls

- **←/→ (Left/Right arrows)**: Move piece horizontally
- **↑ or Z**: Rotate piece clockwise
- **↓ (Down arrow)**: Soft drop (move down faster, earn bonus points)
- **Space**: Hard drop (instant drop to bottom, earn more bonus points)
- **P**: Pause/Resume game
- **Q or Esc**: Quit game
- **R**: Restart (only when game over)

### Scoring

- **Line clears**:
  - 1 line: 100 × level
  - 2 lines: 300 × level
  - 3 lines: 500 × level
  - 4 lines (Tetris): 800 × level
- **Soft drop**: 1 point per cell
- **Hard drop**: 2 points per cell

### Progression

- **Level up**: Every 10 lines cleared
- **Speed increase**: Pieces fall faster with each level
- **Level 10+**: Expert speed!

## Game Elements

- **Cyan I-piece**: The long piece, perfect for clearing 4 lines
- **Yellow O-piece**: The square, no rotation needed
- **Magenta T-piece**: The most versatile piece
- **Green S-piece**: The zigzag
- **Red Z-piece**: The reverse zigzag
- **Blue J-piece**: The reverse L
- **White L-piece**: The classic L

- **Ghost piece**: Faded outline (░░) showing where your piece will land
- **Next piece**: Preview in the right panel

## Tips

1. **Use the ghost piece** to plan your placement precisely
2. **Save flat spaces** for the I-piece to score Tetrises
3. **Soft drop** for a few bonus points, **hard drop** to speed up gameplay
4. **T-spins** are possible with the rotation system!
5. The game speeds up every level - plan ahead!

## Technical Details

- Built with TypeScript for type safety
- Uses Blessed for terminal UI rendering
- Implements wall kicks for smooth rotation
- 10×20 game board (standard Tetris dimensions)
- Configurable drop intervals based on level

---

Enjoy the game! 🎮
