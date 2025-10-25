import Link from "next/link";

export default function Task2Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Create a Project Journal with Codex</h1>
        <p className="text-lg">
          Learn how to set up a fresh workspace and collaborate with Codex CLI to scaffold helpful project
          documentation.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Create a dedicated directory for workshop experiments, then guide Codex CLI to generate a lightweight
            project journal that captures goals, open questions, and next steps.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  In your terminal, create a new folder for this task:
                  <code className="ml-2 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                    mkdir -p ~/codex-workshop/task-02-journal && cd ~/codex-workshop/task-02-journal
                  </code>
                </p>
              </li>
              <li>
                <p>Start Codex CLI inside the folder and describe that you are building a learning journal.</p>
              </li>
              <li>
                <p>
                  Ask Codex to outline the files that would help a teammate ramp up quickly, such as a README, a
                  <code className="mx-1 rounded bg-white px-1 py-0.5 font-mono text-sm dark:bg-slate-950">notes/</code>{" "}
                  folder, and a daily log.
                </p>
              </li>
              <li>
                <p>
                  Request that Codex drafts
                  <code className="mx-1 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">README.md</code>
                  with sections for <em>Workshop Goals</em>, <em>Environment Setup</em>, and{" "}
                  <em>Questions to Revisit</em>.
                </p>
              </li>
              <li>
                <p>
                  Have Codex create
                  <code className="mx-1 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                    notes/decision-log.md
                  </code>
                  and populate it with a table that tracks the date, decision, and rationale. Review the diff before
                  applying.
                </p>
              </li>
              <li>
                <p>
                  Capture a running list of ideas by asking Codex to generate
                  <code className="mx-1 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">ideas.md</code>
                  with three starter prompts you can expand later.
                </p>
              </li>
              <li>
                <p>Exit the Codex session and confirm the files were created as expected.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Codex CLI works inside the directory you launch it from</li>
              <li>You can co-design file structures before any code is written</li>
              <li>Review suggested diffs carefully and approve them intentionally</li>
              <li>Ask follow-up questions to iterate on wording or structure</li>
              <li>Keep a clear audit trail of what the AI generated</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a dedicated Codex playground directory</li>
                <li>Know how to ask Codex for structured project documentation</li>
                <li>Feel comfortable reviewing and applying generated diffs</li>
                <li>Capture next questions for future Codex sessions</li>
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
                href="/tasks/2/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/2/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks/1"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
            href="/tasks/3"
          >
            Next Task
          </Link>
        </div>
      </div>
    </div>
  );
}
