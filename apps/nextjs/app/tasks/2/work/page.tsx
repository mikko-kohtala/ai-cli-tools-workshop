import Link from "next/link";

export default function Task2WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Work Area</h1>
        <p className="text-lg">Your workspace for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">📝 Task Instructions</h2>
        <p className="mb-4">Follow these steps with Codex CLI in your local terminal:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Prepare a new directory and add a simple <code>notes.txt</code> file
          </li>
          <li>Launch Codex CLI in the directory and request a plan to build a summary script</li>
          <li>
            Approve the plan and have Codex generate <code>README.md</code> and <code>summarize_notes.py</code>
          </li>
          <li>
            Run <code>codex exec "python summarize_notes.py notes.txt"</code> to verify the script
          </li>
          <li>Ask Codex for a recap and suggested enhancements</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">💡 Notes</h2>
        <p className="text-muted-foreground text-sm">
          Use this area to capture prompts, approvals, and observations while you build the project with Codex CLI.
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
