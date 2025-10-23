/** biome-ignore-all lint/suspicious/noArrayIndexKey: shadcn */
import { Code, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const architectureSteps = [
  {
    number: 1,
    title: "CLI Frontend",
    subtitle: "Wraps prompts, agent replies, and inline diffs",
    description:
      "The frontend is what you interact with - the terminal interface that displays messages, accepts your input, and renders diffs. It handles syntax highlighting, progress indicators, and user confirmation prompts. Think of it as the 'view' layer in an MVC architecture.",
  },
  {
    number: 2,
    title: "Sandbox Layer",
    subtitle: "Enforces filesystem/network policies (read-only, workspace-write, danger)",
    description:
      "The sandbox is a security boundary that restricts what the agent can do. It monitors every file operation and shell command, blocking actions that violate your configured policies. This layer prevents accidental deletions, unauthorized network access, and other potentially dangerous operations.",
  },
  {
    number: 3,
    title: "Approval Flow",
    subtitle: "Controls escalations (never, on-request, on-failure, untrusted)",
    description:
      "When the agent needs to do something that requires elevated permissions or user confirmation, the approval flow manages that process. It can automatically approve safe operations, prompt you for risky ones, or completely block forbidden actions based on your policy settings.",
  },
  {
    number: 4,
    title: "Agent Runtime",
    subtitle: "Delivers instructions, templates, and formatting for reliable output",
    description:
      "The runtime is the agent's brain. It receives your requests, plans tasks, generates code, and executes operations. It maintains conversation history, manages context windows, and applies templates for consistent behavior. The runtime connects to model APIs (e.g., OpenAI, Anthropic, Google) or local models via adapters.",
  },
];

const exampleSteps = [
  {
    component: "CLI Frontend",
    action: 'receives your request: "Run the tests"',
  },
  {
    component: "Agent Runtime",
    action: 'determines the test command (e.g., <code className="rounded bg-slate-100 px-1">npm test</code>)',
  },
  {
    component: "Sandbox Layer",
    action: "verifies the command is safe to execute",
  },
  {
    component: "Approval Flow",
    action: "checks if user confirmation is needed (usually not for tests)",
  },
  {
    component: "Agent Runtime",
    action: "executes the command and captures output",
  },
  {
    component: "CLI Frontend",
    action: 'displays a summary: "✓ All 47 tests passed"',
  },
];

export function ArchitectureSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="architecture">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Common Architecture</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Most AI CLI tools share a similar architecture (often called a "harness") coordinating multiple components
              to provide a secure, efficient, and user-friendly experience. Understanding these layers helps you get
              more from the tool and troubleshoot issues when they arise.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
        <CardContent className="p-8">
          <div className="space-y-6">
            {architectureSteps.map((step, index) => (
              <div key={`arch-${step.number}`}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="font-bold text-white text-xl">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold text-2xl">{step.title}</h3>
                    <p className="mb-3 text-foreground/70 text-lg">{step.subtitle}</p>
                    <p className="text-sm">{step.description}</p>
                  </div>
                </div>
                {index < architectureSteps.length - 1 && <Separator className="my-6" />}
              </div>
            ))}
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
            <p className="font-semibold">Example: Running tests with an AI CLI</p>
            <ol className="ml-2 list-inside list-decimal space-y-2">
              {exampleSteps.map((step, index) => (
                <li key={`example-${index}`}>
                  <strong>{step.component}</strong> {step.action}
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
