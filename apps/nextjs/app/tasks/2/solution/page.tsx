import Link from "next/link";

export default function Task2SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Solution</h1>
        <p className="text-lg">Reference solution and guidance for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Solution Steps</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">0. Prepare Files</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-02-summary-script</div>
              <div>cd ~/codex-workshop/task-02-summary-script</div>
              <div>cat &gt; notes.txt &lt;&lt;'EOF'</div>
              <div>- Review docs for release</div>
              <div>- Update changelog draft</div>
              <div>- Share summary with the team</div>
              <div>EOF</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">1. Launch Codex CLI</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">Start the session inside the workspace directory.</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Request a Plan</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Example prompt:</p>
              <p className="text-muted-foreground">
                /plan Create a README and a Python script named <code>summarize_notes.py</code> that reads <code>notes.txt</code>
                and prints a concise checklist summary. Include an execution step that runs the script on the notes file.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Implement the Plan</h3>
            <p className="text-muted-foreground text-sm">
              Approve Codex creating <code>README.md</code> and <code>summarize_notes.py</code>. Ask it to show the diff before
              applying.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Run the Script</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec "python summarize_notes.py notes.txt"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Confirm the output lists the summary bullets derived from <code>notes.txt</code>.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Capture Next Steps</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Example follow-up prompt:</p>
              <p className="text-muted-foreground">
                "Summarize what you created and suggest one improvement we could make next."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Start each exercise in a clean directory with only the context you need</li>
          <li>Use <code>/plan</code> to co-design the workflow before Codex edits files</li>
          <li><code>codex exec</code> keeps execution within the same conversational context</li>
          <li>Asking for summaries cements what the agent accomplished</li>
          <li>Iterate on the plan if it misses context from your notes</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/2/work"
        >
          Back to Work Area
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/tasks/3"
        >
          Next Task
        </Link>
      </div>
    </div>
  );
}
