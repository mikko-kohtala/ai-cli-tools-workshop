#!/usr/bin/env python3
"""
Terminal-based Tetris game tailored for dark-themed shells.

Controls
--------
Left / Right arrow : Move piece
Down arrow         : Soft drop (slow fall)
Space              : Hard drop (instant fall)
Up arrow or X      : Rotate clockwise
Z                  : Rotate counter-clockwise
P                  : Pause
Q                  : Quit

The game follows standard Tetris rules with a 10x20 board, line clears,
level-based speed increases, and modern 7-bag randomization.
"""

from __future__ import annotations

import curses
import locale
import random
import time
from collections import deque
from dataclasses import dataclass
from typing import Deque, Dict, Iterable, List, Optional, Sequence, Tuple

# Ensure curses respects the user's locale (for arrow keys and terminal width)
locale.setlocale(locale.LC_ALL, "")

Board = List[List[Optional[str]]]

BOARD_WIDTH = 10
BOARD_HEIGHT = 20
PREVIEW_COUNT = 3
LEVEL_UP_LINES = 10
INITIAL_DROP_INTERVAL = 0.6
MIN_DROP_INTERVAL = 0.05

LINE_SCORE = {1: 40, 2: 100, 3: 300, 4: 1200}

# Tetromino definitions (rotation states as (x, y) offsets)
TETROMINOES: Dict[str, Sequence[Sequence[Tuple[int, int]]]] = {
    "I": (
        ((0, 1), (1, 1), (2, 1), (3, 1)),
        ((2, 0), (2, 1), (2, 2), (2, 3)),
    ),
    "O": (
        ((1, 0), (2, 0), (1, 1), (2, 1)),
    ),
    "T": (
        ((1, 0), (0, 1), (1, 1), (2, 1)),
        ((1, 0), (1, 1), (2, 1), (1, 2)),
        ((0, 1), (1, 1), (2, 1), (1, 2)),
        ((1, 0), (0, 1), (1, 1), (1, 2)),
    ),
    "S": (
        ((1, 0), (2, 0), (0, 1), (1, 1)),
        ((1, 0), (1, 1), (2, 1), (2, 2)),
    ),
    "Z": (
        ((0, 0), (1, 0), (1, 1), (2, 1)),
        ((2, 0), (1, 1), (2, 1), (1, 2)),
    ),
    "J": (
        ((0, 0), (0, 1), (1, 1), (2, 1)),
        ((1, 0), (2, 0), (1, 1), (1, 2)),
        ((0, 1), (1, 1), (2, 1), (2, 2)),
        ((1, 0), (1, 1), (0, 2), (1, 2)),
    ),
    "L": (
        ((2, 0), (0, 1), (1, 1), (2, 1)),
        ((1, 0), (1, 1), (1, 2), (2, 2)),
        ((0, 1), (1, 1), (2, 1), (0, 2)),
        ((0, 0), (1, 0), (1, 1), (1, 2)),
    ),
}

# Dark-friendly color mapping; falls back to monochrome if colors unavailable
COLOR_SCHEME = {
    "I": curses.COLOR_CYAN,
    "O": curses.COLOR_YELLOW,
    "T": curses.COLOR_MAGENTA,
    "S": curses.COLOR_GREEN,
    "Z": curses.COLOR_RED,
    "J": curses.COLOR_BLUE,
    "L": curses.COLOR_WHITE,
}


@dataclass
class ActivePiece:
    shape: str
    rotation: int
    x: int
    y: int

    def blocks(
        self,
        *,
        rotation: Optional[int] = None,
        x: Optional[int] = None,
        y: Optional[int] = None,
    ) -> List[Tuple[int, int]]:
        """Return absolute board coordinates occupied by the piece."""
        rotation = self.rotation if rotation is None else rotation % len(
            TETROMINOES[self.shape]
        )
        x = self.x if x is None else x
        y = self.y if y is None else y
        return [
            (x + dx, y + dy)
            for dx, dy in TETROMINOES[self.shape][rotation]
        ]


def create_board() -> Board:
    return [[None for _ in range(BOARD_WIDTH)] for _ in range(BOARD_HEIGHT)]


def new_bag() -> List[str]:
    shapes = list(TETROMINOES)
    random.shuffle(shapes)
    return shapes


def can_place(board: Board, piece: ActivePiece, *, x: int, y: int, rotation: int) -> bool:
    for px, py in piece.blocks(x=x, y=y, rotation=rotation):
        if px < 0 or px >= BOARD_WIDTH or py < 0 or py >= BOARD_HEIGHT:
            return False
        if board[py][px] is not None:
            return False
    return True


def lock_piece(board: Board, piece: ActivePiece) -> None:
    for px, py in piece.blocks():
        if 0 <= py < BOARD_HEIGHT and 0 <= px < BOARD_WIDTH:
            board[py][px] = piece.shape


def clear_lines(board: Board) -> int:
    new_rows = []
    cleared = 0
    for row in board:
        if all(cell is not None for cell in row):
            cleared += 1
        else:
            new_rows.append(row)
    for _ in range(cleared):
        new_rows.insert(0, [None for _ in range(BOARD_WIDTH)])
    if cleared:
        board[:] = new_rows[:BOARD_HEIGHT]
    return cleared


def spawn_piece(queue: Deque[str]) -> ActivePiece:
    if not queue:
        queue.extend(new_bag())
    shape = queue.popleft()
    piece = ActivePiece(shape=shape, rotation=0, x=BOARD_WIDTH // 2 - 2, y=0)
    return piece


def calculate_drop_interval(level: int) -> float:
    interval = INITIAL_DROP_INTERVAL * (0.85 ** level)
    return max(interval, MIN_DROP_INTERVAL)


def make_color_pairs() -> Dict[str, int]:
    color_pairs: Dict[str, int] = {}
    if not curses.has_colors():
        return color_pairs
    curses.start_color()
    try:
        curses.use_default_colors()
    except curses.error:
        pass
    pair_id = 1
    for shape, fg in COLOR_SCHEME.items():
        bg = -1
        try:
            curses.init_pair(pair_id, fg, bg)
        except curses.error:
            curses.init_pair(pair_id, fg, curses.COLOR_BLACK)
        color_pairs[shape] = pair_id
        pair_id += 1
    return color_pairs


def project_ghost(board: Board, piece: ActivePiece) -> List[Tuple[int, int]]:
    ghost_y = piece.y
    while can_place(board, piece, x=piece.x, y=ghost_y + 1, rotation=piece.rotation):
        ghost_y += 1
    if ghost_y == piece.y:
        return []
    return piece.blocks(x=piece.x, y=ghost_y)


def draw(
    stdscr: "curses._CursesWindow",
    board: Board,
    piece: ActivePiece,
    score: int,
    level: int,
    lines_cleared: int,
    queue: Deque[str],
    color_pairs: Dict[str, int],
    paused: bool,
) -> None:
    stdscr.erase()
    height, width = stdscr.getmaxyx()
    required_height = BOARD_HEIGHT + 6
    required_width = BOARD_WIDTH * 2 + 28

    if height < required_height or width < required_width:
        msg = "Resize terminal (min: {}x{})".format(required_width, required_height)
        stdscr.addstr(max(0, height // 2), max(0, (width - len(msg)) // 2), msg)
        stdscr.refresh()
        return

    board_origin_y = 2
    board_origin_x = 4
    info_origin_x = board_origin_x + BOARD_WIDTH * 2 + 4

    # Headers
    title = "Codex CLI Tetris"
    stdscr.addstr(0, board_origin_x, title)
    stdscr.addstr(1, board_origin_x, "-" * len(title))

    ghost_blocks = set(project_ghost(board, piece))

    # Draw board cells
    for y in range(BOARD_HEIGHT):
        for x in range(BOARD_WIDTH):
            cell = board[y][x]
            screen_y = board_origin_y + y
            screen_x = board_origin_x + x * 2
            char = "  "
            attr = curses.A_DIM
            if cell:
                char = "[]"
                attr = curses.A_BOLD
                if cell in color_pairs:
                    attr |= curses.color_pair(color_pairs[cell])
            elif (x, y) in ghost_blocks:
                char = ".."
                attr = curses.A_DIM
                if piece.shape in color_pairs:
                    attr |= curses.color_pair(color_pairs[piece.shape])
            try:
                stdscr.addstr(screen_y, screen_x, char, attr)
            except curses.error:
                continue

    # Superimpose active piece
    for px, py in piece.blocks():
        if py < 0:
            continue
        screen_y = board_origin_y + py
        screen_x = board_origin_x + px * 2
        attr = curses.A_BOLD
        if piece.shape in color_pairs:
            attr |= curses.color_pair(color_pairs[piece.shape])
        try:
            stdscr.addstr(screen_y, screen_x, "[]", attr)
        except curses.error:
            continue

    # Draw board frame
    for y in range(BOARD_HEIGHT + 1):
        stdscr.addstr(board_origin_y + y, board_origin_x - 2, "||")
        stdscr.addstr(board_origin_y + y, board_origin_x + BOARD_WIDTH * 2, "||")
    stdscr.addstr(board_origin_y + BOARD_HEIGHT, board_origin_x, "=" * (BOARD_WIDTH * 2))

    # Info panel
    stdscr.addstr(board_origin_y, info_origin_x, f"Score: {score}")
    stdscr.addstr(board_origin_y + 1, info_origin_x, f"Level: {level}")
    stdscr.addstr(board_origin_y + 2, info_origin_x, f"Lines: {lines_cleared}")
    stdscr.addstr(board_origin_y + 4, info_origin_x, "Next:")

    preview_start_y = board_origin_y + 5
    for idx, shape in enumerate(list(queue)[:PREVIEW_COUNT]):
        offset_y = preview_start_y + idx * 5
        stdscr.addstr(offset_y, info_origin_x, f"{idx + 1}. {shape}")
        preview = TETROMINOES[shape][0]
        min_x = min(p[0] for p in preview)
        min_y = min(p[1] for p in preview)
        for px, py in preview:
            screen_y = offset_y + 1 + (py - min_y)
            screen_x = info_origin_x + (px - min_x) * 2
            attr = curses.A_BOLD
            if shape in color_pairs:
                attr |= curses.color_pair(color_pairs[shape])
            try:
                stdscr.addstr(screen_y, screen_x, "[]", attr)
            except curses.error:
                continue

    # Controls
    controls_y = board_origin_y + BOARD_HEIGHT + 2
    stdscr.addstr(
        controls_y,
        board_origin_x,
        "Arrows move/drop | Space hard drop | Z/X rotate | P pause | Q quit",
    )
    if paused:
        pause_msg = "[Paused]"
        stdscr.addstr(
            controls_y + 1,
            board_origin_x,
            pause_msg,
            curses.A_BLINK | curses.A_BOLD,
        )

    stdscr.refresh()


def try_move(board: Board, piece: ActivePiece, dx: int, dy: int) -> bool:
    new_x = piece.x + dx
    new_y = piece.y + dy
    if can_place(board, piece, x=new_x, y=new_y, rotation=piece.rotation):
        piece.x = new_x
        piece.y = new_y
        return True
    return False


def try_rotate(
    board: Board,
    piece: ActivePiece,
    direction: int,
) -> bool:
    new_rotation = (piece.rotation + direction) % len(TETROMINOES[piece.shape])
    kicks = [
        (0, 0),
        (-1, 0),
        (1, 0),
        (0, -1),
        (-2, 0),
        (2, 0),
    ]
    for dx, dy in kicks:
        if can_place(board, piece, x=piece.x + dx, y=piece.y + dy, rotation=new_rotation):
            piece.x += dx
            piece.y += dy
            piece.rotation = new_rotation
            return True
    return False


def hard_drop(board: Board, piece: ActivePiece) -> int:
    moved = 0
    while try_move(board, piece, 0, 1):
        moved += 1
    return moved


def soft_drop(board: Board, piece: ActivePiece) -> bool:
    return try_move(board, piece, 0, 1)


def play_game(stdscr: "curses._CursesWindow") -> bool:
    stdscr.nodelay(True)
    stdscr.keypad(True)
    curses.curs_set(0)
    color_pairs = make_color_pairs()

    board = create_board()
    queue: Deque[str] = deque(new_bag())
    while len(queue) < PREVIEW_COUNT:
        queue.extend(new_bag())
    current_piece = spawn_piece(queue)
    if not can_place(board, current_piece, x=current_piece.x, y=current_piece.y, rotation=0):
        return False

    score = 0
    lines_cleared = 0
    level = 0
    drop_interval = calculate_drop_interval(level)
    last_drop_time = time.monotonic()
    paused = False

    while True:
        now = time.monotonic()
        if not paused:
            if now - last_drop_time >= drop_interval:
                if not try_move(board, current_piece, 0, 1):
                    lock_piece(board, current_piece)
                    cleared = clear_lines(board)
                    if cleared:
                        score += LINE_SCORE.get(cleared, 0) * (level + 1)
                        lines_cleared += cleared
                        new_level = lines_cleared // LEVEL_UP_LINES
                        if new_level != level:
                            level = new_level
                            drop_interval = calculate_drop_interval(level)
                    while len(queue) < PREVIEW_COUNT:
                        queue.extend(new_bag())
                    current_piece = spawn_piece(queue)
                    if not can_place(
                        board,
                        current_piece,
                        x=current_piece.x,
                        y=current_piece.y,
                        rotation=current_piece.rotation,
                    ):
                        draw(
                            stdscr,
                            board,
                            current_piece,
                            score,
                            level,
                            lines_cleared,
                            queue,
                            color_pairs,
                            paused,
                        )
                        return show_game_over(stdscr, score, lines_cleared)
                last_drop_time = now

        try:
            key = stdscr.getch()
        except curses.error:
            key = -1

        if key == -1:
            draw(
                stdscr,
                board,
                current_piece,
                score,
                level,
                lines_cleared,
                queue,
                color_pairs,
                paused,
            )
            time.sleep(0.01)
            continue

        if key in (ord("q"), ord("Q")):
            return False

        if key in (ord("p"), ord("P")):
            paused = not paused
            continue

        if paused:
            continue

        if key == curses.KEY_LEFT:
            try_move(board, current_piece, -1, 0)
        elif key == curses.KEY_RIGHT:
            try_move(board, current_piece, 1, 0)

        if key == curses.KEY_DOWN:
            if soft_drop(board, current_piece):
                score += 1  # reward soft drops
            last_drop_time = now
        elif key == ord(" "):
            dropped = hard_drop(board, current_piece)
            if dropped:
                score += dropped * 2
            last_drop_time = now - drop_interval  # force immediate lock on next loop
        elif key in (curses.KEY_UP, ord("x"), ord("X")):
            try_rotate(board, current_piece, 1)
        elif key in (ord("z"), ord("Z")):
            try_rotate(board, current_piece, -1)

        draw(
            stdscr,
            board,
            current_piece,
            score,
            level,
            lines_cleared,
            queue,
            color_pairs,
            paused,
        )


def show_game_over(stdscr: "curses._CursesWindow", score: int, lines: int) -> bool:
    stdscr.nodelay(False)
    height, width = stdscr.getmaxyx()
    messages = [
        "Game Over",
        f"Score: {score}",
        f"Lines: {lines}",
        "Press R to restart or Q to quit",
    ]
    start_y = height // 2 - len(messages) // 2
    for idx, msg in enumerate(messages):
        x = max(0, (width - len(msg)) // 2)
        try:
            stdscr.addstr(start_y + idx, x, msg, curses.A_BOLD)
        except curses.error:
            continue
    stdscr.refresh()

    while True:
        key = stdscr.getch()
        if key in (ord("q"), ord("Q")):
            stdscr.nodelay(True)
            return False
        if key in (ord("r"), ord("R")):
            stdscr.nodelay(True)
            return True


def run(stdscr: "curses._CursesWindow") -> None:
    random.seed()
    restart = True
    while restart:
        restart = play_game(stdscr)


def main() -> None:
    curses.wrapper(run)


if __name__ == "__main__":
    main()
