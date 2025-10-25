import Link from "next/link";

export default function Task3SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Solution</h1>
        <p className="text-lg">Example flow for building and refining an automation script with Codex CLI.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Solution Steps</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Prepare the sandbox</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-03-automation</div>
              <div>cd ~/codex-workshop/task-03-automation</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Seed sample data</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Prompt example:</p>
              <p className="text-muted-foreground">
                "Create data/inbox.json with five action items. Include title, owner, status (todo, in-progress, done),
                and dueDate fields."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Approve the diff after checking that the JSON structure matches your expectations.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Generate the automation script</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Prompt example:</p>
              <p className="text-muted-foreground">
                "Add scripts/agenda.js that reads data/inbox.json, supports an optional --status filter, and prints a
                table with columns for Title, Owner, Status, and Due Date."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Ensure Codex includes nice column spacing and handles missing files gracefully.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Document how to run it</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Follow-up prompt:</p>
              <p className="text-muted-foreground">
                "Update README.md with instructions for running node scripts/agenda.js and filtering by --status done."
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Test the script</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>node scripts/agenda.js</div>
              <div>node scripts/agenda.js --status todo</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              If the formatting needs polish, ask Codex to adjust column widths or add emojis for overdue work.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">6. Capture a follow-up idea</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Prompt suggestion:</p>
              <p className="text-muted-foreground">
                "Append a Future Improvements section to README.md with one idea, such as emailing the agenda summary."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Codex can juggle multiple files in one session when you provide clear structure</li>
          <li>Running generated code immediately highlights missing dependencies or formatting issues</li>
          <li>Ending with future ideas keeps momentum for your next session</li>
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
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks"
        >
          Back to Task List
        </Link>
      </div>
    </div>
  );
}
