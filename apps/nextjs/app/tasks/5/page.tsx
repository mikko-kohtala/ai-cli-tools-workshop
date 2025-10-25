import Link from "next/link";

export default function Task5Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Build an Arcade Mini-Game</h1>
        <p className="text-lg">
          Apply Codex CLI to iteratively ship a tiny arcade experience—start with a playable core and level it up with
          mechanics, polish, and documentation.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Prototype a simple side-scroller or terminal arcade loop, collaborating with Codex CLI to plan, build, and
            evolve the game in incremental slices. Each iteration should add a tangible improvement (movement, scoring,
            effects, difficulty) while keeping the project shippable at every step.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <p>
                Set up <code>~/codex-workshop/task-05-arcade</code>. Decide on browser (Vite + React) or CLI (Node,
                Python, or Rust) output and capture the scope in <code>README.md</code> plus an <code>AGENTS.md</code>{" "}
                that outlines the MVP loop, stretch ideas, and constraints.
              </p>
            </li>
            <li>
              <p>
                Pair with Codex CLI to scaffold the bare-minimum loop: player input, a simple obstacle, and win/lose
                conditions. Keep the run on <code>reasoning minimal</code> for fast feedback, then escalate to{" "}
                <code>medium</code> or <code>high</code> as logic branches grow.
              </p>
            </li>
            <li>
              <p>
                Implement two incremental upgrades—e.g. parallax scrolling, combo scoring, power-ups, or sprite
                animation. Capture a short retro-style changelog after each pass and tag commits so you can demo the
                progression during the workshop.
              </p>
            </li>
            <li>
              <p>
                Add a Codex-authored playtest harness: for browser builds, generate a Jest or Vitest suite that
                validates core mechanics; for CLI builds, script a replayable input log. Use <code>codex exec</code> to
                automate the harness if you want hands-free verification.
              </p>
            </li>
            <li>
              <p>
                Compare Codex CLI’s iteration flow with another tool of your choice (Claude Code, Gemini CLI, or Amp) to
                note differences in reasoning controls (<code>/model</code> vs <code>think harder</code> keywords,
                subagents, etc.). Document findings in <code>NOTES.md</code> and include the ecosystem disclaimer.
                Examples only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit.
              </p>
            </li>
            <li>
              <p>
                Polish the experience: surface instructions in-game, add a high-score tracker or cosmetic flair, and
                ensure dark-mode friendly styling if you ship a web UI (e.g. <code>bg-slate-900</code> overlays for
                modals).
              </p>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Scope an MVP arcade loop that always stays playable</li>
              <li>
                Dial Codex CLI reasoning levels to match task complexity—start minimal, spike to high when debugging
              </li>
              <li>Capture iteration history with clear commits and lightweight changelog notes</li>
              <li>
                Cross-compare AI CLIs to understand how reasoning controls differ (think keywords, subagents, /model)
              </li>
              <li>Blend automated playtests with human play sessions to validate feel as well as functionality</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-violet-50 p-4 dark:bg-violet-950/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a playable arcade mini-game with two+ iterations captured in Git</li>
                <li>
                  Maintain supporting docs (<code>README.md</code>, <code>NOTES.md</code>, <code>AGENTS.md</code>) that
                  narrate your decisions
                </li>
                <li>Ship a basic automated test or replay harness to guard regressions</li>
                <li>Articulate how Codex CLI compares with another AI CLI for creative coding work</li>
              </ul>
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
            href="/tasks/4"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
