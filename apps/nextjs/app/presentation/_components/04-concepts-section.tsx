import { Settings } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              To use AI CLI tools effectively, it's essential to understand four foundational concepts that govern how
              these agents operate. These concepts are common across most tools and ensure that your development
              sessions are secure, predictable, and aligned with your project's requirements.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Context Window & Project Context</CardTitle>
            <CardDescription className="text-base">
              Understanding the main constraint that impacts AI agent performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              The <strong>context window</strong> is the entire set of input and output tokens that the LLM can see at
              any moment. It includes the system prompt, your messages, the agent's responses, and any files or tools
              loaded. Every model has a hard limit (many modern models support hundreds of thousands of tokens, with
              some offering million+ token contexts). Critically, <strong>the larger the context, the more quality can
              degrade</strong> due to the "lost in the middle" effect—information buried in long conversations gets
              deprioritized.
            </p>
            <Tabs defaultValue="whats-in">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="whats-in">What's in Context</TabsTrigger>
                <TabsTrigger value="limits">Limits & Performance</TabsTrigger>
                <TabsTrigger value="managing">Managing Context</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="whats-in">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900/30">
                  <p className="mb-3 font-semibold text-sm">Token breakdown in a typical session:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between rounded bg-white p-2 dark:bg-slate-950">
                      <span>System prompt & instructions</span>
                      <code className="text-green-600 dark:text-green-400">~15k tokens (8%)</code>
                    </div>
                    <div className="flex justify-between rounded bg-white p-2 dark:bg-slate-950">
                      <span>Conversation messages</span>
                      <code className="text-blue-600 dark:text-blue-400">~77k tokens (40%)</code>
                    </div>
                    <div className="flex justify-between rounded bg-white p-2 dark:bg-slate-950">
                      <span>Files & code snippets</span>
                      <code className="text-purple-600 dark:text-purple-400">~25k tokens (13%)</code>
                    </div>
                    <div className="flex justify-between rounded bg-white p-2 dark:bg-slate-950">
                      <span>MCP tools & integrations</span>
                      <code className="text-amber-600 dark:text-amber-400">~8k tokens (4%)</code>
                    </div>
                    <div className="mt-2 flex justify-between border-t pt-2 font-semibold">
                      <span>Total used</span>
                      <code>125k / 200k tokens (62%)</code>
                    </div>
                  </div>
                  <p className="mt-3 text-foreground/60 text-xs">
                    Everything counts toward the limit: working directory, git status, environment info, file contents,
                    chat history, and tool definitions.
                  </p>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="limits">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900/30">
                  <div className="mb-4 space-y-2 text-sm">
                    <p className="font-semibold">The "Lost in the Middle" Problem:</p>
                    <p className="text-foreground/70">
                      LLMs suffer from retrieval issues in long contexts. Information at the{" "}
                      <strong>start and end</strong> of conversations has the most impact, while details in the middle
                      get deprioritized. This mimics human primacy and recency bias.
                    </p>
                  </div>
                  <div className="mb-4 rounded border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/30">
                    <p className="mb-2 flex items-center gap-2 font-semibold text-sm">
                      <span className="text-amber-600 dark:text-amber-400">⚠</span>
                      Performance Impact
                    </p>
                    <p className="text-foreground/70 text-xs">
                      Bigger context windows don't mean better results. A model with 2M tokens might perform worse than
                      one with 200k if the context is bloated. Models do better with less, more focused information.
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="mb-2 font-semibold">Model limits (examples):</p>
                    <ul className="list-inside list-disc space-y-1 text-foreground/70 text-xs">
                      <li>Claude Sonnet 3.5: 200k tokens</li>
                      <li>GPT-4 Turbo: 128k tokens</li>
                      <li>Gemini 1.5 Pro: 2M tokens</li>
                      <li>Smaller/older models: 4k-32k tokens</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="managing">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900/30">
                  <div className="mb-4">
                    <p className="mb-3 font-semibold text-sm">Check context usage with /context command:</p>
                    <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                      <Image
                        alt="Claude Code context usage visualization showing 142k/200k tokens (71%) with breakdown: System prompt 2.4k, System tools 13k, MCP tools 13.7k, Memory files 661, Messages 67.8k, Free space 58k, Autocompact buffer 45k"
                        className="w-full"
                        height={456}
                        src="/images/claude-code-context.png"
                        width={1138}
                      />
                    </div>
                    <p className="mt-2 text-foreground/60 text-xs">
                      This visualization shows a real session at 71% capacity with detailed token breakdown by category.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="mb-1 font-semibold">Clear conversation (recommended):</p>
                      <p className="text-foreground/70 text-xs">
                        Use <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-800">/clear</code> to wipe
                        history and start fresh. Do this when switching tasks or when you have &lt;50k tokens remaining.
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">Compact conversation:</p>
                      <p className="text-foreground/70 text-xs">
                        Use <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-800">/compact</code> to
                        summarize the conversation into a smaller message. Preserves "vibes" but takes time and tokens.
                      </p>
                    </div>
                    <div className="rounded border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950/30">
                      <p className="mb-2 font-semibold text-green-700 text-sm dark:text-green-400">Best Practices:</p>
                      <ul className="list-inside list-disc space-y-1 text-green-900/70 text-xs dark:text-green-100/70">
                        <li>Regularly clear your chat when switching tasks</li>
                        <li>Be cautious with MCP servers—they can bloat context rapidly</li>
                        <li>Avoid very large system prompts or rules files</li>
                        <li>Keep conversations focused and lean for best performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">Plan & Execute</CardTitle>
            <CardDescription className="text-base">
              Agents build lightweight plans before tackling complex tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              For non-trivial tasks, most AI CLI tools create a plan before executing. This gives you visibility into
              what will happen and an opportunity to adjust the approach before any code changes are made. This
              plan-first workflow helps catch issues early and ensures alignment with your intentions.
            </p>
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30">
              <CardContent className="p-4">
                <p className="mb-2 font-semibold text-sm">Example Planning Session:</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-green-600">You:</span> Add authentication to the app
                  </p>
                  <p>
                    <span className="font-semibold text-blue-600">AI:</span> I'll help you add authentication. Here's my
                    plan:
                  </p>
                  <ol className="ml-4 list-inside list-decimal space-y-1 text-foreground/70">
                    <li>Install required packages (bcrypt, jsonwebtoken)</li>
                    <li>Create auth middleware</li>
                    <li>Add login/signup endpoints</li>
                    <li>Update protected routes</li>
                    <li>Add environment variables for JWT secret</li>
                  </ol>
                  <p className="mt-3">
                    <span className="font-semibold text-blue-600">AI:</span> Does this approach work for you?
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl">Tool Access & Capabilities</CardTitle>
            <CardDescription className="text-base">
              What AI agents can do and how they interact with your system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              AI CLI tools have access to specific capabilities that allow them to interact with your system. These
              typically include file operations, shell command execution, and specialized functions. Understanding what
              tools can and cannot do helps you work more effectively and securely.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">File Operations</CardTitle>
                  <CardDescription className="text-sm">Read, write, and edit files</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-foreground/70">
                    Create new files, modify existing code, and organize project structure
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Shell Commands</CardTitle>
                  <CardDescription className="text-sm">Execute terminal commands</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-foreground/70">Run npm scripts, git commands, tests, builds, and more</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Context Analysis</CardTitle>
                  <CardDescription className="text-sm">Understand your project</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-foreground/70">Search code, analyze dependencies, and view images/screenshots</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl">Clear Communication</CardTitle>
            <CardDescription className="text-base">Readable outputs that summarize actions and results</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              Modern AI CLI tools are designed for clarity. Instead of showing raw command output, they summarize
              results, highlight important information, and present file changes as clean diffs. This makes it easy to
              understand what happened without wading through verbose logs and technical details.
            </p>
            <Tabs defaultValue="bad">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bad">❌ Raw Output</TabsTrigger>
                <TabsTrigger value="good">✅ AI CLI Output</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="bad">
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-xs">
                  <code>{`npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp...
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm notice created a lockfile as package-lock.json
npm notice
added 234 packages from 123 contributors and audited 234 packages in 12.345s
found 0 vulnerabilities`}</code>
                </pre>
              </TabsContent>
              <TabsContent className="mt-4" value="good">
                <div className="rounded-lg bg-slate-50 p-4 text-sm dark:bg-slate-900/30">
                  <p className="font-semibold text-green-600">✓ Installed dependencies</p>
                  <p className="mt-2 text-foreground/70">Added 234 packages. No vulnerabilities found.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
