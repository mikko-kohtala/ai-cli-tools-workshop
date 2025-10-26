import Link from "next/link";

export default function Task3Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Advanced Codex Features</h1>
        <p className="text-lg">
          Unlock Codex CLI's power tools: create custom slash commands, automate workflows with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">codex exec</code>, and extend capabilities with MCP
          servers.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Master three advanced Codex CLI features: custom prompts for reusable workflows, non-interactive automation
            mode for scripting, and Model Context Protocol (MCP) servers for browser automation and extended
            capabilities.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
              <h3 className="mb-4 font-semibold text-xl">Part 1: Custom Slash Commands</h3>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <p>
                    Create a workspace directory:
                    <code className="ml-2 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                      mkdir -p ~/codex-workshop/task-03-advanced && cd ~/codex-workshop/task-03-advanced
                    </code>
                  </p>
                </li>
                <li>
                  <p>
                    Create a custom prompts directory:
                    <code className="ml-2 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                      mkdir -p ~/.codex/prompts
                    </code>
                  </p>
                </li>
                <li>
                  <p>
                    Create your first custom prompt{" "}
                    <code className="rounded bg-white px-1 py-0.5 font-mono text-xs dark:bg-slate-950">
                      ~/.codex/prompts/review.md
                    </code>
                    :
                  </p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">
                      {`---
description: Review code for quality and best practices
argument-hint: [file-path]
---

Please review the code in $1 and provide feedback on:
- Code quality and readability
- Potential bugs or edge cases
- Performance considerations
- Best practices and patterns
- Security concerns

Format your response with clear sections for each category.`}
                    </code>
                  </pre>
                </li>
                <li>
                  <p>
                    Create a second prompt{" "}
                    <code className="rounded bg-white px-1 py-0.5 font-mono text-xs dark:bg-slate-950">
                      ~/.codex/prompts/explain.md
                    </code>
                    :
                  </p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">
                      {`---
description: Explain code in simple terms
argument-hint: [file-path]
---

Read the file $1 and explain:
1. What this code does (high-level purpose)
2. How it works (key logic flow)
3. Important functions or classes
4. Any dependencies or requirements

Use simple, beginner-friendly language.`}
                    </code>
                  </pre>
                </li>
                <li>
                  <p>
                    Start Codex CLI with <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">codex</code>{" "}
                    and type <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">/</code> to see your
                    custom commands in the slash menu.
                  </p>
                </li>
                <li>
                  <p>
                    Create a sample JavaScript file and test your{" "}
                    <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">/review</code> and{" "}
                    <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">/explain</code> commands.
                  </p>
                </li>
              </ol>
            </div>

            <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
              <h3 className="mb-4 font-semibold text-xl">Part 2: Automation with codex exec</h3>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <p>Create sample documentation files to process:</p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">
                      {`echo "# Day 1 Notes
- Learned about AGENTS.md
- Built custom CLI tool
- Explored Codex features" > day-1.md

echo "# Day 2 Notes
- Created custom prompts
- Used codex exec
- Added MCP servers" > day-2.md`}
                    </code>
                  </pre>
                </li>
                <li>
                  <p>
                    Use <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">codex exec</code> to
                    generate a summary (no interactive session required):
                  </p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">
                      codex exec "Read all markdown files and create a summary.md with key takeaways"
                    </code>
                  </pre>
                </li>
                <li>
                  <p>Try using higher reasoning for more thorough analysis:</p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">
                      codex exec --model high "Analyze the markdown files and create action-items.md with next steps"
                    </code>
                  </pre>
                </li>
                <li>
                  <p>Check the generated files and compare the quality at different reasoning levels.</p>
                </li>
              </ol>
            </div>

            <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
              <h3 className="mb-4 font-semibold text-xl">Part 3: MCP Server Integration</h3>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <p>Add the Playwright MCP server to Codex CLI for browser automation capabilities:</p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">codex mcp add playwright npx @playwright/mcp@latest</code>
                  </pre>
                </li>
                <li>
                  <p>Verify the MCP server was added by checking your config:</p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">cat ~/.codex/config.toml</code>
                  </pre>
                </li>
                <li>
                  <p>Start a new Codex session to load the Playwright MCP server:</p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">codex</code>
                  </pre>
                </li>
                <li>
                  <p>Test the Playwright integration by asking Codex to:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-1 text-sm">
                    <li>"Navigate to example.com and describe what you see"</li>
                    <li>"Check the accessibility tree of the page"</li>
                    <li>"Write a Playwright script to test a simple form interaction"</li>
                  </ul>
                </li>
                <li>
                  <p className="text-sm italic text-muted-foreground">
                    Note: The Playwright MCP provides browser automation capabilities but may have limitations in
                    interactive browser control. It excels at generating test scripts and analyzing page structure.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Custom Prompts:</strong> Reusable commands stored in{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">~/.codex/prompts/</code>
              </li>
              <li>
                <strong>Placeholders:</strong> Use <code className="rounded bg-muted px-1 py-0.5 text-xs">$1</code>,{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">$2</code>, etc. for arguments
              </li>
              <li>
                <strong>codex exec:</strong> Non-interactive automation mode for scripting and CI/CD
              </li>
              <li>
                <strong>MCP Servers:</strong> Extend Codex with external tools and APIs via Model Context Protocol
              </li>
              <li>
                <strong>Reasoning Levels:</strong> Control analysis depth with{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">--model</code> flag
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Have 2+ custom slash commands in your Codex setup</li>
                <li>
                  Know how to use <code className="rounded bg-muted px-1 py-0.5 text-xs">codex exec</code> for automation
                </li>
                <li>Have Playwright MCP server integrated and tested</li>
                <li>Understand when to use interactive vs. non-interactive modes</li>
                <li>See how MCP extends Codex capabilities beyond code editing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <h2 className="mb-3 font-semibold text-xl">💡 Understanding MCP Servers</h2>
          <p className="mb-3 text-sm">
            <strong>Model Context Protocol (MCP)</strong> is a standard for connecting AI assistants to external tools,
            data sources, and services. MCP servers act as bridges, giving Codex access to capabilities like:
          </p>
          <ul className="ml-6 list-disc space-y-1 text-sm">
            <li>Browser automation (Playwright)</li>
            <li>Database access</li>
            <li>API integrations</li>
            <li>File system operations beyond basic read/write</li>
          </ul>
          <p className="mt-3 text-sm">
            Think of MCP servers as "superpowers" you can add to Codex—each server unlocks new capabilities specific to
            your workflow.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Bonus Challenges</h2>
          <div className="space-y-3">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-medium text-sm">🎯 Create a ticket prompt</p>
              <p className="text-muted-foreground text-sm">
                Make a <code className="rounded bg-muted px-1 py-0.5 text-xs">/ticket</code> command that generates a
                GitHub issue template with placeholders for <code>TITLE</code> and <code>DESCRIPTION</code>
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-medium text-sm">🎯 Automate documentation generation</p>
              <p className="text-muted-foreground text-sm">
                Use <code className="rounded bg-muted px-1 py-0.5 text-xs">codex exec</code> to generate API
                documentation from your source files
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-medium text-sm">🎯 Explore other MCP servers</p>
              <p className="text-muted-foreground text-sm">
                Check{" "}
                <a
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  href="https://lobehub.com/mcp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LobeHub MCP directory
                </a>{" "}
                for more servers like database connectors, filesystem tools, or API integrations
              </p>
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
