import Link from "next/link";

export default function Task4WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Work Area</h1>
        <p className="text-lg">
          Use this area while you automate the incident summary with <code>codex exec</code>.
        </p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">⚙️ Execution Checklist</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Copy <code>error-log.txt</code> into your repo and skim for key signals.
          </li>
          <li>
            Write <code>incident-schema.json</code> before invoking Codex so you know the expected output.
          </li>
          <li>
            Run <code>codex exec</code> with <code>--json</code> and confirm the streamed events look healthy.
          </li>
          <li>
            Resume the run to produce <code>status-update.md</code> and compare it with the JSON summary.
          </li>
          <li>Commit both artefacts once you are satisfied with the result.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🧩 Notes</h2>
        <p className="text-muted-foreground text-sm">
          Keep track of any flags you try (<code>--model</code>, <code>--full-auto</code>) and how they change the
          behaviour. These observations will help during the workshop debrief.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/4"
        >
          Back to Instructions
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/4/solution"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
}
