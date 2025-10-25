import Link from "next/link";

export default function Task5WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 5: Work Area</h1>
        <p className="text-lg">
          Use this space while you iterate on your arcade mini-game with Codex CLI and supporting tooling.
        </p>
      </div>

      <div className="rounded-lg border bg-sky-50 p-6 dark:bg-sky-950/30">
        <h2 className="mb-3 font-semibold text-xl">🎯 Build Checklist</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Document the current MVP, stretch goals, and open questions in README + NOTES.</li>
          <li>Keep the game playable after every Codex interaction—commit once it passes a smoke playtest.</li>
          <li>
            Toggle reasoning levels (<code>minimal</code>, <code>medium</code>, <code>high</code>) based on task size.
          </li>
          <li>Log each improvement (new mechanic, polish item) with a short changelog entry or git tag.</li>
          <li>Run your automated harness or replay script whenever you add mechanics.</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">🧠 Exploration Notes</h2>
        <p className="text-muted-foreground text-sm">
          Compare Codex CLI with another AI coding assistant—Claude Code’s <code>think harder</code> keyword, Gemini
          CLI’s cross-provider focus, or Amp’s subagent refactors. Add the mandated disclaimer in your notes: Examples
          only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/5"
        >
          Back to Instructions
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/5/solution"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
}
