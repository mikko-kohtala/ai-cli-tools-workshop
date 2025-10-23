import Link from "next/link";

export default function Task1Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 1: Getting Started with Codex CLI</h1>
        <p className="text-lg">Learn the basics of Codex CLI and verify your setup.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Install Codex CLI, verify your setup, and learn how to start your first coding session with the AI
            assistant.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Install Codex CLI by following the official documentation at{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://developers.openai.com/codex/cli"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    developers.openai.com/codex/cli
                  </a>
                </p>
              </li>
              <li>
                <p>Verify your installation by running the version command in your terminal.</p>
              </li>
              <li>
                <p>
                  Start a new Codex CLI session and ask it to explain what it can do for you. Take note of its response.
                </p>
              </li>
              <li>
                <p>
                  Try asking Codex CLI to help you with a simple task, such as creating a new file or explaining a code
                  snippet.
                </p>
              </li>
              <li>
                <p>Experiment with ending the session and starting a new one.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Codex CLI is a terminal-based AI coding assistant</li>
              <li>It can read and modify files in your current directory</li>
              <li>Sessions maintain context for better assistance</li>
              <li>You can ask questions and request code changes</li>
              <li>All changes require your approval before being applied</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have Codex CLI installed and working</li>
                <li>Understand how to start and end sessions</li>
                <li>Know how to ask questions and request help</li>
                <li>Be comfortable with the basic CLI interface</li>
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
                href="/tasks/1/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/1/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks"
          >
            Back to Tasks
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks/2"
          >
            Next Task
          </Link>
        </div>
      </div>
    </div>
  );
}
