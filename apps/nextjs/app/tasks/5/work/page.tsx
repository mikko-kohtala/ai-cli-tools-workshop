import Link from "next/link";

export default function Task5WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Work Area</h1>
        <p className="text-lg text-muted-foreground">Build your Dino Runner arcade game here</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
          <h2 className="mb-4 font-semibold text-2xl">Quick Reference</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Setup Commands</h3>
              <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                <div>mkdir -p ~/codex-workshop/task-05-dino-runner</div>
                <div>cd ~/codex-workshop/task-05-dino-runner</div>
                <div className="mt-2"># Start your local server</div>
                <div>python3 -m http.server 8000</div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Part A: MVP Prompt Template</h3>
              <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                Create index.html, style.css, and game.js for a minimal HTML5 Canvas runner game. Requirements: 800x300
                canvas; draw ground; a player square at x=80 that can jump with Space; apply gravity and prevent
                double-jump while mid-air; 60 FPS loop via requestAnimationFrame; no external libraries. Only create
                these three files. Keep game.js under 150 lines. Include instruction text on screen.
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Part B: Obstacles Prompt Template</h3>
              <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                Edit only game.js. Add rectangular obstacles that spawn every 1.2-2.0 seconds at the right and move
                left. Detect AABB collisions between player and obstacles. On collision, set game state to 'game over',
                stop spawning, and show 'Game Over – Press Enter to restart.' Keep existing behavior and structure.
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Part C: Score & Difficulty Prompt Template</h3>
              <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                Edit only game.js. Add a score that increases with distance/time while alive; render in top-left.
                Gradually increase obstacle speed over time. Track and show high score using localStorage.
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Polish Options (Choose One)</h3>
              <div className="space-y-2">
                <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                  <div className="mb-1 font-semibold not-italic">Parallax:</div>
                  Add two parallax background layers with subtle scrolling.
                </div>
                <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                  <div className="mb-1 font-semibold not-italic">Animation:</div>
                  Animate the player with a simple two-frame 'run' effect by toggling leg lines; keep it code-only (no
                  assets).
                </div>
                <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                  <div className="mb-1 font-semibold not-italic">Sound:</div>
                  On jump and on game over, play simple oscillator beeps with Web Audio API (no external files).
                </div>
                <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                  <div className="mb-1 font-semibold not-italic">Mobile:</div>
                  Add mobile support: tap to jump; long-press ignored; keep keyboard too.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-yellow-500 border-l-4 bg-yellow-50 p-4 dark:bg-yellow-950/30">
          <h3 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-300">⚠️ Troubleshooting Tips</h3>
          <ul className="space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
            <li>• If you get console errors, copy the exact error message into your next Codex prompt</li>
            <li>• If Space scrolls the page, ensure preventDefault is called on the keydown event</li>
            <li>
              • If obstacles don't appear, check the spawn timer logic and canvas drawing coordinates in the browser
              console
            </li>
            <li>• If collision doesn't work, verify the AABB (axis-aligned bounding box) overlap logic</li>
            <li>• Keep each prompt focused on one feature at a time for best results</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
          <h2 className="mb-4 font-semibold text-2xl">Development Checklist</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Created project directory and navigated to it</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Generated index.html, style.css, and game.js with Codex</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Verified player can jump with Space key</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Added moving obstacles that spawn regularly</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Implemented collision detection and game over state</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Added restart functionality with Enter key</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Implemented scoring and difficulty ramping</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Added high score persistence with localStorage</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Implemented one polish feature</span>
            </label>
            <label className="flex items-center gap-2">
              <input className="h-4 w-4 rounded" type="checkbox" />
              <span>Tested the game thoroughly and fixed any bugs</span>
            </label>
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
            href="/tasks/5/solution"
          >
            View Solution
          </Link>
        </div>
      </div>
    </div>
  );
}
