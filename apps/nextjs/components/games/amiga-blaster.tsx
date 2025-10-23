"use client";

import { useEffect, useRef, useState } from "react";

export function AmigaBlaster() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState({
    score: 0,
    health: 100,
    isGameOver: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    const AMIGA_COLORS = {
      background: "#0055AA",
      backgroundDark: "#003366",
      ground: "#FF6600",
      groundDark: "#CC4400",
      player: "#FFAA00",
      playerDark: "#DD8800",
      playerAccent: "#FFDD00",
      enemy: "#FF0055",
      enemyDark: "#AA0033",
      enemyCore: "#FF3388",
      bullet: "#00FFFF",
      bulletGlow: "#AAFFFF",
      powerup: "#00FF00",
      powerupGlow: "#88FF88",
      ui: "#FFFFFF",
      shadow: "#000033",
    };

    const particles: Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string }> = [];
    const stars: Array<{ x: number; y: number; speed: number; brightness: number }> = [];

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 0.5,
        brightness: Math.random(),
      });
    }

    const player = {
      x: 100,
      y: 250,
      width: 32,
      height: 32,
      speed: 6,
      health: 50,
      maxHealth: 50,
    };

    const keys: { [key: string]: boolean } = {};
    const bullets: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const enemies: Array<{ x: number; y: number; vx: number; vy: number; health: number }> = [];
    const powerups: Array<{ x: number; y: number; type: string }> = [];
    let score = 0;
    let isGameOver = false;
    let animationId: number;
    let frameCount = 0;
    let difficultyLevel = 1;

    const drawPlayer = () => {
      ctx.fillStyle = AMIGA_COLORS.shadow;
      ctx.fillRect(player.x + 2, player.y + 2, player.width, player.height);
      
      ctx.fillStyle = AMIGA_COLORS.playerDark;
      ctx.fillRect(player.x, player.y, player.width, player.height);
      
      ctx.fillStyle = AMIGA_COLORS.player;
      ctx.fillRect(player.x + 2, player.y + 2, player.width - 4, player.height - 4);
      
      ctx.fillStyle = AMIGA_COLORS.playerAccent;
      ctx.fillRect(player.x + 4, player.y + 4, player.width - 8, 4);
      
      ctx.fillStyle = AMIGA_COLORS.ui;
      ctx.fillRect(player.x + 6, player.y + 10, 6, 6);
      ctx.fillRect(player.x + 6, player.y + 18, 6, 6);
      ctx.fillStyle = "#000";
      ctx.fillRect(player.x + 8, player.y + 12, 2, 2);
      ctx.fillRect(player.x + 8, player.y + 20, 2, 2);
      
      ctx.fillStyle = AMIGA_COLORS.bullet;
      ctx.fillRect(player.x + 26, player.y + 12, 6, 8);
      ctx.fillStyle = AMIGA_COLORS.bulletGlow;
      ctx.fillRect(player.x + 28, player.y + 14, 2, 4);
      
      ctx.strokeStyle = AMIGA_COLORS.playerAccent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(player.x + 16, player.y + 28);
      ctx.lineTo(player.x + 10, player.y + 32);
      ctx.lineTo(player.x + 22, player.y + 32);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    };

    const drawBullet = (bullet: { x: number; y: number }) => {
      ctx.shadowColor = AMIGA_COLORS.bullet;
      ctx.shadowBlur = 8;
      
      ctx.fillStyle = AMIGA_COLORS.bullet;
      ctx.fillRect(bullet.x, bullet.y, 10, 4);
      
      ctx.fillStyle = AMIGA_COLORS.bulletGlow;
      ctx.fillRect(bullet.x + 2, bullet.y + 1, 6, 2);
      
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(bullet.x + 4, bullet.y + 1, 2, 2);
      
      ctx.shadowBlur = 0;
    };

    const drawEnemy = (enemy: { x: number; y: number }) => {
      ctx.fillStyle = AMIGA_COLORS.shadow;
      ctx.fillRect(enemy.x + 2, enemy.y + 2, 28, 28);
      
      ctx.fillStyle = AMIGA_COLORS.enemyDark;
      ctx.fillRect(enemy.x, enemy.y, 28, 28);
      
      ctx.fillStyle = AMIGA_COLORS.enemy;
      ctx.fillRect(enemy.x + 2, enemy.y + 2, 24, 24);
      
      ctx.fillStyle = AMIGA_COLORS.enemyCore;
      ctx.fillRect(enemy.x + 6, enemy.y + 6, 16, 16);
      
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(enemy.x + 10, enemy.y + 10, 8, 8);
      
      ctx.fillStyle = "#FFFF00";
      ctx.fillRect(enemy.x + 12, enemy.y + 12, 4, 4);
      
      ctx.fillStyle = AMIGA_COLORS.enemyDark;
      ctx.fillRect(enemy.x + 4, enemy.y + 4, 2, 2);
      ctx.fillRect(enemy.x + 22, enemy.y + 4, 2, 2);
      ctx.fillRect(enemy.x + 4, enemy.y + 22, 2, 2);
      ctx.fillRect(enemy.x + 22, enemy.y + 22, 2, 2);
    };

    const drawPowerup = (powerup: { x: number; y: number; type: string }) => {
      const pulse = Math.sin(frameCount * 0.1) * 2;
      
      ctx.shadowColor = AMIGA_COLORS.powerup;
      ctx.shadowBlur = 10 + pulse;
      
      ctx.fillStyle = AMIGA_COLORS.powerup;
      ctx.beginPath();
      ctx.arc(powerup.x + 8, powerup.y + 8, 8 + pulse, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = AMIGA_COLORS.powerupGlow;
      ctx.beginPath();
      ctx.arc(powerup.x + 8, powerup.y + 8, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
      
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      ctx.fillText(powerup.type === "health" ? "+" : "$", powerup.x + 8, powerup.y + 12);
    };

    const createExplosion = (x: number, y: number, color: string) => {
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15;
        const speed = Math.random() * 3 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 30,
          color,
        });
      }
    };

    const drawUI = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, 40);
      
      ctx.fillStyle = AMIGA_COLORS.ui;
      ctx.font = "20px monospace";
      ctx.textAlign = "left";
      ctx.fillText(`SCORE: ${score}`, 20, 28);
      
      const difficulty = getDifficulty();
      ctx.fillText(`LEVEL: ${difficulty}`, 200, 28);
      
      ctx.fillStyle = player.health > 30 ? AMIGA_COLORS.powerup : AMIGA_COLORS.enemy;
      ctx.fillRect(canvas.width - 220, 10, player.health * 2, 20);
      
      ctx.strokeStyle = AMIGA_COLORS.ui;
      ctx.lineWidth = 2;
      ctx.strokeRect(canvas.width - 220, 10, 200, 20);
      
      ctx.fillStyle = AMIGA_COLORS.ui;
      ctx.textAlign = "right";
      ctx.fillText(`HP`, canvas.width - 230, 28);
    };

    const getDifficulty = () => {
      return Math.min(Math.floor(frameCount / 600) + 1, 10);
    };

    const spawnEnemy = () => {
      const difficulty = getDifficulty();
      const y = Math.random() * (canvas.height - 100) + 50;
      const baseSpeed = 2 + difficulty * 0.5;
      const speedVariation = 1 + difficulty * 0.3;
      
      enemies.push({
        x: canvas.width,
        y: y,
        vx: -(baseSpeed + Math.random() * speedVariation),
        vy: (Math.random() - 0.5) * (2 + difficulty * 0.3),
        health: Math.min(2 + Math.floor(difficulty / 2), 6),
      });
    };

    const spawnPowerup = () => {
      const y = Math.random() * (canvas.height - 100) + 50;
      powerups.push({
        x: canvas.width,
        y: y,
        type: Math.random() > 0.7 ? "health" : "points",
      });
    };

    const checkCollision = (
      a: { x: number; y: number; width: number; height: number },
      b: { x: number; y: number; width: number; height: number }
    ) => {
      return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
    };

    const gameLoop = () => {
      if (isGameOver) return;

      frameCount++;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, AMIGA_COLORS.shadow);
      gradient.addColorStop(0.5, AMIGA_COLORS.background);
      gradient.addColorStop(1, AMIGA_COLORS.backgroundDark);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        stars[i].x -= stars[i].speed;
        if (stars[i].x < 0) stars[i].x = canvas.width;
        
        const alpha = stars[i].brightness * 0.8 + Math.sin(frameCount * 0.05 + i) * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(stars[i].x, stars[i].y, 2, 2);
      }

      for (let i = 0; i < 50; i++) {
        const x = (i * 30 + frameCount * 2) % canvas.width;
        ctx.fillStyle = "rgba(0, 102, 204, 0.3)";
        ctx.fillRect(x, 0, 2, canvas.height - 30);
      }

      const groundGradient = ctx.createLinearGradient(0, canvas.height - 30, 0, canvas.height);
      groundGradient.addColorStop(0, AMIGA_COLORS.ground);
      groundGradient.addColorStop(1, AMIGA_COLORS.groundDark);
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, canvas.height - 30, canvas.width, 30);
      
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.fillStyle = AMIGA_COLORS.groundDark;
        ctx.fillRect(i, canvas.height - 30, 10, 30);
        ctx.fillStyle = "rgba(255, 136, 0, 0.5)";
        ctx.fillRect(i, canvas.height - 30, 10, 3);
      }

      if (keys["ArrowUp"] && player.y > 50) player.y -= player.speed;
      if (keys["ArrowDown"] && player.y < canvas.height - player.height - 30) player.y += player.speed;
      if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
      if (keys["ArrowRight"] && player.x < canvas.width - player.width) player.x += player.speed;

      drawPlayer();

      for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].x += bullets[i].vx;
        bullets[i].y += bullets[i].vy;
        drawBullet(bullets[i]);

        if (bullets[i].x > canvas.width || bullets[i].x < 0 || bullets[i].y < 0 || bullets[i].y > canvas.height) {
          bullets.splice(i, 1);
        }
      }

      const difficulty = getDifficulty();
      const spawnRate = Math.max(80 - difficulty * 8, 20);
      
      if (frameCount % spawnRate === 0) {
        spawnEnemy();
      }

      if (frameCount % 250 === 0) {
        spawnPowerup();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
        particles[i].life--;
        
        const alpha = particles[i].life / 30;
        ctx.fillStyle = particles[i].color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(particles[i].x, particles[i].y, 3, 3);
        ctx.globalAlpha = 1;
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      for (let i = enemies.length - 1; i >= 0; i--) {
        enemies[i].x += enemies[i].vx;
        enemies[i].y += enemies[i].vy;

        if (enemies[i].y < 50 || enemies[i].y > canvas.height - 60) {
          enemies[i].vy *= -1;
        }

        drawEnemy(enemies[i]);

        if (checkCollision({ ...player, width: player.width, height: player.height }, { ...enemies[i], width: 28, height: 28 })) {
          const damage = 5 + Math.floor(difficulty * 1.5);
          player.health -= damage;
          createExplosion(enemies[i].x + 14, enemies[i].y + 14, AMIGA_COLORS.enemy);
          enemies.splice(i, 1);
          continue;
        }

        for (let j = bullets.length - 1; j >= 0; j--) {
          if (
            checkCollision(
              { x: bullets[j].x, y: bullets[j].y, width: 10, height: 4 },
              { x: enemies[i].x, y: enemies[i].y, width: 28, height: 28 }
            )
          ) {
            enemies[i].health--;
            bullets.splice(j, 1);
            if (enemies[i].health <= 0) {
              score += 10;
              createExplosion(enemies[i].x + 14, enemies[i].y + 14, AMIGA_COLORS.enemyCore);
              enemies.splice(i, 1);
              break;
            }
          }
        }

        if (enemies[i] && enemies[i].x < -50) {
          enemies.splice(i, 1);
        }
      }

      for (let i = powerups.length - 1; i >= 0; i--) {
        powerups[i].x -= 3;
        drawPowerup(powerups[i]);

        if (checkCollision({ ...player, width: player.width, height: player.height }, { x: powerups[i].x, y: powerups[i].y, width: 16, height: 16 })) {
          if (powerups[i].type === "health") {
            player.health = Math.min(player.maxHealth, player.health + 20);
            createExplosion(powerups[i].x + 8, powerups[i].y + 8, AMIGA_COLORS.powerup);
          } else {
            score += 50;
            createExplosion(powerups[i].x + 8, powerups[i].y + 8, AMIGA_COLORS.playerAccent);
          }
          powerups.splice(i, 1);
          continue;
        }

        if (powerups[i] && powerups[i].x < -20) {
          powerups.splice(i, 1);
        }
      }

      drawUI();

      if (player.health <= 0) {
        isGameOver = true;
        setGameState({ score, health: 0, isGameOver: true });
        
        createExplosion(player.x + 16, player.y + 16, AMIGA_COLORS.player);
        
        ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < 3; i++) {
          ctx.shadowColor = AMIGA_COLORS.enemy;
          ctx.shadowBlur = 20;
          ctx.fillStyle = AMIGA_COLORS.enemy;
          ctx.font = "bold 64px monospace";
          ctx.textAlign = "center";
          ctx.fillText("GAME OVER", canvas.width / 2 + i, canvas.height / 2 - 40 + i);
        }
        ctx.shadowBlur = 0;
        
        ctx.fillStyle = AMIGA_COLORS.ui;
        ctx.font = "bold 64px monospace";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 40);
        
        ctx.shadowColor = AMIGA_COLORS.playerAccent;
        ctx.shadowBlur = 15;
        ctx.fillStyle = AMIGA_COLORS.playerAccent;
        ctx.font = "bold 32px monospace";
        ctx.fillText(`FINAL SCORE: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
        ctx.shadowBlur = 0;
        
        return;
      }

      setGameState({ score, health: player.health, isGameOver: false });

      animationId = requestAnimationFrame(gameLoop);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      
      keys[e.code] = true;
      
      if (e.code === "Space" && !isGameOver) {
        bullets.push({
          x: player.x + player.width,
          y: player.y + player.height / 2 - 2,
          vx: 10,
          vy: 0,
        });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      keys[e.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-900 p-8">
      <div className="text-center">
        <h1 className="font-bold text-5xl text-orange-500" style={{ fontFamily: "monospace" }}>
          AMIGA BLASTER
        </h1>
        <p className="mt-2 text-cyan-400" style={{ fontFamily: "monospace" }}>
          ARROWS: Move • SPACE: Shoot
        </p>
      </div>
      <canvas 
        ref={canvasRef} 
        className="border-8 border-orange-600 shadow-2xl" 
        style={{ imageRendering: "pixelated" }}
      />
      {gameState.isGameOver && (
        <button
          onClick={restartGame}
          className="border-4 border-cyan-400 bg-blue-600 px-8 py-4 font-bold text-2xl text-white transition-colors hover:bg-blue-700"
          style={{ fontFamily: "monospace" }}
        >
          RESTART
        </button>
      )}
    </div>
  );
}
