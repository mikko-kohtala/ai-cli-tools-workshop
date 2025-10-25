import Link from "next/link";

export default function Task5SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Solution</h1>
        <p className="text-lg">Reference solution and guidance for building your arcade game.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Solution Workflow</h2>
        <p className="mb-4">
          This task emphasizes the iterative development process with Codex CLI. The exact prompts and code will vary,
          but the workflow remains consistent.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border p-6">
          <h2 className="mb-3 font-semibold text-xl">Milestone 1: Static Scene</h2>
          <div className="space-y-3">
            <div>
              <h3 className="mb-2 font-semibold text-sm">Example Prompt</h3>
              <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                Create index.html with a single 800x500 Canvas rendering a static Pong scene. No external files. Inline
                JS with requestAnimationFrame scaffold and organized functions. Retro green-on-black.
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Expected Output</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>HTML file with embedded Canvas and JavaScript</li>
                <li>Two paddles rendered on left and right sides</li>
                <li>Ball rendered at center</li>
                <li>Center line drawn vertically</li>
                <li>Retro color scheme (green on black background)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Verification</h3>
              <p className="text-muted-foreground text-sm">
                Open <code>index.html</code> in your browser. You should see a static game scene with all elements
                visible.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-3 font-semibold text-xl">Milestone 2: Ball Animation</h2>
          <div className="space-y-3">
            <div>
              <h3 className="mb-2 font-semibold text-sm">Example Prompt</h3>
              <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                Animate the ball with diagonal movement and wall bounces. Keep constants at the top.
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Expected Behavior</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Ball moves smoothly in a diagonal direction</li>
                <li>Ball bounces off top and bottom walls</li>
                <li>Velocity constants defined at top of script</li>
                <li>Smooth animation using requestAnimationFrame</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Common Issues</h3>
              <p className="text-muted-foreground text-sm">
                If ball disappears or moves too fast/slow, ask Codex to adjust velocity constants or log ball position
                for debugging.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-3 font-semibold text-xl">Milestone 3: Player Control & AI</h2>
          <div className="space-y-3">
            <div>
              <h3 className="mb-2 font-semibold text-sm">Example Prompt</h3>
              <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                Add keyboard input for left paddle (W/S and Arrow keys), with clamped speed and bounds, and simple AI
                for the right paddle.
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Expected Behavior</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Left paddle responds to W/S or Arrow Up/Down keys</li>
                <li>Paddles cannot move beyond canvas boundaries</li>
                <li>Right paddle tracks ball Y position with capped speed</li>
                <li>Smooth, responsive controls</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Testing</h3>
              <p className="text-muted-foreground text-sm">
                Hold down movement keys to verify paddle moves smoothly and stops at edges. Watch AI paddle track the
                ball.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-3 font-semibold text-xl">Milestone 4: Collision & Scoring</h2>
          <div className="space-y-3">
            <div>
              <h3 className="mb-2 font-semibold text-sm">Example Prompt</h3>
              <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                Implement paddle collision and scoring to 5 with a reset and start/pause on Space.
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Expected Behavior</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Ball bounces off paddles when collision detected</li>
                <li>Score increments when ball passes a paddle</li>
                <li>Ball resets to center after scoring</li>
                <li>First player to 5 wins</li>
                <li>&quot;Game Over&quot; state with restart option</li>
                <li>Space bar toggles pause/resume</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Debugging Tips</h3>
              <p className="text-muted-foreground text-sm">
                If collisions feel &quot;sticky&quot; or ball passes through paddles, ask Codex to add positional
                correction and log collision events.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-3 font-semibold text-xl">Milestone 5: Polish (Optional)</h2>
          <div className="space-y-3">
            <div>
              <h3 className="mb-2 font-semibold text-sm">Enhancement Ideas</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Increase ball speed by 3% on each paddle hit</li>
                <li>Add retro scanline visual effect</li>
                <li>Add ball/paddle trails with alpha fade</li>
                <li>Display FPS counter for debugging</li>
                <li>Add sound effects using Web Audio API</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Example Prompt</h3>
              <div className="rounded bg-white p-3 font-mono text-xs dark:bg-slate-950">
                Add a slight speed increase each paddle hit and a retro scanline overlay. Comment the code.
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-sm">Time Management</h3>
              <p className="text-muted-foreground text-sm">
                Only add 1-2 polish features if you have time. Focus on getting Milestones 1-4 working smoothly first.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-blue-50 p-6 dark:bg-blue-950/30">
        <h2 className="mb-3 font-semibold text-xl">🎯 Key Workflow Patterns</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Set Constraints Upfront</h3>
            <p className="text-sm">
              Tell Codex: &quot;Single-file HTML, no external libraries, Canvas API, commented code, organized
              functions&quot;
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">2. Test After Each Change</h3>
            <p className="text-sm">
              Refresh your browser after every milestone. Verify behavior before moving to the next step.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">3. Share Exact Errors</h3>
            <p className="text-sm">
              When something breaks, copy the exact console error or describe precisely what you see vs. what you
              expected.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">4. Request Minimal Changes</h3>
            <p className="text-sm">
              Ask for focused modifications: &quot;Only modify the collision logic to add bounce direction based on
              contact point&quot;
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">5. Use Instrumentation for Debugging</h3>
            <p className="text-sm">
              When stuck, ask Codex to: &quot;Log ball position and velocity each frame&quot; or &quot;Draw collision
              boxes for debugging&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Codex CLI excels at rapid prototyping and iterative development</li>
          <li>Plain-language descriptions produce working code faster than manual coding</li>
          <li>The generate → test → describe → fix loop is incredibly powerful</li>
          <li>Single-file projects reduce complexity and enable faster iteration</li>
          <li>Time-boxing features keeps momentum and ensures a playable result</li>
          <li>Debugging with AI is conversational: describe what you observe</li>
        </ul>
      </div>

      <div className="rounded-lg border bg-purple-50 p-6 dark:bg-purple-950/30">
        <h2 className="mb-3 font-semibold text-xl">🚀 Stretch Goals</h2>
        <p className="mb-3 text-sm">If you finish early, try these advanced challenges:</p>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Extract collision logic into pure functions and write Node.js tests</li>
          <li>Add difficulty levels that change AI speed and ball acceleration</li>
          <li>Implement 2-player mode with both paddles keyboard-controlled</li>
          <li>Add a start menu with difficulty selection</li>
          <li>Refactor into modules with separate state management</li>
          <li>Create a CLI version using Node.js with ASCII graphics</li>
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
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/tasks"
        >
          Back to Task List
        </Link>
      </div>
    </div>
  );
}
