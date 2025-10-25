import Link from "next/link";

export default function Task2SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Solution</h1>
        <p className="text-lg">Reference walkthrough for creating a Codex-ready project directory.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Suggested Flow</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold">1. Prepare the directory</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-02-workspace</div>
              <div>cd ~/codex-workshop/task-02-workspace</div>
              <div>git init</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex uses Git history to reason about your project, so initialising a repository is a best practice even
              for quick experiments.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Draft guidance</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-mono text-muted-foreground text-xs">AGENTS.md</p>
              <p>
                You can start with a few bullet points like:
                <br />• Build a small CLI that summarises meeting notes
                <br />• Prefer TypeScript with ES modules
                <br />• Ask before adding external dependencies
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Launch Codex</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex --cd ~/codex-workshop/task-02-workspace</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              The <code>--cd</code> flag keeps your current shell location unchanged while giving Codex access to the
              new workspace.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Ask Codex to scaffold</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">Example opening prompt:</p>
              <p className="text-muted-foreground">
                "Review this empty repo, note the guidance in AGENTS.md, and propose a starter plan. Create a README
                that outlines the CLI we discussed and add any initial files you recommend."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Approve the proposed edits in the TUI so Codex can write the files. You can ask it to make follow-up
              tweaks or generate additional scaffolding once the basics are in place.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Save context</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p>
                Use the session menu (<kbd>Ctrl</kbd>+<kbd>S</kbd>) to copy a transcript link, or export the README to
                your notes app. This makes it easy to resume later with <code>codex resume --last</code>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            Codex respects <code>AGENTS.md</code> in the same way across the CLI and editor extensions
          </li>
          <li>You retain full control over every file edit through the approval workflow</li>
          <li>
            The <code>--cd</code> flag is a simple way to manage multiple workspaces
          </li>
          <li>Capturing a transcript or session id helps you resume momentum quickly</li>
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
