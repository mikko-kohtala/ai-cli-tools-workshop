import Link from "next/link";

export default function Task5SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Solution & Guidance</h1>
        <p className="text-lg text-muted-foreground">Reference implementation and best practices</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border-green-500 border-l-4 bg-green-50 p-4 dark:bg-green-950/30">
          <h3 className="mb-2 font-semibold text-green-900 dark:text-green-300">✅ Solution Overview</h3>
          <p className="text-green-800 text-sm dark:text-green-200">
            This task demonstrates iterative AI-assisted development by building a complete game through small,
            reviewable changes. The key is constraining Codex to make focused edits while maintaining a tight feedback
            loop.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Key Implementation Points</h2>

          <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
            <h3 className="mb-3 font-semibold text-lg">Part A: MVP Architecture</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Core game loop structure:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Use{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">
                    requestAnimationFrame
                  </code>{" "}
                  for smooth 60 FPS rendering
                </li>
                <li>Maintain a player state object with position (x, y), velocity, size, and grounded flag</li>
                <li>Apply gravity constant (e.g., 0.5) on each frame; reset velocity when landing</li>
                <li>
                  Prevent double-jump by checking{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">isGrounded</code> before
                  applying jump velocity
                </li>
                <li>
                  Use{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">
                    event.preventDefault()
                  </code>{" "}
                  on Space to avoid page scrolling
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
            <h3 className="mb-3 font-semibold text-lg">Part B: Collision & Game State</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>AABB collision detection:</strong>
              </p>
              <pre className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                {`function checkCollision(player, obstacle) {
  return player.x < obstacle.x + obstacle.width &&
         player.x + player.size > obstacle.x &&
         player.y < obstacle.y + obstacle.height &&
         player.y + player.size > obstacle.y;
}`}
              </pre>
              <p className="mt-3">
                <strong>Game state management:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Track state:{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">'playing'</code> or{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">'gameOver'</code>
                </li>
                <li>On collision, set state to gameOver and stop obstacle spawning</li>
                <li>On Enter keypress during gameOver, reset all state and clear obstacles array</li>
                <li>Draw overlay text with semi-transparent background for game over screen</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
            <h3 className="mb-3 font-semibold text-lg">Part C: Scoring & Progression</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Score implementation:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Increment score each frame while alive (e.g., score += 0.1)</li>
                <li>
                  Display current score and high score using{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">ctx.fillText()</code>
                </li>
                <li>
                  Save high score:{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">
                    localStorage.setItem('highScore', highScore)
                  </code>
                </li>
                <li>
                  Load on init:{" "}
                  <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">
                    localStorage.getItem('highScore') || 0
                  </code>
                </li>
              </ul>
              <p className="mt-3">
                <strong>Difficulty ramping:</strong>
              </p>
              <pre className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                {`// Increase speed by 5% every 10 seconds
const difficultyMultiplier = 1 + Math.floor(gameTime / 600) * 0.05;
obstacle.speed = baseSpeed * difficultyMultiplier;`}
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Polish Feature Examples</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">Option 1: Parallax Background</h3>
              <pre className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                {`// Two layers with different speeds
const bgLayers = [
  { offset: 0, speed: 0.5 },
  { offset: 0, speed: 1.0 }
];

bgLayers.forEach(layer => {
  layer.offset -= layer.speed;
  if (layer.offset < -canvas.width) {
    layer.offset = 0;
  }
  // Draw repeated pattern
});`}
              </pre>
            </div>

            <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">Option 2: Simple Animation</h3>
              <pre className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                {`// Toggle leg animation every 5 frames
let animFrame = 0;
if (player.isGrounded) {
  animFrame = Math.floor(frameCount / 5) % 2;
  // Draw legs in different positions
  if (animFrame === 0) {
    // Leg forward
  } else {
    // Leg back
  }
}`}
              </pre>
            </div>

            <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">Option 3: Web Audio SFX</h3>
              <pre className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                {`const audioCtx = new AudioContext();

function playJumpSound() {
  const osc = audioCtx.createOscillator();
  osc.frequency.value = 600;
  osc.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.1);
}

function playGameOverSound() {
  const osc = audioCtx.createOscillator();
  osc.frequency.value = 200;
  osc.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.3);
}`}
              </pre>
            </div>

            <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">Option 4: Touch Support</h3>
              <pre className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                {`canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  if (gameState === 'playing' && 
      player.isGrounded) {
    player.velocityY = -12;
  }
});`}
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Best Practices Learned</h2>
          <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
            <ul className="space-y-3 text-sm">
              <li>
                <strong>🎯 Constrain scope:</strong> Always specify "Edit only game.js" to prevent Codex from creating
                unexpected files or refactoring your entire structure.
              </li>
              <li>
                <strong>👀 Review before apply:</strong> Use dry-run or preview mode to see exactly what changes Codex
                will make. This builds trust and catches issues early.
              </li>
              <li>
                <strong>🔄 Tight feedback loop:</strong> Run the game immediately after each feature addition. The
                faster you catch issues, the easier they are to fix.
              </li>
              <li>
                <strong>📝 Clear acceptance criteria:</strong> Instead of "make it better," say "increase obstacle speed
                by 5% every 10 seconds using a multiplier."
              </li>
              <li>
                <strong>🐛 Feed errors back:</strong> When you get console errors, copy the exact message into your next
                prompt: "Fix the ReferenceError at line 87: 'obstacles is not defined.'"
              </li>
              <li>
                <strong>📦 One feature at a time:</strong> Don't ask for collision + scoring + sounds in one prompt.
                Break it into three prompts with verification between each.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border-purple-500 border-l-4 bg-purple-50 p-4 dark:bg-purple-950/30">
          <h3 className="mb-2 font-semibold text-purple-900 dark:text-purple-300">🚀 Going Further</h3>
          <p className="mb-2 text-purple-800 text-sm dark:text-purple-200">
            If you finish early or want to explore more:
          </p>
          <ul className="space-y-1 text-purple-800 text-sm dark:text-purple-200">
            <li>• Refactor game.js into modules (player.js, obstacles.js, collision.js, renderer.js)</li>
            <li>• Add power-ups (shield, double jump, slow-motion) with Codex's help</li>
            <li>• Convert to TypeScript with type definitions for game state</li>
            <li>• Add unit tests for pure functions like collision detection</li>
            <li>• Deploy to GitHub Pages using a simple build script</li>
            <li>• Create a design doc (GAME.md) and use it to drive consistent changes</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Common Pitfalls & Solutions</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-1 font-medium text-red-900 text-sm dark:text-red-300">
                ❌ Pitfall: Space key scrolls the page
              </p>
              <p className="text-red-800 text-sm dark:text-red-200">
                ✅ Solution: Add{" "}
                <code className="rounded bg-white px-1 py-0.5 font-mono dark:bg-slate-950">e.preventDefault()</code> in
                the Space keydown handler
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-1 font-medium text-red-900 text-sm dark:text-red-300">
                ❌ Pitfall: Codex creates extra framework files or adds dependencies
              </p>
              <p className="text-red-800 text-sm dark:text-red-200">
                ✅ Solution: Explicitly state "no external libraries" and "only create these three files" in your
                initial prompt
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-1 font-medium text-red-900 text-sm dark:text-red-300">
                ❌ Pitfall: Obstacles don't spawn or spawn too frequently
              </p>
              <p className="text-red-800 text-sm dark:text-red-200">
                ✅ Solution: Check the spawn interval logic; ensure it uses random delays between 1.2-2.0 seconds and
                resets properly after each spawn
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-1 font-medium text-red-900 text-sm dark:text-red-300">
                ❌ Pitfall: High score doesn't persist
              </p>
              <p className="text-red-800 text-sm dark:text-red-200">
                ✅ Solution: Verify localStorage.setItem is called on game over, and getItem is called during
                initialization; check browser console for errors
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks/5"
          >
            Back to Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
            href="/tasks"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
