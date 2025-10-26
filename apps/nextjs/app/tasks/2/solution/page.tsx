import Link from "next/link";

export default function Task2SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Solution</h1>
        <p className="text-lg">Example walkthrough for building a project with Codex CLI and AGENTS.md.</p>
      </div>

      <div className="rounded-lg border bg-blue-50 p-6 dark:bg-blue-950/30">
        <h2 className="mb-3 font-semibold text-xl">📌 Remember: Your Project Will Be Different!</h2>
        <p className="text-sm">
          This is just ONE example of how you might complete this task. The beauty of this exercise is that everyone
          builds something unique. Use this as a reference for the workflow, not as something to copy exactly.
        </p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Example: Building a Password Strength Checker</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">0. Workspace Setup</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-02-password-checker</div>
              <div>cd ~/codex-workshop/task-02-password-checker</div>
              <div>git init</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">1. Create AGENTS.md with Constraints</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <pre className="whitespace-pre-wrap text-xs">
                {`# Password Strength Checker

## Project Goal
Build a CLI tool that evaluates password strength and provides
helpful feedback to users about how to improve their passwords.

## Constraints & Rules
- Use only Python standard library (no external packages)
- Add type hints to all function signatures
- Keep files under 100 lines each
- Always ask before installing dependencies
- Include docstrings in Google style format

## Coding Style
- Use descriptive variable names
- Add comments for complex logic
- Prefer readability over cleverness

## Testing Requirements
- Include at least 3 example passwords to test
- Handle edge cases (empty string, very long passwords)
- Provide clear, helpful feedback messages`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Start Codex and Verify AGENTS.md</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex</div>
            </div>
            <div className="mt-2 rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                <strong>You:</strong>
              </p>
              <p className="text-muted-foreground">
                &quot;Read the AGENTS.md file and confirm you understand all the constraints I&apos;ve set&quot;
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex should summarize your constraints and confirm it will follow them.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Create TODO.md Plan</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                <strong>Example prompt:</strong>
              </p>
              <p className="text-muted-foreground">
                &quot;Create a TODO.md file that breaks down the password strength checker project into specific
                implementation tasks. Include sections for planning, implementation, and testing. Use markdown
                checkboxes [ ] for tasks.&quot;
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Review the generated TODO.md. Ask Codex to add missing tasks or reorganize if needed.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Execute the Plan Step-by-Step</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                <strong>Example prompts:</strong>
              </p>
              <p className="mb-2 text-muted-foreground">
                &quot;Let&apos;s start with the first task in TODO.md - create password_checker.py with the strength
                evaluation function&quot;
              </p>
              <p className="text-muted-foreground">
                &quot;Now let&apos;s work on the next task - add the CLI interface&quot;
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Work through each task, reviewing and approving changes. After each task, ask Codex to mark it complete in
              TODO.md:
            </p>
            <div className="mt-2 rounded bg-white p-2 text-sm dark:bg-slate-900">
              <p className="text-muted-foreground">
                &quot;Mark the password_checker.py task as complete in TODO.md&quot;
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Test the Project</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2">
                <strong>While in Codex session, ask:</strong>
              </p>
              <p className="text-muted-foreground">
                &quot;Run the password_checker.py script and show me what happens when I enter a weak password&quot;
              </p>
            </div>
            <div className="mt-2 rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div># Or exit and test manually:</div>
              <div>exit</div>
              <div>python password_checker.py</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">Try different passwords to verify it works correctly.</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">6. Verify Constraints and TODO Completion</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold text-sm">Check that:</p>
              <ul className="list-disc space-y-1 pl-6 text-xs">
                <li>All tasks in TODO.md are marked as [x] complete</li>
                <li>Only used standard library (no import statements for external packages)</li>
                <li>Added type hints to function signatures</li>
                <li>Kept files under 100 lines each</li>
                <li>Included Google-style docstrings</li>
                <li>Used descriptive variable names</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            <strong>Planning prevents chaos</strong> - TODO.md helps you stay organized and prevents scope creep
          </li>
          <li>
            <strong>AGENTS.md as guardrails works</strong> - When you set clear, specific constraints, Codex generally
            respects them
          </li>
          <li>
            <strong>Plan → Execute → Review cycle</strong> - This workflow mirrors real software development and keeps
            you in control
          </li>
          <li>
            <strong>Creative freedom + constraints = better learning</strong> - Building something you care about makes
            the workshop more engaging
          </li>
          <li>
            <strong>Verification is crucial</strong> - Always check that the AI followed your rules; this builds trust
            and understanding
          </li>
          <li>
            <strong>Incremental progress</strong> - Working through TODO tasks one at a time makes complex projects
            manageable
          </li>
          <li>
            <strong>Git tracking helps</strong> - Being in a git repo allows you to see exactly what changed with{" "}
            <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">git diff</code>
          </li>
        </ul>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
          <h2 className="mb-3 font-semibold text-xl">🚀 Going Further</h2>
          <p className="mb-3 text-sm">If you finish early, try:</p>
          <ul className="list-disc space-y-2 pl-6 text-sm">
            <li>Add a new feature to your project</li>
            <li>Ask Codex to refactor for better readability</li>
            <li>Request automated tests</li>
            <li>Try making the AGENTS.md constraints MORE strict</li>
            <li>Build a second, completely different project</li>
          </ul>
        </div>

        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950/30">
          <h2 className="mb-3 font-semibold text-xl">⚠️ Common Issues</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm">
            <li>
              <strong>Codex suggests external packages:</strong> Remind it about your AGENTS.md constraint
            </li>
            <li>
              <strong>Files too long:</strong> Ask Codex to split functionality into multiple files
            </li>
            <li>
              <strong>Missing type hints:</strong> Explicitly request them again
            </li>
            <li>
              <strong>Code doesn&apos;t run:</strong> Ask Codex to debug and explain the error
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">💬 What Others Built (Examples from Past Workshops)</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded bg-white p-3 dark:bg-slate-900">
            <p className="mb-1 font-semibold text-sm">🎨 ASCII Banner Generator</p>
            <p className="text-muted-foreground text-xs">Converts text to big ASCII art with multiple font styles</p>
          </div>
          <div className="rounded bg-white p-3 dark:bg-slate-900">
            <p className="mb-1 font-semibold text-sm">🌍 Time Zone Converter</p>
            <p className="text-muted-foreground text-xs">Converts meeting times across different time zones</p>
          </div>
          <div className="rounded bg-white p-3 dark:bg-slate-900">
            <p className="mb-1 font-semibold text-sm">📊 Dice Roll Simulator</p>
            <p className="text-muted-foreground text-xs">Simulates D&amp;D dice rolls with statistics tracking</p>
          </div>
        </div>
        <p className="mt-3 text-muted-foreground text-xs italic">What will YOU build?</p>
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
