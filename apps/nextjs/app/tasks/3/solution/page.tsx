import Link from "next/link";

export default function Task3SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Solution & Reference</h1>
        <p className="text-lg text-muted-foreground">Detailed walkthrough and examples for advanced Codex features</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
          <h2 className="mb-4 font-semibold text-2xl">Part 1: Custom Slash Commands</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Step-by-step Setup</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Create prompts directory
mkdir -p ~/.codex/prompts

# Create review.md
cat > ~/.codex/prompts/review.md << 'EOF'
---
description: Review code for quality and best practices
argument-hint: [file-path]
---

Please review the code in $1 and provide feedback on:
- Code quality and readability
- Potential bugs or edge cases
- Performance considerations
- Best practices and patterns
- Security concerns

Format your response with clear sections for each category.
EOF

# Create explain.md
cat > ~/.codex/prompts/explain.md << 'EOF'
---
description: Explain code in simple terms
argument-hint: [file-path]
---

Read the file $1 and explain:
1. What this code does (high-level purpose)
2. How it works (key logic flow)
3. Important functions or classes
4. Any dependencies or requirements

Use simple, beginner-friendly language.
EOF`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Example: Creating a Ticket Prompt</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`cat > ~/.codex/prompts/ticket.md << 'EOF'
---
description: Generate GitHub issue template
argument-hint: TITLE="Issue title" DESCRIPTION="Details"
---

Create a GitHub issue with:

## Title
$TITLE

## Description
$DESCRIPTION

## Additional Context
- [ ] Add steps to reproduce
- [ ] Include expected vs actual behavior
- [ ] List environment details
- [ ] Suggest potential solutions

## Labels
Suggest appropriate labels based on the issue type.
EOF`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Usage Examples</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Start Codex
codex

# In the Codex session, type / to see your commands
# Then use them:
/review src/utils.js
/explain app.js
/ticket TITLE="Fix login bug" DESCRIPTION="Users can't log in with email"`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="mb-4 font-semibold text-2xl">Part 2: Automation with codex exec</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Complete Example Workflow</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Create workspace
mkdir -p ~/codex-workshop/task-03-advanced
cd ~/codex-workshop/task-03-advanced

# Create sample documentation
cat > day-1.md << 'EOF'
# Workshop Day 1

## Key Learnings
- AGENTS.md provides context to AI assistants
- Custom prompts enable reusable workflows
- Codex respects project conventions

## Projects Built
- Echo CLI tool with colored output
- CSV analyzer for data insights
EOF

cat > day-2.md << 'EOF'
# Workshop Day 2

## Advanced Features
- Created custom slash commands
- Explored codex exec for automation
- Integrated Playwright MCP server

## Next Steps
- Apply these tools to real projects
- Share learnings with the team
EOF

# Generate summary with default reasoning
codex exec "Read all markdown files and create summary.md with a consolidated list of key learnings and projects"

# Generate action items with high reasoning
codex exec --model high "Analyze the markdown files and create action-items.md with specific next steps, categorized by priority"

# Check results
cat summary.md
cat action-items.md`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Use Cases for codex exec</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded bg-white p-3 dark:bg-slate-900">
                  <p className="mb-1 font-medium text-sm">📊 Report Generation</p>
                  <p className="text-muted-foreground text-xs">
                    Summarize logs, create changelogs, generate weekly reports
                  </p>
                </div>
                <div className="rounded bg-white p-3 dark:bg-slate-900">
                  <p className="mb-1 font-medium text-sm">🔄 CI/CD Integration</p>
                  <p className="text-muted-foreground text-xs">
                    Auto-generate docs, validate code patterns, check conventions
                  </p>
                </div>
                <div className="rounded bg-white p-3 dark:bg-slate-900">
                  <p className="mb-1 font-medium text-sm">📝 Batch Processing</p>
                  <p className="text-muted-foreground text-xs">
                    Convert formats, refactor multiple files, update dependencies
                  </p>
                </div>
                <div className="rounded bg-white p-3 dark:bg-slate-900">
                  <p className="mb-1 font-medium text-sm">🧪 Code Analysis</p>
                  <p className="text-muted-foreground text-xs">Security scans, complexity metrics, quality reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <h2 className="mb-4 font-semibold text-2xl">Part 3: MCP Server Integration</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Installing Playwright MCP</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Add Playwright MCP server
codex mcp add playwright npx @playwright/mcp@latest

# Verify installation
cat ~/.codex/config.toml

# You should see something like:
# [mcp.playwright]
# command = "npx"
# args = ["@playwright/mcp@latest"]`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Testing Playwright MCP</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Start Codex (MCP servers load on startup)
codex

# Example prompts to try:
# 1. "Navigate to https://example.com and describe the page structure"
# 2. "Write a Playwright test that checks if the page has a heading"
# 3. "Check the accessibility tree and identify any issues"
# 4. "Create a test that fills out a form and submits it"`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">What Playwright MCP Enables</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm">
                <li>
                  <strong>Page Analysis:</strong> Extract accessibility trees, identify elements, analyze structure
                </li>
                <li>
                  <strong>Test Generation:</strong> Create Playwright test scripts based on requirements
                </li>
                <li>
                  <strong>Form Testing:</strong> Generate tests for user interactions and validations
                </li>
                <li>
                  <strong>Script Creation:</strong> Build automation scripts for browser tasks
                </li>
              </ul>
              <p className="mt-3 text-muted-foreground text-sm italic">
                Note: The MCP focuses on script generation and page analysis rather than real-time browser control.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Other Useful MCP Servers</h3>
              <div className="space-y-2">
                <div className="rounded bg-white p-3 dark:bg-slate-900">
                  <p className="mb-1 font-medium text-sm">🗄️ Database MCP Servers</p>
                  <p className="mb-2 text-muted-foreground text-xs">
                    Connect to PostgreSQL, MySQL, SQLite for queries and schema analysis
                  </p>
                  <code className="text-xs">codex mcp add postgres npx @modelcontextprotocol/server-postgres</code>
                </div>
                <div className="rounded bg-white p-3 dark:bg-slate-900">
                  <p className="mb-1 font-medium text-sm">📁 Filesystem MCP</p>
                  <p className="mb-2 text-muted-foreground text-xs">
                    Advanced file operations and directory management
                  </p>
                  <code className="text-xs">codex mcp add filesystem npx @modelcontextprotocol/server-filesystem</code>
                </div>
                <div className="rounded bg-white p-3 dark:bg-slate-900">
                  <p className="mb-1 font-medium text-sm">🌐 Web Search MCP</p>
                  <p className="mb-2 text-muted-foreground text-xs">Let Codex search the web for current information</p>
                  <code className="text-xs">codex mcp add brave npx @modelcontextprotocol/server-brave-search</code>
                </div>
              </div>
              <p className="mt-3 text-sm">
                Explore more at{" "}
                <a
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  href="https://lobehub.com/mcp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LobeHub MCP Directory
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
          <h2 className="mb-4 font-semibold text-2xl">Best Practices</h2>
          <div className="space-y-3">
            <div>
              <h3 className="mb-2 font-medium text-sm">Custom Prompts</h3>
              <ul className="list-disc space-y-1 pl-6 text-muted-foreground text-sm">
                <li>Keep prompts focused on a single task or workflow</li>
                <li>Use descriptive frontmatter for better discoverability</li>
                <li>Test with various argument combinations</li>
                <li>Version control your prompts directory for team sharing</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-sm">codex exec</h3>
              <ul className="list-disc space-y-1 pl-6 text-muted-foreground text-sm">
                <li>Start with default reasoning, scale up only if needed</li>
                <li>Use clear, specific prompts for best results</li>
                <li>Combine with AGENTS.md for consistent outputs</li>
                <li>Redirect output for logging: codex exec &quot;task&quot; &gt; log.txt</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-sm">MCP Servers</h3>
              <ul className="list-disc space-y-1 pl-6 text-muted-foreground text-sm">
                <li>Only install MCP servers you actually need</li>
                <li>Check MCP compatibility and maintenance status</li>
                <li>Some MCPs require API keys—configure via environment variables</li>
                <li>Restart Codex after adding new MCP servers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <h2 className="mb-3 font-semibold text-xl">✅ Completion Checklist</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Created at least 2 custom slash commands in ~/.codex/prompts/</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Tested custom commands with sample files</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Used codex exec to generate summary and action items</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Compared different reasoning levels (default vs. high)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Installed Playwright MCP server</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Tested Playwright capabilities (page analysis or test generation)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Understand when to use each feature in your workflow</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/3/work"
          >
            Back to Work Area
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
