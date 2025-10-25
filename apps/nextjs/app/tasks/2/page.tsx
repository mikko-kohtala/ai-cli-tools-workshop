import Link from "next/link";

export default function Task2Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Shape Your Codex Workspace</h1>
        <p className="text-lg">
          Practice creating a dedicated project folder, guiding Codex CLI with <code>AGENTS.md</code>, and confirming
          the instructions are followed.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Build a clean sandbox for Codex CLI, add workshop-specific guardrails, and confirm the assistant is aware of
            the context before making changes.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  In your terminal, create a fresh directory such as <code>~/codex-workshop/task-02-workspace</code> and
                  <code>cd</code> into it. This will be your playground for the task.
                </p>
              </li>
              <li>
                <p>
                  Add an <code>AGENTS.md</code> file that reminds Codex to write readable Markdown notes, run{" "}
                  <code>npm test</code>
                  before finishing, and ask for approval before changing dependencies.
                </p>
              </li>
              <li>
                <p>
                  Launch Codex with the folder as its root:{" "}
                  <code>codex --cd ~/codex-workshop/task-02-workspace --ask-for-approval</code>. Let the session boot
                  and read the <code>AGENTS.md</code> guidance.
                </p>
              </li>
              <li>
                <p>
                  Ask Codex to summarize the instructions it discovered. Confirm it mentions all the points you added.
                </p>
              </li>
              <li>
                <p>
                  Request a starter <code>README.md</code> that explains the task goals, what the <code>AGENTS.md</code>{" "}
                  enforces, and a checklist for attendees.
                </p>
              </li>
              <li>
                <p>
                  Experiment with <code>codex resume --last</code> or <code>codex --add-dir ..</code> to understand how
                  Codex keeps context when you expand the workspace.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use <code>--cd</code> to point Codex at a brand-new directory
              </li>
              <li>
                <code>AGENTS.md</code> files layer instructions from root to leaf folders
              </li>
              <li>
                <code>--ask-for-approval</code> keeps you in control of every change
              </li>
              <li>
                <code>codex resume</code> lets you hop back into previous sessions
              </li>
              <li>
                <code>--add-dir</code> exposes extra folders without leaving your workspace
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a dedicated Codex sandbox with workshop guardrails</li>
                <li>
                  See Codex acknowledge the <code>AGENTS.md</code> file you wrote
                </li>
                <li>
                  Own a <code>README.md</code> generated with your custom instructions
                </li>
                <li>Understand how to resume sessions and expand directories</li>
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
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/1"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks/3"
          >
            Next Task
          </Link>
        </div>
      </div>
    </div>
  );
}
