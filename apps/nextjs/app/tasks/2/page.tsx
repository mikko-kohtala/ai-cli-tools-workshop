import Link from "next/link";

export default function Task2Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Scaffold a Project with Codex CLI</h1>
        <p className="text-lg">
          Practice directing Codex CLI to plan and build a small automation script inside a clean workspace.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Create a fresh directory, guide Codex CLI through planning, and generate a simple Python script that
            summarizes a notes file. Finish by running the script with <code>codex exec</code> to validate the result.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create a dedicated workspace such as
                  <code className="mx-1 rounded bg-muted px-1 py-0.5 text-sm">
                    ~/codex-workshop/task-02-summary-script
                  </code>
                  and change into it.
                </p>
              </li>
              <li>
                <p>
                  Add a seed file named <code>notes.txt</code> with a few sample bullet points that Codex can work from.
                </p>
              </li>
              <li>
                <p>
                  Start Codex CLI in the directory and ask for a plan (for example by typing <code>/plan</code>) to
                  create a README plus a Python script that summarizes <code>notes.txt</code> into a concise checklist.
                </p>
              </li>
              <li>
                <p>
                  Review the proposed plan, request adjustments if needed, and approve the steps that make sense. Ask
                  Codex to implement the plan and generate <code>README.md</code> and <code>summarize_notes.py</code>.
                </p>
              </li>
              <li>
                <p>
                  Once the files are generated, use <code>codex exec "python summarize_notes.py notes.txt"</code> to run
                  the script and verify the output.
                </p>
              </li>
              <li>
                <p>
                  Have Codex provide a brief summary of what it created along with suggestions for next improvements.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Working inside a task-specific directory keeps Codex focused</li>
              <li>
                Use <code>/plan</code> to co-design the approach before edits happen
              </li>
              <li>Approve changes deliberately to stay in control of file edits</li>
              <li>
                <code>codex exec</code> runs follow-up commands without leaving the session
              </li>
              <li>Ask for summaries to reinforce what the agent completed</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a scoped workspace containing notes, script, and README files</li>
                <li>Feel confident asking Codex to draft and refine a plan</li>
                <li>Know how to approve file creations and edits</li>
                <li>
                  Have executed your script via <code>codex exec</code>
                </li>
                <li>Captured a summary for later reference</li>
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
