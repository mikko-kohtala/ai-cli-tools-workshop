import Link from "next/link";

export default function Task2WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Work Area</h1>
        <p className="text-lg">Your workspace for building your unique project.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">📝 Task Checklist</h2>
        <p className="mb-4">Follow these steps in your local terminal:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Create workspace directory and navigate into it</li>
          <li>
            Initialize git (<code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">git init</code>)
          </li>
          <li>
            Create <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">AGENTS.md</code> with
            constraints
          </li>
          <li>Choose your project idea (from the list or your own)</li>
          <li>
            Start Codex CLI (<code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">codex</code>)
          </li>
          <li>Verify Codex read your AGENTS.md</li>
          <li>
            <strong>Ask Codex to create a TODO.md plan</strong> for your project
          </li>
          <li>
            <strong>Execute the plan step-by-step</strong>, marking tasks complete as you go
          </li>
          <li>Test your project works</li>
          <li>Verify Codex followed all your AGENTS.md constraints</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📄 Example AGENTS.md with Constraints</h2>
        <p className="mb-3 text-muted-foreground text-sm">
          Start with this template and customize it for YOUR project:
        </p>
        <div className="overflow-x-auto rounded-lg bg-white p-4 font-mono text-sm dark:bg-slate-950">
          <pre className="whitespace-pre-wrap">
            {`# Workshop Project Builder

## Project Goal
Build a [YOUR PROJECT NAME HERE] that helps users [PURPOSE].

## Constraints & Rules
- Use only Python standard library (no external packages)
- Add type hints to all function signatures
- Keep each file under 100 lines of code
- Always ask before installing any dependencies
- Include docstrings for all functions

## Coding Style
- Use clear, descriptive variable names
- Add comments for non-obvious logic
- Prefer simple, readable code over clever tricks
- Follow PEP 8 style guide for Python

## Testing Requirements
- Include at least 3 example use cases
- Add basic error handling for user inputs
- Test the happy path and one edge case

## Workshop Context
This is a learning environment. Educational clarity and
demonstrating good practices is more important than
feature completeness.`}
          </pre>
        </div>
        <p className="mt-3 text-muted-foreground text-xs">
          💡 Tip: Make your constraints specific and testable so you can verify Codex followed them!
        </p>
      </div>

      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/30">
        <h2 className="mb-3 font-semibold text-xl">📋 Example TODO.md Structure</h2>
        <p className="mb-3 text-sm">Ask Codex to create a TODO.md like this:</p>
        <div className="overflow-x-auto rounded-lg bg-white p-3 font-mono text-xs dark:bg-slate-950">
          <pre className="whitespace-pre-wrap">
            {`# Password Strength Checker - TODO

## Planning Phase
- [x] Define project scope and requirements
- [x] Create AGENTS.md with constraints
- [x] Create this TODO.md file

## Implementation Tasks
- [ ] Create password_checker.py with main logic
  - [ ] Add strength evaluation function
  - [ ] Add character variety checking
  - [ ] Add common pattern detection
- [ ] Create CLI interface
  - [ ] Add user input prompts
  - [ ] Display strength score
  - [ ] Show helpful feedback
- [ ] Add README.md with usage instructions
- [ ] Create examples.txt with test cases

## Testing & Verification
- [ ] Test with various password strengths
- [ ] Verify AGENTS.md constraints followed
- [ ] Check all files under 100 lines`}
          </pre>
        </div>
        <p className="mt-2 text-muted-foreground text-xs">
          💡 Update this as you work, marking tasks with [x] when complete!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
          <h2 className="mb-3 font-semibold text-xl">🎯 Planning Prompts</h2>
          <p className="mb-3 text-sm">Try these prompts for planning:</p>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>&quot;Read AGENTS.md and confirm you understand the constraints&quot;</strong>
            </li>
            <li>
              <strong>
                &quot;Create a TODO.md file that breaks down building a [PROJECT] into specific tasks and files&quot;
              </strong>
            </li>
            <li>
              <strong>&quot;Review the TODO.md and suggest any missing tasks&quot;</strong>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <h2 className="mb-3 font-semibold text-xl">⚡ Execution Prompts</h2>
          <p className="mb-3 text-sm">Once you have your TODO.md:</p>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>&quot;Let&apos;s start with the first task in TODO.md&quot;</strong>
            </li>
            <li>
              <strong>&quot;Create [FILENAME] as described in the TODO&quot;</strong>
            </li>
            <li>
              <strong>&quot;Mark the first task as complete in TODO.md and move to the next&quot;</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950/30">
        <h2 className="mb-3 font-semibold text-xl">🔄 Plan-Execute-Review Cycle</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded bg-white p-3 dark:bg-slate-900">
            <p className="mb-1 font-semibold text-sm">1. Plan</p>
            <p className="text-muted-foreground text-xs">Create TODO.md with all tasks and files needed</p>
          </div>
          <div className="rounded bg-white p-3 dark:bg-slate-900">
            <p className="mb-1 font-semibold text-sm">2. Execute</p>
            <p className="text-muted-foreground text-xs">Work through tasks one by one, reviewing each change</p>
          </div>
          <div className="rounded bg-white p-3 dark:bg-slate-900">
            <p className="mb-1 font-semibold text-sm">3. Review</p>
            <p className="text-muted-foreground text-xs">Test, verify constraints, check off completed tasks</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Verification Checklist</h2>
        <p className="mb-3 text-sm">After building, verify:</p>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          <li>Your project actually runs and works</li>
          <li>All TODO.md tasks are marked complete</li>
          <li>Codex followed your coding style rules</li>
          <li>No external dependencies were added (if constrained)</li>
          <li>Files are under your line limit (if specified)</li>
          <li>Type hints/docstrings are present (if required)</li>
          <li>You understand what Codex built</li>
        </ul>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📝 Your Project Notes</h2>
        <div className="space-y-3">
          <div>
            <p className="mb-1 font-semibold text-sm">What are you building?</p>
            <div className="min-h-16 rounded border bg-white p-2 dark:bg-slate-900">
              <p className="text-muted-foreground text-xs italic">(Describe your project idea...)</p>
            </div>
          </div>
          <div>
            <p className="mb-1 font-semibold text-sm">What constraints did you set?</p>
            <div className="min-h-16 rounded border bg-white p-2 dark:bg-slate-900">
              <p className="text-muted-foreground text-xs italic">(List your AGENTS.md constraints...)</p>
            </div>
          </div>
          <div>
            <p className="mb-1 font-semibold text-sm">Did Codex respect your constraints?</p>
            <div className="min-h-16 rounded border bg-white p-2 dark:bg-slate-900">
              <p className="text-muted-foreground text-xs italic">(Note what worked and what didn&apos;t...)</p>
            </div>
          </div>
        </div>
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
