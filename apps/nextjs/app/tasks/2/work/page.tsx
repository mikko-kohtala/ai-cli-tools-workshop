import Link from "next/link";

export default function Task2WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Work Area</h1>
        <p className="text-lg">Your workspace for guiding Codex CLI through project journaling.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">📝 Task Instructions</h2>
        <p className="mb-4">Complete the following steps in your local terminal with Codex CLI:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Create{" "}
            <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">
              ~/codex-workshop/task-02-journal
            </code>{" "}
            and change into it.
          </li>
          <li>Launch Codex CLI, explain the goal, and ask it to propose a documentation structure.</li>
          <li>
            Generate{" "}
            <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">README.md</code>{" "}
            covering goals, environment setup, and open questions.
          </li>
          <li>
            Create{" "}
            <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">
              notes/decision-log.md
            </code>{" "}
            with a table for tracking choices.
          </li>
          <li>
            Capture brainstorm prompts inside{" "}
            <code className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm dark:bg-slate-950">ideas.md</code>.
          </li>
          <li>Review Codex&apos;s diffs carefully before approving them.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">💡 Notes</h2>
        <p className="text-muted-foreground text-sm">
          Track observations, follow-up questions, or adjustments you asked Codex to make. Use this as a scratchpad
          while you work.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/2"
        >
          Back to Instructions
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/2/solution"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
}
