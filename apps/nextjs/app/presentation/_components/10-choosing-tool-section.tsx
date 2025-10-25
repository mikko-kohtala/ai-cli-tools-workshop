import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const decisionFactors = [
  {
    factor: "Model Quality & Reasoning",
    questions: ["How complex are your typical tasks?", "Do you need deep reasoning for architecture decisions?"],
    guidance:
      "Claude Code often excels at deeper reasoning and complex refactors. OpenAI-based setups tend to be fast and versatile. Match model choice to your task complexity.",
  },
  {
    factor: "Speed & Responsiveness",
    questions: ["Do you need instant feedback?", "Are you working on quick iterations?"],
    guidance:
      "Some tools prioritize speed over depth. If you're prototyping rapidly or making many small changes, faster models may be better.",
  },
  {
    factor: "Ecosystem & Integration",
    questions: ["What tools do you already use?", "Do you need specific integrations?"],
    guidance:
      "Consider existing subscriptions (OpenAI, Anthropic, Google) and whether the tool integrates with your IDE, CI/CD, or team workflows.",
  },
  {
    factor: "Pricing & Access",
    questions: ["What's your budget?", "Do you have API access already?"],
    guidance:
      "Some tools require paid API access (OpenAI, Anthropic), others may have free tiers or different pricing models. Factor in usage costs.",
  },
];

const toolProfiles = [
  {
    name: "Claude Code",
    provider: "Anthropic",
    bestFor: ["Complex refactoring", "Architecture decisions", "Safety-critical code", "Deep reasoning tasks"],
    consider: "Strong safety features, excellent at understanding context, may be slower for simple tasks",
    getStarted: "See the tool's documentation for installation and setup.\nRequires: Anthropic API key",
  },
  {
    name: "Codex CLI",
    provider: "OpenAI",
    bestFor: ["Rapid prototyping", "Quick iterations", "Broad language support", "Fast execution"],
    consider: "Very fast, versatile, large ecosystem, may need more guidance for complex tasks",
    getStarted: "See this workshop repo for setup details.\nRequires: API key for your chosen provider (e.g., OpenAI)",
  },
  {
    name: "Gemini CLI",
    provider: "Google",
    bestFor: ["Multimodal tasks", "Google Cloud integration", "Code search", "Large context windows"],
    consider: "Strong at code search, integrates well with Google Cloud",
    getStarted: "See Google AI Studio / Cloud documentation for setup.\nRequires: Google Cloud account",
  },
  {
    name: "Amp",
    provider: "Sourcegraph",
    bestFor: ["Team collaboration", "Parallel task execution", "Complex debugging", "1M token context needs"],
    consider: "Auto-selects optimal models, thread sharing, subagents for parallel work, Oracle for complex reasoning",
    getStarted: "VS Code extension (works with Cursor, Windsurf) or CLI\nRequires: Amp account (free tier available)",
  },
];

export function ChoosingToolSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="choosing">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
          <ArrowRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="font-bold text-4xl">Choosing Your Tool</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              With several excellent AI CLI tools available, how do you choose? The "best" tool depends on your specific
              needs, existing subscriptions, and the types of tasks you do most often. Let's explore the key factors and
              help you make an informed decision.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Key Decision Factors</h3>
        <div className="space-y-4">
          {decisionFactors.map((item) => (
            <Card key={`factor-${item.factor}`}>
              <CardHeader>
                <CardTitle className="text-lg">{item.factor}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <p className="mb-2 font-semibold text-sm">Ask yourself:</p>
                  <ul className="list-inside list-disc space-y-1 text-sm">
                    {item.questions.map((q, idx) => (
                      <li className="text-foreground/70" key={`q-${idx}`}>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-foreground/80 text-sm">{item.guidance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Tool Profiles</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {toolProfiles.map((tool) => (
            <Card className="border-2" key={`tool-${tool.name}`}>
              <CardHeader>
                <CardTitle>{tool.name}</CardTitle>
                <CardDescription>{tool.provider}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 font-semibold text-sm">Best for:</p>
                  <ul className="space-y-1 text-sm">
                    {tool.bestFor.map((item, idx) => (
                      <li className="flex items-start gap-2" key={`best-${idx}`}>
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-sm">Consider:</p>
                  <p className="text-foreground/70 text-sm">{tool.consider}</p>
                </div>
                <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                  <p className="mb-2 font-semibold text-xs">Getting started:</p>
                  <pre className="text-xs">
                    <code>{tool.getStarted}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
