import Link from "next/link";

export default function Task5SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Solution</h1>
        <p className="text-lg">
          One proven route for iterating on an arcade mini-game with Codex CLI, from scaffolding to polish.
        </p>
      </div>

      <div className="rounded-lg border bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Suggested Flow</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold">1. Workspace + docs</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-05-arcade</div>
              <div>cd ~/codex-workshop/task-05-arcade</div>
              <div>git init</div>
              <div>npm create vite@latest arcade-runner -- --template react-ts</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Capture goals in <code>README.md</code> and prompt structure in <code>AGENTS.md</code> before engaging
              Codex CLI.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Baseline loop with Codex</h3>
            <p className="text-muted-foreground text-sm">
              Start an interactive session, keep reasoning at <code>minimal</code>, and have Codex draft a component
              that listens for arrow key input, advances a sprite, and checks collision against a single obstacle. Once
              stable, escalate to <code>high</code> reasoning to refactor into separate hooks or systems.
            </p>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-mono text-xs">src/features/runner/useGameLoop.ts</p>
              <pre className="overflow-x-auto text-xs">{`export function useGameLoop() {
  const [state, setState] = useState(initialState);

  useAnimationFrame((delta) => {
    setState((previous) => advance(previous, delta));
  });

  useKeyPress(["ArrowUp", "Space"], () => {
    setState((previous) => queueJump(previous));
  });

  return state;
}`}</pre>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Iterative upgrades</h3>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              <li>Run Codex again to add scrolling background layers and difficulty ramp.</li>
              <li>
                Log each milestone in <code>CHANGELOG.md</code> with a gif or screenshot.
              </li>
              <li>Commit after every playable improvement to highlight the progression trail.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Test harness</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec "Generate Vitest cases for advance() and queueJump()" --output tests/game.test.ts</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Keep the harness covering state transitions and failure cases (e.g. double jumps, obstacle collisions).
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Tool comparison</h3>
            <p className="text-muted-foreground text-sm">
              Try a short session in Claude Code to explore the <code>think harder</code> control, Gemini CLI for
              cross-provider parity, or Sourcegraph Amp if you want subagent-generated refactors. Document contrasts and
              include the mandated disclaimer: Examples only—this ecosystem moves quickly and names/models evolve. Focus
              on capabilities and fit.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">6. Polish</h3>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              <li>
                Overlay instructions with a translucent panel (<code>bg-slate-900/80</code>).
              </li>
              <li>Add a persistent high-score via localStorage or a JSON save file.</li>
              <li>
                Ship a short demo video or gif inside <code>README.md</code>.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Codex CLI’s reasoning levels make it easy to toggle between quick edits and deeper refactors.</li>
          <li>
            Pairing automated tests with playable builds keeps the arcade loop stable while you layer on features.
          </li>
          <li>
            Comparing ecosystem tools highlights unique controls like Claude Code’s thinking keywords or Amp’s
            subagents—use the best fit per task.
          </li>
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
          Back to Task List
        </Link>
      </div>
    </div>
  );
}
