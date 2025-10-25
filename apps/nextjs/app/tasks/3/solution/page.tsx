import Link from "next/link";

export default function Task3SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Solution</h1>
        <p className="text-lg">One possible way to build the JSON agenda helper with Codex CLI.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Suggested Flow</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold">1. Project bootstrap</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-03-json-helper</div>
              <div>cd ~/codex-workshop/task-03-json-helper</div>
              <div>git init</div>
              <div>cp -R /path/to/ai-cli-tools-workshop/materials/workshop-tasks/task3/standup-notes.json ./</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Guidance for Codex</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                Example snippet for <code>AGENTS.md</code>:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Goal: Generate a Markdown agenda with sections for updates, blockers, and action items.</li>
                <li>
                  Prefer TypeScript with ES modules and <code>tsx</code> for execution.
                </li>
                <li>Group action items by owner and include due dates.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Generate code with Codex</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">Opening prompt (paste into Codex):</p>
              <p className="text-muted-foreground">
                "Read standup-notes.json, create src/generate-agenda.ts that loads the file, summarises updates, groups
                action items by owner, and prints Markdown to stdout. Add package.json scripts so I can run npm run
                agenda."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Approve Codex's edits for <code>package.json</code>, <code>tsconfig.json</code> (if suggested), and the
              TypeScript source file.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Execute and iterate</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>npm install</div>
              <div>npm run agenda</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Review the Markdown printed to the terminal. Ask Codex for improvements (e.g. reorder sections, tweak
              formatting) and approve follow-up diffs.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Save deliverables</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>npm run agenda &gt; agenda.md</div>
              <div>git add .</div>
              <div>codex "Draft a concise commit message summarising the agenda helper"</div>
              <div>git commit -m "Add Codex-generated agenda helper"</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Ground Codex with real data samples to improve accuracy.</li>
          <li>Iterative prompting lets you evolve code and output formatting rapidly.</li>
          <li>Codex is effective at drafting human-readable commit summaries after you stage changes.</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/3/work"
        >
          Back to Work Area
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/tasks/4"
        >
          Next Task
        </Link>
      </div>
    </div>
  );
}
