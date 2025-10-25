import Link from "next/link";

export default function Task5WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Work Area</h1>
        <p className="text-lg">Your workspace for building the arcade runner game.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">🎮 Quick Start</h2>
        <p className="mb-4">Follow these steps to build your game iteratively:</p>
        <ol className="list-decimal space-y-2 pl-6 text-sm">
          <li>
            Create workspace:{" "}
            <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-950">
              mkdir -p ~/codex-workshop/task-05-arcade-runner && cd ~/codex-workshop/task-05-arcade-runner
            </code>
          </li>
          <li>
            Start Codex CLI and scaffold:{" "}
            <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-950">
              /plan Minimal HTML5 canvas runner; files: index.html, style.css, game.js, README.md; no dependencies; runs
              via python -m http.server 8000
            </code>
          </li>
          <li>
            Run server:{" "}
            <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-950">
              codex exec "python -m http.server 8000"
            </code>
            , open http://localhost:8000
          </li>
          <li>Add game loop, gravity, and jump mechanic</li>
          <li>Add obstacles, collision detection, and scoring</li>
          <li>Add restart functionality and best score tracking</li>
        </ol>
      </div>

      <div className="rounded-lg border bg-blue-50 p-6 dark:bg-blue-950/30">
        <h2 className="mb-3 font-semibold text-xl">📋 Iteration Checklist</h2>
        <div className="space-y-3 text-sm">
          <div>
            <p className="mb-1 font-medium">✅ Iteration 1: Setup & Scaffold</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Files created: index.html, style.css, game.js, README.md</li>
              <li>Canvas element renders in browser</li>
              <li>Local server running successfully</li>
            </ul>
          </div>
          <div>
            <p className="mb-1 font-medium">✅ Iteration 2: Game Loop + Jump</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>requestAnimationFrame loop running</li>
              <li>Player rectangle drawn with ground</li>
              <li>Spacebar jump with gravity working</li>
              <li>Debug overlay showing y-position and FPS</li>
            </ul>
          </div>
          <div>
            <p className="mb-1 font-medium">✅ Iteration 3: Obstacles + Collision</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Obstacles spawn and move left</li>
              <li>AABB collision detection works</li>
              <li>Score increments and displays</li>
              <li>Game pauses on collision (gameOver state)</li>
            </ul>
          </div>
          <div>
            <p className="mb-1 font-medium">✅ Iteration 4: Restart + Polish</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Game Over message displays</li>
              <li>R key restarts the game</li>
              <li>Best score saved in localStorage</li>
              <li>Both current and best scores shown</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">💡 Prompting Tips</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Keep diffs small:</strong> Ask for one feature at a time, limit changes to ≤50 lines
          </li>
          <li>
            <strong>Test frequently:</strong> Reload the browser after each iteration to verify behavior
          </li>
          <li>
            <strong>Use debug overlays:</strong> Visual feedback helps catch issues early
          </li>
          <li>
            <strong>Elevate reasoning when stuck:</strong> <code>/model reasoning high</code> for collision bugs or
            refactors
          </li>
          <li>
            <strong>Separate concerns:</strong> Keep update() and render() functions separate for clarity
          </li>
        </ul>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">🎯 Stretch Goals (Optional)</h2>
        <p className="mb-3 text-sm">If you finish early, try these enhancements:</p>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          <li>Add parallax background with 2 scrolling rectangle layers at different speeds</li>
          <li>Add simple sound effects using &lt;audio&gt; tags (jump sound, collision sound)</li>
          <li>Create a collision.test.js with Node assert to test AABB function in isolation</li>
          <li>Add variable obstacle sizes or speeds to increase difficulty over time</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/5"
        >
          Back to Instructions
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/5/solution"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
}
