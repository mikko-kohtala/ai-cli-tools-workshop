import Link from "next/link";

export default function Task4Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Automate an Incident Snapshot</h1>
        <p className="text-lg">
          Explore <code>codex exec</code> for non-interactive automation by converting log output into a structured
          incident summary.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Run Codex CLI in automation mode to transform production logs into a JSON incident report and a
            ready-to-send status update. Practice JSON streaming, schema enforcement, and resuming runs.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <p>
                Create <code>~/codex-workshop/task-04-incident</code>, copy the sample log file{" "}
                <code>materials/workshop-tasks/task4/error-log.txt</code>, and initialise Git.
              </p>
            </li>
            <li>
              <p>
                Draft a short <code>AGENTS.md</code> describing the output you expect: a JSON payload with impacted
                systems, primary errors, and recommended follow-up actions.
              </p>
            </li>
            <li>
              <p>
                Create a JSON Schema file (e.g. <code>incident-schema.json</code>) that defines required fields such as
                <code>summary</code>, <code>impacted_services</code>, and <code>next_steps</code>. You can start from
                the snippet in the solution tab.
              </p>
            </li>
            <li>
              <p>
                Run <code>codex exec</code> with the schema and log file:
              </p>
              <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                <div>
                  codex exec --json --output-schema incident-schema.json "Analyse error-log.txt and emit the schema"
                </div>
              </div>
              <p className="mt-2 text-muted-foreground text-sm">
                Inspect the streamed JSONL output and capture the <code>agent_message</code> containing the structured
                result.
              </p>
            </li>
            <li>
              <p>Resume the run to create a status update Markdown file:</p>
              <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
                <div>
                  codex exec resume --last "Write status-update.md for stakeholders referencing the JSON summary"
                </div>
              </div>
            </li>
            <li>
              <p>
                Commit both the structured JSON output and the Markdown update. Experiment with switching models via
                <code>--model</code> or toggling <code>--full-auto</code> to see how behaviour changes.
              </p>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <code>codex exec</code> automates workflows without the interactive TUI
              </li>
              <li>
                <code>--json</code> streams machine-readable events you can pipe elsewhere
              </li>
              <li>
                <code>--output-schema</code> enforces structured responses that integrate cleanly with tooling
              </li>
              <li>
                <code>codex exec resume</code> keeps conversation context for follow-up tasks
              </li>
              <li>
                Use <code>--model</code> to try higher reasoning levels when the summary needs deeper insight
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
                <li>Generate a JSON incident snapshot that conforms to your schema</li>
                <li>
                  Create a stakeholder-facing <code>status-update.md</code> derived from the structured data
                </li>
                <li>Understand how to resume non-interactive runs for iterative automation</li>
                <li>
                  Know when to enable <code>--full-auto</code> and model overrides
                </li>
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
                href="/tasks/4/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/4/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/3"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
