import Link from "next/link";

export default function Task3Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Build a Codex-Assisted CLI Prototype</h1>
        <p className="text-lg">
          Use Codex CLI to plan, scaffold, and iterate on a tiny command-line app inside a brand-new workspace.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Collaborate with Codex to design and implement a Node.js task tracker that stores its data locally, then
            validate the behavior by running sample commands.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create <code>~/codex-workshop/task-03-cli</code> (or similar) and start Codex with
                  <code>codex --cd ~/codex-workshop/task-03-cli --ask-for-approval</code>.
                </p>
              </li>
              <li>
                <p>
                  Ask Codex for a step-by-step plan to build a Node.js script called <code>todo.js</code> that can add,
                  list, and complete items using a local <code>tasks.json</code> file.
                </p>
              </li>
              <li>
                <p>
                  Approve the plan, then prompt Codex to scaffold the project: initialize <code>package.json</code>, add
                  a<code>README.md</code>, and create <code>todo.js</code> with clear functions.
                </p>
              </li>
              <li>
                <p>
                  Let Codex run sample commands such as <code>node todo.js add "Buy snacks"</code> and
                  <code>node todo.js complete 1</code>. Approve the executions so the assistant can show the output.
                </p>
              </li>
              <li>
                <p>
                  Ask Codex to add a lightweight test script (for example, using Node's built-in <code>assert</code>{" "}
                  module) and run it via <code>npm test</code>.
                </p>
              </li>
              <li>
                <p>
                  Review all diffs before applying them. If something looks off, request adjustments or edits until you
                  are satisfied.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use Codex planning responses to structure your implementation steps</li>
              <li>Let Codex run shell commands and show output before you approve diffs</li>
              <li>Simple local JSON storage keeps the task focused on CLI fundamentals</li>
              <li>Adding tests gives Codex feedback loops to iterate with confidence</li>
              <li>Approving or rejecting diffs teaches how to stay in control</li>
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
                  Have a working <code>todo.js</code> CLI that persists data to <code>tasks.json</code>
                </li>
                <li>See Codex execute Node scripts and share the captured output</li>
                <li>Understand how to request and review automated tests</li>
                <li>Feel comfortable approving or rejecting Codex-generated diffs</li>
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
