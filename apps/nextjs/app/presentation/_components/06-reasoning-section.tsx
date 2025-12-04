import { Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const reasoningComparison = [
  {
    tool: "Claude Code",
    method: "Thinking Keywords",
    levels: ["think", "think hard", "think harder", "ultrathink"],
    description: "Use natural language keywords to request deeper reasoning when needed",
  },
  {
    tool: "Codex CLI",
    method: "Reasoning Settings",
    levels: ["minimal", "medium", "high"],
    description: "Adjust models via CLI flags and set reasoning with config keys like model_reasoning_effort",
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
      codex: "Stay on medium for balance or drop to minimal for quick edits",
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
      codex: "Default: medium; raise to high when you need deeper tradeoffs",
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
      codex: "Use /model or CLI flags for stronger models with high reasoning",
    },
  },
];

export function ReasoningSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="reasoning">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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
            <Card className="border-2 border-blue-200 dark:border-blue-800" key={`reasoning-${item.tool}`}>
              <CardHeader>
                <CardTitle className="text-xl">{item.tool}</CardTitle>
                <CardDescription className="text-base">{item.method}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-foreground/70 text-sm">{item.description}</p>
                <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
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

      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardHeader>
          <CardTitle className="text-2xl">Codex CLI: Models & Configuration</CardTitle>
          <CardDescription className="text-base">
            Quick reference for tuning models and reasoning effort in Codex
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Model Selection</h4>
              <p className="text-foreground/70 text-sm">
                Choose whichever provider fits the task—Codex lets you target OpenAI, Anthropic, Google, and more from
                the same CLI.
              </p>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-900">
                <p className="mb-3 font-semibold text-foreground/70 text-xs uppercase tracking-wide">
                  Example commands
                </p>
                <div className="space-y-2">
                  <pre className="rounded border border-slate-200 bg-slate-950 p-2 text-slate-50 text-xs dark:border-slate-800">
                    <code>codex --model gpt-5</code>
                  </pre>
                  <pre className="rounded border border-slate-200 bg-slate-950 p-2 text-slate-50 text-xs dark:border-slate-800">
                    <code>codex --model gpt-5-codex</code>
                  </pre>
                  <pre className="rounded border border-slate-200 bg-slate-950 p-2 text-slate-50 text-xs dark:border-slate-800">
                    <code>/model</code>
                  </pre>
                </div>
              </div>
              <p className="text-foreground/70 text-xs">
                Use general-purpose models for ideation, code-tuned options for deeper refactors, and the in-session{" "}
                <code className="mx-1 rounded bg-slate-100 px-1 py-0.5 text-[0.65rem] text-slate-600 uppercase tracking-wide dark:bg-slate-900/60 dark:text-slate-300">
                  /model
                </code>{" "}
                command to pick a provider/model and reasoning effort interactively without leaving the chat.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Reasoning Effort</h4>
              <p className="text-foreground/70 text-sm">
                Codex exposes three reasoning tiers so you can balance speed and depth without leaving the terminal.
              </p>
              <div className="space-y-2">
                <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                  <code className="text-sm">minimal</code>
                  <span className="ml-2 text-foreground/70 text-xs">→ Fastest for straightforward edits</span>
                </div>
                <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                  <code className="text-sm">medium</code>
                  <span className="ml-2 text-foreground/70 text-xs">→ Balanced default for most tasks</span>
                </div>
                <div className="rounded-lg bg-white p-3 dark:bg-slate-900">
                  <code className="text-sm">high</code>
                  <span className="ml-2 text-foreground/70 text-xs">→ Deep reasoning for complex work</span>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-900">
                <p className="mb-2 font-semibold text-sm">Set from the CLI or config:</p>
                <pre className="rounded border border-slate-200 bg-slate-950 p-2 text-slate-50 text-xs dark:border-slate-800">
                  <code>codex -c model_reasoning_effort='high'</code>
                </pre>
                <p className="mt-2 text-foreground/70 text-xs">
                  The configuration key <code>model_reasoning_effort</code> accepts <code>minimal</code>,{" "}
                  <code>medium</code>, or <code>high</code>.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-white p-4 dark:bg-slate-900">
            <p className="mb-2 font-semibold text-foreground/70 text-sm uppercase tracking-wide">All-in-one launch</p>
            <pre className="rounded border border-slate-200 bg-slate-950 p-2 text-slate-50 text-sm dark:border-slate-800">
              <code>codex --yolo --model='gpt-5-codex' -c model_reasoning_effort='high'</code>
            </pre>
            <p className="mt-2 text-foreground/70 text-xs">
              Fire up Codex with experimental tools, the code-optimized model, and deeper reasoning in one command.
            </p>
          </div>
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
              Claude Code's thinking mode allows you to request extended reasoning when needed. Use these keywords to
              guide how thoroughly the model analyzes your problem:
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
                        <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                        <span className="text-foreground/70">{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
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

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
              <span className="text-foreground/70">
                <strong>Start light:</strong> Begin with default reasoning and scale up only when needed
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
              <span className="text-foreground/70">
                <strong>Match complexity:</strong> Use deeper reasoning for architecture decisions, security reviews,
                and complex refactoring
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
              <span className="text-foreground/70">
                <strong>Speed vs. quality:</strong> Higher reasoning levels take longer but produce more thoughtful
                solutions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
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
