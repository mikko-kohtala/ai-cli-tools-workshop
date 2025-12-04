import {
  Brain,
  Brush,
  CalendarClock,
  CheckCircle2,
  Compass,
  Cpu,
  GitBranch,
  GitMerge,
  Layers,
  PanelRightOpen,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const personas = [
  {
    name: "Developer path",
    role: "Software developers",
    icon: Cpu,
    color: "bg-blue-50 dark:bg-blue-950/30",
    weeks: "Deep dives: Weeks 2–3; automation: Week 7",
    goals: [
      "Repo navigation, refactors, tests with plan → act → verify",
      "apply_patch, stack-trace triage, CI-ready diffs with approvals",
      "Architecture optioning and code reviews with agent planners",
    ],
    deliverable: "Feature slice + tests + ADR + ops checklist",
  },
  {
    name: "Product path",
    role: "Product managers & owners",
    icon: Compass,
    color: "bg-amber-50 dark:bg-amber-950/30",
    weeks: "Deep dives: Weeks 2–3; alignment: Week 4",
    goals: [
      "Backlog shaping: epics, slices, acceptance criteria",
      "Risk/assumption mapping and stakeholder comms with agents",
      "Lean specs, launch notes, and success metrics drafts",
    ],
    deliverable: "Prioritized backlog + lean spec + decision log",
  },
  {
    name: "Design path",
    role: "Designers & UX",
    icon: Brush,
    color: "bg-rose-50 dark:bg-rose-950/30",
    weeks: "Deep dives: Weeks 2–3; cross-reviews: Week 4",
    goals: [
      "UX copy, flows, and empty-state ideas co-written with agents",
      "Variants and accessibility checks with prompt libraries",
      "Developer-ready handoff notes with tokens and states",
    ],
    deliverable: "Flow map + UX copy deck + accessibility checklist",
  },
];

const convergence = [
  "Week 1: Shared foundations — safety, agent loops, tool setup.",
  "Weeks 2–3: Split into Developer / Product / Design labs.",
  "Week 4: Cross-reviews to align scope, flows, and feasibility.",
  "Week 5: Reconverge on quality gates, evals, and observability.",
  "Week 6: Delivery and operations with dry-run agents.",
  "Week 7: Automation and path-specific bots with guardrails.",
  "Week 8: Capstone demo blending all three perspectives.",
];

export default function LearningPathsPage() {
  return (
    <div className="flex w-full flex-col gap-10 p-6 md:p-8">
      <section className="rounded-2xl border bg-white px-6 py-8 shadow-sm dark:bg-slate-900">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Badge
              className="w-fit bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200"
              variant="secondary"
            >
              Curriculum branches
            </Badge>
            <h1 className="font-bold text-4xl leading-tight md:text-5xl">Learning paths for every role</h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              8-week cadence: Week 1 foundations, Weeks 2–3 path-specific labs, Week 4 alignment, Weeks 5–6 quality and
              delivery, Week 7 automation, Week 8 showcase. All paths practice plan → act → verify with approvals and
              shared safety guardrails.
            </p>
            <div className="rounded-xl border bg-slate-50 p-4 dark:bg-slate-900/50">
              <p className="mb-3 font-medium text-slate-800 text-sm dark:text-slate-200">How the paths flow</p>
              <ul className="space-y-2 text-slate-700 text-sm dark:text-slate-300">
                {convergence.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-slate-700 text-sm shadow-inner md:w-[320px] dark:bg-slate-800/80 dark:text-slate-200">
            <div className="flex items-center gap-2 font-medium">
              <CalendarClock className="h-5 w-5" />
              <span>8-week schedule</span>
            </div>
            <Separator className="my-3" />
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Week 1 shared: tooling, safety, first agent loop</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Weeks 2–3 branch by path (Dev/Product/Design)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Week 4 align interfaces and shared scope</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Weeks 5–6 quality + delivery; Week 7 automation; Week 8 capstone</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <GitBranch className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <h2 className="font-semibold text-2xl">Branching visualization</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          <Card className="h-full border-dashed">
            <CardHeader className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <CardTitle className="text-base">Week 1: Shared foundation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground text-sm">
              <p>Safety, tooling installs, first plan → act → verify loop, and prompt hygiene.</p>
              <p className="flex items-center gap-1 text-blue-700 dark:text-blue-300">
                <Sparkles className="h-4 w-4" /> Output: tiny agent + approved diff
              </p>
            </CardContent>
          </Card>

          <Card className="h-full border-dashed">
            <CardHeader className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <CardTitle className="text-base">Weeks 2–3: Path labs</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-muted-foreground text-sm">
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/40">
                <p className="font-medium text-slate-800 dark:text-slate-100">Developer</p>
                <p>Refactors, tests, repo mapping, and code review prompts.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/40">
                <p className="font-medium text-slate-800 dark:text-slate-100">Product</p>
                <p>Backlog shaping, risks, acceptance criteria, and release notes.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/40">
                <p className="font-medium text-slate-800 dark:text-slate-100">Design</p>
                <p>Flows, UX copy, accessibility and handoff notes.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full border-dashed">
            <CardHeader className="flex items-center gap-2">
              <GitMerge className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="text-base">Week 4–6: Align & harden</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-muted-foreground text-sm">
              <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/30">
                <p className="font-medium text-emerald-900 dark:text-emerald-100">Week 4</p>
                <p>Cross-reviews, interface contracts, shared scope.</p>
              </div>
              <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/30">
                <p className="font-medium text-emerald-900 dark:text-emerald-100">Week 5</p>
                <p>Quality gates, evals, observability, dry-runs.</p>
              </div>
              <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/30">
                <p className="font-medium text-emerald-900 dark:text-emerald-100">Week 6</p>
                <p>Delivery + ops: CI hooks, runbooks, rollback paths.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full border-dashed">
            <CardHeader className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              <CardTitle className="text-base">Weeks 7–8: Automate & showcase</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-muted-foreground text-sm">
              <div className="rounded-lg bg-rose-50 p-3 dark:bg-rose-950/30">
                <p className="font-medium text-rose-900 dark:text-rose-100">Week 7</p>
                <p>Automation: scheduled agents, cost/latency tuning, reuse of path kits.</p>
              </div>
              <div className="rounded-lg bg-rose-50 p-3 dark:bg-rose-950/30">
                <p className="font-medium text-rose-900 dark:text-rose-100">Week 8</p>
                <p>Capstone demo: blended story, metrics, and adoption plan.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <PanelRightOpen className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          <h2 className="font-semibold text-2xl">Path-specific tracks (Weeks 2–3 deep dives)</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {personas.map((persona) => (
            <Card className={`h-full border-0 shadow-sm ${persona.color}`} key={persona.name}>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/70 dark:bg-slate-900/70">
                  <persona.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">{persona.name}</CardTitle>
                  <CardDescription>
                    {persona.role} • {persona.weeks}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700 text-sm dark:text-slate-200">
                <ul className="space-y-2">
                  {persona.goals.map((goal) => (
                    <li className="flex gap-2" key={goal}>
                      <Sparkles className="mt-0.5 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-white/70 p-2 font-medium text-slate-800 text-xs shadow-inner dark:bg-slate-900/70 dark:text-slate-100">
                  Signature deliverable: {persona.deliverable}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Brain className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <h2 className="font-semibold text-2xl">Shared guardrails</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Safety</CardTitle>
              <CardDescription>PII/secret hygiene, sandboxed commands, approvals.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              All paths use the same safety checklist each day; risky actions require human sign-off and dry-runs by
              default.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Traceability</CardTitle>
              <CardDescription>Prompt + diff logs for every agent run.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Keep short run logs: task, prompt, output, human decision, follow-up tests. Needed for Week 6 demo.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quality gates</CardTitle>
              <CardDescription>Tests, lint, and peer/agent review.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Before merge: run tests, have a second agent (or person) review diffs, and capture regression test ideas.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
