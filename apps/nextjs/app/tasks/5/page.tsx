import Link from "next/link";

export default function Task5Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Build a Dino Runner Arcade Game</h1>
        <p className="text-lg">
          Create a playable browser-based side-scrolling game with Codex CLI, starting small and iteratively adding
          features through targeted AI-assisted development.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Practice iterative development with Codex CLI by building a Dino Runner clone using HTML5 Canvas and vanilla
            JavaScript. You'll scaffold a minimal viable prototype, then incrementally add obstacles, collision
            detection, scoring, and polish features—all through small, reviewable AI-generated changes.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Part A: Create the MVP (7-8 minutes)</h3>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <p>
                    Create and navigate to your game directory:
                    <code className="ml-2 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                      mkdir -p ~/codex-workshop/task-05-dino-runner && cd ~/codex-workshop/task-05-dino-runner
                    </code>
                  </p>
                </li>
                <li>
                  <p>Start Codex CLI and ask it to generate three files for a minimal canvas game:</p>
                  <div className="my-2 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-900/30">
                    <p className="mb-2 font-medium text-sm">Sample prompt:</p>
                    <p className="font-mono text-sm">
                      "Create index.html, style.css, and game.js for a minimal HTML5 Canvas runner game. Requirements:
                      800x300 canvas; draw ground; a player square at x=80 that can jump with Space; apply gravity and
                      prevent double-jump while mid-air; 60 FPS loop via requestAnimationFrame; no external libraries.
                      Only create these three files. Keep game.js under 150 lines. Include instruction text on screen."
                    </p>
                  </div>
                </li>
                <li>
                  <p>Review the generated diffs carefully before applying them.</p>
                </li>
                <li>
                  <p>
                    Run locally using{" "}
                    <code className="rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                      python3 -m http.server 8000
                    </code>{" "}
                    or VS Code Live Server. Open{" "}
                    <code className="rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                      http://localhost:8000
                    </code>{" "}
                    in your browser.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Verify:</strong> Press Space to jump; player lands back on ground; no console errors.
                  </p>
                </li>
              </ol>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Part B: Add Obstacles & Collision (5 minutes)</h3>
              <ol className="list-decimal space-y-3 pl-6" start={6}>
                <li>
                  <p>Ask Codex to add moving obstacles and collision detection:</p>
                  <div className="my-2 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-900/30">
                    <p className="mb-2 font-medium text-sm">Sample prompt:</p>
                    <p className="font-mono text-sm">
                      "Edit only game.js. Add rectangular obstacles that spawn every 1.2-2.0 seconds at the right and
                      move left. Detect AABB collisions between player and obstacles. On collision, set game state to
                      'game over', stop spawning, and show 'Game Over – Press Enter to restart.' Keep existing behavior
                      and structure."
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    Request a restart mechanism: "Edit only game.js. When game over, pressing Enter resets state: clears
                    obstacles, resets player position/velocity, and resumes the loop. Do not change index.html or
                    style.css."
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Verify:</strong> You can jump over obstacles; collisions trigger game over; Enter restarts.
                  </p>
                </li>
              </ol>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Part C: Score, Difficulty & Polish (5-7 minutes)</h3>
              <ol className="list-decimal space-y-3 pl-6" start={9}>
                <li>
                  <p>
                    Add scoring and difficulty ramping: "Edit only game.js. Add a score that increases with
                    distance/time while alive; render in top-left. Gradually increase obstacle speed over time. Track
                    and show high score using localStorage."
                  </p>
                </li>
                <li>
                  <p>
                    Choose <strong>one</strong> polish feature (your choice):
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Parallax background:</strong> "Add two parallax background layers with subtle scrolling."
                    </li>
                    <li>
                      <strong>Player animation:</strong> "Animate the player with a simple two-frame 'run' effect by
                      toggling leg lines; keep it code-only (no assets)."
                    </li>
                    <li>
                      <strong>Sound effects:</strong> "On jump and on game over, play simple oscillator beeps with Web
                      Audio API (no external files)."
                    </li>
                    <li>
                      <strong>Mobile support:</strong> "Add mobile support: tap to jump; long-press ignored; keep
                      keyboard too."
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    If you encounter errors, copy the exact console error message and ask Codex to fix it with a minimal
                    change.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Constrained edits:</strong> Use "Only edit game.js" to prevent unwanted file creation
              </li>
              <li>
                <strong>Previewing diffs:</strong> Always review changes before applying them
              </li>
              <li>
                <strong>Iterative development:</strong> Make small, targeted changes and verify each step
              </li>
              <li>
                <strong>Tight feedback loop:</strong> Prompt → preview → apply → run → debug → refine
              </li>
              <li>
                <strong>Error recovery:</strong> Feed runtime errors back to Codex for surgical fixes
              </li>
              <li>
                <strong>Prompt hygiene:</strong> State acceptance criteria and file scope clearly
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should have:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>A working Dino Runner game with jump mechanics and gravity</li>
                <li>Moving obstacles with collision detection and game over state</li>
                <li>Score tracking with increasing difficulty and persistent high score</li>
                <li>One polish feature of your choice implemented</li>
                <li>Experience with iterative AI-assisted game development</li>
                <li>A clear diff trail showing incremental improvements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-blue-500 border-l-4 bg-blue-50 p-4 dark:bg-blue-950/30">
          <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-300">💡 Pro Tips</h3>
          <ul className="space-y-1 text-blue-800 text-sm dark:text-blue-200">
            <li>• Keep prompts specific with clear acceptance criteria</li>
            <li>• Constrain file scope to avoid unexpected changes</li>
            <li>• Test immediately after each feature addition</li>
            <li>• If stuck, ask Codex to explain the current code structure</li>
            <li>• Save error messages and feed them directly to Codex for fixes</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Workshop Navigation</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Work Area</h3>
              <p className="mb-3 text-muted-foreground text-sm">Your workspace for this task</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 font-medium text-primary-foreground text-sm hover:bg-primary/90"
                href="/tasks/5/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/5/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks/3"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
