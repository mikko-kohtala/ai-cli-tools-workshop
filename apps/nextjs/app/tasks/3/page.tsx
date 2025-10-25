import Link from "next/link";

export default function Task3Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Ship a Helpful Automation Script</h1>
        <p className="text-lg">
          Pair with Codex CLI to design, build, and iterate on a tiny automation that tidies your workshop follow-up
          list.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Practice guiding Codex through a complete loop: shaping requirements, generating code, reviewing changes,
            and running the finished script to validate the results.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create and enter a new sandbox directory:
                  <code className="ml-2 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                    mkdir -p ~/codex-workshop/task-03-automation && cd ~/codex-workshop/task-03-automation
                  </code>
                </p>
              </li>
              <li>
                <p>Start Codex CLI and share that you want a script to summarize action items from JSON data.</p>
              </li>
              <li>
                <p>
                  Ask Codex to generate{" "}
                  <code className="mx-1 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                    data/inbox.json
                  </code>
                  with five sample tasks. Include fields for <em>title</em>, <em>owner</em>, <em>status</em>, and{" "}
                  <em>dueDate</em>.
                </p>
              </li>
              <li>
                <p>
                  Request a Node.js script named
                  <code className="mx-1 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                    scripts/agenda.js
                  </code>
                  that reads the JSON file, filters by an optional <code>--status</code> flag, and prints a formatted
                  table to the terminal.
                </p>
              </li>
              <li>
                <p>
                  Collaborate with Codex to add a README section that explains how to run the script with and without
                  the status filter.
                </p>
              </li>
              <li>
                <p>
                  Run the script locally, confirm the output looks right, and ask Codex for any refinements you want
                  (such as sorting by due date or highlighting overdue tasks).
                </p>
              </li>
              <li>
                <p>Document one improvement you would tackle next so future sessions have a clear starting point.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Codex can draft both data fixtures and executable scripts</li>
              <li>Review diffs to ensure file paths and naming conventions match your expectations</li>
              <li>Use follow-up prompts to iterate on formatting or business rules</li>
              <li>Run the generated code to validate behavior before moving on</li>
              <li>Capture next steps so the AI has context for future sessions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have JSON sample data and a working Node.js automation script</li>
                <li>Understand how to run Codex-generated code and request refinements</li>
                <li>Feel confident giving Codex multi-step requirements</li>
                <li>Leave yourself a clear note about future enhancements</li>
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
                href="/tasks/3/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/3/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks/2"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
