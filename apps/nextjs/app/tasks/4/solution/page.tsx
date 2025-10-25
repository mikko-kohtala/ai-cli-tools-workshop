import Link from "next/link";

export default function Task4SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Solution</h1>
        <p className="text-lg">Reference workflow for automating an incident report with <code>codex exec</code>.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Suggested Flow</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold">1. Prepare workspace</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-04-incident</div>
              <div>cd ~/codex-workshop/task-04-incident</div>
              <div>git init</div>
              <div>cp /path/to/ai-cli-tools-workshop/materials/workshop-tasks/task4/error-log.txt ./</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Define schema</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-mono text-xs text-muted-foreground">incident-schema.json</p>
              <pre className="overflow-x-auto text-xs">{
  "type": "object",
  "properties": {
    "summary": { "type": "string" },
    "impacted_services": {
      "type": "array",
      "items": { "type": "string" }
    },
    "primary_errors": {
      "type": "array",
      "items": { "type": "string" }
    },
    "next_steps": {
      "type": "array",
      "items": { "type": "string" }
    }
  },
  "required": ["summary", "impacted_services", "primary_errors", "next_steps"],
  "additionalProperties": false
}</pre>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Run codex exec with schema</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec --json --output-schema incident-schema.json "Analyse error-log.txt and emit the schema"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Capture the <code>agent_message</code> JSON object from the streamed output and save it to
              {" "}
              <code>incident-report.json</code>.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Resume for status update</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec resume --last "Create status-update.md referencing incident-report.json"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex reuses the previous context (log analysis) while focusing on the new deliverable.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Experiment with flags</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec --model gpt-5-codex --full-auto --output-schema incident-schema.json "Re-analyse the log"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Compare the output and note any differences when Codex has expanded autonomy or a different reasoning profile.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li><code>--output-schema</code> keeps automated runs predictable and easy to parse.</li>
          <li><code>codex exec resume</code> is ideal when you need to produce multiple artefacts from the same context.</li>
          <li>Experimenting with <code>--model</code> and <code>--full-auto</code> helps you understand Codex's autonomy levels.</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/4/work"
        >
          Back to Work Area
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks"
        >
          Back to Task List
        </Link>
      </div>
    </div>
  );
}
