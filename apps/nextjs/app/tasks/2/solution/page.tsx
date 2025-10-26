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
            <h3 className="mb-2 font-semibold">0. Prepare Workspace</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-02-agents-config</div>
              <div>cd ~/codex-workshop/task-02-agents-config</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">1. Initialize Git Repository</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>git init</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex CLI works best in git-tracked directories as it can show you diffs and manage changes safely.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Create AGENTS.md</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div># Open your preferred text editor</div>
              <div>nano AGENTS.md</div>
              <div className="mt-2"># Or use vim, code, etc.</div>
            </div>
            <div className="mt-3 rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Example AGENTS.md content:</p>
              <pre className="text-muted-foreground text-xs">
                {`# Workshop Learning Environment

## Goal
Learning how to effectively use Codex CLI for AI-assisted
software development.

## Preferences
- Clear, educational code with comments
- Python or JavaScript for examples
- Simple solutions over complex ones

## Rules
- Ask before installing dependencies
- Explain file purpose before creating
- Show me diffs before applying changes

## Context
This is a learning workspace for an AI CLI tools workshop.
Prioritize clarity and teaching over production-readiness.`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Start Codex CLI</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              This launches Codex in the current directory. It will automatically detect and read your AGENTS.md file.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Verify AGENTS.md Recognition</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                <strong>Example prompt:</strong>
              </p>
              <p className="text-muted-foreground">
                &quot;Can you read the AGENTS.md file and tell me what instructions I&apos;ve provided?&quot;
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex should summarize your AGENTS.md content, confirming it understood your preferences and constraints.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Request README.md Creation</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                <strong>Example prompt:</strong>
              </p>
              <p className="text-muted-foreground">
                &quot;Create a README.md that explains this is a learning workspace for Task 2 of the AI CLI Tools
                Workshop. Include sections for: Project Goal, Setup Instructions, and a Task Checklist based on the
                AGENTS.md file.&quot;
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Review the proposed changes in the Codex interface before approving.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">6. Request .gitignore Generation</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                <strong>Example prompt:</strong>
              </p>
              <p className="text-muted-foreground">
                &quot;Generate a .gitignore file for a Python project&quot; (or JavaScript, or your preferred language)
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">7. Exit and Verify</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div># In Codex, type:</div>
              <div>exit</div>
              <div className="mt-2"># Then verify files in your shell:</div>
              <div>ls -la</div>
              <div>cat AGENTS.md</div>
              <div>cat README.md</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            <strong>AGENTS.md is your AI assistant&apos;s onboarding document</strong> - Think of it as instructions you&apos;d
            give a new team member
          </li>
          <li>
            <strong>Git integration is important</strong> - Codex can show diffs and manage changes safely in git repos
          </li>
          <li>
            <strong>Always verify Codex understood your instructions</strong> - Ask it to summarize AGENTS.md content
          </li>
          <li>
            <strong>Review before approving</strong> - Check proposed file contents before accepting changes
          </li>
          <li>
            <strong>AGENTS.md is flexible</strong> - Include whatever context helps: goals, preferences, constraints, or
            project-specific details
          </li>
          <li>
            <strong>Multiple AGENTS.md files</strong> - You can have them at different directory levels; Codex merges them
            top-down
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
        <h2 className="mb-3 font-semibold text-xl">🚀 Going Further</h2>
        <p className="mb-3 text-sm">After completing the basic task, try these additional experiments:</p>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            Create a nested directory with its own AGENTS.md and see how Codex merges instructions from both levels
          </li>
          <li>Ask Codex to create a simple script (Python, JavaScript, etc.) and verify it follows your AGENTS.md style</li>
          <li>
            Experiment with different AGENTS.md constraints (e.g., &quot;always include type hints&quot;, &quot;add docstrings to
            all functions&quot;)
          </li>
          <li>
            Use <code className="rounded bg-white px-1 py-0.5 font-mono text-xs dark:bg-slate-950">codex resume</code>{" "}
            to return to this session later
          </li>
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
