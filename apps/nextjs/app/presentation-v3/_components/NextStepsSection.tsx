/** biome-ignore-all lint/suspicious/noArrayIndexKey: shadcn */
import { ArrowRight, Code, FileCode, Terminal, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const nextStepsCards = [
  {
    icon: Terminal,
    title: "Install & Explore",
    description: "Pick a CLI (Codex, Claude, Gemini, Amp Code, Opencode) and explore sandbox configurations",
    steps: [
      "Install 1–2 CLIs and authenticate",
      "Run in a small test project first",
      "Try different sandbox/approval modes",
      "Experiment with simple tasks",
    ],
    command: "<cli> --sandbox read-only\n# then try: list tasks, plan, small edits",
  },
  {
    icon: Code,
    title: "Script Common Commands",
    description: "Script common commands (lint/test) for quick reuse in sessions",
    scriptExample: '# scripts/checks.sh\nnpm run lint\nnpm run typecheck\nnpm test\necho "✓ All checks passed"',
    usageExample: 'You: "Run the standard checks"\nAgent: [executes scripts/checks.sh]',
  },
  {
    icon: Users,
    title: "Share Feedback",
    description: "Share feedback with your tool vendor/community to refine workflows",
    bullets: [
      "Report bugs or unexpected behavior",
      "Suggest new features or capabilities",
      "Share your use cases and workflows",
      "Contribute to documentation",
    ],
    link: undefined,
  },
  {
    icon: FileCode,
    title: "Integrate into Workflows",
    description: "Integrate AI CLI usage into onboarding guides and team playbooks",
    bullets: [
      "Add setup steps to onboarding docs",
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
        task: "Install an AI CLI and complete its tutorial",
      },
      {
        period: "Day 3-5:",
        task: "Use it for simple tasks (comments, tests, explaining code)",
      },
      {
        period: "Day 6-10:",
        task: "Try more complex tasks (refactors, small features)",
      },
      {
        period: "Day 11-14:",
        task: "Use it daily for at least one task. Track what works and what doesn’t.",
      },
    ],
  },
  intermediate: {
    title: "Week 3-4: Building Proficiency",
    steps: [
      {
        period: "Week 3:",
        task: "Create custom command templates. Set up an ignore file and optimize performance.",
      },
      {
        period: "Week 4:",
        task: "Use your chosen CLI for a complete feature end-to-end. Practice planning, execution, testing, and committing.",
      },
      {
        period: "Bonus:",
        task: "Experiment with approval policies and sandbox modes for different project types.",
      },
    ],
  },
  advanced: {
    title: "Week 5+: Power User",
    steps: [
      {
        period: "Integration:",
        task: "Set up CI/CD workflows. Create team standards and shared configurations.",
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
        task: "Contribute to your tool’s ecosystem or create plugins for your needs.",
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
              You’ve seen the fundamentals of AI CLIs. Now put them into practice. Here’s a simple roadmap for adopting
              AI CLIs in your workflow and getting the most value from them.
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
                    <pre className="rounded border bg-slate-50 p-3 text-xs dark:bg-slate-900/30">
                      <code>{card.usageExample}</code>
                    </pre>
                  </>
                )}
                {card.bullets && (
                  <>
                    <p className="text-foreground/70">
                      {card.title === "Share Feedback" ? "Help improve your chosen tool:" : "Team adoption strategies:"}
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
