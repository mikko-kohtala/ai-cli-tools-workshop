import { ChevronRight, Code2, GitBranch, Settings, Shield, Terminal, Zap } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PresentationPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Presentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>

        <div className="flex flex-1 flex-col gap-12 p-8 pb-16">
          {/* Hero Section */}
          <section className="space-y-6 py-12 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
              <Terminal className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="font-bold text-5xl tracking-tight">Codex CLI Tool</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
              Empowering collaborative coding assistance from your terminal
            </p>
            <div className="mx-auto h-64 w-full max-w-4xl rounded-lg border-2 border-dashed bg-neutral-50 p-8">
              <p className="text-muted-foreground text-sm">[Image placeholder: terminal-illustration]</p>
            </div>
          </section>

          <Separator />

          {/* Agenda Section */}
          <section className="space-y-6" id="agenda">
            <h2 className="font-bold text-4xl">Workshop Agenda</h2>
            <p className="text-lg text-muted-foreground">
              This 90-minute workshop is designed to give you a comprehensive understanding of AI CLI tools, with a
              focus on OpenAI's Codex CLI. We'll cover everything from basic concepts to advanced workflows.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Why It Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Understand the value proposition and use cases for AI CLI tools</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-blue-600" />
                    CLI Harness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Learn how the CLI harness architecture works under the hood</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Sandboxing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Understand sandbox modes and approval policies for safe execution</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-blue-600" />
                    Workflows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Build effective workflows and communication patterns</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-600" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Advanced techniques for power users</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-blue-600" />
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">How to integrate CLI tools into your daily workflow</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Overview Section */}
          <section className="space-y-6" id="overview">
            <h2 className="font-bold text-4xl">Codex CLI at a Glance</h2>
            <p className="text-lg leading-relaxed">
              Codex CLI is a revolutionary tool that brings the power of GPT-5-based AI directly to your terminal. It's
              designed to understand your codebase, execute commands, and help you accomplish complex development tasks
              through natural language interactions.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Terminal-First Interface</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    Built for developers who live in the terminal. No context switching, no browser tabs. Just pure
                    command-line efficiency with the power of GPT-5.
                  </p>
                  <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                    <div className="text-green-400">$ codex "refactor this function to use async/await"</div>
                    <div className="mt-2 text-neutral-400"># AI analyzes and refactors your code</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Natural Language Bridge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    Bridges the gap between natural language requests and local tooling. Describe what you want in plain
                    English, and Codex CLI translates it to precise actions.
                  </p>
                  <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                    <div className="text-green-400">$ codex "find all TODO comments"</div>
                    <div className="mt-2 text-neutral-400"># Searches codebase and presents findings</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Developer Velocity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    Hyper-focused on developer velocity and reproducibility. Automate repetitive tasks, generate
                    boilerplate, and maintain consistency across your projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project-Aware</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    Respects project constraints while automating routine tasks. Understands your dependencies, follows
                    your code style, and adheres to your project's conventions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto mt-6 h-48 w-full max-w-4xl rounded-lg border-2 border-dashed bg-neutral-50 p-8">
              <p className="text-muted-foreground text-sm">[Image placeholder: codex-overview diagram]</p>
            </div>
          </section>

          <Separator />

          {/* Key Concepts Section */}
          <section className="space-y-6" id="concepts">
            <h2 className="font-bold text-4xl">Key Concepts</h2>
            <p className="text-lg leading-relaxed">
              To use Codex CLI effectively, it's important to understand the core concepts that govern how it operates.
              These concepts ensure safe, predictable, and powerful interactions with your codebase.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Environment Context</CardTitle>
                  <CardDescription>Understanding your workspace and boundaries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Every Codex CLI session starts with a clear understanding of its environment. This includes the
                    current working directory (cwd), sandbox mode, network access, and approval settings.
                  </p>
                  <Tabs className="w-full" defaultValue="context">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="context">Context Info</TabsTrigger>
                      <TabsTrigger value="example">Example</TabsTrigger>
                      <TabsTrigger value="best-practice">Best Practice</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-2" value="context">
                      <ul className="list-disc space-y-2 pl-6">
                        <li>
                          <strong>Working Directory:</strong> The root of your project where Codex operates
                        </li>
                        <li>
                          <strong>Sandbox Mode:</strong> Determines what filesystem operations are allowed
                        </li>
                        <li>
                          <strong>Network Access:</strong> Controls if external requests are permitted
                        </li>
                        <li>
                          <strong>Approval Settings:</strong> Defines when user confirmation is required
                        </li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="example">
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                        <div className="text-blue-400"># Session initialization</div>
                        <div className="text-green-400">cwd: /Users/dev/my-project</div>
                        <div className="text-green-400">sandbox: workspace-write</div>
                        <div className="text-green-400">network: enabled</div>
                        <div className="text-green-400">approval: on-request</div>
                      </div>
                    </TabsContent>
                    <TabsContent value="best-practice">
                      <div className="rounded-lg bg-blue-50 p-4">
                        <p className="text-sm">
                          Always verify your environment context before making significant changes. Use restrictive
                          sandbox modes when exploring unfamiliar codebases, and enable more permissions only when
                          needed.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Plan & Execute</CardTitle>
                  <CardDescription>Structured approach to complex tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    For non-trivial tasks, Codex CLI builds lightweight plans before executing code-heavy operations.
                    This ensures transparency and gives you the opportunity to review the approach before changes are
                    made.
                  </p>
                  <Tabs className="w-full" defaultValue="workflow">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="workflow">Workflow</TabsTrigger>
                      <TabsTrigger value="example">Example</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-2" value="workflow">
                      <ol className="list-decimal space-y-3 pl-6">
                        <li>
                          <strong>Understand:</strong> Codex analyzes the request and existing code
                        </li>
                        <li>
                          <strong>Plan:</strong> Creates a step-by-step approach
                        </li>
                        <li>
                          <strong>Review:</strong> Presents the plan for your approval
                        </li>
                        <li>
                          <strong>Execute:</strong> Implements the changes systematically
                        </li>
                        <li>
                          <strong>Verify:</strong> Runs tests or checks to confirm success
                        </li>
                      </ol>
                    </TabsContent>
                    <TabsContent value="example">
                      <div className="space-y-3 text-sm">
                        <div className="rounded-lg bg-neutral-900 p-4 font-mono text-white">
                          <div className="text-green-400">$ codex "add error logging to all API endpoints"</div>
                          <div className="mt-3 text-blue-400"># Plan:</div>
                          <div className="text-neutral-300">1. Identify all API endpoint files</div>
                          <div className="text-neutral-300">2. Review existing error handling</div>
                          <div className="text-neutral-300">3. Add structured logging wrapper</div>
                          <div className="text-neutral-300">4. Update each endpoint with try/catch</div>
                          <div className="text-neutral-300">5. Run tests to verify</div>
                          <div className="mt-3 text-yellow-400">Proceed? (y/n)</div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="benefits">
                      <ul className="list-disc space-y-2 pl-6 text-sm">
                        <li>Increases transparency in AI decision-making</li>
                        <li>Allows you to catch potential issues early</li>
                        <li>Creates a record of changes for documentation</li>
                        <li>Enables iterative refinement of the approach</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tooling Contracts</CardTitle>
                  <CardDescription>Standardized interfaces for reliable operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Codex CLI provides shell, plan, and view_image tools with strict usage guidelines. These contracts
                    ensure consistent behavior and predictable results across different tasks.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 font-semibold">Shell Tool</h4>
                      <p className="text-sm">Execute terminal commands with proper working directory context</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 font-semibold">Plan Tool</h4>
                      <p className="text-sm">Create and manage multi-step execution plans</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 font-semibold">View Image Tool</h4>
                      <p className="text-sm">Analyze visual assets and diagrams in your project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Outputs</CardTitle>
                  <CardDescription>Clean, readable responses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    All responses are plain-text formatted and styled by the CLI. You won't see raw command dumps or
                    verbose logs—just clear, actionable information.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                      <p className="mb-2 font-semibold text-red-900 text-sm">❌ Bad Output</p>
                      <div className="rounded bg-white p-2 font-mono text-xs">
                        <div>stdout: test passed</div>
                        <div>stderr: </div>
                        <div>exit code: 0</div>
                        <div>duration: 1.23s</div>
                      </div>
                    </div>
                    <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                      <p className="mb-2 font-semibold text-green-900 text-sm">✅ Good Output</p>
                      <div className="rounded bg-white p-2 font-mono text-xs">
                        <div className="text-green-600">✓ All tests passed</div>
                        <div className="text-neutral-600">3 test suites, 24 tests</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Architecture Section */}
          <section className="space-y-6" id="architecture">
            <h2 className="font-bold text-4xl">Harness Architecture</h2>
            <p className="text-lg leading-relaxed">
              The Codex CLI harness is a sophisticated system that balances power with safety. Understanding its
              architecture helps you use the tool more effectively and troubleshoot issues when they arise.
            </p>

            <div className="mx-auto mb-6 h-64 w-full max-w-4xl rounded-lg border-2 border-dashed bg-neutral-50 p-8">
              <p className="text-muted-foreground text-sm">[Image placeholder: architecture-diagram]</p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-6 w-6 text-blue-600" />
                    CLI Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The user-facing interface that wraps prompts, agent replies, and inline diffs. It handles
                    formatting, syntax highlighting, and interactive confirmations.
                  </p>
                  <Tabs defaultValue="features">
                    <TabsList>
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="example">Example</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features">
                      <ul className="list-disc space-y-2 pl-6 text-sm">
                        <li>Rich text formatting with colors and styles</li>
                        <li>Inline diff visualization for code changes</li>
                        <li>Interactive prompts for confirmations</li>
                        <li>Progress indicators for long-running operations</li>
                        <li>Error messages with actionable suggestions</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="example">
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                        <div className="text-green-400">$ codex "fix the linting errors"</div>
                        <div className="mt-2 text-neutral-400"># Analyzing codebase...</div>
                        <div className="text-blue-400">Found 3 linting errors</div>
                        <div className="mt-2 text-neutral-300">src/utils.ts:12</div>
                        <div className="text-red-400">- const x = 1</div>
                        <div className="text-green-400">+ const x = 1;</div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    Sandbox Layer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Enforces filesystem and network policies to protect your system. Three modes provide different
                    levels of access control.
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-lg border-green-500 border-l-4 bg-green-50 p-4">
                      <h4 className="mb-1 font-semibold text-green-900">read-only</h4>
                      <p className="text-green-800 text-sm">
                        Can read files and execute safe commands. No modifications allowed. Best for exploration.
                      </p>
                    </div>
                    <div className="rounded-lg border-yellow-500 border-l-4 bg-yellow-50 p-4">
                      <h4 className="mb-1 font-semibold text-yellow-900">workspace-write</h4>
                      <p className="text-sm text-yellow-800">
                        Can modify files within the workspace. Cannot access system files. Recommended default.
                      </p>
                    </div>
                    <div className="rounded-lg border-red-500 border-l-4 bg-red-50 p-4">
                      <h4 className="mb-1 font-semibold text-red-900">danger</h4>
                      <p className="text-red-800 text-sm">
                        Full system access. Can modify any file or execute any command. Use with extreme caution.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-6 w-6 text-blue-600" />
                    Approval Flow
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Controls when and how escalations are requested. Four policies balance automation with safety.</p>
                  <Tabs defaultValue="policies">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="policies">Policies</TabsTrigger>
                      <TabsTrigger value="comparison">When to Use</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-3" value="policies">
                      <div className="rounded-lg border p-3">
                        <h4 className="mb-1 font-semibold">never</h4>
                        <p className="text-sm">No escalation requests. Work within current limitations.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <h4 className="mb-1 font-semibold">on-request</h4>
                        <p className="text-sm">Ask for permission when needed via escalation tool.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <h4 className="mb-1 font-semibold">on-failure</h4>
                        <p className="text-sm">Retry with escalation only after initial attempt fails.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <h4 className="mb-1 font-semibold">untrusted</h4>
                        <p className="text-sm">Require confirmation for most commands.</p>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-3 text-sm" value="comparison">
                      <div className="rounded-lg bg-blue-50 p-3">
                        <strong>Exploration:</strong> Use <code className="rounded bg-blue-200 px-1">never</code> or{" "}
                        <code className="rounded bg-blue-200 px-1">on-failure</code>
                      </div>
                      <div className="rounded-lg bg-green-50 p-3">
                        <strong>Development:</strong> Use <code className="rounded bg-green-200 px-1">on-request</code>
                      </div>
                      <div className="rounded-lg bg-yellow-50 p-3">
                        <strong>Production:</strong> Use <code className="rounded bg-yellow-200 px-1">untrusted</code>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-blue-600" />
                    Agent Runtime
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The core AI engine that processes requests, generates plans, and executes actions. Powered by GPT-5
                    with specialized instructions for coding tasks.
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-sm">
                    <li>Context-aware code generation and refactoring</li>
                    <li>Intelligent error detection and resolution</li>
                    <li>Best practices enforcement based on project patterns</li>
                    <li>Automated testing and verification</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Sandboxing Section */}
          <section className="space-y-6" id="sandboxing">
            <h2 className="font-bold text-4xl">Working with Sandboxing</h2>
            <p className="text-lg leading-relaxed">
              Sandbox modes are your first line of defense against unintended consequences. They define what Codex CLI
              can and cannot do in your environment, providing fine-grained control over filesystem and system access.
            </p>

            <Card className="border-blue-500 border-l-4 bg-blue-50">
              <CardHeader>
                <CardTitle>🎯 Golden Rule of Sandboxing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Always know your active <code className="rounded bg-blue-200 px-2 py-1">sandbox_mode</code> before
                  running commands. When in doubt, start restrictive and escalate only when necessary.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="guidelines">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                      <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
                      <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-3" value="guidelines">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-sm text-white">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold">Check Before You Start</h4>
                            <p className="text-sm">
                              Always verify the sandbox mode at the beginning of a session. Don't assume defaults.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-sm text-white">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold">Default to Workspace-Safe</h4>
                            <p className="text-sm">
                              Use workspace-write for most development tasks. Only escalate if policy allows and
                              necessity is clear.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-sm text-white">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold">Read-Only for Exploration</h4>
                            <p className="text-sm">
                              Treat read-only environments as exploratory unless user explicitly asks for changes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-sm text-white">
                            4
                          </div>
                          <div>
                            <h4 className="font-semibold">Avoid Destructive Commands</h4>
                            <p className="text-sm">
                              Keep destructive commands (rm -rf, dd, etc.) off-limits unless user explicitly mandates
                              them.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-4" value="scenarios">
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-semibold text-green-700">✅ Good: Exploring New Codebase</h4>
                        <p className="mb-2 text-sm">Use read-only mode to understand structure without risk.</p>
                        <div className="rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                          $ codex --sandbox read-only "show me the project structure"
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-semibold text-green-700">✅ Good: Feature Development</h4>
                        <p className="mb-2 text-sm">Use workspace-write for making changes within project.</p>
                        <div className="rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                          $ codex --sandbox workspace-write "add authentication"
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-semibold text-red-700">❌ Bad: Using Danger Mode Unnecessarily</h4>
                        <p className="mb-2 text-sm">Avoid danger mode unless absolutely required.</p>
                        <div className="rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                          $ codex --sandbox danger "fix the bug"
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-3 text-sm" value="troubleshooting">
                      <div className="rounded-lg bg-yellow-50 p-4">
                        <p className="mb-2 font-semibold">Problem: "Permission denied" when trying to create files</p>
                        <p>
                          Solution: Check if you're in read-only mode. Request escalation to workspace-write or restart
                          session with appropriate permissions.
                        </p>
                      </div>
                      <div className="rounded-lg bg-yellow-50 p-4">
                        <p className="mb-2 font-semibold">Problem: Can't access files outside workspace</p>
                        <p>
                          Solution: This is by design in workspace-write mode. If you need system access, explicitly
                          request danger mode with justification.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Building Sessions Section */}
          <section className="space-y-6" id="sessions">
            <h2 className="font-bold text-4xl">Building Effective Sessions</h2>
            <p className="text-lg leading-relaxed">
              The quality of your Codex CLI sessions depends on clear communication, proper planning, and iterative
              refinement. Follow these patterns to get the most value from your AI assistant.
            </p>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clarify Tasks</CardTitle>
                  <CardDescription>Be specific about what you want to accomplish</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="good">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="good">Good Examples</TabsTrigger>
                      <TabsTrigger value="bad">Bad Examples</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-3" value="good">
                      <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                        <p className="mb-2 font-semibold text-green-900">✅ Clear and Specific</p>
                        <div className="space-y-2 font-mono text-sm">
                          <div className="rounded bg-white p-2">
                            "Add input validation to the user registration form"
                          </div>
                          <div className="rounded bg-white p-2">
                            "Refactor the authentication middleware to use async/await"
                          </div>
                          <div className="rounded bg-white p-2">"Find and fix all TypeScript errors in src/utils/"</div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-3" value="bad">
                      <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                        <p className="mb-2 font-semibold text-red-900">❌ Vague and Unclear</p>
                        <div className="space-y-2 font-mono text-sm">
                          <div className="rounded bg-white p-2">"Make it better"</div>
                          <div className="rounded bg-white p-2">"Fix the code"</div>
                          <div className="rounded bg-white p-2">"Add some validation"</div>
                        </div>
                        <p className="mt-3 text-red-800 text-sm">
                          These are too vague. The AI needs context about what "better" means, what code to fix, and
                          what validation is needed.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Draft Plans for Non-Trivial Work</CardTitle>
                  <CardDescription>Break down complex tasks into manageable steps</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    For tasks with 2+ steps, create and maintain a plan. This helps track progress, catch issues early,
                    and document your work.
                  </p>
                  <Tabs defaultValue="example">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="example">Plan Example</TabsTrigger>
                      <TabsTrigger value="tips">Planning Tips</TabsTrigger>
                    </TabsList>
                    <TabsContent value="example">
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                        <div className="text-blue-400"># Task: Implement user authentication</div>
                        <div className="mt-3 text-green-400">Plan:</div>
                        <div className="text-neutral-300">□ 1. Install and configure JWT library</div>
                        <div className="text-neutral-300">□ 2. Create user model with password hashing</div>
                        <div className="text-neutral-300">□ 3. Build login/register endpoints</div>
                        <div className="text-neutral-300">□ 4. Add authentication middleware</div>
                        <div className="text-neutral-300">□ 5. Protect existing routes</div>
                        <div className="text-neutral-300">□ 6. Write integration tests</div>
                        <div className="mt-3 text-yellow-400">Current: Step 1</div>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-2" value="tips">
                      <ul className="list-disc space-y-2 pl-6 text-sm">
                        <li>Keep plans updated as you progress through steps</li>
                        <li>Mark completed steps to track progress</li>
                        <li>Adjust the plan if you discover new requirements</li>
                        <li>Include verification steps (tests, checks) in your plan</li>
                        <li>Share the plan for review before executing</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Summarize Changes</CardTitle>
                  <CardDescription>Provide clear documentation of what was done</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    After making changes, summarize what was modified with file references and command suggestions for
                    testing or committing.
                  </p>
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-3 font-semibold">Example Summary</h4>
                    <div className="space-y-2 text-sm">
                      <p>✅ Added input validation to user registration</p>
                      <p className="text-muted-foreground">Modified files:</p>
                      <ul className="ml-4 list-disc text-muted-foreground">
                        <li>src/routes/auth.ts (added validation middleware)</li>
                        <li>src/validators/user.ts (created validation schemas)</li>
                        <li>src/types/user.ts (updated types)</li>
                      </ul>
                      <p className="mt-3 text-muted-foreground">Test the changes:</p>
                      <div className="mt-1 rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                        npm test -- auth.test.ts
                      </div>
                      <p className="mt-3 text-muted-foreground">Commit suggestion:</p>
                      <div className="mt-1 rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                        git commit -m "feat: add input validation to user registration"
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Offer Next Steps</CardTitle>
                  <CardDescription>Suggest logical follow-ups without overstepping</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    After completing a task, suggest relevant next steps like running tests, updating documentation, or
                    committing changes. Let the user decide whether to proceed.
                  </p>
                  <div className="rounded-lg bg-blue-50 p-4 text-sm">
                    <p className="mb-2 font-semibold">Good Next Steps Pattern:</p>
                    <div className="space-y-2 pl-4">
                      <p>✅ "Would you like me to run the test suite to verify the changes?"</p>
                      <p>✅ "Should I update the README with usage examples?"</p>
                      <p>✅ "Do you want me to commit these changes?"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Communication Guidelines */}
          <section className="space-y-6" id="communication">
            <h2 className="font-bold text-4xl">Communication Guidelines</h2>
            <p className="text-lg leading-relaxed">
              Effective communication with Codex CLI ensures you get precise, actionable responses. Follow these
              guidelines for the best experience.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Be Concise and Structured</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>Format your responses for quick scanning. Use bullet points, code blocks, and clear sections.</p>
                  <div className="rounded-lg border p-3">
                    <p className="mb-2 font-semibold">Structure Example:</p>
                    <div className="text-xs">
                      <p>✅ Changed: Added error handling</p>
                      <p>📁 Files: src/api.ts, src/types.ts</p>
                      <p>🧪 Test: npm test</p>
                      <p>📝 Next: Update docs?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reference Files Precisely</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>Use clickable file paths with precise line numbers to make navigation easy.</p>
                  <div className="rounded-lg border p-3">
                    <p className="mb-2 font-semibold">Good References:</p>
                    <div className="space-y-1 font-mono text-xs">
                      <p>src/auth.ts:45-67</p>
                      <p>src/utils/validation.ts:12</p>
                      <p>tests/integration/auth.test.ts:89</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Summarize Command Outputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    Don't dump raw command outputs. Extract and present only the key findings that matter to the user.
                  </p>
                  <Tabs defaultValue="bad">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="bad">Raw Dump ❌</TabsTrigger>
                      <TabsTrigger value="good">Summarized ✅</TabsTrigger>
                    </TabsList>
                    <TabsContent value="bad">
                      <div className="rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                        <div>[verbose test output...]</div>
                        <div>Test Suites: 5 passed, 5 total</div>
                        <div>Tests: 47 passed, 47 total</div>
                        <div>Snapshots: 0 total</div>
                        <div>Time: 3.456 s</div>
                        <div>[more verbose output...]</div>
                      </div>
                    </TabsContent>
                    <TabsContent value="good">
                      <div className="rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                        <div className="text-green-400">✓ All tests passed</div>
                        <div className="text-neutral-300">5 suites, 47 tests (3.5s)</div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use Code Fences Properly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>Use code fences for multi-line snippets and inline backticks for single literals or commands.</p>
                  <div className="space-y-2">
                    <div>
                      <p className="mb-1 font-semibold">Inline:</p>
                      <code className="rounded bg-neutral-200 px-2 py-1 text-xs">npm install</code>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">Block:</p>
                      <div className="rounded bg-neutral-900 p-2 font-mono text-white text-xs">
                        <div>function validate(input) {"{"}</div>
                        <div> return input.length {"> 0;"}</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Pro Tips Section */}
          <section className="space-y-6" id="pro-tips">
            <h2 className="font-bold text-4xl">Pro Tips for Power Users</h2>
            <p className="text-lg leading-relaxed">
              Once you're comfortable with the basics, these advanced techniques will help you unlock the full potential
              of Codex CLI.
            </p>

            <div className="mx-auto mb-6 h-48 w-full max-w-4xl rounded-lg border-2 border-dashed bg-neutral-50 p-8">
              <p className="text-muted-foreground text-sm">[Image placeholder: terminal-tips]</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Use Fast Search Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="rg">
                    <TabsList>
                      <TabsTrigger value="rg">ripgrep (rg)</TabsTrigger>
                      <TabsTrigger value="examples">Examples</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-3" value="rg">
                      <p className="text-sm">
                        Prefer <code className="rounded bg-neutral-200 px-1">rg</code> for fast searches. Always specify
                        the working directory for context.
                      </p>
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                        <div className="text-blue-400"># Fast search with ripgrep</div>
                        <div className="text-green-400">rg "TODO" --type ts --json</div>
                        <div className="mt-2 text-blue-400"># Search with context</div>
                        <div className="text-green-400">rg "function authenticate" -C 3</div>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-3" value="examples">
                      <div className="space-y-3 text-sm">
                        <div className="rounded-lg border p-3">
                          <p className="mb-1 font-semibold">Find all API calls:</p>
                          <code className="text-xs">rg "fetch\(" --type ts</code>
                        </div>
                        <div className="rounded-lg border p-3">
                          <p className="mb-1 font-semibold">Find imports from specific package:</p>
                          <code className="text-xs">rg "from ['\"]react['\"]"</code>
                        </div>
                        <div className="rounded-lg border p-3">
                          <p className="mb-1 font-semibold">Find files modified recently:</p>
                          <code className="text-xs">rg --files-with-matches "TODO" | xargs ls -lt</code>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Keep Formatting Minimal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    The CLI handles text styling. Use ASCII characters and add comments only when clarity truly demands
                    it.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-200 bg-green-50 p-3">
                      <p className="mb-2 font-semibold text-green-900">✅ Minimal</p>
                      <div className="rounded bg-white p-2 font-mono text-xs">
                        <div>Created: auth.ts</div>
                        <div>Updated: routes.ts</div>
                      </div>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-red-50 p-3">
                      <p className="mb-2 font-semibold text-red-900">❌ Over-formatted</p>
                      <div className="rounded bg-white p-2 font-mono text-xs">
                        <div>{"=========="}</div>
                        <div>📝 Created: auth.ts 🎉</div>
                        <div>{"=========="}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitor for Unexpected Changes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    Always review diffs carefully. If you notice unexpected file changes, pause and investigate before
                    continuing.
                  </p>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <p className="mb-2 font-semibold text-yellow-900">⚠️ Warning Signs:</p>
                    <ul className="list-disc space-y-1 pl-6 text-sm text-yellow-800">
                      <li>Files outside the expected scope were modified</li>
                      <li>Large deletions you didn't request</li>
                      <li>Configuration files changed unexpectedly</li>
                      <li>Dependencies added without your knowledge</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 text-sm">
                    <p className="font-semibold">Pro Tip:</p>
                    <p>
                      Use git to review changes: <code className="rounded bg-blue-200 px-1">git diff</code>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leverage Shell Tool Effectively</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="patterns">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="patterns">Patterns</TabsTrigger>
                      <TabsTrigger value="examples">Examples</TabsTrigger>
                      <TabsTrigger value="pitfalls">Avoid</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-2 text-sm" value="patterns">
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Always specify workdir parameter for context</li>
                        <li>Chain commands carefully with proper error handling</li>
                        <li>Use pipes to combine tools effectively</li>
                        <li>Capture output for processing when needed</li>
                      </ul>
                    </TabsContent>
                    <TabsContent className="space-y-3" value="examples">
                      <div className="space-y-3 text-sm">
                        <div className="rounded-lg bg-neutral-900 p-3 font-mono text-white">
                          <div className="text-blue-400"># Run tests in specific directory</div>
                          <div className="text-green-400">npm test --prefix ./packages/core</div>
                        </div>
                        <div className="rounded-lg bg-neutral-900 p-3 font-mono text-white">
                          <div className="text-blue-400"># Find and count occurrences</div>
                          <div className="text-green-400">rg "console.log" | wc -l</div>
                        </div>
                        <div className="rounded-lg bg-neutral-900 p-3 font-mono text-white">
                          <div className="text-blue-400"># Check for uncommitted changes</div>
                          <div className="text-green-400">git status --porcelain</div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-2 text-sm" value="pitfalls">
                      <ul className="list-disc space-y-2 pl-6 text-red-800">
                        <li>❌ Don't run commands without specifying workdir</li>
                        <li>❌ Avoid destructive commands without explicit confirmation</li>
                        <li>❌ Don't ignore error exit codes</li>
                        <li>❌ Don't use shell when a native tool exists</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Demo Section */}
          <section className="space-y-6" id="demo">
            <h2 className="font-bold text-4xl">Demo Flow Example</h2>
            <p className="text-lg leading-relaxed">
              Let's walk through a complete example of how to use Codex CLI for a real-world task: refactoring a logging
              module for structured output.
            </p>

            <Card className="border-purple-500 border-l-4">
              <CardHeader>
                <CardTitle className="text-2xl">Scenario: Refactor Logging Module</CardTitle>
                <CardDescription>Transform plain text logs to structured JSON format</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  <strong>Goal:</strong> Update the logging system to output structured JSON logs for better parsing and
                  analysis in production environments.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      1
                    </div>
                    Analyze Files
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="command">
                    <TabsList>
                      <TabsTrigger value="command">Command</TabsTrigger>
                      <TabsTrigger value="output">Output</TabsTrigger>
                    </TabsList>
                    <TabsContent value="command">
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                        <div className="text-green-400">
                          $ codex "analyze the current logging implementation in src/logger.ts"
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent className="space-y-2 text-sm" value="output">
                      <p>Current implementation uses console.log with string concatenation:</p>
                      <div className="rounded-lg bg-neutral-900 p-3 font-mono text-white text-xs">
                        <div>
                          <span className="text-blue-400">function</span> log(message:{" "}
                          <span className="text-green-400">string</span>) {"{"}
                        </div>
                        <div>
                          {" "}
                          console.log(`[${"{"}
                          {new Date().toISOString()}
                          {"}"}] ${"{"}message{"}"}`);
                        </div>
                        <div>{"}"}</div>
                      </div>
                      <p className="mt-2">
                        <strong>Issues:</strong> No log levels, no metadata, difficult to parse
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      2
                    </div>
                    Draft Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-neutral-50 p-4 text-sm">
                    <p className="mb-3 font-semibold">Proposed Plan:</p>
                    <ol className="list-decimal space-y-2 pl-6">
                      <li>Create structured logger interface with log levels</li>
                      <li>Implement JSON formatter for log entries</li>
                      <li>Add metadata support (context, user ID, request ID)</li>
                      <li>Update all existing log calls to use new logger</li>
                      <li>Add tests for logger functionality</li>
                      <li>Update documentation</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      3
                    </div>
                    Implement Changes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="logger">
                    <TabsList>
                      <TabsTrigger value="logger">New Logger</TabsTrigger>
                      <TabsTrigger value="usage">Usage</TabsTrigger>
                      <TabsTrigger value="output">Output Format</TabsTrigger>
                    </TabsList>
                    <TabsContent value="logger">
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-white text-xs">
                        <div>
                          <span className="text-blue-400">interface</span> LogEntry {"{"}
                        </div>
                        <div> timestamp: string;</div>
                        <div> level: 'info' | 'warn' | 'error';</div>
                        <div> message: string;</div>
                        <div> metadata?: Record&lt;string, any&gt;;</div>
                        <div>{"}"}</div>
                        <div className="mt-3">
                          <span className="text-blue-400">class</span> Logger {"{"}
                        </div>
                        <div>
                          {"  "}
                          <span className="text-blue-400">private</span> format(entry: LogEntry) {"{"}
                        </div>
                        <div> return JSON.stringify(entry);</div>
                        <div> {"}"}</div>
                        <div className="mt-2">
                          {"  "}info(message: string, metadata?: any) {"{"}
                        </div>
                        <div>
                          {" "}
                          console.log(this.format({"{"}...{"}"}));
                        </div>
                        <div> {"}"}</div>
                        <div>{"}"}</div>
                      </div>
                    </TabsContent>
                    <TabsContent value="usage">
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-white text-xs">
                        <div className="text-blue-400">{"//"} Before</div>
                        <div className="text-red-400">log('User logged in');</div>
                        <div className="mt-3 text-blue-400">{"//"} After</div>
                        <div className="text-green-400">logger.info('User logged in', {"{"}</div>
                        <div className="text-green-400"> userId: user.id,</div>
                        <div className="text-green-400"> requestId: req.id</div>
                        <div className="text-green-400">{"}"})</div>
                      </div>
                    </TabsContent>
                    <TabsContent value="output">
                      <div className="rounded-lg bg-neutral-900 p-4 font-mono text-white text-xs">
                        <div>{"{"}</div>
                        <div> "timestamp": "2025-10-22T14:30:00.000Z",</div>
                        <div> "level": "info",</div>
                        <div> "message": "User logged in",</div>
                        <div> "metadata": {"{"}</div>
                        <div> "userId": "user_123",</div>
                        <div> "requestId": "req_456"</div>
                        <div> {"}"}</div>
                        <div>{"}"}</div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      4
                    </div>
                    Run Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="rounded-lg bg-neutral-900 p-4 font-mono text-white">
                      <div className="text-green-400">$ npm test -- logger.test.ts</div>
                      <div className="mt-2 text-blue-400">Running tests...</div>
                      <div className="text-neutral-300">✓ Logger formats messages as JSON</div>
                      <div className="text-neutral-300">✓ Logger includes metadata</div>
                      <div className="text-neutral-300">✓ Logger supports all log levels</div>
                      <div className="mt-2 text-green-400">✓ All tests passed (3/3)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      5
                    </div>
                    Wrap-Up
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="mb-2 font-semibold text-green-900">✅ Completed:</p>
                    <ul className="list-disc space-y-1 pl-6 text-green-800">
                      <li>Refactored logger to output structured JSON</li>
                      <li>Added support for log levels and metadata</li>
                      <li>Updated 23 log calls across the codebase</li>
                      <li>Added comprehensive test coverage</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="mb-2 font-semibold text-blue-900">📝 Modified Files:</p>
                    <ul className="space-y-1 font-mono text-blue-800 text-xs">
                      <li>src/logger.ts (refactored)</li>
                      <li>src/types/logger.ts (created)</li>
                      <li>tests/logger.test.ts (created)</li>
                      <li>{"src/**/*.ts"} (updated log calls)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <p className="mb-2 font-semibold text-yellow-900">⚠️ Considerations:</p>
                    <ul className="list-disc space-y-1 pl-6 text-yellow-800">
                      <li>Monitor log volume in production (JSON is more verbose)</li>
                      <li>Consider log rotation strategy</li>
                      <li>Update deployment docs about log format change</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="mb-2 font-semibold">🚀 Suggested Next Steps:</p>
                    <ul className="list-disc space-y-1 pl-6">
                      <li>
                        Commit changes:{" "}
                        <code className="rounded bg-neutral-200 px-1">
                          git commit -m "refactor: structured JSON logging"
                        </code>
                      </li>
                      <li>Update deployment documentation</li>
                      <li>Configure log aggregation service to parse JSON</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Next Steps Section */}
          <section className="space-y-6" id="next-steps">
            <h2 className="font-bold text-4xl">Next Steps</h2>
            <p className="text-lg leading-relaxed">
              Ready to start using Codex CLI? Here's how to get started and integrate it into your workflow.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Install and Configure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    Get Codex CLI set up on your machine and explore the different sandbox configurations.
                  </p>
                  <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                    <div className="text-blue-400"># Installation (example)</div>
                    <div className="text-green-400">npm install -g @openai/codex-cli</div>
                    <div className="mt-2 text-blue-400"># Setup</div>
                    <div className="text-green-400">codex init</div>
                    <div className="mt-2 text-blue-400"># Try it out</div>
                    <div className="text-green-400">codex "show me the project structure"</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Script Common Commands</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    Create scripts for frequently used commands like lint and test for quick reuse in sessions.
                  </p>
                  <div className="rounded-lg bg-neutral-900 p-4 font-mono text-sm text-white">
                    <div className="text-blue-400"># .codex/scripts.sh</div>
                    <div className="text-green-400">alias lint="npm run lint"</div>
                    <div className="text-green-400">alias test="npm test"</div>
                    <div className="text-green-400">alias check="npm run typecheck"</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Share Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    Help improve Codex CLI by sharing your experiences, challenges, and suggestions with the OpenAI
                    team.
                  </p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Report bugs and unexpected behavior</li>
                    <li>Suggest new features or improvements</li>
                    <li>Share successful workflows</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integrate Into Team Workflows</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>Add Codex CLI usage examples to your onboarding guides and team playbooks.</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Document best practices for your codebase</li>
                    <li>Create team-specific prompts and patterns</li>
                    <li>Share successful refactoring examples</li>
                    <li>Include in code review checklists</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-green-500 border-l-4 bg-green-50">
              <CardHeader>
                <CardTitle>🎯 Workshop Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Ready to get hands-on? Head over to the Workshop Tasks section to practice using Codex CLI with guided
                  exercises.
                </p>
                <a
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                  href="/tasks"
                >
                  Start Workshop Tasks
                  <ChevronRight className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Q&A Section */}
          <section className="space-y-6 pb-12" id="qa">
            <h2 className="font-bold text-4xl">Q & A</h2>
            <p className="text-lg leading-relaxed">
              Common questions to consider as you adopt AI CLI tools in your workflow.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What workflows can we automate next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>Consider automating repetitive development tasks:</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Code reviews and static analysis</li>
                    <li>Test generation and maintenance</li>
                    <li>Documentation updates</li>
                    <li>Dependency updates and migrations</li>
                    <li>Boilerplate generation for new features</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How should we tune policies for our organization?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>Balance safety with productivity based on your team's needs:</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Start with restrictive policies and gradually relax</li>
                    <li>Use different policies for different types of repositories</li>
                    <li>Document your organization's policy decisions</li>
                    <li>Review and adjust based on team feedback</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Which repositories benefit most from agent-assisted development?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>Focus on repositories with these characteristics:</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Large codebases with consistent patterns</li>
                    <li>Well-tested code with good coverage</li>
                    <li>Clear documentation and coding standards</li>
                    <li>Active development with frequent changes</li>
                    <li>Repetitive maintenance tasks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-neutral-100">
              <CardContent className="pt-6 text-center">
                <p className="text-lg">Questions about the workshop or Codex CLI?</p>
                <p className="mt-2 text-muted-foreground text-sm">
                  Feel free to ask during the session or reach out to the workshop organizers.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}
