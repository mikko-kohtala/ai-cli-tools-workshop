"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Code,
  FileText,
  GitBranch,
  Layers,
  Lightbulb,
  MessageSquare,
  Shield,
  Terminal,
  Users,
} from "lucide-react";

const presentationContent = [
  {
    title: "Codex CLI Tool",
    subtitle: "Empowering collaborative coding assistance from your terminal",
    type: "title",
  },
  {
    title: "Agenda",
    items: [
      "Why Codex CLI matters",
      "How the CLI harness works",
      "Working with sandboxing and approvals",
      "Building effective workflows",
      "Pro tips and next steps",
    ],
  },
  {
    title: "Codex CLI at a Glance",
    verbose:
      "Codex CLI is a terminal-first interface designed to integrate powerful AI coding agents directly into your local development workflow. It acts as a bridge between your natural language requests and the execution of local tools, streamlining common development tasks. The core focus is on increasing developer velocity and ensuring that all automated actions are reproducible and respect the specific constraints of your project.",
    items: [
      "Terminal-first interface for GPT-5-based coding agents",
      "Bridges natural language requests with local tooling",
      "Hyper-focused on developer velocity and reproducibility",
      "Respects project constraints while automating routine tasks",
    ],
  },
  {
    title: "Key Concepts",
    verbose:
      "Understanding these core concepts is crucial for using Codex CLI effectively. They form the foundation of how the agent interacts with your system and code.",
    items: [
      {
        text: "Environment Context",
        description: "Every session starts with a clear context, including the current working directory, sandbox settings, network access, and approval requirements. This ensures the agent has the necessary information to operate safely and effectively.",
        icon: <Terminal className="h-6 w-6 text-blue-500" />,
      },
      {
        text: "Plan & Execute",
        description: "For any non-trivial task, the agent first builds a lightweight, step-by-step plan. This plan is shared with you for approval before any code is modified, providing transparency and control over the process.",
        icon: <FileText className="h-6 w-6 text-green-500" />,
      },
      {
        text: "Tooling Contracts",
        description: "The agent interacts with your system through a set of well-defined tools, such as `shell`, `plan`, and `view_image`. These tools have strict usage guidelines to ensure predictable and safe execution of commands.",
        icon: <Code className="h-6 w-6 text-purple-500" />,
      },
      {
        text: "Outputs",
        description: "All responses from the agent are formatted as plain text and styled by the CLI. This means you get clean, readable output without raw command dumps or unnecessary clutter.",
        icon: <MessageSquare className="h-6 w-6 text-yellow-500" />,
      },
    ],
  },
  {
    title: "Harness Architecture",
    verbose:
      "The CLI harness is the backbone of Codex CLI, providing the necessary layers of abstraction and security to make AI-powered development safe and efficient.",
    items: [
      { text: "CLI Frontend", description: "Wraps prompts, agent replies, and provides inline diffs for code changes.", icon: <Terminal /> },
      {
        text: "Sandbox Layer",
        description: "Enforces filesystem and network policies (e.g., read-only, workspace-write) to prevent unintended side effects.",
        icon: <Shield />,
      },
      {
        text: "Approval Flow",
        description: "Controls when and how the agent can request escalated permissions for potentially risky operations.",
        icon: <Users />,
      },
      {
        text: "Agent Runtime",
        description: "Delivers instructions, templates, and formatting to ensure the agent's output is reliable and consistent.",
        icon: <Layers />,
      },
    ],
  },
  {
    title: "Working with Sandboxing",
    verbose:
      "Sandboxing is a critical security feature in Codex CLI. It restricts the agent's access to your filesystem and network, preventing accidental or malicious damage. Understanding the different sandbox modes is key to a smooth workflow.",
    items: [
      "Know the active `sandbox_mode` before running commands.",
      "Default to workspace-safe operations; request escalation only if the policy allows.",
      "Treat read-only environments as exploratory unless you explicitly ask for changes.",
      "Keep destructive commands off-limits unless you mandate them.",
    ],
    example: {
      title: "Example: Checking a file in a sandboxed environment",
      tabs: [
        {
          trigger: "Prompt",
          content: "User: 'What is the content of the file src/config.js?'",
        },
        {
          trigger: "Agent Action",
          content: "Agent: Executes `cat src/config.js` within the read-only sandbox.",
        },
        {
          trigger: "Result",
          content: "The content of the file is displayed to the user without any risk of modification.",
        },
      ],
    },
  },
  {
    title: "Approval Policies in Practice",
    verbose:
      "Approval policies determine how the agent handles situations that require permissions beyond its current sandbox. These policies are configurable to match your organization's security posture.",
    items: [
      {
        text: "never",
        description: "The agent will never request escalated permissions. It must work around any limitations imposed by the sandbox.",
      },
      {
        text: "on-request",
        description: "The agent can ask for permission to perform a specific action via the `with_escalated_permissions` tool.",
      },
      {
        text: "on-failure",
        description: "The agent will only request escalation after a command has failed due to insufficient permissions.",
      },
      {
        text: "untrusted",
        description: "Nearly all commands that modify the filesystem will require user confirmation before execution.",
      },
    ],
  },
  {
    title: "Building Effective Sessions",
    verbose:
      "To get the most out of Codex CLI, it's important to communicate clearly and structure your requests in a way that the agent can easily understand and act upon.",
    items: [
      "Clarify tasks; restate goals when needed to ensure alignment.",
      "Draft plans (2+ steps) for non-trivial work and keep them updated as you go.",
      "Summarize changes with file references and command suggestions for easy review.",
      "Offer next steps, like running tests or committing the code, without overstepping your role.",
    ],
  },
  {
    title: "Communication Guidelines",
    items: [
      "Be concise, friendly, and structured for quick scanning.",
      "Reference files with clickable paths and precise line numbers.",
      "Avoid raw command outputs; summarize key findings instead.",
      "Use code fences for snippets and inline backticks for literals.",
    ],
  },
  {
    title: "Pro Tips for Power Users",
    items: [
      "Prefer `rg` (ripgrep) for fast code searches; specify the `workdir` on every shell call to ensure context.",
      "Use ASCII for diagrams and add comments only when essential for clarity.",
      "Monitor for unexpected file changes during a session and pause if they appear.",
      "Remember: the CLI styles all text, so keep your formatting minimal but intentional.",
    ],
  },
  {
    title: "Demo Flow Idea",
    subtitle: 'Scope: "Refactor logging module for structured output"',
    items: [
      { text: "Analyze files → draft approach → implement changes → run tests", icon: <FileText /> },
      { text: "Leverage `shell` for diffs/tests, summarize results with references", icon: <Terminal /> },
      { text: "Wrap-up: Provide context, highlight risks, suggest verification steps", icon: <GitBranch /> },
    ],
  },
  {
    title: "Next Steps",
    items: [
      "Install and run Codex CLI locally; explore the different sandbox configurations.",
      "Script common commands (e.g., linting, testing) for quick reuse in your sessions.",
      "Share feedback with the Codex team to help refine the agent's workflows.",
      "Integrate CLI usage into your team's onboarding guides and development playbooks.",
    ],
  },
  {
    title: "Q & A",
    items: [
      "What workflows can we automate next?",
      "How should we tune policies for our organization?",
      "Which repositories benefit most from agent-assisted development?",
    ],
    type: "final",
  },
];

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
        <main className="flex flex-1 flex-col gap-8 p-8">
          {presentationContent.map((slide, index) => (
            <Card key={index} className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{slide.title}</CardTitle>
                {slide.subtitle && (
                  <CardDescription className="text-lg">{slide.subtitle}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {slide.verbose && <p className="text-muted-foreground">{slide.verbose}</p>}
                <ul className="space-y-4">
                  {slide.items &&
                    slide.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-4">
                        {typeof item === "string" ? (
                          <>
                            <Lightbulb className="h-6 w-6 text-yellow-400 mt-1" />
                            <span>{item}</span>
                          </>
                        ) : (
                          <>
                            <div className="flex-shrink-0">{item.icon}</div>
                            <div className="flex-grow">
                              <p className="font-semibold">{item.text}</p>
                              {item.description && (
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                </ul>
                {slide.example && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg mb-2">{slide.example.title}</h4>
                    <Tabs defaultValue={slide.example.tabs[0].trigger}>
                      <TabsList>
                        {slide.example.tabs.map((tab, tabIndex) => (
                          <TabsTrigger key={tabIndex} value={tab.trigger}>
                            {tab.trigger}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {slide.example.tabs.map((tab, tabIndex) => (
                        <TabsContent key={tabIndex} value={tab.trigger}>
                          <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-900">
                            <pre className="text-sm">
                              <code>{tab.content}</code>
                            </pre>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                )}
              </CardContent>
              {index < presentationContent.length - 1 && <Separator className="my-8" />}
            </Card>
          ))}
        </main>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}