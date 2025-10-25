import Link from "next/link";

export default function Task2WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Work Area</h1>
        <p className="text-lg">Use this space to follow along while Codex helps you scaffold a new workspace.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">🛠️ Steps to Complete</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Create <code>~/codex-workshop/task-02-workspace</code> (or a similar folder) and run <code>git init</code>.
          </li>
          <li>
            Add an <code>AGENTS.md</code> describing your goals, tone, and coding preferences.
          </li>
          <li>
            Start Codex with <code>codex --cd ~/codex-workshop/task-02-workspace</code> (or by <code>cd</code>'ing
            first).
          </li>
          <li>
            Ask Codex to draft a <code>README.md</code> plus a <code>.gitignore</code> and confirm the edits.
          </li>
          <li>Capture the session summary or link for later reference.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🧠 Reflection Prompts</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            What guidance did you put in <code>AGENTS.md</code> and how did it change Codex's output?
          </li>
          <li>How did the approval workflow feel when Codex proposed multiple files?</li>
          <li>What would you tweak in your setup before starting a larger project?</li>
        </ul>
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
