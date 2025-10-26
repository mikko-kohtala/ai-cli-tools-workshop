import Link from "next/link";

export default function Task2Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Configure Your Workspace with AGENTS.md</h1>
        <p className="text-lg">
          Learn how to guide Codex CLI with custom instructions using AGENTS.md and practice basic file scaffolding.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Create a fresh workspace, add an <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code>{" "}
            file with custom instructions for Codex CLI, and collaborate with the AI to scaffold your first project
            files.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create a dedicated workspace directory:{" "}
                  <code className="mx-1 rounded bg-muted px-1 py-0.5 text-sm">
                    ~/codex-workshop/task-02-agents-config
                  </code>
                  and change into it.
                </p>
              </li>
              <li>
                <p>
                  Initialize a git repository with <code className="rounded bg-muted px-1 py-0.5 text-sm">git init</code>
                  . Codex CLI works best in git-tracked directories.
                </p>
              </li>
              <li>
                <p>
                  Manually create an <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code> file with
                  instructions for Codex. Include your goals (e.g., &quot;learning AI CLI tools&quot;), preferred coding
                  style, and any constraints (e.g., &quot;always ask before installing dependencies&quot;).
                </p>
              </li>
              <li>
                <p>
                  Start Codex CLI in the directory with <code className="rounded bg-muted px-1 py-0.5 text-sm">codex</code>
                  .
                </p>
              </li>
              <li>
                <p>
                  Ask Codex to read and summarize the <code className="rounded bg-muted px-1 py-0.5 text-sm">
                    AGENTS.md
                  </code>{" "}
                  file you created. Verify it understood your instructions.
                </p>
              </li>
              <li>
                <p>
                  Request Codex to create a <code className="rounded bg-muted px-1 py-0.5 text-sm">README.md</code> that
                  explains this workspace&apos;s purpose, references the AGENTS.md guidance, and includes a simple task
                  checklist.
                </p>
              </li>
              <li>
                <p>
                  Ask Codex to generate a <code className="rounded bg-muted px-1 py-0.5 text-sm">.gitignore</code> file
                  appropriate for your preferred language or framework. Review the suggested changes before approving.
                </p>
              </li>
              <li>
                <p>Exit the session and verify all files were created as expected using your normal shell commands.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code> provides context and guardrails
                for AI coding assistants
              </li>
              <li>Codex CLI automatically reads AGENTS.md files in your project directory</li>
              <li>Git integration enables Codex to propose changes safely with diff reviews</li>
              <li>Always review file changes before approving them</li>
              <li>You can ask Codex to explain or modify its suggestions before accepting</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>
                  Have a working <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code> configuration
                  file
                </li>
                <li>Understand how to provide custom instructions to Codex CLI</li>
                <li>
                  Know how to verify Codex understood your <code className="rounded bg-muted px-1 py-0.5 text-sm">
                    AGENTS.md
                  </code>
                </li>
                <li>Have successfully scaffolded files with Codex assistance</li>
                <li>Be comfortable with the file approval workflow</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="mb-3 font-semibold text-xl">💡 What is AGENTS.md?</h2>
          <p className="mb-3 text-sm">
            <code className="rounded bg-white px-1 py-0.5 font-mono text-xs dark:bg-slate-950">AGENTS.md</code> is like a
            README for AI coding assistants. While README.md is written for humans, AGENTS.md provides detailed context
            that AI agents need: build steps, testing procedures, coding conventions, and project-specific constraints.
          </p>
          <p className="text-sm">
            Codex CLI (and other AI coding tools) automatically read AGENTS.md files to understand your project&apos;s
            requirements and preferences. Think of it as a way to onboard your AI assistant to your codebase.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Workshop Navigation</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Work Area</h3>
              <p className="mb-3 text-muted-foreground text-sm">Your workspace for this task</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 font-medium text-primary-foreground text-sm hover:bg-primary/90"
                href="/tasks/2/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/2/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/1"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks/3"
          >
            Next Task
          </Link>
        </div>
      </div>
    </div>
  );
}
