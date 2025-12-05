"use client";

import { useEffect, useRef, useState } from "react";

export function StickFigureRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState({
    score: 0,
    isGameOver: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    canvas.width = 800;
    canvas.height = 400;

    const player = {
      x: 100,
      y: 300,
      width: 40,
      height: 60,
      velocityY: 0,
      isJumping: false,
    };

    const obstacles: Array<{ x: number; y: number; width: number; height: number }> = [];
    let score = 0;
    let isGameOver = false;
    let animationId: number;

    const gravity = 0.6;
    const jumpStrength = -12;
    const groundLevel = 300;
    const obstacleSpeed = 5;

    const drawStickFigure = (x: number, y: number) => {
      ctx.strokeStyle = "#000";
      ctx.fillStyle = "#000";
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.arc(x + 20, y + 10, 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + 20, y + 18);
      ctx.lineTo(x + 20, y + 40);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + 20, y + 25);
      ctx.lineTo(x + 5, y + 35);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + 20, y + 25);
      ctx.lineTo(x + 35, y + 35);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + 20, y + 40);
      ctx.lineTo(x + 10, y + 60);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + 20, y + 40);
      ctx.lineTo(x + 30, y + 60);
      ctx.stroke();
    };

    const drawObstacle = (obstacle: { x: number; y: number; width: number; height: number }) => {
      ctx.fillStyle = "#d00";
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    };

    const checkCollision = () => {
      for (const obstacle of obstacles) {
        if (
          player.x < obstacle.x + obstacle.width &&
          player.x + player.width > obstacle.x &&
          player.y < obstacle.y + obstacle.height &&
          player.y + player.height > obstacle.y
        ) {
          return true;
        }
      }
      return false;
    };

    const gameLoop = () => {
      if (isGameOver) {
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.75);

      ctx.fillStyle = "#90EE90";
      ctx.fillRect(0, canvas.height * 0.75, canvas.width, canvas.height * 0.25);

      player.velocityY += gravity;
      player.y += player.velocityY;

      if (player.y >= groundLevel) {
        player.y = groundLevel;
        player.velocityY = 0;
        player.isJumping = false;
      }

      drawStickFigure(player.x, player.y);

      if (Math.random() < 0.01) {
        obstacles.push({
          x: canvas.width,
          y: groundLevel + 20,
          width: 30,
          height: 40,
        });
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= obstacleSpeed;
        drawObstacle(obstacles[i]);

        if (obstacles[i].x + obstacles[i].width < 0) {
          obstacles.splice(i, 1);
          score += 1;
        }
      }

      if (checkCollision()) {
        isGameOver = true;
        setGameState({ score, isGameOver: true });
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
        ctx.font = "24px Arial";
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 40);
        return;
      }

      ctx.fillStyle = "#000";
      ctx.font = "20px Arial";
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${score}`, 20, 30);

      setGameState({ score, isGameOver: false });

      animationId = requestAnimationFrame(gameLoop);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.code === "Space" || e.code === "ArrowUp") && !player.isJumping && !isGameOver) {
        player.velocityY = jumpStrength;
        player.isJumping = true;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const restartGame = () => {
    setGameState({ score: 0, isGameOver: false });
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-8 dark:bg-slate-800">
      <h1 className="font-bold text-4xl">Stick Figure Runner</h1>
      <p className="text-gray-600 dark:text-gray-300">Press SPACE or ↑ to jump</p>
      <canvas className="rounded-lg border-4 border-gray-800 shadow-2xl" ref={canvasRef} />
      {gameState.isGameOver && (
        <button
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          onClick={restartGame}
          type="button"
        >
          Restart Game
        </button>
      )}
    </div>
  );
}
