import { CheckCircle, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  {
    name: "Codex CLI",
    provider: "Open-source (uses OpenAI, others)",
    model: "Supports multiple providers",
    highlights: ["Terminal-native workflow", "Plans + apply_patch diffs", "Approval flows and sandboxing"],
  },
  {
    name: "Claude Code",
    provider: "Anthropic",
    model: "Uses latest Claude models",
    highlights: ["Strong reasoning", "Helpful refactors", "Safety features"],
  },
  {
    name: "Gemini CLI",
    provider: "Google",
    model: "Uses latest Gemini models",
    highlights: ["Multimodal support", "Code search integrations", "Cloud ecosystem"],
  },
  {
    name: "Amp",
    provider: "Sourcegraph",
    model: "Auto-selects best model",
    highlights: ["1M token context", "Subagent parallelization", "Oracle second opinions"],
  },
];

const useCases = [
  {
    title: "Rapid prototyping",
    description: "Quickly scaffold new features or entire applications",
    example: '"Create a REST API with user authentication and rate limiting"',
  },
  {
    title: "Code refactoring",
    description: "Modernize legacy code or apply architectural changes",
    example: '"Refactor this class-based component to use React hooks"',
  },
  {
    title: "Test generation",
    description: "Automatically generate comprehensive test suites",
    example: '"Add unit tests for all functions in src/utils/validation.ts"',
  },
  {
    title: "Bug investigation",
    description: "Analyze errors and implement fixes",
    example: '"Fix the memory leak in the subscription cleanup"',
  },
  {
    title: "Documentation",
    description: "Generate and maintain project documentation",
    example: '"Add JSDoc comments to all exported functions"',
  },
  {
    title: "Migration tasks",
    description: "Upgrade dependencies or migrate to new frameworks",
    example: '"Migrate from Vue 2 to Vue 3 with Composition API"',
  },
];

export function LandscapeSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="landscape">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
          <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="font-bold text-4xl">AI CLI Tools Landscape</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              <strong>AI CLI tools</strong> represent a new generation of development assistants that combine the power
              of large language models with direct access to your terminal and codebase. Unlike IDE plugins or web-based
              chat interfaces, these tools work at the command line level, giving them deeper integration with your
              development workflow and the ability to execute complex, multi-step tasks autonomously.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-2 font-semibold text-2xl">Available Tools</h3>
        <p className="mb-4 text-foreground/70 text-sm">
          Examples only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Card key={`tool-${tool.name}`}>
              <CardHeader>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <CardDescription className="text-base">
                  {tool.provider} • {tool.model}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tool.highlights.map((highlight) => (
                    <li className="flex items-start gap-2 text-sm" key={highlight}>
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Common Use Cases</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={`usecase-${useCase.title}`}>
              <CardHeader>
                <CardTitle className="text-base">{useCase.title}</CardTitle>
                <CardDescription className="text-sm">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/30">
                  <p className="text-foreground/70 text-xs italic">{useCase.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
