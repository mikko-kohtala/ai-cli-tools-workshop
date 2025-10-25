/** biome-ignore-all lint/suspicious/noArrayIndexKey: shadcn */
import { Code, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const architectureLayers = [
  {
    number: 1,
    title: "User Interface Layer",
    subtitle: "Terminal interface for interaction and output presentation",
    description:
      "The frontend is what you interact with - the terminal interface that displays messages, accepts your input, and renders results. It handles syntax highlighting, progress indicators, and user confirmation prompts. This layer varies across tools - some offer rich TUI experiences while others keep it minimal.",
  },
  {
    number: 2,
    title: "Security & Sandboxing",
    subtitle: "Controls filesystem, network, and command execution permissions",
    description:
      "A critical security boundary that restricts what the AI agent can do. This layer monitors file operations and shell commands, blocking actions that violate configured policies. Implementation varies - some tools use OS-level sandboxing, others rely on permission checks and user approval flows.",
  },
  {
    number: 3,
    title: "Approval & Control Flow",
    subtitle: "Manages when user confirmation is required",
    description:
      "When the agent needs elevated permissions or wants to execute risky operations, the approval system manages that process. This can range from automatic approval of safe operations to requiring explicit confirmation for file modifications or network access. Different tools offer varying levels of granularity.",
  },
  {
    number: 4,
    title: "Agent Runtime & LLM",
    subtitle: "The AI brain that plans tasks and generates solutions",
    description:
      "The core intelligence that receives your requests, analyzes your codebase, plans tasks, and generates code. This layer connects to language model APIs (Claude, GPT, Gemini, etc.), manages conversation history, and applies tool-specific templates to ensure consistent, high-quality outputs.",
  },
];

const exampleSteps = [
  {
    component: "User Interface",
    action: 'receives your request: "Add error handling to the API endpoints"',
  },
  {
    component: "Agent Runtime",
    action: "analyzes the codebase to find API endpoints and current error handling patterns",
  },
  {
    component: "Agent Runtime",
    action: "creates a plan: identify endpoints → add try-catch blocks → implement error middleware → add tests",
  },
  {
    component: "Approval Flow",
    action: 'presents the plan and waits for user confirmation: "Does this approach work?"',
  },
  {
    component: "Security Layer",
    action: "validates each file operation and command execution against configured policies",
  },
  {
    component: "Agent Runtime",
    action: "implements changes: modifies route handlers, creates error middleware, adds test coverage",
  },
  {
    component: "User Interface",
    action: 'displays a summary with diffs: "✓ Updated 5 files, added error middleware, created 8 tests"',
  },
];

const differentApproaches = [
  {
    aspect: "Model Selection",
    variations: [
      "Single provider per tool (Anthropic-only, OpenAI-only)",
      "Multi-model support (some tools let you choose)",
      "Specialized models for different tasks",
    ],
  },
  {
    aspect: "Sandboxing Strategy",
    variations: [
      "Read-only mode for safe exploration",
      "Workspace-scoped writes (default for most)",
      "Full system access with approval gates",
      "Container-based isolation (advanced tools)",
    ],
  },
  {
    aspect: "Context Management",
    variations: [
      "Automatic context gathering from project structure",
      "Selective file inclusion to optimize token usage",
      "Caching frequently accessed files",
      "Embeddings for semantic code search",
    ],
  },
];

export function ArchitecturePatternsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="architecture">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Architecture & Design Patterns</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              While each AI CLI tool has its own implementation, they share common architectural patterns. Understanding
              these layers helps you work more effectively with any tool and troubleshoot issues when they arise. The
              architecture typically consists of four main components working together to provide a secure, efficient
              development experience.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
        <CardContent className="p-8">
          <div className="space-y-6">
            {architectureLayers.map((layer, index) => (
              <div key={`arch-${layer.number}`}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="font-bold text-white text-xl">{layer.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold text-2xl">{layer.title}</h3>
                    <p className="mb-3 text-foreground/70 text-lg">{layer.subtitle}</p>
                    <p className="text-sm">{layer.description}</p>
                  </div>
                </div>
                {index < architectureLayers.length - 1 && <Separator className="my-6" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h3 className="mb-6 font-semibold text-2xl">How Different Tools Approach These Layers</h3>
        <div className="space-y-4">
          {differentApproaches.map((approach) => (
            <Card key={`approach-${approach.aspect}`}>
              <CardHeader>
                <CardTitle className="text-lg">{approach.aspect}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {approach.variations.map((variation, idx) => (
                    <li className="flex items-start gap-2 text-sm" key={`variation-${idx}`}>
                      <span className="mt-1 text-indigo-600 dark:text-indigo-400">•</span>
                      <span className="text-foreground/70">{variation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-2 border-indigo-200 bg-indigo-50 dark:bg-indigo-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            Typical Workflow Pattern
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="font-mono font-semibold text-indigo-700 text-lg dark:text-indigo-300">
              Analyze → Plan → Approve → Execute → Present
            </p>
            <p className="mt-3 text-foreground/70 text-sm">
              All modern AI CLI tools follow this pattern, though exact implementation varies by tool
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
