import { Code2, Database, GitBranch, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const weeks = [
  {
    id: "week-1",
    icon: Lightbulb,
    title: "Week 1 – Foundations & Tooling",
    theme: "Mindset, AI CLI tools, and basic prompting",
    focus: [
      "Mental model for LLMs: capabilities and limitations",
      "Set up Claude Code, Codex CLI, and other AI CLI tools",
      "Prompting fundamentals and safe usage guidelines",
      "Choose a simple but real project for the 6-week journey",
    ],
    outcome:
      "Participants can install, configure, and confidently run core AI CLI tools for everyday development tasks.",
  },
  {
    id: "week-2",
    icon: Users,
    title: "Week 2 – Requirements & Planning with AI",
    theme: "Using AI at the front of the SDLC",
    focus: [
      "Turn problem statements into user stories and acceptance criteria",
      "Use AI to explore edge cases and clarify open questions",
      "Draft roadmaps, milestones, and tickets with AI help",
      "Capture decisions in lightweight design docs and ADRs",
    ],
    outcome:
      "Participants can co-create requirements and plans with AI while staying in control of scope, tradeoffs, and priorities.",
  },
  {
    id: "week-3",
    icon: Code2,
    title: "Week 3 – Implementation Workflows",
    theme: "Pair-programming with AI across the codebase",
    focus: [
      "Use AI to scaffold features, modules, and boilerplate",
      "Navigate unfamiliar code using explanations and summaries",
      "Iterative loops: describe → generate → review → refine",
      "Feed context from files, diffs, and error messages effectively",
    ],
    outcome:
      "Participants can integrate AI into daily coding without losing code comprehension or ownership of design decisions.",
  },
  {
    id: "week-4",
    icon: ShieldCheck,
    title: "Week 4 – Testing, Quality & Debugging",
    theme: "Reliability, safety, and maintainability with AI support",
    focus: [
      "Generate and refine unit, integration, and end-to-end tests",
      "Use AI to reason about failing tests, logs, and stack traces",
      "Ask AI for refactor suggestions and quality improvements",
      "Use AI as a first-pass reviewer while keeping human judgment central",
    ],
    outcome:
      "Participants can use AI to improve test coverage and code quality while maintaining control over what ships to production.",
  },
  {
    id: "week-5",
    icon: Database,
    title: "Week 5 – DevOps, Deployment & Operations",
    theme: "AI-assisted infrastructure, CI/CD, and observability",
    focus: [
      "Draft Dockerfiles, CI pipelines, and basic infrastructure-as-code",
      "Use AI to reason about configuration, environments, and secrets (without sharing real credentials)",
      "Interpret logs, metrics, and incidents with AI support",
      "Generate runbooks and operational documentation from real scenarios",
    ],
    outcome:
      "Participants can lean on AI to accelerate deployment and operations while respecting security and reliability constraints.",
  },
  {
    id: "week-6",
    icon: GitBranch,
    title: "Week 6 – Company Processes & Capstone",
    theme: "AI beyond code and a full SDLC capstone",
    focus: [
      "Map where AI can support product, support, docs, and analytics",
      "Design simple internal AI-powered tools or assistants conceptually",
      "Run a mini end-to-end SDLC loop for a capstone feature",
      "Reflect on where AI helped, where it struggled, and how to adopt it safely at work",
    ],
    outcome:
      "Participants finish with a capstone project, a realistic view of AI across the company, and a personal adoption playbook.",
  },
];

export function WeeklyOutlineSection() {
  return (
    <section className="w-full px-8" id="weeks">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Week-by-Week Structure</h2>
          <p className="text-muted-foreground text-sm">
            The curriculum follows one continuous project and revisits the same codebase as you move from requirements
            to implementation, testing, deployment, and organization-wide impact.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {weeks.map((week) => {
            const Icon = week.icon;
            return (
              <Card className="h-full" id={week.id} key={week.id}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900/40">
                      <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{week.title}</CardTitle>
                      <CardDescription className="text-xs">{week.theme}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-1 text-muted-foreground text-xs">
                    {week.focus.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="border-t pt-3 text-xs">
                  <p className="text-slate-700 dark:text-slate-300">{week.outcome}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
