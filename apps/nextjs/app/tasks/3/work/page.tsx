import Link from "next/link";

export default function Task3WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Work Area</h1>
        <p className="text-lg">Track progress while Codex helps you build the JSON agenda helper.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">🧭 Suggested Workflow</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Copy <code>standup-notes.json</code> into your new Git repo and review its structure.
          </li>
          <li>Outline the goal for Codex (inputs, outputs, formatting) before asking for code.</li>
          <li>
            Approve file edits for <code>src/generate-agenda.ts</code> and <code>package.json</code>.
          </li>
          <li>
            Let Codex run <code>npm run agenda</code> (or similar) and inspect the output.
          </li>
          <li>Request refinements until the Markdown agenda meets your needs, then save it.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🧪 Validation Checklist</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>The generated agenda highlights action items grouped by owner.</li>
          <li>Dates are formatted consistently (e.g. ISO or long-form) per your instructions.</li>
          <li>
            No uncommitted changes remain after you capture <code>agenda.md</code>.
          </li>
        </ul>
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
