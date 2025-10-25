import Link from "next/link";

export default function Task5SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Solution</h1>
        <p className="text-lg">Reference solution and guidance for building the arcade runner game.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Complete Implementation Steps</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-2 font-semibold">Step 0: Setup Workspace</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-05-arcade-runner</div>
              <div>cd ~/codex-workshop/task-05-arcade-runner</div>
              <div>codex</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Step 1: Initial Scaffold</h3>
            <p className="mb-2 text-sm">
              <strong>Prompt to Codex CLI:</strong>
            </p>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              /plan Minimal HTML5 canvas runner; files: index.html, style.css, game.js, README.md; no dependencies; runs
              via python -m http.server 8000. Propose 4–5 steps, wait for approval.
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
              <strong>After approval, Codex should create:</strong>
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
              <li>index.html with a canvas element</li>
              <li>style.css with basic styling</li>
              <li>game.js with empty script ready for game logic</li>
              <li>README.md with setup instructions</li>
            </ul>
            <div className="mt-3 rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec "python -m http.server 8000"</div>
              <div className="text-muted-foreground"># Open http://localhost:8000</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Step 2: Game Loop + Player Jump</h3>
            <p className="mb-2 text-sm">
              <strong>Prompt to Codex CLI:</strong>
            </p>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              Implement game loop with requestAnimationFrame, ground, player rectangle with gravity and spacebar jump.
              Keep update() and render() separate. Add debug overlay for y-position and FPS.
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
              <strong>Expected behavior:</strong>
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
              <li>Player rectangle appears above a ground line</li>
              <li>Spacebar makes player jump</li>
              <li>Gravity pulls player back down</li>
              <li>Debug overlay shows y-position and FPS in corner</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Step 3: Obstacles + Collision + Scoring</h3>
            <p className="mb-2 text-sm">
              <strong>Prompt to Codex CLI:</strong>
            </p>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              Add spawning left-moving obstacles (random 1.2–2s interval). Add AABB collision detection. Display score
              that increments over time. On collision, set gameOver=true and pause movement.
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
              <strong>Expected behavior:</strong>
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
              <li>Obstacles spawn from right side at random intervals</li>
              <li>Obstacles move left at constant speed</li>
              <li>Score increments every frame or time interval</li>
              <li>Collision detection stops the game when player hits obstacle</li>
            </ul>
            <div className="mt-3 rounded border-yellow-400 border-l-4 bg-yellow-50 p-3 dark:bg-yellow-950/30">
              <p className="text-sm">
                <strong>If collision is buggy:</strong> Use <code>/model reasoning high</code>, then ask: "Diagnose
                collision edge cases near boundaries; propose fix and explain trade-offs. Keep changes &lt;30 lines."
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Step 4: Restart + Best Score</h3>
            <p className="mb-2 text-sm">
              <strong>Prompt to Codex CLI:</strong>
            </p>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              Add gameOver state showing 'Game Over – Press R to Restart'. On R press, reset state. Save best score in
              localStorage and display both current and best scores.
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
              <strong>Expected behavior:</strong>
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
              <li>Game over message appears when collision happens</li>
              <li>R key resets player, obstacles, and score</li>
              <li>Best score persists across browser sessions via localStorage</li>
              <li>HUD displays both current and best scores</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🎮 Reference Game Logic</h2>
        <p className="mb-3 text-sm">Key components your game.js should include:</p>
        <div className="space-y-3">
          <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
            <div className="text-green-600 dark:text-green-400">{/* Game state */}</div>
            <div>
              const player = {"{"} x: 50, y: 0, width: 30, height: 30, velocityY: 0 {"}"}
            </div>
            <div>const obstacles = []</div>
            <div>let score = 0</div>
            <div>let bestScore = localStorage.getItem('bestScore') || 0</div>
            <div>let gameOver = false</div>
            <div className="mt-2" />
            <div className="text-green-600 dark:text-green-400">{/* Constants */}</div>
            <div>const GRAVITY = 0.5</div>
            <div>const JUMP_STRENGTH = -10</div>
            <div>const GROUND_Y = 400</div>
            <div>const OBSTACLE_SPEED = 3</div>
          </div>

          <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
            <div className="text-green-600 dark:text-green-400">{/* Update function */}</div>
            <div>function update() {"{"}</div>
            <div>&nbsp;&nbsp;if (gameOver) return</div>
            <div>&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;{/* Update player physics */}</div>
            <div>&nbsp;&nbsp;player.velocityY += GRAVITY</div>
            <div>&nbsp;&nbsp;player.y += player.velocityY</div>
            <div>&nbsp;&nbsp;if (player.y &gt; GROUND_Y) {"{"}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;player.y = GROUND_Y</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;player.velocityY = 0</div>
            <div>&nbsp;&nbsp;{"}"}</div>
            <div>&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;{/* Update obstacles, check collision */}</div>
            <div>&nbsp;&nbsp;{/* Increment score */}</div>
            <div>{"}"}</div>
          </div>

          <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
            <div className="text-green-600 dark:text-green-400">{/* AABB collision detection */}</div>
            <div>function checkCollision(rect1, rect2) {"{"}</div>
            <div>&nbsp;&nbsp;return rect1.x &lt; rect2.x + rect2.width &&</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rect1.x + rect1.width &gt; rect2.x &&</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rect1.y &lt; rect2.y + rect2.height &&</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rect1.y + rect1.height &gt; rect2.y</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            <strong>Iterative development:</strong> Breaking down the game into 4 clear steps made a complex project
            manageable
          </li>
          <li>
            <strong>Visual feedback:</strong> Debug overlays and frequent browser reloads helped verify each iteration
          </li>
          <li>
            <strong>Separation of concerns:</strong> Keeping update() and render() separate made code easier to reason
            about
          </li>
          <li>
            <strong>Reasoning levels:</strong> Using high reasoning for collision logic helped debug edge cases
          </li>
          <li>
            <strong>Incremental prompting:</strong> Small, focused prompts produced reviewable diffs
          </li>
          <li>
            <strong>AI pair programming:</strong> Codex CLI handled boilerplate while you guided the architecture
          </li>
        </ul>
      </div>

      <div className="rounded-lg border bg-purple-50 p-6 dark:bg-purple-950/30">
        <h2 className="mb-3 font-semibold text-xl">🚀 Extension Ideas</h2>
        <p className="mb-3 text-sm">If you want to continue improving your game:</p>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          <li>Add parallax scrolling background layers for depth</li>
          <li>Implement sound effects for jump and collision</li>
          <li>Increase difficulty over time (faster obstacles, more frequent spawns)</li>
          <li>Add power-ups (invincibility, slow-motion, double jump)</li>
          <li>Create different obstacle types (tall vs wide, moving vs static)</li>
          <li>Write unit tests for collision detection and game state management</li>
          <li>Add a start menu and pause functionality</li>
          <li>Implement touch controls for mobile devices</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/5/work"
        >
          Back to Work Area
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks"
        >
          Back to Overview
        </Link>
      </div>
    </div>
  );
}
