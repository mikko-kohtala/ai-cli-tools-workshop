import { Settings } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ConceptsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="concepts">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
          <Settings className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="font-bold text-4xl">Key Concepts</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Understanding context management, planning strategies, and tool use is critical for effective AI CLI
              usage. The context window determines what the AI can "see," planning determines how it approaches complex
              tasks, and tools enable it to take action—all three directly impact development quality and safety.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-12">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Context Window & Management</CardTitle>
            <CardDescription className="text-base">
              The main constraint that impacts AI agent performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-foreground/70">
                The <strong>context window</strong> includes everything the LLM can see: system prompts, messages, file
                contents, and tool definitions. Modern models support large contexts (100k-2M+ tokens), but larger
                contexts can degrade quality due to the <strong>"lost in the middle" effect</strong>—information buried
                in long conversations gets deprioritized.
              </p>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
                <p className="mb-2 font-semibold text-sm">⚠️ Key Insight</p>
                <p className="text-foreground/70 text-sm">
                  Bigger context windows don't mean better results. Models perform better with less, more focused
                  information. Keep conversations lean and task-focused.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Monitor and manage context:</p>
                <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                  <Image
                    alt="Claude Code context usage visualization showing 142k/200k tokens (71%) with breakdown"
                    className="w-full max-w-4xl"
                    height={456}
                    src="/images/claude-code-context.png"
                    width={1138}
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">
                      <code className="rounded bg-white px-1.5 py-0.5 dark:bg-slate-800">/context</code> - Check usage
                    </p>
                    <p className="text-foreground/70 text-xs">View token breakdown and remaining capacity</p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">
                      <code className="rounded bg-white px-1.5 py-0.5 dark:bg-slate-800">/clear</code> - Reset
                      conversation
                    </p>
                    <p className="text-foreground/70 text-xs">Start fresh when switching tasks or running low</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950/30">
                <p className="mb-2 font-semibold text-green-700 text-sm dark:text-green-400">Best Practices:</p>
                <ul className="list-inside list-disc space-y-1 text-green-900/70 text-xs dark:text-green-100/70">
                  <li>Clear conversations when switching between unrelated tasks</li>
                  <li>Be cautious with MCP servers—they can bloat context rapidly</li>
                  <li>Avoid very large system prompts or configuration files</li>
                  <li>Keep sessions focused for best performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">Planning & Task Decomposition</CardTitle>
            <CardDescription className="text-base">
              Separate analysis from execution for safer, more effective development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-foreground/70">
                <strong>Planning mode</strong> separates research and analysis from execution. Instead of immediately
                modifying code, the AI explores your codebase, reasons about the task, and creates a comprehensive
                implementation plan for your review. This follows the <strong>ReAct pattern</strong> (Reasoning and
                Acting)—alternating between thinking and doing rather than jumping straight to execution.
              </p>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
                <p className="mb-2 font-semibold text-sm">💡 Why Planning Matters</p>
                <p className="text-foreground/70 text-sm">
                  Planning prevents "AI drift"—unintended edits from poorly understood requirements. It enables
                  iteration on approach before any code changes, and allows evaluation of multiple architectural
                  strategies.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">How different tools implement planning:</p>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Claude Code</p>
                    <p className="text-foreground/70 text-xs">
                      Plan Mode (<kbd className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-800">Shift+Tab</kbd>
                      ) - read-only research phase with interactive questions. Opus Plan Mode uses Opus 4.1 for
                      planning, Sonnet 4 for execution.
                    </p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Codex CLI</p>
                    <p className="text-foreground/70 text-xs">
                      No built-in plan mode—executes immediately. Third-party tools like PlanToCode can add planning
                      layer.
                    </p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Gemini CLI</p>
                    <p className="text-foreground/70 text-xs">
                      Agentic planning capabilities with large context windows. Better for analysis and exploration
                      tasks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-sm">When to use planning mode:</p>
                <ul className="ml-6 list-disc space-y-1 text-foreground/70 text-sm">
                  <li>Multi-step implementations requiring edits across many files</li>
                  <li>Complex refactoring or migration tasks</li>
                  <li>Architectural exploration before committing to an approach</li>
                  <li>Interactive development where you want to iterate on strategy</li>
                  <li>Code review and safety-critical changes</li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950/30">
                <p className="mb-2 font-semibold text-green-700 text-sm dark:text-green-400">Best Practices:</p>
                <ul className="list-inside list-disc space-y-1 text-green-900/70 text-xs dark:text-green-100/70">
                  <li>Request plans for non-trivial tasks before execution</li>
                  <li>Iterate on plans through follow-up questions and refinements</li>
                  <li>Review plans thoroughly—check file scope, approach, edge cases</li>
                  <li>Use higher reasoning models (e.g., Opus) for the planning phase</li>
                  <li>Start with planning for unfamiliar codebases or complex domains</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Interactive planning workflow:</p>
                <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                  <Image
                    alt="Claude Code interactive questions during planning - showing AI asking clarifying questions about implementation approach before executing changes"
                    className="w-full max-w-4xl"
                    height={600}
                    src="/images/claude-code-interactive-questions.png"
                    width={1200}
                  />
                </div>
                <p className="text-foreground/60 text-xs">
                  Claude Code can ask interactive questions during planning to clarify requirements and refine the
                  approach before execution.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl">Tools: How the AI Actually Does Stuff</CardTitle>
            <CardDescription className="text-base">
              The AI "thinks," then uses tools to act in your dev environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/30">
                <p className="mb-2 font-semibold text-sm">💡 Why Tools Matter</p>
                <p className="text-foreground/70 text-sm">
                  Tools transform AI coding assistants from "text generators" into <strong>autonomous agents</strong>.
                  With tools, they can execute code and verify results, navigate codebases intelligently, fetch
                  up-to-date documentation, and automate entire workflows—all without leaving your terminal.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 font-semibold text-sm">File System Tools</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded bg-slate-50 p-3 dark:bg-slate-950/30">
                      <p className="mb-1 font-semibold text-xs">Read, Write, Edit</p>
                      <p className="text-foreground/70 text-xs">
                        View files, create new ones, or apply precise edits with diffs for review.
                      </p>
                      <p className="mt-1 font-mono text-[10px]">
                        "Fix the auth bug in <code>src/auth.ts</code> and show diff"
                      </p>
                    </div>
                    <div className="rounded bg-slate-50 p-3 dark:bg-slate-950/30">
                      <p className="mb-1 font-semibold text-xs">Glob & Grep</p>
                      <p className="text-foreground/70 text-xs">
                        Pattern search and content search across the codebase.
                      </p>
                      <p className="mt-1 font-mono text-[10px]">
                        "Find all React components using <code>useState</code>"
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-sm">Shell/Terminal Tools</p>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-950/30">
                    <p className="mb-1 font-semibold text-xs">Bash Execution</p>
                    <p className="text-foreground/70 text-xs">
                      Run commands to build, test, install packages, or inspect system state.
                    </p>
                    <p className="mt-1 font-mono text-[10px]">
                      "Run <code>npm test</code>, fix any failures, then re-run"
                    </p>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-sm">Web Access Tools</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded bg-slate-50 p-3 dark:bg-slate-950/30">
                      <p className="mb-1 font-semibold text-xs">WebFetch</p>
                      <p className="text-foreground/70 text-xs">Retrieve documentation and web pages for context.</p>
                      <p className="mt-1 font-mono text-[10px]">
                        "Fetch Next.js 15 migration guide from official docs"
                      </p>
                    </div>
                    <div className="rounded bg-slate-50 p-3 dark:bg-slate-950/30">
                      <p className="mb-1 font-semibold text-xs">WebSearch</p>
                      <p className="text-foreground/70 text-xs">Search the internet for latest information.</p>
                      <p className="mt-1 font-mono text-[10px]">
                        "Search for React 19 breaking changes"
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-sm">Advanced Tools (Claude Code)</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded bg-slate-50 p-3 dark:bg-slate-950/30">
                      <p className="mb-1 font-semibold text-xs">Code Execution</p>
                      <p className="text-foreground/70 text-xs">
                        Run Python in sandbox: analyze data, create visualizations, complex calculations.
                      </p>
                      <p className="mt-1 font-mono text-[10px]">
                        "Analyze this CSV and create a bar chart"
                      </p>
                    </div>
                    <div className="rounded bg-slate-50 p-3 dark:bg-slate-950/30">
                      <p className="mb-1 font-semibold text-xs">Memory Tool</p>
                      <p className="text-foreground/70 text-xs">
                        Persistent storage for project context across sessions.
                      </p>
                      <p className="mt-1 font-mono text-[10px]">
                        "Remember: we use Zod for validation"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Extensible Tools via MCP</p>
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-foreground/70 text-sm">
                    <strong>MCP (Model Context Protocol)</strong> is a universal adapter that connects external services
                    to your AI—GitHub, databases, browsers, and more—with no custom glue code.
                  </p>

                  <div className="mt-3 space-y-2">
                    <p className="font-semibold text-xs">Popular MCP Servers:</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="rounded bg-slate-50 p-2 dark:bg-slate-950/50">
                        <p className="mb-0.5 font-semibold text-xs">🎭 Playwright</p>
                        <p className="text-foreground/60 text-[10px]">
                          Browser automation & testing—interact with web pages, scraping, workflows
                        </p>
                      </div>
                      <div className="rounded bg-slate-50 p-2 dark:bg-slate-950/50">
                        <p className="mb-0.5 font-semibold text-xs">🗄️ PostgreSQL/SQLite</p>
                        <p className="text-foreground/60 text-[10px]">
                          Query databases, inspect schemas, run business intelligence
                        </p>
                      </div>
                      <div className="rounded bg-slate-50 p-2 dark:bg-slate-950/50">
                        <p className="mb-0.5 font-semibold text-xs">🐙 GitHub</p>
                        <p className="text-foreground/60 text-[10px]">
                          PR reviews, issue management, repository operations
                        </p>
                        <p className="mt-1 text-amber-700 text-[10px] dark:text-amber-400">
                          Note: Claude Code can use <code>gh</code> CLI directly—MCP optional
                        </p>
                      </div>
                      <div className="rounded bg-slate-50 p-2 dark:bg-slate-950/50">
                        <p className="mb-0.5 font-semibold text-xs">📁 Filesystem</p>
                        <p className="text-foreground/60 text-[10px]">
                          Advanced file operations with granular access controls
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded bg-blue-50 p-2 dark:bg-blue-950/30">
                    <p className="mb-1 font-semibold text-xs">Add to Codex CLI:</p>
                    <p className="font-mono text-[10px]">
                      <code>codex mcp add playwright npx @playwright/mcp@latest</code>
                    </p>
                  </div>

                  <p className="mt-2 text-foreground/60 text-xs italic">
                    ⚠️ Advanced (optional) for this workshop—start without MCP, add only if you need specific
                    integrations. MCP servers can bloat context rapidly.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950/30">
                <p className="mb-2 font-semibold text-green-700 text-sm dark:text-green-400">Safety tips</p>
                <ul className="list-inside list-disc space-y-1 text-green-900/70 text-xs dark:text-green-100/70">
                  <li>Watch context size; keep tasks focused.</li>
                  <li>Limit active MCP servers to what you actually need.</li>
                  <li>Prefer small, independent tool calls you can verify.</li>
                  <li>
                    Review diffs before applying and favor <code>--dry-run</code> flags where possible.
                  </li>
                  <li>When searching the web, prefer official docs or primary sources.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
