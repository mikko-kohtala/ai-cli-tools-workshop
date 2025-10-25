import Link from "next/link";

export default function Task2Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Create Your Codex Workspace</h1>
        <p className="text-lg">
          Practice setting up a dedicated project folder for Codex CLI, wiring in guidance with <code>AGENTS.md</code>,
          and letting the assistant scaffold your first files.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Create a fresh Git-backed workspace, add workshop guidance via <code>AGENTS.md</code>, and collaborate with
            Codex CLI to produce a project README and useful starter files.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <p>
                In your terminal, create a new folder such as <code>~/codex-workshop/task-02-workspace</code> and
                initialize it as a Git repository:{" "}
                <code>mkdir -p ~/codex-workshop/task-02-workspace &amp;&amp; cd</code>{" "}
                <code>~/codex-workshop/task-02-workspace</code>, then run <code>git init</code>.
              </p>
            </li>
            <li>
              <p>
                Add a minimal <code>AGENTS.md</code> file that tells Codex what you are trying to build. Include goals,
                coding style preferences, and any constraints. (Feel free to copy snippets from this task page.)
              </p>
            </li>
            <li>
              <p>
                Launch Codex CLI pointed at the new folder. You can either <code>cd</code> into the directory before
                running <code>codex</code>, or stay in your main repo and start Codex with the <code>--cd</code> flag:{" "}
                <code>codex --cd ~/codex-workshop/task-02-workspace</code>.
              </p>
            </li>
            <li>
              <p>
                Ask Codex to inspect the folder, propose a project structure for a small automation you would like to
                build (for example, a CLI that summarizes meeting notes), and generate a <code>README.md</code>{" "}
                outlining the plan.
              </p>
            </li>
            <li>
              <p>
                Collaborate with Codex to create a sensible <code>.gitignore</code> and any starter files it recommends.
                Approve the edits from the TUI so the files are written to disk.
              </p>
            </li>
            <li>
              <p>
                Capture the conversation link or export so you can reference how you set up the workspace during the
                workshop recap.
              </p>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Codex CLI expects a Git repository before applying edits</li>
              <li>
                <code>AGENTS.md</code> files give Codex extra context about goals, tone, and constraints
              </li>
              <li>
                Use the <code>--cd</code> flag to point Codex at any directory without leaving your current shell
              </li>
              <li>Codex can propose multi-file scaffolds and wait for your approval before writing them</li>
              <li>Documenting your session helps you reuse the workflow later</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a clean Codex-friendly project directory under version control</li>
                <li>
                  Provide Codex custom guidance with a hand-crafted <code>AGENTS.md</code>
                </li>
                <li>
                  Generate a <code>README.md</code>, <code>.gitignore</code>, and at least one starter file with Codex
                </li>
                <li>
                  Know how to launch Codex in a specific folder using <code>--cd</code>
                </li>
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
