/** biome-ignore-all lint/suspicious/noArrayIndexKey: shadcn */
import { ArrowRight, Code, FileCode, Terminal, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const nextStepsCards = [
  {
    icon: Terminal,
    title: "Install & Explore",
    description: "Install and run Codex CLI locally; explore sandbox configurations",
    steps: [
      "Install Codex CLI on your machine",
      "Run it in a small test project first",
      "Try different sandbox modes",
      "Experiment with simple tasks",
    ],
    command: "npm install -g @openai/codex-cli\ncd test-project\ncodex --sandbox read-only",
  },
  {
    icon: Code,
    title: "Script Common Commands",
    description: "Script common commands (lint/test) for quick reuse in sessions",
    scriptExample: '# .codex/commands/test.sh\nnpm run lint\nnpm run typecheck\nnpm test\necho "✓ All checks passed"',
    usageExample: 'You: "Run the standard checks"\nCodex: [executes .codex/commands/test.sh]',
  },
  {
    icon: Users,
    title: "Share Feedback",
    description: "Share feedback with the Codex team to refine agent workflows",
    bullets: [
      "Report bugs or unexpected behavior",
      "Suggest new features or capabilities",
      "Share your use cases and workflows",
      "Contribute to documentation",
    ],
    link: "https://github.com/openai/codex/issues",
  },
  {
    icon: FileCode,
    title: "Integrate into Workflows",
    description: "Integrate CLI usage into onboarding guides and team playbooks",
    bullets: [
      "Add Codex CLI setup to onboarding docs",
      "Create team-specific command templates",
      "Document best practices for your codebase",
      "Share success stories within the team",
    ],
  },
];

const learningPaths = {
  beginner: {
    title: "Week 1-2: Getting Started",
    steps: [
      {
        period: "Day 1-2:",
        task: "Install Codex CLI and complete the interactive tutorial",
      },
      {
        period: "Day 3-5:",
        task: "Use it for simple tasks (adding comments, writing tests, explaining code)",
      },
      {
        period: "Day 6-10:",
        task: "Try more complex tasks (refactoring, adding features)",
      },
      {
        period: "Day 11-14:",
        task: "Use it daily for at least one task. Track what works well and what doesn't.",
      },
    ],
  },
  intermediate: {
    title: "Week 3-4: Building Proficiency",
    steps: [
      {
        period: "Week 3:",
        task: "Create custom command templates for your workflow. Set up .codexignore and optimize performance.",
      },
      {
        period: "Week 4:",
        task: "Use Codex for a complete feature from start to finish. Practice planning, execution, testing, and committing.",
      },
      {
        period: "Bonus:",
        task: "Experiment with different approval policies and sandbox modes for different project types.",
      },
    ],
  },
  advanced: {
    title: "Week 5+: Power User",
    steps: [
      {
        period: "Integration:",
        task: "Set up CI/CD workflows using Codex. Create team standards and shared configurations.",
      },
      {
        period: "Optimization:",
        task: "Fine-tune context windows, create advanced command chains, use checkpoints strategically.",
      },
      {
        period: "Teaching:",
        task: "Help onboard team members. Share your learnings and create internal documentation.",
      },
      {
        period: "Contributing:",
        task: "Contribute to the Codex CLI open-source project or create plugins for your specific needs.",
      },
    ],
  },
};

export function NextStepsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="next-steps">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
          <ArrowRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="font-bold text-4xl">Next Steps</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              You've learned the fundamentals of Codex CLI. Now it's time to put this knowledge into practice. Here's
              your roadmap for integrating Codex CLI into your development workflow and getting the most value from it.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {nextStepsCards.map((card) => (
          <Card className="border-2 transition-colors hover:border-emerald-200" key={`next-${card.title}`}>
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <card.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                {card.steps && (
                  <>
                    <p className="text-foreground/70">Start with these steps:</p>
                    <ol className="list-inside list-decimal space-y-2 text-foreground/70">
                      {card.steps.map((step, idx) => (
                        <li key={`step-${idx}`}>{step}</li>
                      ))}
                    </ol>
                  </>
                )}
                {card.command && (
                  <pre className="mt-3 rounded bg-slate-950 p-3 text-slate-50 text-xs">
                    <code>{card.command}</code>
                  </pre>
                )}
                {card.scriptExample && (
                  <>
                    <p className="text-foreground/70">Create reusable workflows:</p>
                    <pre className="rounded bg-slate-950 p-3 text-slate-50 text-xs">
                      <code>{card.scriptExample}</code>
                    </pre>
                  </>
                )}
                {card.usageExample && (
                  <>
                    <p className="mt-3 text-foreground/70">Use in sessions:</p>
                    <pre className="rounded border bg-slate-50 dark:bg-slate-900/30 p-3 text-xs">
                      <code>{card.usageExample}</code>
                    </pre>
                  </>
                )}
                {card.bullets && (
                  <>
                    <p className="text-foreground/70">
                      {card.title === "Share Feedback" ? "Help improve Codex CLI:" : "Team adoption strategies:"}
                    </p>
                    <ul className="list-inside list-disc space-y-2 text-foreground/70">
                      {card.bullets.map((bullet, idx) => (
                        <li key={`bullet-${idx}`}>{bullet}</li>
                      ))}
                    </ul>
                  </>
                )}
                {card.link && (
                  <a className="mt-3 inline-flex items-center gap-2 text-emerald-600 hover:underline" href={card.link}>
                    <span>GitHub Issues</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
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
              <CardTitle>{learningPaths.beginner.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-inside list-decimal space-y-3 text-sm">
                {learningPaths.beginner.steps.map((step, idx) => (
                  <li key={`beginner-${idx}`}>
                    <span className="font-semibold">{step.period}</span> {step.task}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="mt-4" value="intermediate">
          <Card>
            <CardHeader>
              <CardTitle>{learningPaths.intermediate.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-inside list-decimal space-y-3 text-sm">
                {learningPaths.intermediate.steps.map((step, idx) => (
                  <li key={`intermediate-${idx}`}>
                    <span className="font-semibold">{step.period}</span> {step.task}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="mt-4" value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>{learningPaths.advanced.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-inside list-decimal space-y-3 text-sm">
                {learningPaths.advanced.steps.map((step, idx) => (
                  <li key={`advanced-${idx}`}>
                    <span className="font-semibold">{step.period}</span> {step.task}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
