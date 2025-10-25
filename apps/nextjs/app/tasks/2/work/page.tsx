import Link from "next/link";

export default function Task2WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Work Area</h1>
        <p className="text-lg">Your workspace for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-blue-50 p-6 dark:bg-blue-950/30">
        <h2 className="mb-3 font-semibold text-xl">🛠️ Terminal Flow</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Create <code>~/codex-workshop/task-02-workspace</code> (or similar) and <code>cd</code> into it.</li>
          <li>Add an <code>AGENTS.md</code> describing the guardrails you want Codex to respect.</li>
          <li>Run <code>codex --cd ~/codex-workshop/task-02-workspace --ask-for-approval</code>.</li>
          <li>Ask Codex to summarize the <code>AGENTS.md</code> instructions before doing anything else.</li>
          <li>Let Codex draft a <code>README.md</code> that documents the sandbox and attendee checklist.</li>
          <li>Experiment with <code>codex resume --last</code> or <code>codex --add-dir ..</code> to practice session control.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🧠 Notes</h2>
        <p className="text-muted-foreground text-sm">
          Capture interesting Codex responses, questions you want to ask during the workshop, or follow-up ideas below. Treat
          this page as your scratchpad while you iterate in the terminal.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/2"
        >
          Back to Instructions
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/2/solution"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
}
