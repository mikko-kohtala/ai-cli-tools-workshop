import Link from "next/link";

export default function Task2SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Solution</h1>
        <p className="text-lg">Reference walkthrough for collaborating with Codex CLI on documentation scaffolding.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Solution Steps</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Prepare your workspace</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-02-journal</div>
              <div>cd ~/codex-workshop/task-02-journal</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Keep all Codex experiments in a single parent folder for easy cleanup later.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Start Codex and outline files</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Prompt example:</p>
              <p className="text-muted-foreground">
                "I want a small project journal for the AI CLI Tools Workshop. Suggest the files we should create to
                track goals, questions, and decisions."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Let Codex propose an initial structure before asking for specific files.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Generate README content</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Follow-up prompt:</p>
              <p className="text-muted-foreground">
                "Draft README.md with sections for Workshop Goals, Environment Setup, and Questions to Revisit."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Review the diff, ask for tweaks if wording feels off, then approve the change.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Capture decisions and ideas</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Additional prompts:</p>
              <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                <li>"Create notes/decision-log.md with a markdown table for Date, Decision, and Rationale."</li>
                <li>"Add ideas.md with three brainstorm prompts I can revisit later."</li>
              </ul>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Ask Codex to confirm the files it created so you can double-check the structure.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Wrap up</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>ls -R</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Confirm everything looks correct, then exit Codex with <code>exit</code> or <code>Ctrl+C</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Clear prompts help Codex co-design documentation before coding starts</li>
          <li>Tables and structured notes make AI-generated content easier to audit</li>
          <li>Iterate on tone or level of detail—Codex is great at revisions</li>
          <li>Keep everything inside a sandbox directory so you can reset quickly</li>
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
