import Link from "next/link";

export default function Task4SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Solution</h1>
        <p className="text-lg">Reference solution and guidance for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Automation Walkthrough</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Seed the workspace</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-04-reports</div>
              <div>cd ~/codex-workshop/task-04-reports</div>
              <div>{"cat <<'MD' > day-1.md"}</div>
              <div># Day 1</div>
              <div>- Introduced Codex CLI basics</div>
              <div>- Live demo: planning + diff approval</div>
              <div>MD</div>
              <div>{"cat <<'MD' > day-2.md"}</div>
              <div># Day 2</div>
              <div>- Deep dive on automation flows</div>
              <div>- Compared reasoning levels</div>
              <div>MD</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Any Markdown content works—the point is to give <code>codex exec</code> material to synthesize.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Generate the summary</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec --cd ~/codex-workshop/task-04-reports "Summarize every markdown file into summary.md"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex reads <code>day-*.md</code>, produces <code>summary.md</code>, and exits once the file is written.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Generate the agenda with deeper reasoning</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>
                codex exec --cd ~/codex-workshop/task-04-reports --model high "Create agenda.md with next-step action items based on the notes"
              </div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              The <code>--model high</code> flag encourages a more thorough response—great for strategic follow-up lists.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Reinforce guardrails</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>{"cat <<'MD' > AGENTS.md"}</div>
              <div># Report automation guidance</div>
              <div>Do not edit day-*.md files.</div>
              <div>Write new outputs instead of overwriting source notes.</div>
              <div>Confirm where artifacts are saved.</div>
              <div>MD</div>
            </div>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec --cd ~/codex-workshop/task-04-reports "Update summary.md respecting the guardrails"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex should now restate the guardrails and regenerate the summary without touching the source files.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Package the outputs</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-1 font-semibold">Example prompt (interactive session optional):</p>
              <p className="text-muted-foreground">
                "Create a reports/ folder, move summary.md and agenda.md into it, and generate an index.md describing both files."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Approve the move commands so Codex reorganizes the artifacts without deleting the originals.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li><code>codex exec</code> is perfect for repeatable workflows like summaries or report generation</li>
          <li>Reasoning levels help you balance speed vs. depth for different outputs</li>
          <li><code>AGENTS.md</code> remains in effect, even for one-off automation runs</li>
          <li>You can chain exec runs with interactive sessions for quality control</li>
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
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/tasks"
        >
          Back to Task List
        </Link>
      </div>
    </div>
  );
}
