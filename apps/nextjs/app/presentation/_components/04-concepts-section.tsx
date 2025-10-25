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

      <div className="space-y-6">
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
                    className="w-full"
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
                    className="w-full"
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
            <CardTitle className="text-2xl">Tools & Actions</CardTitle>
            <CardDescription className="text-base">
              How AI agents transform plans into real-world actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-foreground/70">
                <strong>Tools</strong> are functions that extend AI capabilities beyond text generation. They enable
                agents to interact with external systems, execute code, modify files, search the web, and query
                databases—transforming AI from knowledge retrieval into action-capable agents.
              </p>

              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/30">
                <p className="mb-2 font-semibold text-sm">🔧 How Tools Work</p>
                <p className="text-foreground/70 text-sm">
                  AI agents follow a four-step cycle: <strong>Assessment</strong> (can tools help?),{" "}
                  <strong>Decision</strong> (construct tool request), <strong>Execution</strong> (run and get results),{" "}
                  <strong>Integration</strong> (incorporate results into response). This enables complex workflows like
                  planning → execution → verification.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Tool categories & ecosystem:</p>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Built-in Tools</p>
                    <p className="text-foreground/70 text-xs">
                      Core capabilities like Bash commands, file operations (read/write/edit), and code execution in
                      multiple languages.
                    </p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Server Tools</p>
                    <p className="text-foreground/70 text-xs">
                      Provided by the AI service (e.g., web search, web fetch). No client-side implementation needed.
                    </p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Client Tools (MCP)</p>
                    <p className="text-foreground/70 text-xs">
                      Custom integrations via Model Context Protocol for services like Slack, GitHub, databases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Model Context Protocol (MCP):</p>
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <p className="mb-2 text-foreground/70 text-sm">
                    <strong>MCP is like "USB-C for AI"</strong>—a standardized protocol for connecting AI models to
                    external tools and data sources. Introduced by Anthropic in Nov 2024, adopted by OpenAI (Mar 2025),
                    Microsoft, and Google. Enables consistent integrations without custom OAuth flows or API wrappers.
                  </p>
                  <div className="mt-3 rounded bg-slate-50 p-2 dark:bg-slate-950/50">
                    <p className="font-mono text-xs">
                      Example: <code className="text-purple-600 dark:text-purple-400">codex mcp add github</code> →
                      instant access to GitHub repos, issues, PRs
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">How CLI tools implement tools:</p>
                <div className="space-y-2">
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Claude Code</p>
                    <p className="text-foreground/70 text-xs">
                      Built-in tools (Bash, file ops, code execution) + MCP client/server capabilities. Inherits your
                      bash environment for maximum tool access.
                    </p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Codex CLI</p>
                    <p className="text-foreground/70 text-xs">
                      MCP-first approach configured via{" "}
                      <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-800">~/.codex/config.toml</code>.
                      Tracks complex work with todo lists, includes web search tool.
                    </p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Gemini CLI</p>
                    <p className="text-foreground/70 text-xs">
                      Built-in tools (Google Search, file ops, shell, web fetch) + MCP + extensions. Uses ReAct loop
                      (Reason and Act) for complex tasks.
                    </p>
                  </div>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-1 font-semibold text-sm">Amp</p>
                    <p className="text-foreground/70 text-xs">
                      Oracle subagent tool for complex reasoning tasks (uses GPT-5), plus autonomous subagent spawning
                      for parallel work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950/30">
                <p className="mb-2 font-semibold text-green-700 text-sm dark:text-green-400">Best Practices:</p>
                <ul className="list-inside list-disc space-y-1 text-green-900/70 text-xs dark:text-green-100/70">
                  <li>Understand your tool ecosystem—know what capabilities are available</li>
                  <li>Be cautious with MCP servers—they add context overhead</li>
                  <li>Leverage parallel tool execution for independent operations</li>
                  <li>Monitor tool calls during planning to understand agent reasoning</li>
                  <li>Use specialized tools (Oracle, subagents) for appropriate tasks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
