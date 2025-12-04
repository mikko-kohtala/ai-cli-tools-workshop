import { Code2, Database, GitBranch, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const weeks = [
  {
    id: "week-1",
    icon: Lightbulb,
    title: "Week 1 – Foundations, Tools & Simple Agents",
    theme: "Mindset, AI CLI tools, prompting, and first agents",
    summary:
      "Get oriented, install the core tools, and learn how to talk to models effectively. You will also meet the concept of agents and build your first simple agent-style workflow in a safe, local environment.",
    learn: [
      "Mental model for LLMs: strengths, blind spots, and failure modes",
      "Core AI CLI tools: Claude Code, Codex CLI, Gemini CLI, and Amp (at a high level)",
      "Prompting fundamentals: roles, constraints, examples, and how to give feedback to the model",
      "Security basics: what not to paste, how to keep secrets out of prompts, and IP considerations",
    ],
    practice: [
      "Install and configure the CLI tools on your own machine",
      "Set up a small but real project repository for the 6-week journey",
      "Use AI to scaffold the initial project structure, README, and simple functions",
      "Run a first agent-style script that reads files and proposes small edits under your supervision",
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
      "Shift from vague ideas to clear, testable requirements. Learn to use AI as a thinking partner for product discovery, planning, and architecture, while you stay in charge of scope and priorities.",
    learn: [
      "Translating problem statements into user stories, use cases, and acceptance criteria",
      "Asking AI for &quot;questions to ask&quot; stakeholders and surfacing hidden assumptions",
      "Using AI to propose architecture options and reason about trade-offs",
      "Capturing decisions in short design docs and Architecture Decision Records (ADRs)",
    ],
    practice: [
      "Refine the project idea into a small but realistic feature set",
      "Draft a backlog (epics, tickets) with AI assistance, then prune it manually",
      "Produce a short design doc and 1–2 ADRs with AI-drafted, human-edited content",
      "Map which parts of the plan could later be automated or supported by agents",
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
      "Bring the plan to life in code. Combine traditional AI pair-programming with small, focused agents that can read files, call tools, and propose changes—while you keep control over what actually lands in the repo.",
    learn: [
      "Patterns for AI-assisted implementation: from &quot;describe&quot; to scaffolding and refinement",
      "Working effectively with existing codebases using explanations and module summaries",
      "Designing small agent workflows that chain tool calls and model reasoning",
      "Best practices for keeping humans in the loop when agents touch real code",
    ],
    practice: [
      "Implement core features using AI-generated scaffolds plus manual review and edits",
      "Use AI to navigate and understand unfamiliar parts of your own project",
      "Build a single-agent workflow that can search the codebase and propose a multi-file refactor",
      "Document an &quot;agent contract&quot;: what the agent is allowed to do and how you review its output",
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
      "Use AI and agents to improve reliability instead of just speed. Let the tools help design test strategies, generate test cases, and investigate failures—while you decide when something is &quot;good enough&quot; to ship.",
    learn: [
      "Designing test strategies with AI: what to test, and at which level",
      "Generating and refining unit, integration, and end-to-end tests from requirements and code",
      "Using AI to reason about failing tests, logs, and stack traces",
      "Positioning AI as a first-pass reviewer for style, complexity, and potential bugs",
    ],
    practice: [
      "Expand test coverage for the main flows of your project using AI-generated tests",
      "Use AI to investigate at least 2–3 deliberately broken scenarios or regressions",
      "Apply AI suggestions for refactors and readability improvements in a controlled way",
      "Experiment with having an agent propose tests or checks whenever a new feature is added",
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
      "Connect your project to the real world. Use AI to draft infrastructure, CI/CD, and observability, and explore what it looks like to run agents safely in automation and operations contexts.",
    learn: [
      "Using AI to draft Dockerfiles, CI pipelines, and basic infrastructure-as-code snippets",
      "Reasoning with AI about configuration, environments, and secrets without leaking credentials",
      "Core ideas for running agents in production-like environments with guardrails",
      "Documenting operations and runbooks with AI-drafted, human-edited text",
    ],
    practice: [
      "Containerise and (optionally) deploy your project to a simple environment",
      "Draft a CI pipeline that runs tests, lints, and basic checks",
      "Design a small, recurring agent workflow (for example, updating documentation or running a health check)",
      "Create at least one runbook where AI helps describe how to respond to a simulated incident",
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
      "Zoom out from the project to the organisation. Design a capstone that uses AI and agents to support a real company process, and run a mini SDLC cycle from idea to demo and documentation.",
    learn: [
      "Mapping AI opportunities across product, support, documentation, analytics, and operations",
      "Designing small internal tools or assistants that wrap your existing systems and data",
      "Governance basics: ownership, human-in-the-loop review, and risk management",
      "How to evaluate where AI genuinely adds leverage versus where it adds risk or noise",
    ],
    practice: [
      "Define a capstone feature or internal tool and plan it with AI support",
      "Implement and (optionally) deploy a demo that showcases AI-assisted or agentic workflows",
      "Produce lightweight docs: design summary, ADRs, runbook, and user-oriented explanation",
      "Write a short reflection on how you will bring these practices into your real team or company",
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
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-1">
                      <p className="font-semibold text-[11px] text-slate-600 uppercase tracking-wide dark:text-slate-300">
                        You will learn
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-xs">
                        {week.learn.map((item) => (
                          <li className="flex gap-2" key={item}>
                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-[11px] text-slate-600 uppercase tracking-wide dark:text-slate-300">
                        You will practice
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-xs">
                        {week.practice.map((item) => (
                          <li className="flex gap-2" key={item}>
                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
