import Link from "next/link";

export default function Task5Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Build a Retro Arcade Game</h1>
        <p className="text-lg">
          Create a playable HTML5 canvas runner game iteratively with Codex CLI—start simple, improve step-by-step.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Build a browser-based side-scrolling runner game (think Chrome Dino) from scratch using HTML5 canvas. Start
            with basic rectangles, then add obstacles, collision detection, scoring, and game-over logic. Experience
            iterative AI pair programming on a creative project.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Build your game in 4 small iterations. Each step adds one clear feature. Test frequently with a local web
              server.
            </p>
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p className="mb-2">
                  <strong>Setup & Scaffold (2–3 min)</strong>
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>
                    Create workspace:{" "}
                    <code className="mx-1 rounded bg-muted px-1 py-0.5">~/codex-workshop/task-05-arcade-runner</code>
                  </li>
                  <li>
                    Start Codex CLI and use <code>/plan</code> to request a minimal HTML5 canvas runner with{" "}
                    <code>index.html</code>, <code>style.css</code>, <code>game.js</code>, and <code>README.md</code>
                  </li>
                  <li>
                    Constraints: no external libraries, rectangles only (no images), runs via{" "}
                    <code>python -m http.server 8000</code>
                  </li>
                  <li>
                    Approve the plan, implement it, then run:{" "}
                    <code className="mx-1 rounded bg-muted px-1 py-0.5">codex exec "python -m http.server 8000"</code>
                  </li>
                  <li>
                    Open <code>http://localhost:8000</code> in your browser to verify the canvas loads
                  </li>
                </ul>
              </li>
              <li>
                <p className="mb-2">
                  <strong>Game Loop + Player Jump (4–5 min)</strong>
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>
                    Prompt: "Add a game loop using <code>requestAnimationFrame</code>. Draw ground and a player
                    rectangle. Add gravity and spacebar jump. Separate <code>update()</code> and <code>render()</code>{" "}
                    functions. Include a small debug overlay showing player y-position and FPS."
                  </li>
                  <li>Approve and test—verify jump works and player stays on ground</li>
                </ul>
              </li>
              <li>
                <p className="mb-2">
                  <strong>Obstacles, Collision, Scoring (5–6 min)</strong>
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>
                    Prompt: "Add obstacles that spawn off-screen right and move left. Implement AABB collision
                    detection. Increment score over time and display it. On collision, set <code>gameOver=true</code>{" "}
                    and pause all movement."
                  </li>
                  <li>
                    If collision is buggy, elevate reasoning: <code>/model reasoning high</code>, then ask Codex to
                    diagnose and fix edge cases
                  </li>
                </ul>
              </li>
              <li>
                <p className="mb-2">
                  <strong>Restart + Polish (3–5 min)</strong>
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>
                    Prompt: "On game over, show 'Game Over – Press R to Restart'. Pressing R resets game state. Track
                    best score in <code>localStorage</code> and display it on the HUD."
                  </li>
                  <li>
                    <strong>Optional stretch goals</strong> (if time allows, choose one):
                    <ul className="mt-1 list-[circle] space-y-1 pl-6">
                      <li>"Add parallax background with 2 scrolling rectangle layers at different speeds"</li>
                      <li>
                        "Add simple jump and collision sound effects using <code>&lt;audio&gt;</code> tags (guard for
                        autoplay)"
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Prompting Strategies</h2>
          <div className="rounded-lg border bg-blue-50 p-4 dark:bg-blue-950/30">
            <p className="mb-3 font-medium">Copy-paste ready prompts for each iteration:</p>
            <ul className="space-y-3 text-sm">
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Scaffold:</strong>
                <br />
                <code className="mt-1 block rounded bg-white p-2 dark:bg-slate-950">
                  /plan Minimal HTML5 canvas runner; files: index.html, style.css, game.js, README.md; no dependencies;
                  runs via python -m http.server 8000. Propose 4–5 steps, wait for approval.
                </code>
              </li>
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Loop + Jump:</strong>
                <br />
                <code className="mt-1 block rounded bg-white p-2 dark:bg-slate-950">
                  Implement game loop with requestAnimationFrame, ground, player rectangle with gravity and spacebar
                  jump. Keep update() and render() separate. Add debug overlay for y-position and FPS.
                </code>
              </li>
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Obstacles + Collision:</strong>
                <br />
                <code className="mt-1 block rounded bg-white p-2 dark:bg-slate-950">
                  Add spawning left-moving obstacles (random 1.2–2s interval). Add AABB collision detection. Display
                  score that increments over time. On collision, set gameOver=true and pause movement.
                </code>
              </li>
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Restart + Best Score:</strong>
                <br />
                <code className="mt-1 block rounded bg-white p-2 dark:bg-slate-950">
                  Add gameOver state showing 'Game Over – Press R to Restart'. On R press, reset state. Save best score
                  in localStorage and display both current and best scores.
                </code>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Iterative development: start minimal, add features incrementally</li>
              <li>Separate concerns: keep update logic and rendering separate</li>
              <li>Debug overlays help verify behavior during rapid iteration</li>
              <li>Elevate reasoning for complex logic (collision, timing bugs)</li>
              <li>
                Use <code>codex exec</code> to run the server without leaving the session
              </li>
              <li>Small, focused prompts yield reviewable diffs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should have:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>A playable browser game: jump over obstacles, avoid collision</li>
                <li>Score HUD with current score and persisted best score</li>
                <li>Restart mechanic (press R to play again)</li>
                <li>Clean separation of update/render logic in game.js</li>
                <li>README.md with run instructions and controls</li>
                <li>Experience iterating visually with AI pair programming</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Tips & Troubleshooting</h2>
          <div className="space-y-3">
            <div className="rounded-lg border bg-yellow-50 p-3 dark:bg-yellow-950/30">
              <p className="font-medium text-sm">
                <strong>Time Management:</strong> Enforce "one small diff at a time." Don't add sprites or complex
                animations—rectangles only keeps the task achievable.
              </p>
            </div>
            <div className="rounded-lg border bg-purple-50 p-3 dark:bg-purple-950/30">
              <p className="font-medium text-sm">
                <strong>Server Issues:</strong> If <code>python -m http.server</code> isn't available, use VS Code Live
                Server or <code>npx http-server</code>.
              </p>
            </div>
            <div className="rounded-lg border bg-green-50 p-3 dark:bg-green-950/30">
              <p className="font-medium text-sm">
                <strong>Collision Debugging:</strong> If collision feels off, add visual debugging (draw hitboxes) and
                switch to <code>/model reasoning high</code> to diagnose edge cases.
              </p>
            </div>
          </div>
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
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/3"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks"
          >
            Back to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
