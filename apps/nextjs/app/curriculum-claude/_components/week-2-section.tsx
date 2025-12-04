import { FileText, GitBranch, Map as MapIcon, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "Requirements Gathering",
    description: "Using AI to clarify vague requirements and discover edge cases",
    tasks: ["Turn vague idea into user stories with AI", "Generate questions for stakeholders"],
  },
  {
    day: "Day 2",
    title: "Planning Mode",
    description: "Claude Code's Shift+Tab planning mode, read-only exploration",
    tasks: ["Practice planning mode on a feature", "Iterate on plan through follow-up questions"],
  },
  {
    day: "Day 3",
    title: "Architecture Exploration",
    description: "Using AI to propose and compare architectural options",
    tasks: ["Generate 2-3 architecture options", "Evaluate tradeoffs with AI assistance"],
  },
  {
    day: "Day 4",
    title: "Documentation Generation",
    description: "ADRs, design documents, and technical specifications",
    tasks: ["Draft an ADR with AI", "Create design doc for project feature"],
  },
  {
    day: "Day 5",
    title: "Project Kickoff",
    description: "Start core project: scaffold, requirements, initial architecture",
    tasks: ["Scaffold project structure", "Document requirements and architecture decisions"],
  },
];

const planningPatterns = [
  {
    pattern: "ReAct Pattern",
    description: "Reasoning and Acting—alternate between thinking and doing instead of jumping to execution",
  },
  {
    pattern: "Explore First",
    description: "Let AI read and understand the codebase before proposing changes",
  },
  {
    pattern: "Iterate on Plans",
    description: "Refine through follow-up questions before approving any plan",
  },
  {
    pattern: "Document Decisions",
    description: "Use ADRs to capture why, not just what, for future reference",
  },
];

export function Week2Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-2">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <MapIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 2: Planning & Discovery</h2>
          <p className="text-foreground/60">Using AI at the front of the SDLC</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week focuses on the "front" of software development: understanding requirements, exploring architecture
            options, and planning before coding. You'll start your core project that continues through Week 5.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GitBranch className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Use AI to clarify requirements and discover edge cases</li>
              <li>Master Claude Code's planning mode (Shift+Tab)</li>
              <li>Understand the ReAct pattern: reasoning before acting</li>
              <li>Generate architecture proposals and evaluate tradeoffs</li>
              <li>Create ADRs and design documents with AI assistance</li>
              <li>
                <strong>Start core project</strong>: scaffold, requirements, architecture
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Planning Mode Deep Dive */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="text-2xl">Planning Mode in Claude Code</CardTitle>
            <CardDescription>
              Press <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800">Shift+Tab</kbd> to
              enter planning mode
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-foreground/70">
                Planning mode is <strong>read-only exploration</strong>. The AI researches your codebase, reasons about
                the task, and creates a comprehensive plan—all before making any changes.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded bg-emerald-50 p-3 dark:bg-emerald-950/30">
                  <p className="mb-1 font-semibold text-emerald-700 text-sm dark:text-emerald-400">What it does</p>
                  <ul className="list-inside list-disc text-foreground/70 text-xs">
                    <li>Reads files to understand context</li>
                    <li>Asks clarifying questions</li>
                    <li>Proposes implementation approach</li>
                    <li>Identifies affected files</li>
                  </ul>
                </div>
                <div className="rounded bg-blue-50 p-3 dark:bg-blue-950/30">
                  <p className="mb-1 font-semibold text-blue-700 text-sm dark:text-blue-400">What it doesn't do</p>
                  <ul className="list-inside list-disc text-foreground/70 text-xs">
                    <li>No file edits until you approve</li>
                    <li>No shell commands executed</li>
                    <li>No commits or pushes</li>
                    <li>Pure analysis and planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Breakdown */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Daily Breakdown</h3>
          <div className="space-y-3">
            {dailyTopics.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-blue-100 px-2 py-1 font-mono text-blue-700 text-sm dark:bg-blue-900/30 dark:text-blue-400">
                      {day.day}
                    </span>
                    <CardTitle className="text-lg">{day.title}</CardTitle>
                  </div>
                  <CardDescription>{day.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-2 font-semibold text-foreground/50 text-xs uppercase">Tasks</p>
                    <ul className="list-inside list-disc space-y-1 text-foreground/70 text-sm">
                      {day.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Planning Patterns */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Planning Patterns</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {planningPatterns.map((item) => (
              <div className="rounded-lg border p-4" key={item.pattern}>
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <p className="font-semibold">{item.pattern}</p>
                </div>
                <p className="mt-1 text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="font-semibold text-blue-700 dark:text-blue-400">Documentation with AI</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            AI excels at drafting documentation: ADRs, design docs, API specs. The workflow is:
            <strong> AI drafts → human reviews and refines → commit</strong>. Never commit AI-generated docs without
            review.
          </p>
        </div>

        {/* Project Milestone */}
        <div className="rounded-lg border-2 border-blue-300 border-dashed bg-blue-50/50 p-4 dark:border-blue-700 dark:bg-blue-950/20">
          <p className="mb-2 font-semibold text-blue-700 dark:text-blue-400">Core Project Milestone</p>
          <p className="text-foreground/70 text-sm">
            By end of Week 2: Project scaffolded, requirements documented, architecture decided (with ADR), and design
            doc drafted. Ready to implement.
          </p>
        </div>
      </div>
    </section>
  );
}
