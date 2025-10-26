import Link from "next/link";

export default function Task3WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Work Area</h1>
        <p className="text-lg text-muted-foreground">Your workspace for exploring advanced Codex features</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
          <h2 className="mb-4 font-semibold text-2xl">Quick Reference</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-medium">Part 1: Custom Slash Commands</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Prompts location:</strong>{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-xs">~/.codex/prompts/*.md</code>
                </p>
                <p>
                  <strong>Placeholders:</strong>{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-xs">$1, $2, $3</code> or named like{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-xs">$FILE</code>
                </p>
                <p>
                  <strong>Usage:</strong> Type <code className="rounded bg-muted px-1 py-0.5 text-xs">/</code> in Codex
                  to see slash menu
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Part 2: Automation</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Basic usage
codex exec "your prompt here"

# With higher reasoning
codex exec --model high "complex task"

# Specify directory
codex exec --cd /path/to/dir "task"`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Part 3: MCP Servers</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Add Playwright MCP
codex mcp add playwright npx @playwright/mcp@latest

# View config
cat ~/.codex/config.toml

# Start new session to load MCP
codex`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="mb-3 font-semibold text-xl">📝 Notes & Observations</h2>
          <p className="mb-3 text-sm">Use this space to document your experience:</p>
          <ul className="list-disc space-y-2 pl-6 text-sm">
            <li>What custom prompts did you create?</li>
            <li>
              How did <code className="rounded bg-muted px-1 py-0.5 text-xs">codex exec</code> perform?
            </li>
            <li>What did you test with the Playwright MCP?</li>
            <li>Which features will you use in your daily workflow?</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <h2 className="mb-3 font-semibold text-xl">💡 Tips</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm">
            <li>Custom prompts are loaded when Codex starts—restart after creating new ones</li>
            <li>
              Use <code className="rounded bg-muted px-1 py-0.5 text-xs">codex exec</code> for one-off tasks, regular{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">codex</code> for iteration
            </li>
            <li>MCP servers can be chained—add multiple for compound capabilities</li>
            <li>Test custom prompts with sample files before using on real projects</li>
          </ul>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/3"
          >
            Back to Task 3
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks/3/solution"
          >
            View Solution
          </Link>
        </div>
      </div>
    </div>
  );
}
