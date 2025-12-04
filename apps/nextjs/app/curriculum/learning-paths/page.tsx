import { BarChart3, Code2, Palette, Share2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weekLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"] as const;

type WeekLabel = (typeof weekLabels)[number];

type LearningPath = {
  id: string;
  name: string;
  roleLabel: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  colorClass: string;
  description: string;
  weeks: Record<WeekLabel, string>;
};

const paths: LearningPath[] = [
  {
    id: "developer",
    name: "Developer path",
    roleLabel: "Software developers",
    icon: Code2,
    colorClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    description: "Focus on AI-assisted coding, agents for code workflows, testing, and DevOps.",
    weeks: {
      "Week 1":
        "Foundations: install tools, learn prompting and agents basics, and choose a small service or app to build.",
      "Week 2":
        "Use AI to turn feature ideas into user stories, acceptance criteria, and simple architecture sketches.",
      "Week 3":
        "Pair-program with AI to implement core features, refactor existing code, and keep tests green.",
      "Week 4":
        "Lean on AI for tests, debugging, and code review while you stay accountable for quality.",
      "Week 5":
        "Collaborate with other paths to ship a shared feature, using AI and simple agents in CI or tooling.",
      "Week 6":
        "Complete a capstone feature and reflect on how you will use AI and agents in your daily dev workflow.",
    },
  },
  {
    id: "product",
    name: "Product path",
    roleLabel: "Product managers & owners",
    icon: Share2,
    colorClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    description: "Focus on discovery, requirements, prioritisation, and cross-functional coordination with AI.",
    weeks: {
      "Week 1":
        "Foundations: learn AI/agents language, set up tools, and pick a product slice to follow for 6 weeks.",
      "Week 2":
        "Use AI to explore customer problems, write user stories, and build a realistic, prioritised roadmap.",
      "Week 3":
        "Refine specs and acceptance criteria with AI; use it to simulate edge cases and user scenarios.",
      "Week 4":
        "Draft release notes, launch checklists, and experiment ideas with AI, then tighten them manually.",
      "Week 5":
        "Coordinate the shared feature across all paths, using AI for planning, status updates, and stakeholder comms.",
      "Week 6":
        "Define a capstone internal or external feature and document how AI will support your product practice.",
    },
  },
  {
    id: "designer",
    name: "Design path",
    roleLabel: "Designers & UX",
    icon: Palette,
    colorClass: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
    description: "Focus on flows, copy, prototyping, and research support using AI as a creative partner.",
    weeks: {
      "Week 1":
        "Foundations: learn core AI concepts, set up tools, and select a flow or experience to focus on.",
      "Week 2":
        "Use AI to map user journeys, draft UX copy, and explore alternative flows for the chosen experience.",
      "Week 3":
        "Generate UI variations and low-fidelity prototype ideas with AI, then refine and critique them yourself.",
      "Week 4":
        "Use AI to test clarity of flows, improve microcopy, and surface accessibility or usability issues.",
      "Week 5":
        "Shape the UX of the shared feature, using AI to support flows, copy, and simple prototype descriptions.",
      "Week 6":
        "Create a capstone UX narrative showing how AI supports your design process from idea to handoff.",
    },
  },
  {
    id: "sales",
    name: "Sales & customer path",
    roleLabel: "Sales, CS & go-to-market",
    icon: Users,
    colorClass: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    description: "Focus on messaging, outreach, preparation, and customer insight using AI safely.",
    weeks: {
      "Week 1":
        "Foundations: set up tools, learn safe prompting, and pick a product or offer to use as a running example.",
      "Week 2":
        "Use AI to describe ICPs, draft outreach sequences, and tailor messaging for key segments.",
      "Week 3":
        "Practice with AI as a role-play partner for calls, demos, and objection handling; refine question playbooks.",
      "Week 4":
        "Feed meeting notes or call summaries (sanitised) to AI to extract insights and next-step suggestions.",
      "Week 5":
        "Prepare story, talk tracks, and enablement assets for the shared feature in collaboration with other paths.",
      "Week 6":
        "Design a capstone workflow where AI helps you prepare, run, and follow up on customer conversations.",
    },
  },
  {
    id: "data-ops",
    name: "Data & ops path",
    roleLabel: "Data, analytics & operations",
    icon: BarChart3,
    colorClass: "bg-slate-200 text-slate-800 dark:bg-slate-800/60 dark:text-slate-100",
    description: "Focus on questions, metrics, dashboards, and operational runbooks with AI support.",
    weeks: {
      "Week 1":
        "Foundations: align on AI/agents language, set up tools, and pick a simple analytics or ops scenario.",
      "Week 2":
        "Use AI to turn business questions into metrics, events, and initial dashboard or report designs.",
      "Week 3":
        "Generate and review example queries or analytics code with AI, and iterate on a small dashboard or report.",
      "Week 4":
        "Use AI to debug data issues, annotate dashboards, and draft metric definitions and checklists.",
      "Week 5":
        "Define metrics, logs, and checks for the shared feature, with AI helping design instrumentation and alerts.",
      "Week 6":
        "Create a capstone where AI supports an ongoing analytics or operations process end-to-end.",
    },
  },
];

export default function LearningPathsPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-10 py-4">
        <section className="w-full px-8">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl">Role-based Learning Paths</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              The core curriculum runs for 6 weeks. Week 1 gives everyone the same foundations in AI, agents, and tools.
              Weeks 2–4 branch into role-specific paths, and Weeks 5–6 bring the group back together around a shared
              project and capstone.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              You can run this with mixed teams—developers, product, design, sales, and data/ops—who share one project
              but follow different emphasis in the middle of the program.
            </p>
          </div>
        </section>

        <section className="w-full px-8">
          <div className="mx-auto max-w-5xl space-y-4">
            <h2 className="font-semibold text-xl">Who the paths are for</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {paths.map((path) => {
                const Icon = path.icon;
                return (
                  <Card key={path.id} className="h-full">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${path.colorClass}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-sm">{path.name}</CardTitle>
                        <p className="text-muted-foreground text-[11px]">{path.roleLabel}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-xs">{path.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full px-8">
          <div className="mx-auto max-w-5xl space-y-4">
            <h2 className="font-semibold text-xl">6-week branching paths</h2>
            <p className="text-muted-foreground text-sm">
              Week 1 and Weeks 5–6 are shared across all roles. Weeks 2–4 pivot into distinct paths so each role can
              practice AI and agents directly in their day-to-day work, then re-align on a shared feature and capstone.
            </p>
            <div className="overflow-x-auto rounded-lg border bg-white dark:border-slate-800 dark:bg-slate-950/40">
              <div className="min-w-[760px]">
                <div className="flex border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
                  <div className="w-40 flex-shrink-0 px-3 py-2">Path</div>
                  {weekLabels.map((week) => (
                    <div
                      key={week}
                      className="flex-1 px-3 py-2 text-center [&:nth-child(3)]:bg-blue-50/50 [&:nth-child(4)]:bg-blue-50/50 [&:nth-child(5)]:bg-blue-50/50 dark:[&:nth-child(3)]:bg-slate-900/40 dark:[&:nth-child(4)]:bg-slate-900/40 dark:[&:nth-child(5)]:bg-slate-900/40"
                    >
                      {week}
                    </div>
                  ))}
                </div>
                {paths.map((path) => {
                  const Icon = path.icon;
                  return (
                    <div
                      key={path.id}
                      className="flex border-b border-slate-100 text-[11px] last:border-b-0 dark:border-slate-800"
                    >
                      <div className="w-40 flex-shrink-0 border-r border-slate-100 px-3 py-3 dark:border-slate-800">
                        <div className="mb-1 flex items-center gap-2">
                          <span className={`flex h-6 w-6 items-center justify-center rounded-md ${path.colorClass}`}>
                            <Icon className="h-3 w-3" />
                          </span>
                          <span className="font-semibold text-slate-800 text-[11px] leading-tight dark:text-slate-100">
                            {path.name}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-[10px] leading-snug">{path.roleLabel}</p>
                      </div>
                      {weekLabels.map((week, index) => {
                        const text = path.weeks[week];
                        const isBranchWeek = index >= 1 && index <= 3; // Weeks 2–4
                        const sharedLabel = index === 0 || index >= 4;
                        return (
                          <div
                            key={week}
                            className={`flex flex-1 flex-col gap-1 border-r border-slate-100 px-3 py-3 text-[10px] leading-snug last:border-r-0 dark:border-slate-800 ${
                              sharedLabel ? "bg-slate-50/60 dark:bg-slate-900/40" : ""
                            }`}
                          >
                            {isBranchWeek && (
                              <span className="mb-0.5 inline-flex w-fit items-center rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                                Role-specific
                              </span>
                            )}
                            {sharedLabel && (
                              <span className="mb-0.5 inline-flex w-fit items-center rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                                Shared
                              </span>
                            )}
                            <p className="text-slate-800 dark:text-slate-100">{text}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

