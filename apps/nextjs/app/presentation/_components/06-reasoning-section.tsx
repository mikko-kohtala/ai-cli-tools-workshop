import { Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const reasoningComparison = [
  {
    tool: "Claude Code",
    method: "Thinking Keywords",
    levels: ["think", "think hard", "think harder", "ultrathink"],
    description: "Use natural language keywords to request deeper reasoning when needed",
  },
  {
    tool: "Codex CLI",
    method: "Reasoning Levels",
    levels: ["minimal", "low", "medium", "high"],
    description: "Switch models and reasoning effort with the /model command",
  },
];

const useCases = [
  {
    level: "Light/Fast",
    scenarios: [
      "Simple code formatting or style fixes",
      "Adding basic comments or documentation",
      "Straightforward bug fixes with obvious solutions",
      "Quick refactoring of variable names",
    ],
    tools: {
      claude: '"Add comments to this function"',
      codex: "Default medium level or use /model with low",
    },
  },
  {
    level: "Medium/Balanced",
    scenarios: [
      "Implementing new features with clear requirements",
      "Writing tests for existing functionality",
      "Moderate refactoring within a single file",
      "Debugging issues that require some investigation",
    ],
    tools: {
      claude: '"think about the best approach to implement..."',
      codex: "Default medium level (comes standard)",
    },
  },
  {
    level: "Deep/Complex",
    scenarios: [
      "Large-scale architectural changes",
      "Complex debugging across multiple files",
      "Performance optimization requiring analysis",
      "Security-sensitive code modifications",
      "Multi-hour autonomous coding sessions",
    ],
    tools: {
      claude: '"think harder about the security implications..."',
      codex: "/model with high reasoning for GPT-5-Codex",
    },
  },
];

export function ReasoningSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="reasoning">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
          <Brain className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        </div>
        <h2 className="font-bold text-4xl">Models & Reasoning</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Modern AI CLI tools offer different levels of reasoning depth, allowing you to balance speed and quality
              based on task complexity. Understanding how to control reasoning helps you work more efficiently—using
              fast responses for simple tasks and deeper thinking for complex problems.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h3 className="mb-6 font-semibold text-2xl">How Each Tool Handles Reasoning</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {reasoningComparison.map((item) => (
            <Card className="border-2 border-cyan-200 dark:border-cyan-800" key={`reasoning-${item.tool}`}>
              <CardHeader>
                <CardTitle className="text-xl">{item.tool}</CardTitle>
                <CardDescription className="text-base">{item.method}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-foreground/70 text-sm">{item.description}</p>
                <div className="rounded-lg bg-cyan-50 p-3 dark:bg-cyan-950/30">
                  <p className="mb-2 font-semibold text-sm">Available levels:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.levels.map((level) => (
                      <code
                        className="rounded bg-white px-2 py-1 text-xs dark:bg-slate-950"
                        key={`level-${item.tool}-${level}`}
                      >
                        {level}
                      </code>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mb-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
        <CardHeader>
          <CardTitle className="text-2xl">Codex CLI: Models & Configuration</CardTitle>
          <CardDescription className="text-base">
            Understanding model selection and reasoning levels in Codex
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="models">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="models">Models</TabsTrigger>
              <TabsTrigger value="levels">Reasoning Levels</TabsTrigger>
              <TabsTrigger value="switching">Switching</TabsTrigger>
            </TabsList>
            <TabsContent className="mt-4" value="models">
              <div className="space-y-4">
                <div>
                  <p className="mb-2 font-semibold text-sm">Default: GPT-5</p>
                  <p className="text-foreground/70 text-sm">
                    Codex runs GPT-5 by default, providing excellent performance for most coding tasks with balanced
                    speed and quality.
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-semibold text-sm">Optimized: GPT-5-Codex</p>
                  <p className="text-foreground/70 text-sm">
                    GPT-5-Codex is specifically optimized for agentic coding tasks. It adjusts reasoning time based on
                    task complexity and can work independently for 7+ hours on large, complex projects.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                  <p className="mb-2 text-sm">
                    <strong>Switch models:</strong>
                  </p>
                  <pre className="rounded border bg-slate-950 p-2 text-xs">
                    <code className="text-slate-50">codex --model gpt-5-codex</code>
                  </pre>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="levels">
              <div className="space-y-3">
                <p className="text-sm">GPT-5 exposes a reasoning_effort parameter with four levels:</p>
                <div className="space-y-2">
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                    <code className="text-sm">minimal</code>
                    <span className="ml-2 text-foreground/70 text-xs">→ Fastest, minimal reasoning tokens</span>
                  </div>
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                    <code className="text-sm">low</code>
                    <span className="ml-2 text-foreground/70 text-xs">→ Lightweight reasoning</span>
                  </div>
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                    <code className="text-sm">medium</code>
                    <span className="ml-2 text-foreground/70 text-xs">→ Default balanced mode</span>
                  </div>
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                    <code className="text-sm">high</code>
                    <span className="ml-2 text-foreground/70 text-xs">→ Deep reasoning for complex tasks</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="switching">
              <div className="space-y-4">
                <p className="text-sm">Use the /model command to switch between models and reasoning levels:</p>
                <div className="space-y-3">
                  <div>
                    <p className="mb-2 font-semibold text-sm">Switch to GPT-5-Codex with high reasoning:</p>
                    <pre className="rounded-lg bg-slate-950 p-3">
                      <code className="text-slate-50 text-sm">/model gpt-5-codex high</code>
                    </pre>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-sm">Return to default GPT-5 with medium reasoning:</p>
                    <pre className="rounded-lg bg-slate-950 p-3">
                      <code className="text-slate-50 text-sm">/model gpt-5 medium</code>
                    </pre>
                  </div>
                </div>
                <p className="mt-4 text-foreground/70 text-xs">
                  You can also specify the model and reasoning level when launching Codex with the --model flag.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
        <CardHeader>
          <CardTitle className="text-2xl">Claude Code: Thinking Mode</CardTitle>
          <CardDescription className="text-base">
            Request deeper reasoning with natural language keywords
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 space-y-4">
            <p className="text-foreground/70 text-sm">
              Claude 3.7 Sonnet introduced hybrid reasoning, allowing you to request extended thinking when needed. Use
              these keywords to control how deeply Claude thinks about your problem:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                <code className="font-semibold text-sm">think</code>
                <p className="mt-1 text-foreground/70 text-xs">Basic extended thinking</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                <code className="font-semibold text-sm">think hard</code>
                <p className="mt-1 text-foreground/70 text-xs">Moderate reasoning depth</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                <code className="font-semibold text-sm">think harder</code>
                <p className="mt-1 text-foreground/70 text-xs">Deep analysis and planning</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                <code className="font-semibold text-sm">ultrathink</code>
                <p className="mt-1 text-foreground/70 text-xs">Maximum reasoning effort</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-900">
            <p className="mb-2 font-semibold text-sm">Example usage:</p>
            <div className="space-y-2 text-sm">
              <div className="rounded bg-slate-50 p-2 dark:bg-slate-950">
                <span className="text-green-600">You:</span> think harder about the security implications of this
                authentication flow
              </div>
              <div className="rounded bg-slate-50 p-2 dark:bg-slate-950">
                <span className="text-blue-600">Claude:</span> [Extended thinking] Let me carefully analyze the security
                aspects...
              </div>
            </div>
          </div>
          <p className="mt-4 text-foreground/70 text-xs">
            <strong>Note:</strong> Claude supports interleaved thinking between tool calls, allowing it to reason after
            receiving results and make more sophisticated decisions.
          </p>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h3 className="mb-6 font-semibold text-2xl">When to Use Different Reasoning Levels</h3>
        <div className="space-y-4">
          {useCases.map((useCase) => (
            <Card key={useCase.level}>
              <CardHeader>
                <CardTitle className="text-lg">{useCase.level}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-2 font-semibold text-sm">Good for:</p>
                  <ul className="space-y-1">
                    {useCase.scenarios.map((scenario) => (
                      <li className="flex items-start gap-2 text-sm" key={scenario}>
                        <span className="mt-1 text-cyan-600 dark:text-cyan-400">•</span>
                        <span className="text-foreground/70">{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-cyan-50 p-3 dark:bg-cyan-950/30">
                    <p className="mb-1 font-semibold text-xs">Claude Code</p>
                    <code className="text-xs">{useCase.tools.claude}</code>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
                    <p className="mb-1 font-semibold text-xs">Codex CLI</p>
                    <code className="text-xs">{useCase.tools.codex}</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-cyan-600 dark:text-cyan-400">•</span>
              <span className="text-foreground/70">
                <strong>Start light:</strong> Begin with default reasoning and scale up only when needed
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-cyan-600 dark:text-cyan-400">•</span>
              <span className="text-foreground/70">
                <strong>Match complexity:</strong> Use deeper reasoning for architecture decisions, security reviews,
                and complex refactoring
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-cyan-600 dark:text-cyan-400">•</span>
              <span className="text-foreground/70">
                <strong>Speed vs. quality:</strong> Higher reasoning levels take longer but produce more thoughtful
                solutions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-cyan-600 dark:text-cyan-400">•</span>
              <span className="text-foreground/70">
                <strong>Experiment:</strong> Try different levels to find what works best for your workflow and task
                types
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
