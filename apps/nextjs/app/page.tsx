import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Welcome to AI CLI Tools Workshop</h1>
        <p className="text-lg">
          Explore AI Command Line tools and learn how to use them effectively in your development workflow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          className="group relative rounded-lg border p-6 transition-colors hover:border-foreground/50"
          href="/presentation"
        >
          <div className="space-y-2">
            <h2 className="font-semibold text-2xl tracking-tight">Presentation</h2>
            <p className="text-muted-foreground">
              Learn about the landscape of AI CLI tools, with a focus on OpenAI's Codex CLI.
            </p>
          </div>
        </Link>

        <Link
          className="group relative rounded-lg border p-6 transition-colors hover:border-foreground/50"
          href="/tasks"
        >
          <div className="space-y-2">
            <h2 className="font-semibold text-2xl tracking-tight">Workshop Tasks</h2>
            <p className="text-muted-foreground">
              Get hands-on experience with Codex CLI through practical coding exercises.
            </p>
          </div>
        </Link>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-4 font-semibold text-2xl tracking-tight">🚀 Getting Started</h2>
        <div className="space-y-4">
          <p>This workshop consists of a presentation followed by hands-on tasks with AI CLI tools.</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded border bg-white p-4 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold text-foreground text-lg">🌐 Workshop Access</h3>
              <p className="mb-3 text-sm">Access the workshop immediately:</p>
              <a
                className="font-mono text-blue-600 text-sm underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                href="https://ai-cli-tools-workshop.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                ai-cli-tools-workshop.vercel.app
              </a>
            </div>

            <div className="rounded border bg-white p-4 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold text-foreground text-lg">📅 Event Details</h3>
              <p className="mb-1 text-sm">
                <strong>Date:</strong> October 28, 2025
              </p>
              <p className="mb-1 text-sm">
                <strong>Time:</strong> 14:00–15:30
              </p>
              <p className="text-sm">
                <strong>Duration:</strong> 25min presentation + 1hr workshop
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-4 font-semibold text-2xl tracking-tight">Workshop Overview</h2>
        <div className="space-y-4">
          <p>
            This workshop is designed to help you understand and implement AI CLI tools in your workflow. The
            presentation provides an overview of the landscape, while the tasks give you hands-on experience with Codex
            CLI.
          </p>
          <h3 className="font-semibold text-foreground text-xl">What You'll Learn:</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Overview of AI CLI tools (Codex CLI, Claude Code, Gemini CLI, and more)</li>
            <li>How Codex CLI works and its key features</li>
            <li>Planning and executing code changes with AI assistance</li>
            <li>Git workflow integration with AI CLI tools</li>
            <li>Best practices and troubleshooting</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border bg-blue-50 p-6 dark:bg-blue-950/30">
        <h2 className="mb-4 font-semibold text-2xl tracking-tight">About Codex CLI</h2>
        <div className="space-y-4">
          <p>
            <strong>Codex CLI</strong> is a coding agent that you can run locally from your terminal. Built by OpenAI,
            it can read, modify, and run code on your machine in the chosen directory.
          </p>
          <p>
            It's available through our existing OpenAI ChatGPT licensing and provides powerful capabilities for
            automating development tasks while keeping you in control.
          </p>
          <div className="mt-4 rounded border bg-white p-4 dark:bg-slate-900">
            <h3 className="mb-2 font-semibold text-foreground text-lg">🔗 Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  href="https://developers.openai.com/codex/cli"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Codex CLI Documentation
                </a>
              </li>
              <li>Setup instructions will be shared before the workshop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
