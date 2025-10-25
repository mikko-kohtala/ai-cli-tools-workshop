import Link from "next/link";

export default function Task4Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Automate Reports with codex exec</h1>
        <p className="text-lg">
          Explore Codex CLI&apos;s non-interactive mode to batch-generate insights, summaries, and follow-up actions from a set of
          Markdown notes.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Use <code>codex exec</code> to produce a daily summary, action items, and a follow-up agenda based on workshop notes,
            then review the generated files.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create <code>~/codex-workshop/task-04-reports</code> and add two Markdown files (for example
                  <code>day-1.md</code> and <code>day-2.md</code>) describing workshop highlights.
                </p>
              </li>
              <li>
                <p>
                  Run <code>codex exec --cd ~/codex-workshop/task-04-reports "Summarize every markdown file into summary.md"</code>
                  and inspect the generated content.
                </p>
              </li>
              <li>
                <p>
                  Use <code>codex exec</code> again with <code>--model high</code> to produce a follow-up agenda in
                  <code>agenda.md</code> that lists next steps for the team.
                </p>
              </li>
              <li>
                <p>
                  Ask Codex (via a quick interactive session if desired) to review <code>summary.md</code> and
                  <code>agenda.md</code>, ensuring the outputs align with the Markdown notes.
                </p>
              </li>
              <li>
                <p>
                  Add a small <code>AGENTS.md</code> reminding Codex to treat the folder as read-only for source notes and to
                  write new output files instead of editing the originals. Re-run <code>codex exec</code> to confirm the
                  instructions stick.
                </p>
              </li>
              <li>
                <p>
                  Archive the generated files by asking Codex to create a <code>reports/</code> subdirectory and move
                  <code>summary.md</code> and <code>agenda.md</code> into it.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><code>codex exec</code> runs a single request end-to-end without opening the TUI</li>
              <li><code>--model</code> lets you dial up reasoning depth when you need richer output</li>
              <li><code>AGENTS.md</code> still applies to automation runs</li>
              <li>You can combine interactive and non-interactive workflows seamlessly</li>
              <li>Automating summaries is a practical way to speed up workshop recaps</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Know how to automate Codex responses with <code>codex exec</code></li>
                <li>Generate <code>summary.md</code> and <code>agenda.md</code> from workshop notes</li>
                <li>See how <code>AGENTS.md</code> influences automation runs</li>
                <li>Package generated artifacts for sharing with your team</li>
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
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
