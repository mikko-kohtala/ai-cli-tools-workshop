import { BookOpen, Bot, Clock, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const goals = [
  {
    title: "Master AI CLI Tools",
    description: "Use Claude Code and Codex CLI confidently in daily coding",
  },
  {
    title: "Build AI Agents",
    description: "Create autonomous agents using the Claude Agent SDK",
  },
  {
    title: "Full SDLC Coverage",
    description: "Apply AI and agents across requirements, design, implementation, testing, and deployment",
  },
  {
    title: "Work Safely",
    description: "Handle security, governance, and agent boundaries properly",
  },
];

const weekSummary = [
  { week: 1, title: "Foundations & Mindset", color: "bg-emerald-500", focus: "LLMs, agents, tool setup", shared: true },
  {
    week: 2,
    title: "AI Basics & First Steps",
    color: "bg-blue-500",
    focus: "Prompting, workflows, patterns",
    shared: true,
  },
  { week: 3, title: "Domain Fundamentals", color: "bg-purple-500", focus: "Path-specific foundations", shared: false },
  { week: 4, title: "Core Workflows", color: "bg-indigo-500", focus: "Path-specific techniques", shared: false },
  { week: 5, title: "Advanced Techniques", color: "bg-cyan-500", focus: "Path-specific mastery", shared: false },
  {
    week: 6,
    title: "Integration & Collaboration",
    color: "bg-pink-500",
    focus: "Cross-functional AI use",
    shared: false,
  },
  {
    week: 7,
    title: "Building Agents",
    color: "bg-amber-500",
    focus: "Claude Agent SDK, multi-agent systems",
    shared: true,
  },
  { week: 8, title: "Capstone & Deploy", color: "bg-rose-500", focus: "DevOps, governance, capstone", shared: true },
];

export function CurriculumOverview() {
  return (
    <section className="mb-16 scroll-mt-16" id="overview">
      {/* Hero */}
      <div className="mb-12 space-y-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
          <BookOpen className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="font-bold text-5xl text-gray-800 md:text-6xl dark:text-gray-200">AI-Assisted Development</h1>
        <p className="mx-auto max-w-2xl text-gray-600 text-xl dark:text-gray-400">
          8-week curriculum with specialized learning paths for developers, product managers, and designers
        </p>
      </div>

      {/* Learning Goals */}
      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="font-bold text-3xl">Learning Goals</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {goals.map((goal) => (
            <Card key={goal.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Daily Structure */}
      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="font-bold text-3xl">Daily Structure</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                <p className="mb-2 font-semibold text-amber-700 dark:text-amber-400">1-2h Learning Block</p>
                <ul className="space-y-1 text-foreground/70 text-sm">
                  <li>Short reading/watching: concept of the day</li>
                  <li>Hands-on demo: prompts and tool commands</li>
                </ul>
              </div>
              <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950/30">
                <p className="mb-2 font-semibold text-emerald-700 dark:text-emerald-400">Deep Work Block</p>
                <ul className="space-y-1 text-foreground/70 text-sm">
                  <li>Apply concepts to ongoing project</li>
                  <li>Use AI heavily with review checkpoints</li>
                  <li>Document what worked and what struggled</li>
                </ul>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                <p className="mb-2 font-semibold text-blue-700 dark:text-blue-400">15-30min Wrap-up</p>
                <ul className="space-y-1 text-foreground/70 text-sm">
                  <li>Log effective prompts and mistakes</li>
                  <li>Summarize day's progress (optionally with AI)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Week Overview */}
      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
            <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="font-bold text-3xl">Curriculum Overview</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {weekSummary.map((week) => (
            <div
              className={`flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50 ${week.shared ? "" : "border-dashed"}`}
              key={week.week}
            >
              <div className={`h-10 w-10 rounded-lg ${week.color} flex shrink-0 items-center justify-center`}>
                <span className="font-bold text-white">{week.week}</span>
              </div>
              <div>
                <p className="font-medium text-sm">
                  Week {week.week}: {week.title}
                </p>
                <p className="text-foreground/60 text-xs">{week.focus}</p>
                {!week.shared && <span className="text-purple-600 text-xs dark:text-purple-400">Path-specific</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insight */}
      <div className="space-y-4">
        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950/30">
          <p className="mb-2 font-semibold text-indigo-700 dark:text-indigo-400">Primary Tool Focus</p>
          <p className="text-foreground/70">
            This curriculum uses <strong>Claude Code</strong> as the primary tool and the{" "}
            <strong>Claude Agent SDK</strong>
            for building agents. Principles apply across AI tools—focus on capabilities and workflows that transfer.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <p className="font-semibold text-amber-700 dark:text-amber-400">Bookend Structure</p>
          </div>
          <p className="mt-2 text-foreground/70">
            Weeks 1-2 and 7-8 are shared across all paths. Weeks 3-6 diverge into role-specific tracks. Week 7 covers
            building agents with the Claude Agent SDK, and Week 8 brings everyone together for capstone projects.
          </p>
        </div>
      </div>
    </section>
  );
}
