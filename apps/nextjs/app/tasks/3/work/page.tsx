import Link from "next/link";

export default function Task3WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Work Area</h1>
        <p className="text-lg">Your workspace for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-purple-50 p-6 dark:bg-purple-950/30">
        <h2 className="mb-3 font-semibold text-xl">🧭 Suggested Terminal Checklist</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Spin up <code>~/codex-workshop/task-03-cli</code> and launch Codex with <code>--ask-for-approval</code>.
          </li>
          <li>
            Request a detailed plan for a <code>todo.js</code> CLI with add/list/complete commands.
          </li>
          <li>
            Let Codex initialize <code>package.json</code> and create <code>todo.js</code> plus a <code>README.md</code>
            .
          </li>
          <li>
            Approve running example commands like <code>node todo.js add "Buy snacks"</code> to capture output.
          </li>
          <li>
            Ask for a lightweight test file and run it via <code>npm test</code>.
          </li>
          <li>Review the diffs carefully, editing prompts if you want different behavior.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📝 Notes</h2>
        <p className="text-muted-foreground text-sm">
          Use this space to jot down Codex prompts that worked well, ideas for improvements, or questions to bring up
          during the discussion portion of the workshop.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/3"
        >
          Back to Instructions
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/3/solution"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
}
