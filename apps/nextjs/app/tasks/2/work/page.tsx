import Link from "next/link";

export default function Task2WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Work Area</h1>
        <p className="text-lg">Your workspace for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-amber-50 p-6 dark:bg-amber-950/30">
        <h2 className="mb-3 font-semibold text-xl">📝 Task Checklist</h2>
        <p className="mb-4">Follow these steps in your local terminal:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Create workspace directory and navigate into it</li>
          <li>
            Initialize git repository (<code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">
              git init
            </code>
            )
          </li>
          <li>
            Create <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">AGENTS.md</code> with custom
            instructions
          </li>
          <li>
            Start Codex CLI (<code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">codex</code>)
          </li>
          <li>Ask Codex to read and summarize your AGENTS.md</li>
          <li>Request README.md creation based on AGENTS.md</li>
          <li>Request .gitignore file generation</li>
          <li>Exit and verify all files created correctly</li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📄 Example AGENTS.md Content</h2>
        <p className="mb-3 text-muted-foreground text-sm">
          Here&apos;s a starter template you can customize for your workspace:
        </p>
        <div className="overflow-x-auto rounded-lg bg-white p-4 font-mono text-sm dark:bg-slate-950">
          <pre className="whitespace-pre-wrap">
            {`# AI Coding Workshop - Task 2

## Project Goal
Learning how to use AI CLI tools effectively for software development.

## Coding Preferences
- Use clear, descriptive variable names
- Add comments for complex logic
- Prefer simple, readable solutions over clever tricks

## Constraints
- Always ask before installing new dependencies
- Explain what each file does before creating it
- Use Python or JavaScript for examples (my preferred languages)

## Testing
- Include basic examples or test cases when appropriate
- Verify file contents match what was requested

## Notes
This is a workshop learning environment, so educational clarity
is more important than production-ready code.`}
          </pre>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">💡 Notes & Observations</h2>
        <p className="text-muted-foreground text-sm">
          Use this space to track your progress, write down interesting discoveries, or note any questions that come up
          during the task:
        </p>
        <div className="mt-3 min-h-32 rounded border bg-white p-3 dark:bg-slate-900">
          <p className="text-muted-foreground text-xs italic">(Take notes here while working through the task...)</p>
        </div>
      </div>

      <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✨ Try These Prompts</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>&quot;Can you read the AGENTS.md file and summarize what instructions I&apos;ve given you?&quot;</strong>
          </li>
          <li>
            <strong>&quot;Create a README.md that explains this workspace is for learning Codex CLI&quot;</strong>
          </li>
          <li>
            <strong>&quot;Generate a .gitignore file for a Python/JavaScript project&quot;</strong>
          </li>
          <li>
            <strong>&quot;What files do you think would be helpful for this learning workspace?&quot;</strong>
          </li>
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
