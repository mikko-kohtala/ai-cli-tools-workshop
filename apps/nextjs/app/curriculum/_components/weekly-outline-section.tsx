import { Code2, Database, GitBranch, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const weeks = [
  {
    id: "week-1",
    icon: Lightbulb,
    title: "Week 1 – Foundations, Tools & Simple Agents",
    theme: "Mindset, AI CLI tools, prompting, and first agents",
    summary:
      "Get oriented, install core tools, and meet the concept of agents while working on a small but real project.",
    steps: [
      "Install and configure the main AI CLI tools on your machine.",
      "Set up a single project that you will use for the full 6 weeks.",
      "Learn basic prompting, context, and safety habits for everyday use.",
      "Run a first simple agent-style workflow that reads files and suggests small edits.",
    ],
    outcome:
      "Participants can install core AI CLI tools, understand what an agent is, and run a first simple agent-style workflow on their machine.",
  },
  {
    id: "week-2",
    icon: Users,
    title: "Week 2 – Requirements & Planning with AI",
    theme: "Using AI at the front of the SDLC",
    summary:
      "Turn vague ideas into clear, testable requirements and a realistic plan, with AI acting as a structured thinking partner.",
    steps: [
      "Translate the project idea into user stories and acceptance criteria.",
      "Use AI to surface open questions, risks, and edge cases.",
      "Draft and then prune a small, realistic backlog and milestone plan.",
      "Capture key decisions in a short design doc and 1–2 ADRs.",
    ],
    outcome:
      "Participants can co-create requirements and plans with AI while staying in control of scope, tradeoffs, and priorities.",
  },
  {
    id: "week-3",
    icon: Code2,
    title: "Week 3 – Implementation & Agentic Workflows",
    theme: "Pair-programming with AI and building practical agents",
    summary:
      "Start shipping real code by pairing with AI and introducing focused agents that can safely work on your codebase.",
    steps: [
      "Implement core features using AI-generated scaffolds plus manual review.",
      "Use AI to explain unfamiliar parts of the project and suggest refactors.",
      "Design a small agent workflow that can search the repo and propose changes.",
      "Write down an “agent contract” that defines what your agent is allowed to do.",
    ],
    outcome:
      "Participants can integrate AI into daily coding and build simple, reliable agents that automate scoped development tasks.",
  },
  {
    id: "week-4",
    icon: ShieldCheck,
    title: "Week 4 – Testing, Quality & Debugging",
    theme: "Reliability, safety, and maintainability with AI support",
    summary:
      "Use AI for reliability: tests, debugging, and code quality, so the project becomes easier and safer to change.",
    steps: [
      "Ask AI to propose a test strategy for your main flows.",
      "Generate and refine unit or integration tests using AI suggestions.",
      "Debug a few failing scenarios by pasting logs or stack traces into AI tools.",
      "Use AI as a first-pass reviewer to spot style and complexity issues.",
    ],
    outcome:
      "Participants can use AI to improve test coverage and code quality while maintaining control over what ships to production.",
  },
  {
    id: "week-5",
    icon: Database,
    title: "Week 5 – DevOps, Orchestration & Agent Operations",
    theme: "AI-assisted infrastructure, CI/CD, and running agents in production-like environments",
    summary:
      "Connect your project to infrastructure, CI/CD, and operations, and see how agents can run safely in automation contexts.",
    steps: [
      "Draft a Dockerfile and simple CI pipeline with AI assistance.",
      "Talk through configuration and environment questions with AI (without sharing real secrets).",
      "Design a small recurring or event-driven agent workflow, such as a health check or docs refresher.",
      "Create at least one runbook where AI helps describe how to handle a simulated incident.",
    ],
    outcome:
      "Participants can lean on AI and agents to accelerate deployment and operations while respecting security and reliability constraints.",
  },
  {
    id: "week-6",
    icon: GitBranch,
    title: "Week 6 – Company Processes & Capstone",
    theme: "AI beyond code and a full SDLC capstone",
    summary:
      "Zoom out to real company processes and deliver a capstone that shows how AI and agents could help your team.",
    steps: [
      "Map where AI and agents could help in product, support, docs, analytics, or operations.",
      "Define a small capstone feature or internal tool and plan it with AI support.",
      "Build and (optionally) deploy a demo that showcases the workflow.",
      "Write lightweight docs and a short reflection on how you would use this at work.",
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
                  <p className="text-muted-foreground text-xs">{week.summary}</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-[11px] text-slate-600 uppercase tracking-wide dark:text-slate-300">
                      Key steps this week
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-xs">
                      {week.steps.map((item) => (
                        <li className="flex gap-2" key={item}>
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
