import { Code2, Palette, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weekLabels = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
] as const;

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
        "Lean on AI and simple agents for DevOps, data tasks, and light-weight automation.",
      "Week 6":
        "Collaborate with other paths to ship a shared feature across the SDLC.",
      "Week 7":
        "Use AI to improve cross-functional workflows, handoffs, and shared documentation with product and design.",
      "Week 8":
        "Complete a capstone feature or internal tool and reflect on how you will use AI and agents in your daily dev workflow.",
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
        "Coordinate with developers and designers on DevOps, data, and operational questions using AI for planning and status updates.",
      "Week 6":
        "Shape a shared feature with clear scope, success metrics, and stakeholder comms supported by AI.",
      "Week 7":
        "Use AI to improve discovery artefacts, UX narratives, and cross-functional decision-making.",
      "Week 8":
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
        "Shape the UX of DevOps, analytics, and operational surfaces, using AI to support flows, copy, and simple prototype descriptions.",
      "Week 6":
        "Create a UX narrative around shared features and operational surfaces, showing how AI supports your design process from idea to handoff.",
      "Week 7":
        "Use AI to support collaborative design reviews, specs, and cross-functional documentation.",
      "Week 8":
        "Create a capstone UX narrative and simple prototype showing how AI supports your design process from idea to handoff.",
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
              The core curriculum runs for 8 weeks. Week 1 gives everyone the same foundations in AI, agents, and tools.
              Weeks 2–6 branch into role-specific paths, and Weeks 7–8 bring the group back together around a shared
              project and capstone.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              You can run this with mixed teams—developers, product, and design—who share one project but follow
              different emphasis in the middle of the program.
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
                        <p className="text-[11px] text-muted-foreground">{path.roleLabel}</p>
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
            <h2 className="font-semibold text-xl">8-week branching paths</h2>
            <p className="text-muted-foreground text-sm">
              Week 1 and Weeks 7–8 are shared across all roles. Weeks 2–6 pivot into distinct paths so each role can
              practice AI and agents directly in their day-to-day work, then re-align on a shared feature and capstone.
            </p>
            <div className="overflow-x-auto rounded-lg border bg-white dark:border-slate-800 dark:bg-slate-950/40">
              <div className="min-w-[760px]">
                <div className="flex border-slate-200 border-b bg-slate-50 font-semibold text-[11px] text-slate-600 uppercase tracking-wide dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
                  <div className="w-40 flex-shrink-0 px-3 py-2">Path</div>
                  {weekLabels.map((week) => (
                    <div
                      key={week}
                      className="flex-1 px-3 py-2 text-center [&:nth-child(3)]:bg-blue-50/50 dark:[&:nth-child(3)]:bg-slate-900/40 [&:nth-child(4)]:bg-blue-50/50 dark:[&:nth-child(4)]:bg-slate-900/40 [&:nth-child(5)]:bg-blue-50/50 dark:[&:nth-child(5)]:bg-slate-900/40"
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
                      className="flex border-slate-100 border-b text-[11px] last:border-b-0 dark:border-slate-800"
                    >
                      <div className="w-40 flex-shrink-0 border-slate-100 border-r px-3 py-3 dark:border-slate-800">
                        <div className="mb-1 flex items-center gap-2">
                          <span className={`flex h-6 w-6 items-center justify-center rounded-md ${path.colorClass}`}>
                            <Icon className="h-3 w-3" />
                          </span>
                          <span className="font-semibold text-[11px] text-slate-800 leading-tight dark:text-slate-100">
                            {path.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-snug">{path.roleLabel}</p>
                      </div>
                      {weekLabels.map((week, index) => {
                        const text = path.weeks[week];
                        const isBranchWeek = index >= 1 && index <= 5; // Weeks 2–6
                        const sharedLabel = index === 0 || index >= 6; // Week 1 and Weeks 7–8
                        return (
                          <div
                            key={week}
                            className={`flex flex-1 flex-col gap-1 border-slate-100 border-r px-3 py-3 text-[10px] leading-snug last:border-r-0 dark:border-slate-800 ${
                              sharedLabel ? "bg-slate-50/60 dark:bg-slate-900/40" : ""
                            }`}
                          >
                            {isBranchWeek && (
                              <span className="mb-0.5 inline-flex w-fit items-center rounded-full bg-blue-50 px-2 py-0.5 font-medium text-[9px] text-blue-700 uppercase tracking-wide dark:bg-blue-950/40 dark:text-blue-300">
                                Role-specific
                              </span>
                            )}
                            {sharedLabel && (
                              <span className="mb-0.5 inline-flex w-fit items-center rounded-full bg-slate-100 px-2 py-0.5 font-medium text-[9px] text-slate-700 uppercase tracking-wide dark:bg-slate-800/80 dark:text-slate-200">
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
