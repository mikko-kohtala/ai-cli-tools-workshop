import Link from "next/link";

export default function Task3WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Work Area</h1>
        <p className="text-lg">Your workspace for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">📝 Task Instructions</h2>
        <p className="mb-4">Guide Codex CLI through the refactor using these steps:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Create a new directory and add the provided <code>converter.py</code> starter file
          </li>
          <li>
            Launch Codex in that directory and raise reasoning depth with
            <code className="mx-1 rounded bg-muted px-1 py-0.5 text-sm">/model reasoning high</code>
          </li>
          <li>Request a plan covering validation improvements and pytest-based tests</li>
          <li>
            Approve changes to <code>converter.py</code> and the generated <code>test_converter.py</code>
          </li>
          <li>
            Execute <code>codex exec "python -m pytest"</code> and review the results with Codex
          </li>
          <li>Capture Codex&apos;s summary and recommended follow-up actions</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">💡 Notes</h2>
        <p className="text-muted-foreground text-sm">
          Track prompts, approvals, and test outputs here so you can share highlights with your team after the workshop.
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
