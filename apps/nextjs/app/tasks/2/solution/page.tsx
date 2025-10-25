import Link from "next/link";

export default function Task2SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Solution</h1>
        <p className="text-lg">Reference solution and guidance for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Suggested Flow</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Create the sandbox</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-02-workspace</div>
              <div>cd ~/codex-workshop/task-02-workspace</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Feel free to name the folder however you like—the goal is to have an isolated workspace for Codex to
              explore.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Add guardrails</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>{"cat <<'MD' > AGENTS.md"}</div>
              <div># Task 2 workshop guidance</div>
              <div>Please produce readable Markdown notes.</div>
              <div>Run npm test before declaring work complete.</div>
              <div>Ask before adding or removing dependencies.</div>
              <div>MD</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Keeping the instructions short and actionable makes it easy for Codex to quote them back to you.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Launch Codex</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex --cd ~/codex-workshop/task-02-workspace --ask-for-approval</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              The <code>--ask-for-approval</code> flag ensures Codex pauses before applying diffs or running commands.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Confirm awareness</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-1 font-semibold">Example prompt:</p>
              <p className="text-muted-foreground">
                "List the guardrails from AGENTS.md and explain how you will respect them while working on this task."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex should restate the Markdown, testing, and dependency-approval requirements before you move on.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Create documentation</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-1 font-semibold">Example prompt:</p>
              <p className="text-muted-foreground">
                "Draft a README.md for this sandbox. Include: purpose, the AGENTS.md rules, and a 4-item attendee
                checklist."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Review the proposed diff, make edits if needed, then approve it from the Codex UI.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">6. Practice session control</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex resume --last</div>
              <div>codex --cd ~/codex-workshop/task-02-workspace --add-dir ..</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Resume reopens the most recent conversation, while <code>--add-dir</code> exposes an extra folder (like a
              shared
              <code>notes/</code> directory) without moving the primary workspace.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            Codex immediately reads <code>AGENTS.md</code> files in your working tree
          </li>
          <li>Approval mode keeps a clear audit trail while you are learning</li>
          <li>Dedicated sandboxes make it easy to experiment without risking other repos</li>
          <li>Session resume lets you pause during the workshop and pick up where you left off</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/2/work"
        >
          Back to Work Area
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/tasks/3"
        >
          Next Task
        </Link>
      </div>
    </div>
  );
}
