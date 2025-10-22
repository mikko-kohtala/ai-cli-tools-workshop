"use client";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Code,
  FileCode,
  Lightbulb,
  Settings,
  Shield,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const SCROLL_OFFSET = 100;
const LAST_BEST_PRACTICE_INDEX = 3;

export default function PresentationPage() {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

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
              <section className="mb-16 flex min-h-[50vh] flex-col justify-center" id="intro">
                <div className="space-y-6 text-center">
                  <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <Terminal className="h-10 w-10 text-white" />
                  </div>
                  <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-5xl text-transparent md:text-6xl">
                    Codex CLI Tool
                  </h1>
                  <p className="mx-auto max-w-3xl text-muted-foreground text-xl md:text-2xl">
                    Empowering collaborative coding assistance from your terminal
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-8 text-muted-foreground text-sm">
                    <span>October 28, 2025</span>
                    <span>•</span>
                    <span>14:00–15:30</span>
                  </div>
                  <div className="mx-auto max-w-2xl pt-6 text-left">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardContent className="p-6">
                        <p className="text-base leading-relaxed">
                          Welcome to this comprehensive workshop on <strong>Codex CLI</strong>, OpenAI's revolutionary
                          coding agent that brings the power of GPT-5 directly to your terminal. In this session, you'll
                          learn how to leverage AI-powered development tools to accelerate your workflow, automate
                          repetitive tasks, and build better software faster—all while maintaining full control and
                          security.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              <Separator className="my-16" />

              {/* Agenda Section */}
              <section className="mb-16 scroll-mt-16" id="agenda">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <FileCode className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Agenda</h2>
                </div>
                <Card>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="mb-6 text-lg text-muted-foreground">
                        This 90-minute workshop is structured to give you both theoretical understanding and practical
                        hands-on experience with Codex CLI. Here's what we'll cover:
                      </p>
                      <ul className="space-y-4">
                        {[
                          {
                            title: "Why Codex CLI matters",
                            description:
                              "Understanding the paradigm shift in development workflows and the benefits of terminal-based AI assistants",
                          },
                          {
                            title: "How the CLI harness works",
                            description: "Deep dive into the architecture, from frontend to agent runtime",
                          },
                          {
                            title: "Working with sandboxing and approvals",
                            description:
                              "Security best practices and policy configurations for safe AI-assisted development",
                          },
                          {
                            title: "Building effective workflows",
                            description:
                              "Practical strategies for communicating with the agent and structuring development sessions",
                          },
                          {
                            title: "Pro tips and next steps",
                            description: "Advanced techniques and how to integrate Codex CLI into your team's workflow",
                          },
                        ].map((item, index) => (
                          <li className="flex items-start gap-3" key={`workshop-${item.title}`}>
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                              <span className="font-semibold text-blue-600 text-sm">{index + 1}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-lg">{item.title}</span>
                              <p className="mt-1 text-muted-foreground">{item.description}</p>
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
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Codex CLI at a Glance</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        <strong>Codex CLI</strong> represents a new generation of development tools that understand
                        natural language, execute complex tasks autonomously, and integrate seamlessly with your
                        existing workflow. Unlike traditional IDE plugins or web-based assistants, Codex CLI runs
                        directly in your terminal, giving you the flexibility to work however you prefer while
                        maintaining complete control over your codebase.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  {[
                    {
                      icon: Terminal,
                      title: "Terminal-first interface",
                      description: "GPT-5-based coding agents accessible directly from your command line",
                      details:
                        "No context switching between tools. Work in the environment you know best—your terminal.",
                    },
                    {
                      icon: Code,
                      title: "Natural language bridge",
                      description: "Connects your requests with local tooling seamlessly",
                      details:
                        "Describe what you want in plain English, and Codex translates it into precise code changes.",
                    },
                    {
                      icon: Zap,
                      title: "Developer velocity",
                      description: "Hyper-focused on speed and reproducibility",
                      details:
                        "Automate repetitive tasks, generate boilerplate, and maintain consistency across your codebase.",
                    },
                    {
                      icon: CheckCircle,
                      title: "Project-aware",
                      description: "Respects constraints while automating routine tasks",
                      details: "Understands your project structure, dependencies, and coding patterns automatically.",
                    },
                  ].map((item) => (
                    <Card className="border-2 transition-colors hover:border-purple-200" key={`feature-${item.title}`}>
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                          <item.icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                        <p className="pt-2 text-muted-foreground text-sm">{item.details}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-purple-600" />
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
                      <TabsContent className="mt-4" value="install">
                        <div className="space-y-3">
                          <p className="text-muted-foreground text-sm">Install Codex CLI globally with npm:</p>
                          <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                            <code>npm install -g @openai/codex-cli</code>
                          </pre>
                          <p className="mt-3 text-muted-foreground text-sm">Or with Homebrew on macOS:</p>
                          <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                            <code>brew install openai/tap/codex</code>
                          </pre>
                        </div>
                      </TabsContent>
                      <TabsContent className="mt-4" value="first">
                        <div className="space-y-3">
                          <p className="text-muted-foreground text-sm">Start a session in your project directory:</p>
                          <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                            <code>cd my-project{"\n"}codex</code>
                          </pre>
                          <p className="mt-3 text-muted-foreground text-sm">
                            The CLI will initialize and present an interactive prompt where you can type requests.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent className="mt-4" value="example">
                        <div className="space-y-3">
                          <p className="text-muted-foreground text-sm">Example conversation:</p>
                          <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-sm">
                            <code className="text-green-400">You:</code>{" "}
                            <code>Add input validation to the login form{"\n"}</code>
                            <code className="text-blue-400">Codex:</code>{" "}
                            <code>
                              {" "}
                              I'll add email and password validation.{"\n"} Creating validationUtils.ts...{"\n"}{" "}
                              Updating LoginForm.tsx...{"\n"} Done! Added email format and password strength checks.
                            </code>
                          </pre>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>

              {/* Key Concepts */}
              <section className="mb-16 scroll-mt-16" id="concepts">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <Settings className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Key Concepts</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        To use Codex CLI effectively, it's essential to understand four foundational concepts that
                        govern how the agent operates. These concepts ensure that your development sessions are secure,
                        predictable, and aligned with your project's requirements.
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
                      <p className="mb-4 text-muted-foreground">
                        When you start Codex CLI, it automatically captures your current working directory, reads your
                        project configuration, and establishes a context that includes environment variables, git
                        status, and available tools. This context helps the agent understand your project structure and
                        make informed decisions.
                      </p>
                      <Tabs defaultValue="cwd">
                        <TabsList>
                          <TabsTrigger value="cwd">Working Directory</TabsTrigger>
                          <TabsTrigger value="sandbox">Sandbox Mode</TabsTrigger>
                          <TabsTrigger value="network">Network</TabsTrigger>
                        </TabsList>
                        <TabsContent className="mt-4" value="cwd">
                          <div className="rounded-lg bg-slate-50 p-4">
                            <p className="mb-2 text-sm">
                              <strong>Example:</strong>
                            </p>
                            <pre className="rounded border bg-white p-3 text-sm">
                              <code>
                                $ pwd{"\n"}/Users/dev/my-app{"\n"}
                                {"\n"}$ codex{"\n"}Codex CLI v1.0.0{"\n"}Context: /Users/dev/my-app (git: main){"\n"}
                                Ready!
                              </code>
                            </pre>
                            <p className="mt-3 text-muted-foreground text-sm">
                              The agent knows it's working in{" "}
                              <code className="rounded bg-white px-1 py-0.5">/Users/dev/my-app</code> on the main
                              branch.
                            </p>
                          </div>
                        </TabsContent>
                        <TabsContent className="mt-4" value="sandbox">
                          <div className="rounded-lg bg-slate-50 p-4">
                            <p className="mb-2 text-sm">Sandbox modes control file system access:</p>
                            <ul className="list-inside list-disc space-y-1 text-sm">
                              <li>
                                <code className="rounded bg-white px-1 py-0.5">read-only</code>: Can read files but not
                                modify them
                              </li>
                              <li>
                                <code className="rounded bg-white px-1 py-0.5">workspace-write</code>: Can modify files
                                within the project (default)
                              </li>
                              <li>
                                <code className="rounded bg-white px-1 py-0.5">danger</code>: Unrestricted access (use
                                with caution)
                              </li>
                            </ul>
                          </div>
                        </TabsContent>
                        <TabsContent className="mt-4" value="network">
                          <div className="rounded-lg bg-slate-50 p-4">
                            <p className="mb-2 text-sm">Network policies determine what the agent can access:</p>
                            <ul className="list-inside list-disc space-y-1 text-sm">
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
                      <p className="mb-4 text-muted-foreground">
                        For non-trivial tasks (anything requiring more than 2 steps), Codex CLI creates a plan before
                        executing. This gives you visibility into what will happen and an opportunity to adjust the
                        approach before any code changes are made.
                      </p>
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="p-4">
                          <p className="mb-2 font-semibold text-sm">Example Planning Session:</p>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-semibold text-green-600">You:</span> Add authentication to the app
                            </p>
                            <p>
                              <span className="font-semibold text-blue-600">Codex:</span> I'll help you add
                              authentication. Here's my plan:
                            </p>
                            <ol className="ml-4 list-inside list-decimal space-y-1 text-muted-foreground">
                              <li>Install required packages (bcrypt, jsonwebtoken)</li>
                              <li>Create auth middleware</li>
                              <li>Add login/signup endpoints</li>
                              <li>Update protected routes</li>
                              <li>Add environment variables for JWT secret</li>
                            </ol>
                            <p className="mt-3">
                              <span className="font-semibold text-blue-600">Codex:</span> Does this approach work for
                              you?
                            </p>
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
                      <p className="mb-4 text-muted-foreground">
                        Codex CLI has access to specific tools that allow it to interact with your system. Each tool has
                        a "contract"—a set of rules about when and how it can be used. This ensures predictable and safe
                        behavior.
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
                      <p className="mb-4 text-muted-foreground">
                        Codex CLI is designed for clarity. Instead of showing you raw command output, it summarizes
                        results, highlights important information, and presents file changes as clean diffs. This makes
                        it easy to understand what happened without wading through logs.
                      </p>
                      <Tabs defaultValue="bad">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="bad">❌ Raw Output</TabsTrigger>
                          <TabsTrigger value="good">✅ Codex Output</TabsTrigger>
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
                          <div className="rounded-lg bg-slate-50 p-4 text-sm">
                            <p className="font-semibold text-green-600">✓ Installed dependencies</p>
                            <p className="mt-2 text-muted-foreground">Added 234 packages. No vulnerabilities found.</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Harness Architecture */}
              <section className="mb-16 scroll-mt-16" id="architecture">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                    <Code className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Harness Architecture</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Codex CLI is built on a sophisticated architecture called the "harness" that coordinates
                        multiple components to provide a secure, efficient, and user-friendly development experience.
                        Understanding this architecture helps you make the most of the tool and troubleshoot issues when
                        they arise.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                          <span className="font-bold text-white text-xl">1</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-semibold text-2xl">CLI Frontend</h3>
                          <p className="mb-3 text-lg text-muted-foreground">
                            Wraps prompts, agent replies, and inline diffs
                          </p>
                          <p className="text-sm">
                            The frontend is what you interact with—the terminal interface that displays messages,
                            accepts your input, and renders diffs. It handles syntax highlighting, progress indicators,
                            and user confirmation prompts. Think of it as the "view" layer in an MVC architecture.
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                          <span className="font-bold text-white text-xl">2</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-semibold text-2xl">Sandbox Layer</h3>
                          <p className="mb-3 text-lg text-muted-foreground">
                            Enforces filesystem/network policies (read-only, workspace-write, danger)
                          </p>
                          <p className="text-sm">
                            The sandbox is a security boundary that restricts what the agent can do. It monitors every
                            file operation and shell command, blocking actions that violate your configured policies.
                            This layer prevents accidental deletions, unauthorized network access, and other potentially
                            dangerous operations.
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                          <span className="font-bold text-white text-xl">3</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-semibold text-2xl">Approval Flow</h3>
                          <p className="mb-3 text-lg text-muted-foreground">
                            Controls escalations (never, on-request, on-failure, untrusted)
                          </p>
                          <p className="text-sm">
                            When the agent needs to do something that requires elevated permissions or user
                            confirmation, the approval flow manages that process. It can automatically approve safe
                            operations, prompt you for risky ones, or completely block forbidden actions based on your
                            policy settings.
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                          <span className="font-bold text-white text-xl">4</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-semibold text-2xl">Agent Runtime</h3>
                          <p className="mb-3 text-lg text-muted-foreground">
                            Delivers instructions, templates, and formatting for reliable output
                          </p>
                          <p className="text-sm">
                            The runtime is the brain of Codex CLI. It receives your requests, plans tasks, generates
                            code, and executes operations. It maintains conversation history, manages context windows,
                            and applies templates to ensure consistent behavior. The runtime connects to OpenAI's API to
                            access the GPT-5 model.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Architecture in Action
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p className="font-semibold">Example: Running tests with Codex CLI</p>
                      <ol className="ml-2 list-inside list-decimal space-y-2">
                        <li>
                          <strong>CLI Frontend</strong> receives your request: "Run the tests"
                        </li>
                        <li>
                          <strong>Agent Runtime</strong> determines the test command (e.g.,{" "}
                          <code className="rounded bg-slate-100 px-1">npm test</code>)
                        </li>
                        <li>
                          <strong>Sandbox Layer</strong> verifies the command is safe to execute
                        </li>
                        <li>
                          <strong>Approval Flow</strong> checks if user confirmation is needed (usually not for tests)
                        </li>
                        <li>
                          <strong>Agent Runtime</strong> executes the command and captures output
                        </li>
                        <li>
                          <strong>CLI Frontend</strong> displays a summary: "✓ All 47 tests passed"
                        </li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Working with Sandboxing */}
              <section className="mb-16 scroll-mt-16" id="sandboxing">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Working with Sandboxing</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Sandboxing is one of Codex CLI's most important security features. It creates a protective
                        boundary around your project, ensuring the AI agent can only perform actions you've explicitly
                        allowed. Think of it as a security guard that checks every request before letting it through.
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
                          description:
                            "Always check your current sandbox mode with 'codex config sandbox'. This tells you what level of access the agent has.",
                        },
                        {
                          title: "Default to workspace-safe operations",
                          description:
                            "The 'workspace-write' mode is recommended for most development work. It allows file modifications within your project but prevents access to system files or parent directories.",
                        },
                        {
                          title: "Treat read-only environments as exploratory",
                          description:
                            "Use 'read-only' mode when you want the agent to analyze code, answer questions, or suggest changes without actually modifying anything.",
                        },
                        {
                          title: "Keep destructive commands off-limits",
                          description:
                            "Even in 'danger' mode, be cautious with operations like 'rm -rf', database drops, or production deployments. Always review what the agent plans to do.",
                        },
                      ].map((item) => (
                        <li className="flex items-start gap-3" key={`security-${item.title}`}>
                          <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                          <div>
                            <p className="font-semibold text-lg">{item.title}</p>
                            <p className="mt-1 text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Tabs className="mb-8" defaultValue="modes">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="modes">Sandbox Modes</TabsTrigger>
                    <TabsTrigger value="config">Configuration</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  <TabsContent className="mt-4" value="modes">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="border-l-4 border-l-green-500 pl-4">
                            <h4 className="font-semibold text-lg">read-only</h4>
                            <p className="text-muted-foreground text-sm">
                              Can read files, analyze code, and answer questions. Cannot modify anything.
                            </p>
                            <p className="mt-2 text-sm">
                              <strong>Use when:</strong> Exploring a new codebase, getting code explanations, or
                              auditing for issues.
                            </p>
                          </div>
                          <div className="border-l-4 border-l-blue-500 pl-4">
                            <h4 className="font-semibold text-lg">workspace-write (default)</h4>
                            <p className="text-muted-foreground text-sm">
                              Can modify files within the project directory. Cannot access parent directories or system
                              files.
                            </p>
                            <p className="mt-2 text-sm">
                              <strong>Use when:</strong> Active development, refactoring, adding features, or fixing
                              bugs.
                            </p>
                          </div>
                          <div className="border-l-4 border-l-red-500 pl-4">
                            <h4 className="font-semibold text-lg">danger</h4>
                            <p className="text-muted-foreground text-sm">
                              Unrestricted access to the filesystem. Use with extreme caution.
                            </p>
                            <p className="mt-2 text-sm">
                              <strong>Use when:</strong> System-level tasks, modifying configuration files outside the
                              project, or when you fully trust the agent.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent className="mt-4" value="config">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 font-semibold text-sm">Set sandbox mode globally:</p>
                            <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex config set sandbox workspace-write</code>
                            </pre>
                          </div>
                          <div>
                            <p className="mb-2 font-semibold text-sm">Set for current session only:</p>
                            <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex --sandbox read-only</code>
                            </pre>
                          </div>
                          <div>
                            <p className="mb-2 font-semibold text-sm">Check current setting:</p>
                            <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex config sandbox</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent className="mt-4" value="examples">
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Scenario: Code Review</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <p className="mb-2">
                            <strong>Mode:</strong> read-only
                          </p>
                          <p className="text-muted-foreground">
                            "Review the authentication module and identify any security issues"
                          </p>
                          <p className="mt-2 text-green-600">✓ Safe: No files will be modified</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Scenario: Feature Development</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <p className="mb-2">
                            <strong>Mode:</strong> workspace-write
                          </p>
                          <p className="text-muted-foreground">"Add pagination to the user list component"</p>
                          <p className="mt-2 text-blue-600">✓ Safe: Only project files affected</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Scenario: System Setup</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <p className="mb-2">
                            <strong>Mode:</strong> danger
                          </p>
                          <p className="text-muted-foreground">"Configure nginx to reverse proxy to this app"</p>
                          <p className="mt-2 text-red-600">⚠ Warning: System files will be modified</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>

                <Card className="border-amber-200 bg-amber-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                      <div>
                        <p className="mb-2 font-semibold text-lg">Best Practice: Start Restrictive</p>
                        <p className="text-muted-foreground text-sm">
                          When working with a new project or experimenting with Codex CLI, start with 'read-only' or
                          'workspace-write' mode. You can always escalate permissions if needed, but it's much harder to
                          undo accidental changes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Approval Policies */}
              <section className="mb-16 scroll-mt-16" id="approvals">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Approval Policies in Practice</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Approval policies work hand-in-hand with sandboxing to give you granular control over what Codex
                        CLI can do autonomously and when it needs to ask for permission. These policies determine the
                        balance between automation and control.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-red-600">never</span>
                      </CardTitle>
                      <CardDescription>No escalation requests; work around limitations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-muted-foreground text-sm">
                        In this mode, the agent will never ask for elevated permissions. If it encounters a sandbox
                        restriction, it will try to work around it or inform you that the task cannot be completed.
                      </p>
                      <p className="text-sm">
                        <strong>Best for:</strong> Fully automated CI/CD pipelines, untrusted environments
                      </p>
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
                      <p className="mb-3 text-muted-foreground text-sm">
                        The agent can request elevated permissions when needed. You'll see a prompt explaining what it
                        wants to do and why, and you can approve or deny the request.
                      </p>
                      <p className="text-sm">
                        <strong>Best for:</strong> Interactive development sessions, learning the tool
                      </p>
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
                      <p className="mb-3 text-muted-foreground text-sm">
                        The agent tries to complete tasks within sandbox restrictions first. Only if it fails due to
                        permissions will it ask for escalation.
                      </p>
                      <p className="text-sm">
                        <strong>Best for:</strong> Balanced approach between safety and convenience
                      </p>
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
                      <p className="mb-3 text-muted-foreground text-sm">
                        Maximum safety mode. The agent asks for confirmation before most operations, including file
                        modifications and command execution.
                      </p>
                      <p className="text-sm">
                        <strong>Best for:</strong> Critical codebases, production environments, initial evaluation
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="interactive">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="interactive">Interactive Example</TabsTrigger>
                    <TabsTrigger value="configure">How to Configure</TabsTrigger>
                  </TabsList>
                  <TabsContent className="mt-4" value="interactive">
                    <Card>
                      <CardContent className="p-6">
                        <p className="mb-3 font-semibold text-sm">Approval flow in action (on-request mode):</p>
                        <div className="space-y-3 rounded-lg bg-slate-50 p-4 text-sm">
                          <div>
                            <p className="font-semibold text-green-600">You: Install the axios package</p>
                          </div>
                          <div>
                            <p className="font-semibold text-blue-600">
                              Codex: I need to run 'npm install axios'. This will:
                            </p>
                            <ul className="mt-1 ml-4 list-inside list-disc text-muted-foreground">
                              <li>Download and install axios from npm registry</li>
                              <li>Update package.json and package-lock.json</li>
                              <li>Use network access to download the package</li>
                            </ul>
                            <p className="mt-2 font-semibold text-blue-600">Approve this action? [y/N]</p>
                          </div>
                          <div>
                            <p className="font-semibold text-green-600">You: y</p>
                          </div>
                          <div>
                            <p className="font-semibold text-blue-600">Codex: ✓ Installed axios@1.6.0</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent className="mt-4" value="configure">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 font-semibold text-sm">Set approval policy:</p>
                            <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex config set approval on-request</code>
                            </pre>
                          </div>
                          <div>
                            <p className="mb-2 font-semibold text-sm">View current policy:</p>
                            <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex config approval</code>
                            </pre>
                          </div>
                          <div>
                            <p className="mb-2 font-semibold text-sm">Temporary override for one session:</p>
                            <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-slate-50 text-sm">
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
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Building Effective Sessions</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Getting the most out of Codex CLI requires effective communication. Think of it as pair
                        programming with an AI colleague— the clearer you are about your goals, the better the results.
                        Here are proven strategies for productive development sessions.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 bg-teal-50">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {[
                        {
                          title: "Clarify tasks; restate goals when needed",
                          description:
                            "Be explicit about what you want. Instead of 'fix the bug', say 'fix the bug where users can't log in with email addresses containing plus signs'",
                          example:
                            "Good: 'Add error handling to the API client that retries failed requests up to 3 times'\nVague: 'Make the API better'",
                        },
                        {
                          title: "Draft plans (2+ steps) for non-trivial work and keep them updated",
                          description:
                            "For complex tasks, ask Codex to create a plan first. Review it, suggest changes, then execute. This prevents misunderstandings.",
                          example:
                            "You: 'Create a plan for adding dark mode support'\nCodex: [shows 5-step plan]\nYou: 'Skip step 3, we already have the theme context'\nCodex: 'Updated plan: ...'",
                        },
                        {
                          title: "Summarize changes with file references and command suggestions",
                          description:
                            "After Codex makes changes, ask for a summary. This helps you understand what happened and makes it easier to review.",
                          example:
                            "You: 'What files did you change?'\nCodex: 'Modified src/api/client.ts (added retry logic) and tests/api.test.ts (added retry tests)'",
                        },
                        {
                          title: "Offer next steps like tests or commits without overstepping",
                          description:
                            "Codex can suggest what to do next, but you're always in control. It might suggest running tests or committing changes, but won't do it without permission.",
                          example:
                            "Codex: 'Changes complete. Would you like me to: 1) Run the tests 2) Show a diff 3) Create a git commit?'",
                        },
                      ].map((item) => (
                        <li className="flex items-start gap-3" key={`comm-${item.title}`}>
                          <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600" />
                          <div className="flex-1">
                            <p className="font-semibold text-lg">{item.title}</p>
                            <p className="mt-1 text-muted-foreground text-sm">{item.description}</p>
                            <pre className="mt-2 rounded border bg-white p-3 text-xs">{item.example}</pre>
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
                  <TabsContent className="mt-4" value="dos">
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <p className="mb-2 font-semibold">✅ Be specific about requirements</p>
                          <p className="text-muted-foreground text-sm">
                            "Add a button to export the table as CSV. Include all columns except 'internal_id'. Use the
                            file-saver library."
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="mb-2 font-semibold">✅ Provide context</p>
                          <p className="text-muted-foreground text-sm">
                            "This app uses React Query for data fetching. Please follow the same pattern you see in
                            UserList.tsx"
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="mb-2 font-semibold">✅ Break down large tasks</p>
                          <p className="text-muted-foreground text-sm">
                            "First, create the database migration. Then we'll update the API, and finally the frontend."
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent className="mt-4" value="donts">
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <p className="mb-2 font-semibold">❌ Vague requests</p>
                          <p className="text-muted-foreground text-sm">"Make the app better" or "Fix everything"</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="mb-2 font-semibold">❌ Assuming knowledge</p>
                          <p className="text-muted-foreground text-sm">"Use the usual pattern" (what's usual?)</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="mb-2 font-semibold">❌ Too many tasks at once</p>
                          <p className="text-muted-foreground text-sm">
                            "Add auth, set up CI/CD, refactor the database, and fix all TypeScript errors"
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Communication Guidelines */}
              <section className="mb-16 scroll-mt-16" id="communication">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                    <FileCode className="h-5 w-5 text-pink-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Communication Guidelines</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Codex CLI's responses are designed to be concise, scannable, and action-oriented. Understanding
                        how it communicates helps you work faster and reduces cognitive load during development
                        sessions.
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
                      <p className="mb-4 text-muted-foreground text-sm">
                        Codex avoids long-winded explanations unless you ask for details. Responses are structured with
                        headers, bullet points, and clear sections so you can quickly understand what happened.
                      </p>
                      <Tabs defaultValue="good">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="good">✅ Good Response</TabsTrigger>
                          <TabsTrigger value="bad">❌ Poor Response</TabsTrigger>
                        </TabsList>
                        <TabsContent className="mt-4" value="good">
                          <div className="rounded bg-slate-50 p-4 text-sm">
                            <p className="mb-2 font-semibold">✓ Added pagination</p>
                            <p className="mb-2 text-muted-foreground">Modified 2 files:</p>
                            <ul className="ml-2 list-inside list-disc text-muted-foreground">
                              <li>ProductList.tsx - Added Pagination component</li>
                              <li>useProducts.ts - Added page and limit params</li>
                            </ul>
                            <p className="mt-3 text-muted-foreground">Next: Run 'npm test' to verify</p>
                          </div>
                        </TabsContent>
                        <TabsContent className="mt-4" value="bad">
                          <div className="rounded bg-red-50 p-4 text-sm">
                            <p className="text-muted-foreground">
                              So I looked at your code and I think what you're trying to do is add pagination which is a
                              really common pattern in web development where you split large datasets into smaller pages
                              so users don't have to load everything at once which is better for performance and UX and
                              I decided to implement it using the standard approach with page numbers and a limit
                              parameter...
                            </p>
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
                      <p className="mb-4 text-muted-foreground text-sm">
                        When Codex references files, it includes the full path and often specific line numbers. Many
                        terminals make these clickable, allowing you to jump directly to the relevant code.
                      </p>
                      <div className="rounded bg-slate-50 p-4">
                        <p className="mb-2 text-sm">Example references:</p>
                        <pre className="text-sm">
                          <code className="text-blue-600">src/components/UserList.tsx:47</code> - Added loading state
                          {"\n"}
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
                      <p className="mb-4 text-muted-foreground text-sm">
                        Instead of showing you hundreds of lines of npm output or test logs, Codex summarizes what
                        matters: Did it succeed? Were there errors? What changed?
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="mb-2 font-semibold text-sm">❌ Raw output (200 lines)</p>
                          <div className="h-32 overflow-hidden rounded bg-slate-950 p-3 text-slate-50 text-xs">
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
                          <p className="mb-2 font-semibold text-sm">✅ Codex summary</p>
                          <div className="rounded bg-slate-50 p-3 text-sm">
                            <p className="font-semibold text-green-600">✓ Installed 3 packages</p>
                            <p className="mt-2 text-muted-foreground">Added: axios, lodash, date-fns</p>
                            <p className="mt-2 text-amber-600 text-xs">⚠ 2 deprecated dependencies (non-critical)</p>
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
                      <p className="mb-4 text-muted-foreground text-sm">
                        Codex uses Markdown-style formatting to make code stand out from prose. Code blocks use syntax
                        highlighting, and inline code uses backticks for clarity.
                      </p>
                      <div className="space-y-3 rounded bg-slate-50 p-4 text-sm">
                        <p>
                          Inline code: Updated the <code className="rounded bg-white px-1 py-0.5">API_URL</code>{" "}
                          constant
                        </p>
                        <p className="mt-3">Code block:</p>
                        <pre className="rounded border bg-white p-3">
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
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100">
                    <Zap className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Pro Tips for Power Users</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Once you're comfortable with the basics, these advanced techniques will help you work even
                        faster. These are lessons learned from developers who use Codex CLI every day.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Prefer rg for fast searches",
                          description: "Specify workdir on every shell call",
                          detail:
                            "ripgrep (rg) is much faster than grep for large codebases. Codex CLI knows this and uses rg by default. Always specify the working directory to avoid searching node_modules or build directories.",
                          example: "rg 'API_KEY' --glob '!node_modules' --glob '!dist'",
                        },
                        {
                          title: "Use ASCII and add comments only when clarity demands it",
                          description: "Keep the terminal output clean and focused",
                          detail:
                            "Codex avoids decorative elements like emoji or ASCII art in production mode. Comments in generated code are added only when they genuinely help understanding, not as boilerplate.",
                          example:
                            "// Retry up to 3 times with exponential backoff\nconst result = await retryWithBackoff(fetchData);",
                        },
                        {
                          title: "Monitor for unexpected file changes",
                          description: "Pause if they appear",
                          detail:
                            "If you notice files being modified that shouldn't be, stop the session immediately. This could indicate a misunderstanding or configuration issue. Use 'git diff' to review changes before committing.",
                          example: "git diff --name-only  # Quick check of modified files",
                        },
                        {
                          title: "The CLI styles text",
                          description: "Keep formatting minimal but intentional",
                          detail:
                            "Codex's terminal UI handles styling—you don't need to add extra formatting to your requests. Focus on clear content, and the CLI will present it beautifully.",
                          example:
                            "You: 'Show me a summary'\nCodex: [presents formatted summary with colors and structure]",
                        },
                      ].map((item, index) => (
                        <div key={`tip-${item.title}`}>
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-600">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-lg">{item.title}</p>
                              <p className="text-muted-foreground text-sm italic">{item.description}</p>
                              <p className="mt-2 text-sm">{item.detail}</p>
                              {item.example && (
                                <pre className="mt-3 rounded border bg-white p-3 text-xs">
                                  <code>{item.example}</code>
                                </pre>
                              )}
                            </div>
                          </div>
                          {index < LAST_BEST_PRACTICE_INDEX && <Separator className="my-6" />}
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
                  <TabsContent className="mt-4" value="workflow">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 font-semibold">Use session checkpoints</p>
                            <p className="text-muted-foreground text-sm">
                              Save your progress at logical milestones so you can revert if needed.
                            </p>
                            <pre className="mt-2 rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex checkpoint create "before-refactor"</code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="mb-2 font-semibold">Chain related tasks</p>
                            <p className="text-muted-foreground text-sm">
                              Complete one task, then immediately ask for the next logical step.
                            </p>
                            <pre className="mt-2 rounded border bg-white p-3 text-sm">
                              <code>
                                You: "Add the feature"{"\n"}Codex: [implements feature]{"\n"}You: "Now add tests for it"
                                {"\n"}Codex: [adds tests]{"\n"}You: "Create a commit"
                              </code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="mb-2 font-semibold">Use .codexignore</p>
                            <p className="text-muted-foreground text-sm">
                              Exclude large or irrelevant files from the agent's context.
                            </p>
                            <pre className="mt-2 rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>
                                # .codexignore{"\n"}dist/{"\n"}build/{"\n"}*.log{"\n"}coverage/
                              </code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent className="mt-4" value="debugging">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 font-semibold">Use verbose mode for troubleshooting</p>
                            <pre className="rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex --verbose</code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="mb-2 font-semibold">Check the agent's understanding</p>
                            <p className="mt-2 text-muted-foreground text-sm">
                              If results aren't what you expected, ask Codex to explain its reasoning.
                            </p>
                            <pre className="mt-2 rounded border bg-white p-3 text-sm">
                              <code>
                                You: "Why did you choose that approach?"{"\n"}Codex: "I used React Query because I saw
                                it's already used in UserList.tsx..."
                              </code>
                            </pre>
                          </div>
                          <Separator />
                          <div>
                            <p className="mb-2 font-semibold">View the context window</p>
                            <p className="mt-2 text-muted-foreground text-sm">
                              See what files the agent has loaded into its context.
                            </p>
                            <pre className="mt-2 rounded bg-slate-950 p-3 text-slate-50 text-sm">
                              <code>codex context show</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent className="mt-4" value="shortcuts">
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
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100">
                    <Terminal className="h-5 w-5 text-violet-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Demo Flow Idea</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        Let's walk through a complete development workflow using Codex CLI. This example demonstrates
                        how all the concepts we've discussed come together in practice.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 border-2 border-violet-200">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                            1
                          </div>
                          <h3 className="font-semibold text-2xl text-violet-600">Scope</h3>
                        </div>
                        <Card>
                          <CardContent className="p-4">
                            <p className="mb-3 text-lg">"Refactor logging module for structured output"</p>
                            <p className="text-muted-foreground text-sm">
                              <strong>Context:</strong> The current logging uses console.log throughout the app. We want
                              to switch to a structured logger (like Winston or Pino) that supports log levels,
                              timestamps, and structured data.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <Separator />

                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                            2
                          </div>
                          <h3 className="font-semibold text-2xl text-violet-600">Plan</h3>
                        </div>
                        <Card>
                          <CardContent className="p-4">
                            <p className="mb-3 font-semibold text-base">
                              Analyze files → draft approach → implement changes → run tests
                            </p>
                            <div className="rounded bg-slate-50 p-4">
                              <p className="mb-2 font-semibold text-sm">Codex's generated plan:</p>
                              <ol className="list-inside list-decimal space-y-2 text-sm">
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
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                            3
                          </div>
                          <h3 className="font-semibold text-2xl text-violet-600">Execution</h3>
                        </div>
                        <Tabs defaultValue="step1">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="step1">Analysis</TabsTrigger>
                            <TabsTrigger value="step2">Setup</TabsTrigger>
                            <TabsTrigger value="step3">Refactor</TabsTrigger>
                            <TabsTrigger value="step4">Verify</TabsTrigger>
                          </TabsList>
                          <TabsContent className="mt-4" value="step1">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="rounded bg-slate-50 p-3 text-sm">
                                  <code className="text-green-600">You:</code>{" "}
                                  <code>Find all console.log usage{"\n"}</code>
                                  <code className="text-blue-600">Codex:</code>{" "}
                                  <code>
                                    {" "}
                                    Searching...{"\n"}Found 73 occurrences in 28 files{"\n"}
                                    {"\n"}Most common patterns:{"\n"}- Error logging: 25{"\n"}- Debug info: 31{"\n"}-
                                    User actions: 17{"\n"}
                                    {"\n"}Ready to proceed with refactoring?
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                          <TabsContent className="mt-4" value="step2">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="rounded bg-slate-50 p-3 text-sm">
                                  <code className="text-green-600">You:</code> <code>Yes, use pino{"\n"}</code>
                                  <code className="text-blue-600">Codex:</code>{" "}
                                  <code>
                                    {" "}
                                    Installing pino...{"\n"}✓ Installed pino@8.15.0{"\n"}
                                    {"\n"}Creating src/utils/logger.ts...{"\n"}Configured with:{"\n"}- JSON output in
                                    production{"\n"}- Pretty print in development{"\n"}- Log levels: error, warn, info,
                                    debug
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                          <TabsContent className="mt-4" value="step3">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="rounded bg-slate-50 p-3 text-sm">
                                  <code className="text-blue-600">Codex:</code>{" "}
                                  <code>
                                    {" "}
                                    Refactoring 28 files...{"\n"}
                                    {"\n"}[Progress bar: ████████░░ 80%]{"\n"}
                                    {"\n"}Modified:{"\n"}• src/auth/login.ts{"\n"}• src/api/users.ts{"\n"}•
                                    src/components/Dashboard.tsx{"\n"}[...25 more files]{"\n"}
                                    {"\n"}✓ Refactoring complete
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                          <TabsContent className="mt-4" value="step4">
                            <Card>
                              <CardContent className="p-4">
                                <pre className="rounded bg-slate-50 p-3 text-sm">
                                  <code className="text-green-600">You:</code> <code>Run tests{"\n"}</code>
                                  <code className="text-blue-600">Codex:</code>{" "}
                                  <code>
                                    {" "}
                                    Running test suite...{"\n"}
                                    {"\n"}✓ 124 tests passed{"\n"}✗ 2 tests failed{"\n"}
                                    {"\n"}Failed tests:{"\n"}• utils/logger.test.ts:45 - Expected log format{"\n"}•
                                    api/users.test.ts:89 - Mock logger not defined{"\n"}
                                    {"\n"}Would you like me to fix these?
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <Separator />

                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                            4
                          </div>
                          <h3 className="font-semibold text-2xl text-violet-600">Wrap-up</h3>
                        </div>
                        <Card>
                          <CardContent className="p-4">
                            <div className="space-y-4 text-sm">
                              <div>
                                <p className="mb-2 font-semibold text-base">Summary of changes:</p>
                                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                                  <li>Installed pino logger (1 dependency)</li>
                                  <li>Created logger utility with environment-aware config</li>
                                  <li>Refactored 73 logging statements across 28 files</li>
                                  <li>Fixed 2 test failures related to logging</li>
                                  <li>All 124 tests now passing</li>
                                </ul>
                              </div>
                              <div className="rounded border border-amber-200 bg-amber-50 p-3">
                                <p className="mb-2 flex items-center gap-2 font-semibold">
                                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                                  Considerations:
                                </p>
                                <ul className="list-inside list-disc space-y-1 text-muted-foreground text-xs">
                                  <li>Log output format changed - update any log parsing scripts</li>
                                  <li>Production logs now JSON - ensure log aggregation tools can handle this</li>
                                  <li>Some debug logs may be more verbose now</li>
                                </ul>
                              </div>
                              <div>
                                <p className="mb-2 font-semibold text-base">Suggested next steps:</p>
                                <ol className="list-inside list-decimal space-y-1 text-muted-foreground">
                                  <li>
                                    Review the changes with <code className="rounded bg-slate-100 px-1">git diff</code>
                                  </li>
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

                <Card className="border-violet-200 bg-violet-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-violet-600" />
                      <div>
                        <p className="mb-2 font-semibold text-lg">Key Takeaways from This Demo</p>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground text-sm">
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
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                    <ArrowRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Next Steps</h2>
                </div>

                <div className="mb-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed">
                        You've learned the fundamentals of Codex CLI. Now it's time to put this knowledge into practice.
                        Here's your roadmap for integrating Codex CLI into your development workflow and getting the
                        most value from it.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <Card className="border-2 transition-colors hover:border-emerald-200">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                        <Terminal className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle>Install & Explore</CardTitle>
                      <CardDescription>
                        Install and run Codex CLI locally; explore sandbox configurations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Start with these steps:</p>
                        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
                          <li>Install Codex CLI on your machine</li>
                          <li>Run it in a small test project first</li>
                          <li>Try different sandbox modes</li>
                          <li>Experiment with simple tasks</li>
                        </ol>
                        <pre className="mt-3 rounded bg-slate-950 p-3 text-slate-50 text-xs">
                          <code>
                            npm install -g @openai/codex-cli{"\n"}cd test-project{"\n"}codex --sandbox read-only
                          </code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 transition-colors hover:border-emerald-200">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                        <Code className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle>Script Common Commands</CardTitle>
                      <CardDescription>Script common commands (lint/test) for quick reuse in sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Create reusable workflows:</p>
                        <pre className="rounded bg-slate-950 p-3 text-slate-50 text-xs">
                          <code>{`# .codex/commands/test.sh
npm run lint
npm run typecheck
npm test
echo "✓ All checks passed"`}</code>
                        </pre>
                        <p className="mt-3 text-muted-foreground">Use in sessions:</p>
                        <pre className="rounded border bg-slate-50 p-3 text-xs">
                          <code>You: "Run the standard checks"{"\n"}Codex: [executes .codex/commands/test.sh]</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 transition-colors hover:border-emerald-200">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                        <Users className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle>Share Feedback</CardTitle>
                      <CardDescription>Share feedback with the Codex team to refine agent workflows</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Help improve Codex CLI:</p>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                          <li>Report bugs or unexpected behavior</li>
                          <li>Suggest new features or capabilities</li>
                          <li>Share your use cases and workflows</li>
                          <li>Contribute to documentation</li>
                        </ul>
                        <a
                          className="mt-3 inline-flex items-center gap-2 text-emerald-600 hover:underline"
                          href="https://github.com/openai/codex/issues"
                        >
                          <span>GitHub Issues</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 transition-colors hover:border-emerald-200">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                        <FileCode className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle>Integrate into Workflows</CardTitle>
                      <CardDescription>Integrate CLI usage into onboarding guides and team playbooks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">Team adoption strategies:</p>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
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
                  <TabsContent className="mt-4" value="beginner">
                    <Card>
                      <CardHeader>
                        <CardTitle>Week 1-2: Getting Started</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-inside list-decimal space-y-3 text-sm">
                          <li>
                            <span className="font-semibold">Day 1-2:</span> Install Codex CLI and complete the
                            interactive tutorial
                          </li>
                          <li>
                            <span className="font-semibold">Day 3-5:</span> Use it for simple tasks (adding comments,
                            writing tests, explaining code)
                          </li>
                          <li>
                            <span className="font-semibold">Day 6-10:</span> Try more complex tasks (refactoring, adding
                            features)
                          </li>
                          <li>
                            <span className="font-semibold">Day 11-14:</span> Use it daily for at least one task. Track
                            what works well and what doesn't.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent className="mt-4" value="intermediate">
                    <Card>
                      <CardHeader>
                        <CardTitle>Week 3-4: Building Proficiency</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-inside list-decimal space-y-3 text-sm">
                          <li>
                            <span className="font-semibold">Week 3:</span> Create custom command templates for your
                            workflow. Set up .codexignore and optimize performance.
                          </li>
                          <li>
                            <span className="font-semibold">Week 4:</span> Use Codex for a complete feature from start
                            to finish. Practice planning, execution, testing, and committing.
                          </li>
                          <li>
                            <span className="font-semibold">Bonus:</span> Experiment with different approval policies
                            and sandbox modes for different project types.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent className="mt-4" value="advanced">
                    <Card>
                      <CardHeader>
                        <CardTitle>Week 5+: Power User</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-inside list-decimal space-y-3 text-sm">
                          <li>
                            <span className="font-semibold">Integration:</span> Set up CI/CD workflows using Codex.
                            Create team standards and shared configurations.
                          </li>
                          <li>
                            <span className="font-semibold">Optimization:</span> Fine-tune context windows, create
                            advanced command chains, use checkpoints strategically.
                          </li>
                          <li>
                            <span className="font-semibold">Teaching:</span> Help onboard team members. Share your
                            learnings and create internal documentation.
                          </li>
                          <li>
                            <span className="font-semibold">Contributing:</span> Contribute to the Codex CLI open-source
                            project or create plugins for your specific needs.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Q&A */}
              <section className="mb-16 scroll-mt-16" id="qa">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                    <Users className="h-5 w-5 text-slate-600" />
                  </div>
                  <h2 className="font-bold text-4xl">Q & A</h2>
                </div>
                <Card className="bg-gradient-to-br from-slate-50 to-gray-100">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <p className="mb-4 font-semibold text-2xl">Discussion Topics</p>
                        <div className="space-y-4 text-lg text-muted-foreground">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>What workflows can we automate next in our development process?</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>How should we tune policies and configurations for our organization's needs?</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>Which repositories and projects would benefit most from agent-assisted development?</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                              <span className="text-slate-600 text-sm">?</span>
                            </div>
                            <p>What concerns or challenges do you foresee with adopting AI-assisted development?</p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="pt-4 text-center">
                        <p className="font-semibold text-3xl">Thank you!</p>
                        <p className="mt-3 text-lg text-muted-foreground">Ready to dive into the workshop tasks?</p>
                        <div className="mt-6">
                          <a
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                            href="/tasks"
                          >
                            Start Workshop Tasks
                            <ArrowRight className="h-5 w-5" />
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
            <div className="sticky top-0 hidden h-screen w-64 overflow-auto border-l bg-muted/10 lg:block">
              <div className="p-6">
                <h3 className="mb-4 font-semibold text-muted-foreground text-sm uppercase tracking-wider">Contents</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-primary font-medium text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
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
