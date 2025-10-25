import Link from "next/link";

export default function Task5Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Build a Retro Arcade Game</h1>
        <p className="text-lg">
          Experience the joy of rapid prototyping by building a Pong game with Codex CLI&apos;s iterative assistance.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Build a playable browser-based Pong game in a single HTML file, iterating from static screen to fully
            playable game with Codex CLI guiding each step.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create <code>~/codex-workshop/task-05-game</code> and start a Codex session. Set your intent: ask
                  Codex to help build a single-file HTML Pong game with no external dependencies.
                </p>
              </li>
              <li>
                <p>
                  <strong>Milestone 1 — Static Scene:</strong> Ask Codex to create <code>index.html</code> with an
                  800x500 Canvas showing two paddles, a ball, and a center line. Open it in your browser to verify.
                </p>
              </li>
              <li>
                <p>
                  <strong>Milestone 2 — Ball Animation:</strong> Request ball movement with diagonal motion and
                  top/bottom wall bounces using <code>requestAnimationFrame</code>.
                </p>
              </li>
              <li>
                <p>
                  <strong>Milestone 3 — Player Control + AI:</strong> Add keyboard controls (W/S or Arrow keys) for the
                  left paddle, and simple AI tracking for the right paddle. Test the responsiveness.
                </p>
              </li>
              <li>
                <p>
                  <strong>Milestone 4 — Collision & Scoring:</strong> Implement paddle-ball collision, score tracking,
                  ball reset on goals, and &quot;First to 5 wins&quot; game-over state with space-to-restart.
                </p>
              </li>
              <li>
                <p>
                  <strong>Milestone 5 — Polish (Optional):</strong> Pick one enhancement: pause/resume with spacebar,
                  speed increase on paddle hits, or retro visual effects (scanlines, trails).
                </p>
              </li>
              <li>
                <p>
                  After each milestone, run the game and describe what you see to Codex. If there are bugs, paste the
                  exact error message or describe the unexpected behavior for Codex to fix.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Codex excels at rapid prototyping and iterative development</li>
              <li>Describe behavior in plain language, not code</li>
              <li>Fast feedback loop: generate → run → observe → fix</li>
              <li>Copy exact errors back to Codex for targeted fixes</li>
              <li>Single-file approach keeps complexity low during workshops</li>
              <li>Time-box features: playable beats perfect</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a playable Pong game running in your browser</li>
                <li>Understand how to iterate with Codex CLI on creative coding</li>
                <li>Experience the generate → test → refine workflow</li>
                <li>See how plain-language prompts produce working code</li>
                <li>Know how to debug by describing observed vs. expected behavior</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Starter Prompts</h2>
          <div className="space-y-3">
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="font-medium text-sm">Milestone 1:</p>
              <code className="mt-2 block text-xs">
                &quot;Create index.html with a single 800x500 Canvas rendering a static Pong scene. No external files.
                Inline JS with requestAnimationFrame scaffold and organized functions. Retro green-on-black.&quot;
              </code>
            </div>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="font-medium text-sm">Milestone 2:</p>
              <code className="mt-2 block text-xs">
                &quot;Animate the ball with diagonal movement and wall bounces. Keep constants at the top.&quot;
              </code>
            </div>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="font-medium text-sm">Milestone 3:</p>
              <code className="mt-2 block text-xs">
                &quot;Add keyboard input for left paddle (W/S and Arrow keys), with clamped speed and bounds, and simple
                AI for the right paddle.&quot;
              </code>
            </div>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="font-medium text-sm">Milestone 4:</p>
              <code className="mt-2 block text-xs">
                &quot;Implement paddle collision and scoring to 5 with a reset and start/pause on Space.&quot;
              </code>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Tips for Success</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Set constraints up front:</strong> Tell Codex you want single-file, no libraries, Canvas API,
              commented code
            </li>
            <li>
              <strong>Test frequently:</strong> Open <code>index.html</code> after each milestone to verify behavior
            </li>
            <li>
              <strong>Describe, don&apos;t code:</strong> Let Codex write the implementation based on your
              plain-language descriptions
            </li>
            <li>
              <strong>Debug iteratively:</strong> Share exact error messages or describe what you see vs. what you
              expected
            </li>
            <li>
              <strong>Time-box polish:</strong> Stop at Milestone 4 if you&apos;re at 20 minutes; pick only one
              enhancement
            </li>
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
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/4"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
