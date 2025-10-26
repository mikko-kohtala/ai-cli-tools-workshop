import Link from "next/link";

export default function Task2Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 2: Build Your Own Project with Codex CLI</h1>
        <p className="text-lg">
          Pick any project idea, configure AGENTS.md with constraints, and guide Codex to build it while respecting your
          rules.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Create a fresh workspace with an <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code>{" "}
            file that defines constraints and preferences, then choose ANY project you want to build and guide Codex CLI
            to implement it while respecting your guardrails.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create a dedicated workspace directory (e.g.,{" "}
                  <code className="mx-1 rounded bg-muted px-1 py-0.5 text-sm">
                    ~/codex-workshop/task-02-build-project
                  </code>
                  ) and change into it.
                </p>
              </li>
              <li>
                <p>
                  Initialize a git repository with{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-sm">git init</code>. Codex CLI works best in
                  git-tracked directories.
                </p>
              </li>
              <li>
                <p>
                  Create an <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code> file with specific
                  constraints and preferences. Examples: &quot;Use only Python standard library&quot;, &quot;Add type
                  hints to all functions&quot;, &quot;Always ask before installing dependencies&quot;, &quot;Keep files
                  under 100 lines&quot;.
                </p>
              </li>
              <li>
                <p>
                  Choose a project to build (see project ideas below). Pick something that interests you—this is YOUR
                  project!
                </p>
              </li>
              <li>
                <p>
                  Start Codex CLI with <code className="rounded bg-muted px-1 py-0.5 text-sm">codex</code> and ask it to
                  read your AGENTS.md file and confirm it understood the constraints.
                </p>
              </li>
              <li>
                <p>
                  <strong>Plan before coding:</strong> Ask Codex to create a{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-sm">TODO.md</code> file that breaks down your
                  project into specific tasks and files needed. Review the plan to ensure it makes sense.
                </p>
              </li>
              <li>
                <p>
                  <strong>Execute the plan:</strong> Work through the TODO.md step by step. Ask Codex to implement each
                  task, reviewing changes before approving. Update the TODO.md to mark tasks as completed.
                </p>
              </li>
              <li>
                <p>
                  Test your project works! While still in your Codex session, ask Codex to run your code and show you
                  the output. Or exit the session and test manually in your terminal.
                </p>
              </li>
              <li>
                <p>
                  Verify Codex respected your AGENTS.md constraints. Did it follow your coding style? Ask before
                  installing packages? Keep files small?
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Project Ideas</h2>
          <p className="text-muted-foreground text-sm">
            Choose any project that interests you! Here are some ideas to spark inspiration:
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🛠️ Echo CLI Tool</p>
              <p className="text-muted-foreground text-xs">Command-line utility with colored output and formatting</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🎨 ASCII Art Generator</p>
              <p className="text-muted-foreground text-xs">Convert text to fancy ASCII banners and art</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">📊 CSV Data Analyzer</p>
              <p className="text-muted-foreground text-xs">Read CSV files and generate statistics</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🎲 Random Quote Generator</p>
              <p className="text-muted-foreground text-xs">Display inspirational quotes from a curated list</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🧮 Unit Converter</p>
              <p className="text-muted-foreground text-xs">Temperature, distance, and weight conversions</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🎮 Text Adventure Game</p>
              <p className="text-muted-foreground text-xs">Simple choose-your-own-adventure story</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">📝 Markdown to Slides</p>
              <p className="text-muted-foreground text-xs">Generate presentation slides from markdown</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🚀 Einstein&apos;s Relativity Explainer</p>
              <p className="text-muted-foreground text-xs">Educational content about physics concepts</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🎵 Playlist Randomizer</p>
              <p className="text-muted-foreground text-xs">Shuffle and organize music playlists</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🌤️ Weather Formatter</p>
              <p className="text-muted-foreground text-xs">Parse and display weather data nicely</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">🔐 Password Strength Checker</p>
              <p className="text-muted-foreground text-xs">Evaluate password complexity and security</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="mb-1 font-semibold text-sm">📅 Meeting Scheduler</p>
              <p className="text-muted-foreground text-xs">Find common free time slots from calendars</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm italic">Or build something completely different—surprise us!</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Plan before coding</strong> - TODO.md helps organize work and prevents scope creep
              </li>
              <li>
                <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code> acts as guardrails, not just
                documentation
              </li>
              <li>Creative freedom within constraints teaches real AI collaboration</li>
              <li>Codex CLI automatically reads AGENTS.md at startup—confirm it followed your guardrails</li>
              <li>Verifying constraint compliance is part of the workflow</li>
              <li>Building real projects builds real confidence</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have a working project that YOU chose to build</li>
                <li>
                  A <code className="rounded bg-muted px-1 py-0.5 text-sm">TODO.md</code> showing your planning process
                </li>
                <li>
                  An <code className="rounded bg-muted px-1 py-0.5 text-sm">AGENTS.md</code> that Codex actually
                  followed
                </li>
                <li>Experience with plan-first workflow</li>
                <li>Confidence in creative AI collaboration</li>
                <li>Something unique to show and discuss in the workshop</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="mb-3 font-semibold text-xl">💡 What is AGENTS.md?</h2>
          <p className="mb-3 text-sm">
            <code className="rounded bg-white px-1 py-0.5 font-mono text-xs dark:bg-slate-950">AGENTS.md</code> is like
            a README for AI coding assistants. While README.md is written for humans, AGENTS.md provides detailed
            context that AI agents need: build steps, testing procedures, coding conventions, and project-specific
            constraints.
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
