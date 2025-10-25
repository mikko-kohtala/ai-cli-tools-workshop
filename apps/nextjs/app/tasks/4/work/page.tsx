import Link from "next/link";

export default function Task4WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Work Area</h1>
        <p className="text-lg">Your workspace for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">⚙️ Automation Checklist</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Collect two or more Markdown recap files in <code>~/codex-workshop/task-04-reports</code>.</li>
          <li>Run <code>codex exec</code> to generate <code>summary.md</code> from the notes.</li>
          <li>Run <code>codex exec --model high</code> to produce a follow-up <code>agenda.md</code>.</li>
          <li>Add an <code>AGENTS.md</code> reminding Codex to keep source notes read-only.</li>
          <li>Re-run <code>codex exec</code> and verify it writes new files without overwriting originals.</li>
          <li>Ask Codex (interactive mode optional) to package the outputs into a <code>reports/</code> folder.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🗒️ Notes</h2>
        <p className="text-muted-foreground text-sm">
          Use this page to track automation prompts, compare different <code>--model</code> settings, or outline how you&apos;ll
          integrate <code>codex exec</code> into your own workflows.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/4"
        >
          Back to Instructions
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/4/solution"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
}
