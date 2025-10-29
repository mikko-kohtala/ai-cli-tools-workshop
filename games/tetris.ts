#!/usr/bin/env tsx

import * as readline from "node:readline";

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const EMPTY = 0;

type Cell = number;
type Board = Cell[][];
type Position = { x: number; y: number };
type Tetromino = { shape: number[][]; color: number };

const TETROMINOES: Tetromino[] = [
	{
		shape: [
			[1, 1, 1, 1],
		],
		color: 1,
	},
	{
		shape: [
			[2, 2],
			[2, 2],
		],
		color: 2,
	},
	{
		shape: [
			[0, 3, 0],
			[3, 3, 3],
		],
		color: 3,
	},
	{
		shape: [
			[4, 0, 0],
			[4, 4, 4],
		],
		color: 4,
	},
	{
		shape: [
			[0, 0, 5],
			[5, 5, 5],
		],
		color: 5,
	},
	{
		shape: [
			[0, 6, 6],
			[6, 6, 0],
		],
		color: 6,
	},
	{
		shape: [
			[7, 7, 0],
			[0, 7, 7],
		],
		color: 7,
	},
];

const COLORS: { [key: number]: string } = {
	0: "\x1b[0m  ",
	1: "\x1b[96m██",
	2: "\x1b[93m██",
	3: "\x1b[95m██",
	4: "\x1b[94m██",
	5: "\x1b[91m██",
	6: "\x1b[92m██",
	7: "\x1b[97m██",
};

class Tetris {
	private board: Board;
	private currentPiece: Tetromino | null;
	private currentPosition: Position;
	private score: number;
	private gameOver: boolean;
	private dropInterval: NodeJS.Timeout | null;
	private softDropActive: boolean;

	constructor() {
		this.board = this.createEmptyBoard();
		this.currentPiece = null;
		this.currentPosition = { x: 0, y: 0 };
		this.score = 0;
		this.gameOver = false;
		this.dropInterval = null;
		this.softDropActive = false;
	}

	private createEmptyBoard(): Board {
		return Array.from({ length: BOARD_HEIGHT }, () =>
			Array(BOARD_WIDTH).fill(EMPTY),
		);
	}

	private spawnPiece(): void {
		const randomIndex = Math.floor(Math.random() * TETROMINOES.length);
		this.currentPiece = TETROMINOES[randomIndex];
		this.currentPosition = {
			x: Math.floor(BOARD_WIDTH / 2) - Math.floor(this.currentPiece.shape[0].length / 2),
			y: 0,
		};

		if (this.checkCollision(this.currentPiece.shape, this.currentPosition)) {
			this.gameOver = true;
		}
	}

	private checkCollision(shape: number[][], pos: Position): boolean {
		for (let y = 0; y < shape.length; y++) {
			for (let x = 0; x < shape[y].length; x++) {
				if (shape[y][x]) {
					const boardX = pos.x + x;
					const boardY = pos.y + y;

					if (
						boardX < 0 ||
						boardX >= BOARD_WIDTH ||
						boardY >= BOARD_HEIGHT ||
						(boardY >= 0 && this.board[boardY][boardX])
					) {
						return true;
					}
				}
			}
		}
		return false;
	}

	private mergePiece(): void {
		if (!this.currentPiece) return;

		for (let y = 0; y < this.currentPiece.shape.length; y++) {
			for (let x = 0; x < this.currentPiece.shape[y].length; x++) {
				if (this.currentPiece.shape[y][x]) {
					const boardY = this.currentPosition.y + y;
					const boardX = this.currentPosition.x + x;
					if (boardY >= 0) {
						this.board[boardY][boardX] = this.currentPiece.color;
					}
				}
			}
		}
	}

	private clearLines(): void {
		let linesCleared = 0;
		for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
			if (this.board[y].every((cell) => cell !== EMPTY)) {
				this.board.splice(y, 1);
				this.board.unshift(Array(BOARD_WIDTH).fill(EMPTY));
				linesCleared++;
				y++;
			}
		}

		if (linesCleared > 0) {
			this.score += linesCleared * 100 * linesCleared;
		}
	}

	private rotatePiece(shape: number[][]): number[][] {
		const rows = shape.length;
		const cols = shape[0].length;
		const rotated: number[][] = Array.from({ length: cols }, () =>
			Array(rows).fill(0),
		);

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				rotated[x][rows - 1 - y] = shape[y][x];
			}
		}

		return rotated;
	}

	public moveLeft(): void {
		if (!this.currentPiece || this.gameOver) return;
		const newPos = { ...this.currentPosition, x: this.currentPosition.x - 1 };
		if (!this.checkCollision(this.currentPiece.shape, newPos)) {
			this.currentPosition = newPos;
		}
	}

	public moveRight(): void {
		if (!this.currentPiece || this.gameOver) return;
		const newPos = { ...this.currentPosition, x: this.currentPosition.x + 1 };
		if (!this.checkCollision(this.currentPiece.shape, newPos)) {
			this.currentPosition = newPos;
		}
	}

	public rotate(): void {
		if (!this.currentPiece || this.gameOver) return;
		const rotated = this.rotatePiece(this.currentPiece.shape);
		if (!this.checkCollision(rotated, this.currentPosition)) {
			this.currentPiece.shape = rotated;
		}
	}

	public softDrop(): void {
		if (!this.currentPiece || this.gameOver) return;
		this.moveDown();
	}

	public hardDrop(): void {
		if (!this.currentPiece || this.gameOver) return;
		while (!this.checkCollision(this.currentPiece.shape, {
			...this.currentPosition,
			y: this.currentPosition.y + 1,
		})) {
			this.currentPosition.y++;
			this.score += 2;
		}
		this.lockPiece();
	}

	private moveDown(): boolean {
		if (!this.currentPiece || this.gameOver) return false;

		const newPos = { ...this.currentPosition, y: this.currentPosition.y + 1 };
		if (this.checkCollision(this.currentPiece.shape, newPos)) {
			this.lockPiece();
			return false;
		}

		this.currentPosition = newPos;
		this.score += 1;
		return true;
	}

	private lockPiece(): void {
		this.mergePiece();
		this.clearLines();
		this.spawnPiece();
	}

	public tick(): void {
		if (this.gameOver) return;
		if (!this.currentPiece) {
			this.spawnPiece();
		} else {
			this.moveDown();
		}
	}

	public render(): string {
		const displayBoard = this.board.map((row) => [...row]);

		if (this.currentPiece) {
			for (let y = 0; y < this.currentPiece.shape.length; y++) {
				for (let x = 0; x < this.currentPiece.shape[y].length; x++) {
					if (this.currentPiece.shape[y][x]) {
						const boardY = this.currentPosition.y + y;
						const boardX = this.currentPosition.x + x;
						if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
							displayBoard[boardY][boardX] = this.currentPiece.color;
						}
					}
				}
			}
		}

		let output = "\x1b[2J\x1b[H";
		output += "\n  ╔" + "══".repeat(BOARD_WIDTH) + "╗\n";

		for (const row of displayBoard) {
			output += "  ║";
			for (const cell of row) {
				output += COLORS[cell] || COLORS[0];
			}
			output += "\x1b[0m║\n";
		}

		output += "  ╚" + "══".repeat(BOARD_WIDTH) + "╝\n\n";
		output += `  Score: ${this.score}\n\n`;
		output += "  Controls:\n";
		output += "  ← → : Move    ↑ : Rotate\n";
		output += "  ↓ : Soft Drop    Space : Hard Drop\n";
		output += "  Q : Quit\n";

		if (this.gameOver) {
			output += "\n  \x1b[91mGAME OVER!\x1b[0m\n";
		}

		return output;
	}

	public startAutoFall(): void {
		if (this.dropInterval) clearInterval(this.dropInterval);
		this.dropInterval = setInterval(() => {
			this.tick();
		}, 800);
	}

	public stopAutoFall(): void {
		if (this.dropInterval) {
			clearInterval(this.dropInterval);
			this.dropInterval = null;
		}
	}

	public isGameOver(): boolean {
		return this.gameOver;
	}
}

function setupKeyboardInput(
	game: Tetris,
	onExit: () => void,
): void {
	if (process.stdin.isTTY) {
		readline.emitKeypressEvents(process.stdin);
		process.stdin.setRawMode(true);
	}

	process.stdin.on("keypress", (_str, key) => {
		if (!key) return;

		if (key.name === "q" || (key.ctrl && key.name === "c")) {
			onExit();
			return;
		}

		if (game.isGameOver()) return;

		switch (key.name) {
			case "left":
				game.moveLeft();
				break;
			case "right":
				game.moveRight();
				break;
			case "up":
				game.rotate();
				break;
			case "down":
				game.softDrop();
				break;
			case "space":
				game.hardDrop();
				break;
		}
	});
}

function main(): void {
	const game = new Tetris();
	let renderInterval: NodeJS.Timeout;

	const cleanup = (): void => {
		game.stopAutoFall();
		if (renderInterval) clearInterval(renderInterval);
		if (process.stdin.isTTY) {
			process.stdin.setRawMode(false);
		}
		process.stdin.pause();
		console.clear();
		console.log("\nThanks for playing!\n");
		process.exit(0);
	};

	setupKeyboardInput(game, cleanup);

	game.startAutoFall();

	renderInterval = setInterval(() => {
		console.log(game.render());
	}, 50);
}

main();
