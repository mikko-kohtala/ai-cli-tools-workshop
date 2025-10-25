import Link from "next/link";

export default function Task3WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Work Area</h1>
        <p className="text-lg">Collaborate with Codex CLI to automate your workshop action items.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">🛠️ Task Checklist</h2>
        <p className="mb-4">Run these steps in your sandbox directory with Codex CLI:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Set up <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">~/codex-workshop/task-03-automation</code> and enter it.</li>
          <li>Describe the automation goal to Codex and co-create <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">data/inbox.json</code>.</li>
          <li>Generate <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">scripts/agenda.js</code> that reads, filters, and prints the JSON data.</li>
          <li>Add README instructions for running the script with and without <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">--status</code>.</li>
          <li>Execute the script locally, review the output, and request improvements (sorting, colors, etc.).</li>
          <li>Log one future enhancement idea so you can continue iterating later.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🧠 Reflection</h2>
        <p className="text-muted-foreground text-sm">
          Capture what worked well, which prompts unlocked the best results, and anything you would tweak in your next Codex session.
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
