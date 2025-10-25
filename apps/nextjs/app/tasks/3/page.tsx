import Link from "next/link";

export default function Task3Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Pair Program a JSON Helper</h1>
        <p className="text-lg">
          Work with Codex CLI to build a small utility that summarises stand-up notes from structured data.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Use Codex CLI as your coding partner to create a TypeScript script that reads meeting notes and outputs a concise
            agenda. Practice iterating on generated code, running commands, and validating the results.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <p>
                Create a new folder such as <code>~/codex-workshop/task-03-json-helper</code>, initialise Git, and copy the
                sample data: <code>cp -R ./materials/workshop-tasks/task3/standup-notes.json .</code>
              </p>
            </li>
            <li>
              <p>
                Start Codex in the folder and paste a short design brief describing the expected behaviour. Include details
                like: "Read the JSON file, group action items by owner, and print a Markdown agenda." Reference your
                <code>AGENTS.md</code> guidance from Task 2 or create a new one.
              </p>
            </li>
            <li>
              <p>
                Ask Codex to generate the TypeScript source (for example in <code>src/generate-agenda.ts</code>) along with a
                matching <code>package.json</code> script (e.g. <code>npm run agenda</code>).</p>
            </li>
            <li>
              <p>
                Approve the proposed edits, install dependencies (<code>npm install</code>) if suggested, and use Codex to run
                the script. Inspect the console output and request refinements until it meets your expectations.
              </p>
            </li>
            <li>
              <p>
                Capture the final agenda output in a new Markdown file (<code>agenda.md</code>) and commit the changes locally.
                Ask Codex to help you craft a summary commit message.
              </p>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Codex can write and refine multi-file changes in one conversation</li>
              <li>Use the approval queue to review diffs before they land on disk</li>
              <li>Codex can run <code>npm</code> or <code>node</code> commands inside your workspace when you approve them</li>
              <li>Providing concrete sample data improves the quality of generated code</li>
              <li>Let Codex draft commit messages after you stage changes</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a working script that turns <code>standup-notes.json</code> into a Markdown agenda</li>
                <li>Understand how to iterate on generated code within a single Codex session</li>
                <li>Be comfortable approving command executions suggested by Codex</li>
                <li>Practice summarising changes with Codex-generated commit messages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Workshop Navigation</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Work Area</h3>
              <p className="mb-3 text-muted-foreground text-sm">Your workspace for this task</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 font-medium text-primary-foreground text-sm hover:bg-primary/90"
                href="/tasks/3/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/3/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/2"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks/4"
          >
            Next Task
          </Link>
        </div>
      </div>
    </div>
  );
}
