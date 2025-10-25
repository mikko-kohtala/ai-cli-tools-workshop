import Link from "next/link";

export default function Task5WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Work Area</h1>
        <p className="text-lg">Your workspace for building the arcade game.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">📝 Task Instructions</h2>
        <p className="mb-4">Follow these milestones with Codex CLI to build your Pong game:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Create <code>~/codex-workshop/task-05-game</code> and start Codex session
          </li>
          <li>
            <strong>Milestone 1:</strong> Static scene (paddles, ball, center line on Canvas)
          </li>
          <li>
            <strong>Milestone 2:</strong> Ball animation with wall bounces
          </li>
          <li>
            <strong>Milestone 3:</strong> Player controls + AI paddle
          </li>
          <li>
            <strong>Milestone 4:</strong> Collision detection and scoring
          </li>
          <li>
            <strong>Milestone 5 (Optional):</strong> Polish with pause, speed increase, or retro effects
          </li>
        </ol>
      </div>

      <div className="rounded-lg border bg-blue-50 p-6 dark:bg-blue-950/30">
        <h2 className="mb-3 font-semibold text-xl">🎮 Quick Start</h2>
        <p className="mb-4">Run these commands to set up your game directory:</p>
        <div className="space-y-2 rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
          <div>mkdir -p ~/codex-workshop/task-05-game</div>
          <div>cd ~/codex-workshop/task-05-game</div>
          <div>codex</div>
        </div>
        <p className="mt-4 text-sm">
          Then ask Codex: <em>&quot;Help me build a single-file HTML Pong game with no external dependencies&quot;</em>
        </p>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">💡 Tips</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Test after each milestone by opening index.html in your browser</li>
          <li>Copy exact error messages back to Codex for targeted fixes</li>
          <li>Describe what you see vs. what you expected when behavior is off</li>
          <li>Time-box to 20-30 minutes total—playable beats perfect!</li>
          <li>
            Optional: Serve locally with <code>python -m http.server 3000</code> or <code>npx http-server -p 3000</code>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📋 Notes & Progress</h2>
        <p className="text-muted-foreground text-sm">
          Track your progress and jot down observations as you work through each milestone:
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded border bg-neutral-50 p-3 dark:bg-neutral-900/30">
            <p className="font-medium text-sm">✅ Milestone 1 - Static Scene</p>
            <p className="mt-1 text-muted-foreground text-xs">Notes:</p>
          </div>
          <div className="rounded border bg-neutral-50 p-3 dark:bg-neutral-900/30">
            <p className="font-medium text-sm">✅ Milestone 2 - Ball Animation</p>
            <p className="mt-1 text-muted-foreground text-xs">Notes:</p>
          </div>
          <div className="rounded border bg-neutral-50 p-3 dark:bg-neutral-900/30">
            <p className="font-medium text-sm">✅ Milestone 3 - Controls & AI</p>
            <p className="mt-1 text-muted-foreground text-xs">Notes:</p>
          </div>
          <div className="rounded border bg-neutral-50 p-3 dark:bg-neutral-900/30">
            <p className="font-medium text-sm">✅ Milestone 4 - Collision & Scoring</p>
            <p className="mt-1 text-muted-foreground text-xs">Notes:</p>
          </div>
        </div>
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
