"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Code, Shield, CheckCircle, Settings, Zap, FileCode, Users, ArrowRight, AlertTriangle, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "agenda", title: "Agenda" },
  { id: "glance", title: "Codex CLI at a Glance" },
  { id: "concepts", title: "Key Concepts" },
  { id: "architecture", title: "Harness Architecture" },
  { id: "sandboxing", title: "Working with Sandboxing" },
  { id: "approvals", title: "Approval Policies in Practice" },
  { id: "sessions", title: "Building Effective Sessions" },
  { id: "communication", title: "Communication Guidelines" },
  { id: "tips", title: "Pro Tips for Power Users" },
  { id: "demo", title: "Demo Flow Idea" },
  { id: "next-steps", title: "Next Steps" },
  { id: "qa", title: "Q & A" },
];

export default function PresentationPage() {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

        <div className="flex flex-1">
          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <div className="mx-auto max-w-5xl p-8">
              {/* Introduction Section */}
              <section className="mb-16 min-h-[50vh] flex flex-col justify-center" id="intro">
                <div className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
                    <Terminal className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Codex CLI Tool
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                    Empowering collaborative coding assistance from your terminal
                  </p>
                  <div className="pt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
                    <span>October 28, 2025</span>
                    <span>•</span>
                    <span>14:00–15:30</span>
                  </div>
                  <div className="pt-6 max-w-2xl mx-auto text-left">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-6">
                        <p className="text-base leading-relaxed">
                          Welcome to this comprehensive workshop on <strong>Codex CLI</strong>, OpenAI's revolutionary coding agent that brings the power of GPT-5 directly to your terminal.
                          In this session, you'll learn how to leverage AI-powered development tools to accelerate your workflow, automate repetitive tasks,
                          and build better software faster—all while maintaining full control and security.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              <Separator className="my-16" />

              {/* Agenda Section */}
              <section className="mb-16 scroll-mt-16" id="agenda">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Agenda</h2>
                </div>
                <Card>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground mb-6">
                        This 90-minute workshop is structured to give you both theoretical understanding and practical hands-on experience with Codex CLI.
                        Here's what we'll cover:
                      </p>
                      <ul className="space-y-4">
                        {[
                          {
                            title: "Why Codex CLI matters",
                            description: "Understanding the paradigm shift in development workflows and the benefits of terminal-based AI assistants"
                          },
                          {
                            title: "How the CLI harness works",
                            description: "Deep dive into the architecture, from frontend to agent runtime"
                          },
                          {
                            title: "Working with sandboxing and approvals",
                            description: "Security best practices and policy configurations for safe AI-assisted development"
                          },
                          {
                            title: "Building effective workflows",
                            description: "Practical strategies for communicating with the agent and structuring development sessions"
                          },
                          {
                            title: "Pro tips and next steps",
                            description: "Advanced techniques and how to integrate Codex CLI into your team's workflow"
                          },
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                            </div>
                            <div>
                              <span className="text-lg font-semibold">{item.title}</span>
                              <p className="text-muted-foreground mt-1">{item.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Codex CLI at a Glance */}
              <section className="mb-16 scroll-mt-16" id="glance">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Codex CLI at a Glance</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        <strong>Codex CLI</strong> represents a new generation of development tools that understand natural language,
                        execute complex tasks autonomously, and integrate seamlessly with your existing workflow. Unlike traditional
                        IDE plugins or web-based assistants, Codex CLI runs directly in your terminal, giving you the flexibility to
                        work however you prefer while maintaining complete control over your codebase.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  {[
                    {
                      icon: Terminal,
                      title: "Terminal-first interface",
                      description: "GPT-5-based coding agents accessible directly from your command line",
                      details: "No context switching between tools. Work in the environment you know best—your terminal."
                    },
                    {
                      icon: Code,
                      title: "Natural language bridge",
                      description: "Connects your requests with local tooling seamlessly",
                      details: "Describe what you want in plain English, and Codex translates it into precise code changes."
                    },
                    {
                      icon: Zap,
                      title: "Developer velocity",
                      description: "Hyper-focused on speed and reproducibility",
                      details: "Automate repetitive tasks, generate boilerplate, and maintain consistency across your codebase."
                    },
                    {
                      icon: CheckCircle,
                      title: "Project-aware",
                      description: "Respects constraints while automating routine tasks",
                      details: "Understands your project structure, dependencies, and coding patterns automatically."
                    },
                  ].map((item, index) => (
                    <Card key={index} className="border-2 hover:border-purple-200 transition-colors">
                      <CardHeader>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                          <item.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                        <p className="text-sm text-muted-foreground pt-2">{item.details}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-purple-600" />
                      Quick Example: Getting Started
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="install">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="install">Installation</TabsTrigger>
                        <TabsTrigger value="first">First Command</TabsTrigger>
                        <TabsTrigger value="example">Example Task</TabsTrigger>
                      </TabsList>
                      <TabsContent value="install" className="mt-4">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">Install Codex CLI globally with npm:</p>
                          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                            <code>npm install -g @openai/codex-cli</code>
                          </pre>
                          <p className="text-sm text-muted-foreground mt-3">Or with Homebrew on macOS:</p>
                          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                            <code>brew install openai/tap/codex</code>
                          </pre>
                        </div>
                      </TabsContent>
                      <TabsContent value="first" className="mt-4">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">Start a session in your project directory:</p>
                          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                            <code>cd my-project{"\n"}codex</code>
                          </pre>
                          <p className="text-sm text-muted-foreground mt-3">The CLI will initialize and present an interactive prompt where you can type requests.</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="example" className="mt-4">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">Example conversation:</p>
                          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                            <code className="text-green-400">You:</code> <code>Add input validation to the login form{"\n"}</code>
                            <code className="text-blue-400">Codex:</code> <code> I'll add email and password validation.{"\n"}      Creating validationUtils.ts...{"\n"}      Updating LoginForm.tsx...{"\n"}      Done! Added email format and password strength checks.</code>
                          </pre>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>

              {/* Key Concepts */}
              <section className="mb-16 scroll-mt-16" id="concepts">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Key Concepts</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        To use Codex CLI effectively, it's essential to understand four foundational concepts that govern how the agent operates.
                        These concepts ensure that your development sessions are secure, predictable, and aligned with your project's requirements.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-2xl">Environment Context</CardTitle>
                      <CardDescription className="text-base">
                        Every session starts with cwd, sandbox, network, and approval settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        When you start Codex CLI, it automatically captures your current working directory, reads your project configuration,
                        and establishes a context that includes environment variables, git status, and available tools. This context helps
                        the agent understand your project structure and make informed decisions.
                      </p>
                      <Tabs defaultValue="cwd">
                        <TabsList>
                          <TabsTrigger value="cwd">Working Directory</TabsTrigger>
                          <TabsTrigger value="sandbox">Sandbox Mode</TabsTrigger>
                          <TabsTrigger value="network">Network</TabsTrigger>
                        </TabsList>
                        <TabsContent value="cwd" className="mt-4">
                          <div className="rounded-lg bg-slate-50 p-4">
                            <p className="text-sm mb-2"><strong>Example:</strong></p>
                            <pre className="bg-white p-3 rounded border text-sm">
                              <code>$ pwd{"\n"}/Users/dev/my-app{"\n"}{"\n"}$ codex{"\n"}Codex CLI v1.0.0{"\n"}Context: /Users/dev/my-app (git: main){"\n"}Ready!</code>
                            </pre>
                            <p className="text-sm text-muted-foreground mt-3">
                              The agent knows it's working in <code className="bg-white px-1 py-0.5 rounded">/Users/dev/my-app</code> on the main branch.
                            </p>
                          </div>
                        </TabsContent>
                        <TabsContent value="sandbox" className="mt-4">
                          <div className="rounded-lg bg-slate-50 p-4">
                            <p className="text-sm mb-2">Sandbox modes control file system access:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li><code className="bg-white px-1 py-0.5 rounded">read-only</code>: Can read files but not modify them</li>
                              <li><code className="bg-white px-1 py-0.5 rounded">workspace-write</code>: Can modify files within the project (default)</li>
                              <li><code className="bg-white px-1 py-0.5 rounded">danger</code>: Unrestricted access (use with caution)</li>
                            </ul>
                          </div>
                        </TabsContent>
                        <TabsContent value="network" className="mt-4">
                          <div className="rounded-lg bg-slate-50 p-4">
                            <p className="text-sm mb-2">Network policies determine what the agent can access:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Install npm packages</li>
                              <li>Fetch documentation</li>
                              <li>Make API calls for testing</li>
                              <li>Clone repositories (if allowed)</li>
                            </ul>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-2xl">Plan & Execute</CardTitle>
                      <CardDescription className="text-base">
                        Agents build lightweight plans before touching code-heavy tasks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        For non-trivial tasks (anything requiring more than 2 steps), Codex CLI creates a plan before executing.
                        This gives you visibility into what will happen and an opportunity to adjust the approach before any code changes are made.
                      </p>
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                          <p className="text-sm font-semibold mb-2">Example Planning Session:</p>
                          <div className="space-y-2 text-sm">
                            <p><span className="text-green-600 font-semibold">You:</span> Add authentication to the app</p>
                            <p><span className="text-blue-600 font-semibold">Codex:</span> I'll help you add authentication. Here's my plan:</p>
                            <ol className="list-decimal list-inside ml-4 space-y-1 text-muted-foreground">
                              <li>Install required packages (bcrypt, jsonwebtoken)</li>
                              <li>Create auth middleware</li>
                              <li>Add login/signup endpoints</li>
                              <li>Update protected routes</li>
                              <li>Add environment variables for JWT secret</li>
                            </ol>
                            <p className="mt-3"><span className="text-blue-600 font-semibold">Codex:</span> Does this approach work for you?</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="text-2xl">Tooling Contracts</CardTitle>
                      <CardDescription className="text-base">
                        Shell, plan, and view_image tools with strict usage guidelines
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Codex CLI has access to specific tools that allow it to interact with your system. Each tool has a "contract"—a
                        set of rules about when and how it can be used. This ensures predictable and safe behavior.
                      </p>
                      <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">shell</CardTitle>
                            <CardDescription className="text-sm">Execute commands</CardDescription>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="text-muted-foreground">Run npm scripts, git commands, tests, and builds</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">plan</CardTitle>
                            <CardDescription className="text-sm">Create task plans</CardDescription>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="text-muted-foreground">Break down complex tasks into steps</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">view_image</CardTitle>
                            <CardDescription className="text-sm">Analyze screenshots</CardDescription>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="text-muted-foreground">Understand UI issues from images</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-2xl">Outputs</CardTitle>
                      <CardDescription className="text-base">
                        Plain-text responses styled by the CLI; no raw command dumps
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Codex CLI is designed for clarity. Instead of showing you raw command output, it summarizes results,
                        highlights important information, and presents file changes as clean diffs. This makes it easy to understand
                        what happened without wading through logs.
                      </p>
                      <Tabs defaultValue="bad">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="bad">❌ Raw Output</TabsTrigger>
                          <TabsTrigger value="good">✅ Codex Output</TabsTrigger>
                        </TabsList>
                        <TabsContent value="bad" className="mt-4">
                          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-xs">
                            <code>{`npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp...
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm notice created a lockfile as package-lock.json
npm notice
added 234 packages from 123 contributors and audited 234 packages in 12.345s
found 0 vulnerabilities`}</code>
                          </pre>
                        </TabsContent>
                        <TabsContent value="good" className="mt-4">
                          <div className="bg-slate-50 p-4 rounded-lg text-sm">
                            <p className="text-green-600 font-semibold">✓ Installed dependencies</p>
                            <p className="text-muted-foreground mt-2">Added 234 packages. No vulnerabilities found.</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Harness Architecture */}
              <section className="mb-16 scroll-mt-16" id="architecture">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Harness Architecture</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Codex CLI is built on a sophisticated architecture called the "harness" that coordinates multiple components
                        to provide a secure, efficient, and user-friendly development experience. Understanding this architecture helps
                        you make the most of the tool and troubleshoot issues when they arise.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 mb-8">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xl">1</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl mb-2">CLI Frontend</h3>
                          <p className="text-muted-foreground text-lg mb-3">
                            Wraps prompts, agent replies, and inline diffs
                          </p>
                          <p className="text-sm">
                            The frontend is what you interact with—the terminal interface that displays messages, accepts your input,
                            and renders diffs. It handles syntax highlighting, progress indicators, and user confirmation prompts.
                            Think of it as the "view" layer in an MVC architecture.
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xl">2</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl mb-2">Sandbox Layer</h3>
                          <p className="text-muted-foreground text-lg mb-3">
                            Enforces filesystem/network policies (read-only, workspace-write, danger)
                          </p>
                          <p className="text-sm">
                            The sandbox is a security boundary that restricts what the agent can do. It monitors every file operation
                            and shell command, blocking actions that violate your configured policies. This layer prevents accidental
                            deletions, unauthorized network access, and other potentially dangerous operations.
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xl">3</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl mb-2">Approval Flow</h3>
                          <p className="text-muted-foreground text-lg mb-3">
                            Controls escalations (never, on-request, on-failure, untrusted)
                          </p>
                          <p className="text-sm">
                            When the agent needs to do something that requires elevated permissions or user confirmation, the approval
                            flow manages that process. It can automatically approve safe operations, prompt you for risky ones, or
                            completely block forbidden actions based on your policy settings.
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xl">4</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl mb-2">Agent Runtime</h3>
                          <p className="text-muted-foreground text-lg mb-3">
                            Delivers instructions, templates, and formatting for reliable output
                          </p>
                          <p className="text-sm">
                            The runtime is the brain of Codex CLI. It receives your requests, plans tasks, generates code, and executes
                            operations. It maintains conversation history, manages context windows, and applies templates to ensure
                            consistent behavior. The runtime connects to OpenAI's API to access the GPT-5 model.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Architecture in Action
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p className="font-semibold">Example: Running tests with Codex CLI</p>
                      <ol className="list-decimal list-inside space-y-2 ml-2">
                        <li><strong>CLI Frontend</strong> receives your request: "Run the tests"</li>
                        <li><strong>Agent Runtime</strong> determines the test command (e.g., <code className="bg-slate-100 px-1 rounded">npm test</code>)</li>
                        <li><strong>Sandbox Layer</strong> verifies the command is safe to execute</li>
                        <li><strong>Approval Flow</strong> checks if user confirmation is needed (usually not for tests)</li>
                        <li><strong>Agent Runtime</strong> executes the command and captures output</li>
                        <li><strong>CLI Frontend</strong> displays a summary: "✓ All 47 tests passed"</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Working with Sandboxing */}
              <section className="mb-16 scroll-mt-16" id="sandboxing">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Working with Sandboxing</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Sandboxing is one of Codex CLI's most important security features. It creates a protective boundary around your
                        project, ensuring the AI agent can only perform actions you've explicitly allowed. Think of it as a security guard
                        that checks every request before letting it through.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {[
                        {
                          title: "Know the active sandbox_mode before running commands",
                          description: "Always check your current sandbox mode with 'codex config sandbox'. This tells you what level of access the agent has."
                        },
                        {
                          title: "Default to workspace-safe operations",
                          description: "The 'workspace-write' mode is recommended for most development work. It allows file modifications within your project but prevents access to system files or parent directories."
                        },
                        {
                          title: "Treat read-only environments as exploratory",
                          description: "Use 'read-only' mode when you want the agent to analyze code, answer questions, or suggest changes without actually modifying anything."
                        },
                        {
                          title: "Keep destructive commands off-limits",
                          description: "Even in 'danger' mode, be cautious with operations like 'rm -rf', database drops, or production deployments. Always review what the agent plans to do."
                        },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-lg font-semibold">{item.title}</p>
                            <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Tabs defaultValue="modes" className="mb-8">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="modes">Sandbox Modes</TabsTrigger>
                    <TabsTrigger value="config">Configuration</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  <TabsContent value="modes" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="border-l-4 border-l-green-500 pl-4">
                            <h4 className="font-semibold text-lg">read-only</h4>
                            <p className="text-sm text-muted-foreground">Can read files, analyze code, and answer questions. Cannot modify anything.</p>
                            <p className="text-sm mt-2"><strong>Use when:</strong> Exploring a new codebase, getting code explanations, or auditing for issues.</p>
                          </div>
                          <div className="border-l-4 border-l-blue-500 pl-4">
                            <h4 className="font-semibold text-lg">workspace-write (default)</h4>
                            <p className="text-sm text-muted-foreground">Can modify files within the project directory. Cannot access parent directories or system files.</p>
                            <p className="text-sm mt-2"><strong>Use when:</strong> Active development, refactoring, adding features, or fixing bugs.</p>
                          </div>
                          <div className="border-l-4 border-l-red-500 pl-4">
                            <h4 className="font-semibold text-lg">danger</h4>
                            <p className="text-sm text-muted-foreground">Unrestricted access to the filesystem. Use with extreme caution.</p>
                            <p className="text-sm mt-2"><strong>Use when:</strong> System-level tasks, modifying configuration files outside the project, or when you fully trust the agent.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="config" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold mb-2">Set sandbox mode globally:</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm overflow-x-auto">
                              <code>codex config set sandbox workspace-write</code>
                            </pre>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-2">Set for current session only:</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm overflow-x-auto">
                              <code>codex --sandbox read-only</code>
                            </pre>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-2">Check current setting:</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm overflow-x-auto">
                              <code>codex config sandbox</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="examples" className="mt-4">
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Scenario: Code Review</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <p className="mb-2"><strong>Mode:</strong> read-only</p>
                          <p className="text-muted-foreground">"Review the authentication module and identify any security issues"</p>
                          <p className="mt-2 text-green-600">✓ Safe: No files will be modified</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Scenario: Feature Development</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <p className="mb-2"><strong>Mode:</strong> workspace-write</p>
                          <p className="text-muted-foreground">"Add pagination to the user list component"</p>
                          <p className="mt-2 text-blue-600">✓ Safe: Only project files affected</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Scenario: System Setup</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <p className="mb-2"><strong>Mode:</strong> danger</p>
                          <p className="text-muted-foreground">"Configure nginx to reverse proxy to this app"</p>
                          <p className="mt-2 text-red-600">⚠ Warning: System files will be modified</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>

                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg mb-2">Best Practice: Start Restrictive</p>
                        <p className="text-sm text-muted-foreground">
                          When working with a new project or experimenting with Codex CLI, start with 'read-only' or 'workspace-write' mode.
                          You can always escalate permissions if needed, but it's much harder to undo accidental changes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Approval Policies */}
              <section className="mb-16 scroll-mt-16" id="approvals">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Approval Policies in Practice</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Approval policies work hand-in-hand with sandboxing to give you granular control over what Codex CLI can do autonomously
                        and when it needs to ask for permission. These policies determine the balance between automation and control.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-red-600">never</span>
                      </CardTitle>
                      <CardDescription>No escalation requests; work around limitations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        In this mode, the agent will never ask for elevated permissions. If it encounters a sandbox restriction,
                        it will try to work around it or inform you that the task cannot be completed.
                      </p>
                      <p className="text-sm"><strong>Best for:</strong> Fully automated CI/CD pipelines, untrusted environments</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-blue-600">on-request</span>
                      </CardTitle>
                      <CardDescription>Ask for permission via with_escalated_permissions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        The agent can request elevated permissions when needed. You'll see a prompt explaining what it wants to do
                        and why, and you can approve or deny the request.
                      </p>
                      <p className="text-sm"><strong>Best for:</strong> Interactive development sessions, learning the tool</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-amber-600">on-failure</span>
                      </CardTitle>
                      <CardDescription>Retry only after a sandbox failure justifies it</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        The agent tries to complete tasks within sandbox restrictions first. Only if it fails due to permissions
                        will it ask for escalation.
                      </p>
                      <p className="text-sm"><strong>Best for:</strong> Balanced approach between safety and convenience</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-purple-600">untrusted</span>
                      </CardTitle>
                      <CardDescription>Most commands require user confirmation first</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Maximum safety mode. The agent asks for confirmation before most operations, including file modifications
                        and command execution.
                      </p>
                      <p className="text-sm"><strong>Best for:</strong> Critical codebases, production environments, initial evaluation</p>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="interactive">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="interactive">Interactive Example</TabsTrigger>
                    <TabsTrigger value="configure">How to Configure</TabsTrigger>
                  </TabsList>
                  <TabsContent value="interactive" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm font-semibold mb-3">Approval flow in action (on-request mode):</p>
                        <div className="bg-slate-50 p-4 rounded-lg space-y-3 text-sm">
                          <div>
                            <p className="text-green-600 font-semibold">You: Install the axios package</p>
                          </div>
                          <div>
                            <p className="text-blue-600 font-semibold">Codex: I need to run 'npm install axios'. This will:</p>
                            <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                              <li>Download and install axios from npm registry</li>
                              <li>Update package.json and package-lock.json</li>
                              <li>Use network access to download the package</li>
                            </ul>
                            <p className="text-blue-600 font-semibold mt-2">Approve this action? [y/N]</p>
                          </div>
                          <div>
                            <p className="text-green-600 font-semibold">You: y</p>
                          </div>
                          <div>
                            <p className="text-blue-600 font-semibold">Codex: ✓ Installed axios@1.6.0</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="configure" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold mb-2">Set approval policy:</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm overflow-x-auto">
                              <code>codex config set approval on-request</code>
                            </pre>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-2">View current policy:</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm overflow-x-auto">
                              <code>codex config approval</code>
                            </pre>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-2">Temporary override for one session:</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm overflow-x-auto">
                              <code>codex --approval untrusted</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Building Effective Sessions */}
              <section className="mb-16 scroll-mt-16" id="sessions">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Building Effective Sessions</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Getting the most out of Codex CLI requires effective communication. Think of it as pair programming with an AI colleague—
                        the clearer you are about your goals, the better the results. Here are proven strategies for productive development sessions.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-teal-50 mb-8">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {[
                        {
                          title: "Clarify tasks; restate goals when needed",
                          description: "Be explicit about what you want. Instead of 'fix the bug', say 'fix the bug where users can't log in with email addresses containing plus signs'",
                          example: "Good: 'Add error handling to the API client that retries failed requests up to 3 times'\nVague: 'Make the API better'"
                        },
                        {
                          title: "Draft plans (2+ steps) for non-trivial work and keep them updated",
                          description: "For complex tasks, ask Codex to create a plan first. Review it, suggest changes, then execute. This prevents misunderstandings.",
                          example: "You: 'Create a plan for adding dark mode support'\nCodex: [shows 5-step plan]\nYou: 'Skip step 3, we already have the theme context'\nCodex: 'Updated plan: ...'"
                        },
                        {
                          title: "Summarize changes with file references and command suggestions",
                          description: "After Codex makes changes, ask for a summary. This helps you understand what happened and makes it easier to review.",
                          example: "You: 'What files did you change?'\nCodex: 'Modified src/api/client.ts (added retry logic) and tests/api.test.ts (added retry tests)'"
                        },
                        {
                          title: "Offer next steps like tests or commits without overstepping",
                          description: "Codex can suggest what to do next, but you're always in control. It might suggest running tests or committing changes, but won't do it without permission.",
                          example: "Codex: 'Changes complete. Would you like me to: 1) Run the tests 2) Show a diff 3) Create a git commit?'"
                        },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <p className="text-lg font-semibold">{item.title}</p>
                            <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                            <pre className="bg-white p-3 rounded mt-2 text-xs border">{item.example}</pre>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Tabs defaultValue="dos">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="dos">✅ Do This</TabsTrigger>
                    <TabsTrigger value="donts">❌ Avoid This</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dos" className="mt-4">
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <p className="font-semibold mb-2">✅ Be specific about requirements</p>
                          <p className="text-sm text-muted-foreground">"Add a button to export the table as CSV. Include all columns except 'internal_id'. Use the file-saver library."</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="font-semibold mb-2">✅ Provide context</p>
                          <p className="text-sm text-muted-foreground">"This app uses React Query for data fetching. Please follow the same pattern you see in UserList.tsx"</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="font-semibold mb-2">✅ Break down large tasks</p>
                          <p className="text-sm text-muted-foreground">"First, create the database migration. Then we'll update the API, and finally the frontend."</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="donts" className="mt-4">
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <p className="font-semibold mb-2">❌ Vague requests</p>
                          <p className="text-sm text-muted-foreground">"Make the app better" or "Fix everything"</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="font-semibold mb-2">❌ Assuming knowledge</p>
                          <p className="text-sm text-muted-foreground">"Use the usual pattern" (what's usual?)</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="font-semibold mb-2">❌ Too many tasks at once</p>
                          <p className="text-sm text-muted-foreground">"Add auth, set up CI/CD, refactor the database, and fix all TypeScript errors"</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Communication Guidelines */}
              <section className="mb-16 scroll-mt-16" id="communication">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-pink-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Communication Guidelines</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Codex CLI's responses are designed to be concise, scannable, and action-oriented. Understanding how it communicates
                        helps you work faster and reduces cognitive load during development sessions.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Be concise, friendly, and structured</CardTitle>
                      <CardDescription>Format output for quick scanning and comprehension</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Codex avoids long-winded explanations unless you ask for details. Responses are structured with headers,
                        bullet points, and clear sections so you can quickly understand what happened.
                      </p>
                      <Tabs defaultValue="good">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="good">✅ Good Response</TabsTrigger>
                          <TabsTrigger value="bad">❌ Poor Response</TabsTrigger>
                        </TabsList>
                        <TabsContent value="good" className="mt-4">
                          <div className="bg-slate-50 p-4 rounded text-sm">
                            <p className="font-semibold mb-2">✓ Added pagination</p>
                            <p className="text-muted-foreground mb-2">Modified 2 files:</p>
                            <ul className="list-disc list-inside ml-2 text-muted-foreground">
                              <li>ProductList.tsx - Added Pagination component</li>
                              <li>useProducts.ts - Added page and limit params</li>
                            </ul>
                            <p className="text-muted-foreground mt-3">Next: Run 'npm test' to verify</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="bad" className="mt-4">
                          <div className="bg-red-50 p-4 rounded text-sm">
                            <p className="text-muted-foreground">So I looked at your code and I think what you're trying to do is add pagination which is a really common pattern in web development where you split large datasets into smaller pages so users don't have to load everything at once which is better for performance and UX and I decided to implement it using the standard approach with page numbers and a limit parameter...</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Reference files with clickable paths</CardTitle>
                      <CardDescription>Include precise line numbers for easy navigation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        When Codex references files, it includes the full path and often specific line numbers. Many terminals make
                        these clickable, allowing you to jump directly to the relevant code.
                      </p>
                      <div className="bg-slate-50 p-4 rounded">
                        <p className="text-sm mb-2">Example references:</p>
                        <pre className="text-sm">
                          <code className="text-blue-600">src/components/UserList.tsx:47</code> - Added loading state{"\n"}
                          <code className="text-blue-600">src/api/users.ts:12-18</code> - Updated fetch function{"\n"}
                          <code className="text-blue-600">tests/UserList.test.tsx:23</code> - Added test case
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Avoid raw command outputs</CardTitle>
                      <CardDescription>Summarize key findings instead of dumping logs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Instead of showing you hundreds of lines of npm output or test logs, Codex summarizes what matters:
                        Did it succeed? Were there errors? What changed?
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-semibold mb-2">❌ Raw output (200 lines)</p>
                          <div className="bg-slate-950 text-slate-50 p-3 rounded text-xs h-32 overflow-hidden">
                            <code>
                              npm WARN deprecated pkg1@1.0.0{"\n"}
                              npm WARN deprecated pkg2@2.1.0{"\n"}
                              downloading packages...{"\n"}
                              extracting: pkg1{"\n"}
                              extracting: pkg2{"\n"}
                              [... 195 more lines ...]
                            </code>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-2">✅ Codex summary</p>
                          <div className="bg-slate-50 p-3 rounded text-sm">
                            <p className="text-green-600 font-semibold">✓ Installed 3 packages</p>
                            <p className="text-muted-foreground mt-2">Added: axios, lodash, date-fns</p>
                            <p className="text-amber-600 mt-2 text-xs">⚠ 2 deprecated dependencies (non-critical)</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Use code fences and inline backticks</CardTitle>
                      <CardDescription>Format code snippets and literals properly</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Codex uses Markdown-style formatting to make code stand out from prose. Code blocks use syntax highlighting,
                        and inline code uses backticks for clarity.
                      </p>
                      <div className="bg-slate-50 p-4 rounded text-sm space-y-3">
                        <p>Inline code: Updated the <code className="bg-white px-1 py-0.5 rounded">API_URL</code> constant</p>
                        <p className="mt-3">Code block:</p>
                        <pre className="bg-white p-3 rounded border">
                          <code>{`const fetchUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};`}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Pro Tips */}
              <section className="mb-16 scroll-mt-16" id="tips">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Pro Tips for Power Users</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Once you're comfortable with the basics, these advanced techniques will help you work even faster.
                        These are lessons learned from developers who use Codex CLI every day.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 mb-8">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Prefer rg for fast searches",
                          description: "Specify workdir on every shell call",
                          detail: "ripgrep (rg) is much faster than grep for large codebases. Codex CLI knows this and uses rg by default. Always specify the working directory to avoid searching node_modules or build directories.",
                          example: "rg 'API_KEY' --glob '!node_modules' --glob '!dist'"
                        },
                        {
                          title: "Use ASCII and add comments only when clarity demands it",
                          description: "Keep the terminal output clean and focused",
                          detail: "Codex avoids decorative elements like emoji or ASCII art in production mode. Comments in generated code are added only when they genuinely help understanding, not as boilerplate.",
                          example: "// Retry up to 3 times with exponential backoff\nconst result = await retryWithBackoff(fetchData);"
                        },
                        {
                          title: "Monitor for unexpected file changes",
                          description: "Pause if they appear",
                          detail: "If you notice files being modified that shouldn't be, stop the session immediately. This could indicate a misunderstanding or configuration issue. Use 'git diff' to review changes before committing.",
                          example: "git diff --name-only  # Quick check of modified files"
                        },
                        {
                          title: "The CLI styles text",
                          description: "Keep formatting minimal but intentional",
                          detail: "Codex's terminal UI handles styling—you don't need to add extra formatting to your requests. Focus on clear content, and the CLI will present it beautifully.",
                          example: "You: 'Show me a summary'\nCodex: [presents formatted summary with colors and structure]"
                        },
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-lg font-semibold">{item.title}</p>
                              <p className="text-sm text-muted-foreground italic">{item.description}</p>
                              <p className="text-sm mt-2">{item.detail}</p>
                              {item.example && (
                                <pre className="bg-white p-3 rounded mt-3 text-xs border">
                                  <code>{item.example}</code>
                                </pre>
                              )}
                            </div>
                          </div>
                          {index < 3 && <Separator className="my-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="workflow">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="workflow">Workflow Optimization</TabsTrigger>
                    <TabsTrigger value="debugging">Debugging</TabsTrigger>
                    <TabsTrigger value="shortcuts">Shortcuts</TabsTrigger>
                  </TabsList>
                  <TabsContent value="workflow" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold mb-2">Use session checkpoints</p>
                            <p className="text-sm text-muted-foreground">Save your progress at logical milestones so you can revert if needed.</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm mt-2">
                              <code>codex checkpoint create "before-refactor"</code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="font-semibold mb-2">Chain related tasks</p>
                            <p className="text-sm text-muted-foreground">Complete one task, then immediately ask for the next logical step.</p>
                            <pre className="bg-white p-3 rounded text-sm mt-2 border">
                              <code>You: "Add the feature"{"\n"}Codex: [implements feature]{"\n"}You: "Now add tests for it"{"\n"}Codex: [adds tests]{"\n"}You: "Create a commit"</code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="font-semibold mb-2">Use .codexignore</p>
                            <p className="text-sm text-muted-foreground">Exclude large or irrelevant files from the agent's context.</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm mt-2">
                              <code># .codexignore{"\n"}dist/{"\n"}build/{"\n"}*.log{"\n"}coverage/</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="debugging" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold mb-2">Use verbose mode for troubleshooting</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm">
                              <code>codex --verbose</code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="font-semibold mb-2">Check the agent's understanding</p>
                            <p className="text-sm text-muted-foreground mt-2">If results aren't what you expected, ask Codex to explain its reasoning.</p>
                            <pre className="bg-white p-3 rounded text-sm mt-2 border">
                              <code>You: "Why did you choose that approach?"{"\n"}Codex: "I used React Query because I saw it's already used in UserList.tsx..."</code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="font-semibold mb-2">View the context window</p>
                            <p className="text-sm text-muted-foreground mt-2">See what files the agent has loaded into its context.</p>
                            <pre className="bg-slate-950 text-slate-50 p-3 rounded text-sm mt-2">
                              <code>codex context show</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="shortcuts" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-3 text-sm">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">Ctrl+C</p>
                              <p className="text-muted-foreground text-xs">Cancel current operation</p>
                            </div>
                            <div>
                              <p className="font-semibold">Ctrl+D</p>
                              <p className="text-muted-foreground text-xs">Exit session</p>
                            </div>
                            <div>
                              <p className="font-semibold">↑ / ↓</p>
                              <p className="text-muted-foreground text-xs">Navigate command history</p>
                            </div>
                            <div>
                              <p className="font-semibold">Tab</p>
                              <p className="text-muted-foreground text-xs">Autocomplete file paths</p>
                            </div>
                            <div>
                              <p className="font-semibold">/help</p>
                              <p className="text-muted-foreground text-xs">Show available commands</p>
                            </div>
                            <div>
                              <p className="font-semibold">/undo</p>
                              <p className="text-muted-foreground text-xs">Revert last change</p>
                            </div>
                            <div>
                              <p className="font-semibold">/diff</p>
                              <p className="text-muted-foreground text-xs">Show uncommitted changes</p>
                            </div>
                            <div>
                              <p className="font-semibold">/commit</p>
                              <p className="text-muted-foreground text-xs">Create git commit</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Demo Flow */}
              <section className="mb-16 scroll-mt-16" id="demo">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-violet-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Demo Flow Idea</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Let's walk through a complete development workflow using Codex CLI. This example demonstrates how all the concepts
                        we've discussed come together in practice.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 border-violet-200 mb-8">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                          <h3 className="font-semibold text-2xl text-violet-600">Scope</h3>
                        </div>
                        <Card>
                          <CardContent className="p-4">
                            <p className="text-lg mb-3">"Refactor logging module for structured output"</p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Context:</strong> The current logging uses console.log throughout the app.
                              We want to switch to a structured logger (like Winston or Pino) that supports log levels,
                              timestamps, and structured data.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <Separator />

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                          <h3 className="font-semibold text-2xl text-violet-600">Plan</h3>
                        </div>
                        <Card>
                          <CardContent className="p-4">
                            <p className="text-base mb-3 font-semibold">Analyze files → draft approach → implement changes → run tests</p>
                            <div className="bg-slate-50 p-4 rounded">
                              <p className="text-sm font-semibold mb-2">Codex's generated plan:</p>
                              <ol className="list-decimal list-inside space-y-2 text-sm">
                                <li>Search for all console.log occurrences (estimated: 50-100 files)</li>
                                <li>Install pino logger package</li>
                                <li>Create logger utility module with configuration</li>
                                <li>Replace console.log with structured logger calls</li>
                                <li>Update tests to verify logging</li>
                                <li>Run full test suite to ensure nothing broke</li>
                              </ol>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Separator />

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                          <h3 className="font-semibold text-2xl text-violet-600">Execution</h3>
                        </div>
                        <Tabs defaultValue="step1">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="step1">Analysis</TabsTrigger>
                            <TabsTrigger value="step2">Setup</TabsTrigger>
                            <TabsTrigger value="step3">Refactor</TabsTrigger>
                            <TabsTrigger value="step4">Verify</TabsTrigger>
                          </TabsList>
                          <TabsContent value="step1" className="mt-4">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="text-sm bg-slate-50 p-3 rounded">
                                  <code className="text-green-600">You:</code> <code>Find all console.log usage{"\n"}</code>
                                  <code className="text-blue-600">Codex:</code> <code> Searching...{"\n"}Found 73 occurrences in 28 files{"\n"}{"\n"}Most common patterns:{"\n"}- Error logging: 25{"\n"}- Debug info: 31{"\n"}- User actions: 17{"\n"}{"\n"}Ready to proceed with refactoring?</code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                          <TabsContent value="step2" className="mt-4">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="text-sm bg-slate-50 p-3 rounded">
                                  <code className="text-green-600">You:</code> <code>Yes, use pino{"\n"}</code>
                                  <code className="text-blue-600">Codex:</code> <code> Installing pino...{"\n"}✓ Installed pino@8.15.0{"\n"}{"\n"}Creating src/utils/logger.ts...{"\n"}Configured with:{"\n"}- JSON output in production{"\n"}- Pretty print in development{"\n"}- Log levels: error, warn, info, debug</code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                          <TabsContent value="step3" className="mt-4">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="text-sm bg-slate-50 p-3 rounded">
                                  <code className="text-blue-600">Codex:</code> <code> Refactoring 28 files...{"\n"}{"\n"}[Progress bar: ████████░░ 80%]{"\n"}{"\n"}Modified:{"\n"}• src/auth/login.ts{"\n"}• src/api/users.ts{"\n"}• src/components/Dashboard.tsx{"\n"}[...25 more files]{"\n"}{"\n"}✓ Refactoring complete</code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                          <TabsContent value="step4" className="mt-4">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="text-sm bg-slate-50 p-3 rounded">
                                  <code className="text-green-600">You:</code> <code>Run tests{"\n"}</code>
                                  <code className="text-blue-600">Codex:</code> <code> Running test suite...{"\n"}{"\n"}✓ 124 tests passed{"\n"}✗ 2 tests failed{"\n"}{"\n"}Failed tests:{"\n"}• utils/logger.test.ts:45 - Expected log format{"\n"}• api/users.test.ts:89 - Mock logger not defined{"\n"}{"\n"}Would you like me to fix these?</code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <Separator />

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                          <h3 className="font-semibold text-2xl text-violet-600">Wrap-up</h3>
                        </div>
                        <Card>
                          <CardContent className="p-4">
                            <div className="space-y-4 text-sm">
                              <div>
                                <p className="font-semibold text-base mb-2">Summary of changes:</p>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  <li>Installed pino logger (1 dependency)</li>
                                  <li>Created logger utility with environment-aware config</li>
                                  <li>Refactored 73 logging statements across 28 files</li>
                                  <li>Fixed 2 test failures related to logging</li>
                                  <li>All 124 tests now passing</li>
                                </ul>
                              </div>
                              <div className="bg-amber-50 border border-amber-200 p-3 rounded">
                                <p className="font-semibold flex items-center gap-2 mb-2">
                                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                                  Considerations:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                                  <li>Log output format changed - update any log parsing scripts</li>
                                  <li>Production logs now JSON - ensure log aggregation tools can handle this</li>
                                  <li>Some debug logs may be more verbose now</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-base mb-2">Suggested next steps:</p>
                                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                                  <li>Review the changes with <code className="bg-slate-100 px-1 rounded">git diff</code></li>
                                  <li>Test manually in development environment</li>
                                  <li>Update documentation to reflect new logging approach</li>
                                  <li>Create a commit: "Refactor: migrate to structured logging with Pino"</li>
                                </ol>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-violet-50 border-violet-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg mb-2">Key Takeaways from This Demo</p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                          <li>The agent created a plan before starting work</li>
                          <li>Each step was clearly communicated with progress updates</li>
                          <li>When tests failed, the agent proactively offered to fix them</li>
                          <li>The wrap-up included context, risks, and suggested next steps</li>
                          <li>You remained in control throughout the entire process</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Next Steps */}
              <section className="mb-16 scroll-mt-16" id="next-steps">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Next Steps</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        You've learned the fundamentals of Codex CLI. Now it's time to put this knowledge into practice.
                        Here's your roadmap for integrating Codex CLI into your development workflow and getting the most value from it.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <Card className="border-2 hover:border-emerald-200 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                        <Terminal className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle>Install & Explore</CardTitle>
                      <CardDescription>
                        Install and run Codex CLI locally; explore sandbox configurations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Start with these steps:</p>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                          <li>Install Codex CLI on your machine</li>
                          <li>Run it in a small test project first</li>
                          <li>Try different sandbox modes</li>
                          <li>Experiment with simple tasks</li>
                        </ol>
                        <pre className="bg-slate-950 text-slate-50 p-3 rounded text-xs mt-3">
                          <code>npm install -g @openai/codex-cli{"\n"}cd test-project{"\n"}codex --sandbox read-only</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-emerald-200 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                        <Code className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle>Script Common Commands</CardTitle>
                      <CardDescription>
                        Script common commands (lint/test) for quick reuse in sessions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Create reusable workflows:</p>
                        <pre className="bg-slate-950 text-slate-50 p-3 rounded text-xs">
                          <code>{`# .codex/commands/test.sh
npm run lint
npm run typecheck
npm test
echo "✓ All checks passed"`}</code>
                        </pre>
                        <p className="text-muted-foreground mt-3">Use in sessions:</p>
                        <pre className="bg-slate-50 p-3 rounded text-xs border">
                          <code>You: "Run the standard checks"{"\n"}Codex: [executes .codex/commands/test.sh]</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-emerald-200 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                        <Users className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle>Share Feedback</CardTitle>
                      <CardDescription>
                        Share feedback with the Codex team to refine agent workflows
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Help improve Codex CLI:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Report bugs or unexpected behavior</li>
                          <li>Suggest new features or capabilities</li>
                          <li>Share your use cases and workflows</li>
                          <li>Contribute to documentation</li>
                        </ul>
                        <a href="https://github.com/openai/codex/issues" className="inline-flex items-center gap-2 text-emerald-600 hover:underline mt-3">
                          <span>GitHub Issues</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-emerald-200 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                        <FileCode className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle>Integrate into Workflows</CardTitle>
                      <CardDescription>
                        Integrate CLI usage into onboarding guides and team playbooks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Team adoption strategies:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Add Codex CLI setup to onboarding docs</li>
                          <li>Create team-specific command templates</li>
                          <li>Document best practices for your codebase</li>
                          <li>Share success stories within the team</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="beginner">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="beginner">Beginner Path</TabsTrigger>
                    <TabsTrigger value="intermediate">Intermediate Path</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced Path</TabsTrigger>
                  </TabsList>
                  <TabsContent value="beginner" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Week 1-2: Getting Started</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-3 text-sm">
                          <li>
                            <span className="font-semibold">Day 1-2:</span> Install Codex CLI and complete the interactive tutorial
                          </li>
                          <li>
                            <span className="font-semibold">Day 3-5:</span> Use it for simple tasks (adding comments, writing tests, explaining code)
                          </li>
                          <li>
                            <span className="font-semibold">Day 6-10:</span> Try more complex tasks (refactoring, adding features)
                          </li>
                          <li>
                            <span className="font-semibold">Day 11-14:</span> Use it daily for at least one task. Track what works well and what doesn't.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="intermediate" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Week 3-4: Building Proficiency</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-3 text-sm">
                          <li>
                            <span className="font-semibold">Week 3:</span> Create custom command templates for your workflow. Set up .codexignore and optimize performance.
                          </li>
                          <li>
                            <span className="font-semibold">Week 4:</span> Use Codex for a complete feature from start to finish. Practice planning, execution, testing, and committing.
                          </li>
                          <li>
                            <span className="font-semibold">Bonus:</span> Experiment with different approval policies and sandbox modes for different project types.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="advanced" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Week 5+: Power User</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-3 text-sm">
                          <li>
                            <span className="font-semibold">Integration:</span> Set up CI/CD workflows using Codex. Create team standards and shared configurations.
                          </li>
                          <li>
                            <span className="font-semibold">Optimization:</span> Fine-tune context windows, create advanced command chains, use checkpoints strategically.
                          </li>
                          <li>
                            <span className="font-semibold">Teaching:</span> Help onboard team members. Share your learnings and create internal documentation.
                          </li>
                          <li>
                            <span className="font-semibold">Contributing:</span> Contribute to the Codex CLI open-source project or create plugins for your specific needs.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Q&A */}
              <section className="mb-16 scroll-mt-16" id="qa">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Q & A</h2>
                </div>
                <Card className="bg-gradient-to-br from-slate-50 to-gray-100">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <p className="text-2xl font-semibold mb-4">Discussion Topics</p>
                        <div className="space-y-4 text-lg text-muted-foreground">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>What workflows can we automate next in our development process?</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>How should we tune policies and configurations for our organization's needs?</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>Which repositories and projects would benefit most from agent-assisted development?</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>What concerns or challenges do you foresee with adopting AI-assisted development?</p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="text-center pt-4">
                        <p className="text-3xl font-semibold">Thank you!</p>
                        <p className="text-muted-foreground mt-3 text-lg">
                          Ready to dive into the workshop tasks?
                        </p>
                        <div className="mt-6">
                          <a
                            href="/tasks"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                          >
                            Start Workshop Tasks
                            <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          {tocOpen && (
            <div className="hidden lg:block w-64 border-l bg-muted/10 overflow-auto sticky top-0 h-screen">
              <div className="p-6">
                <h3 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wider">
                  Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                      type="button"
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}
