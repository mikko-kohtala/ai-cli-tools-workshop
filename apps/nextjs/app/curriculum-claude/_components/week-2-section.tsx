import { FileText, GitBranch, Map as MapIcon, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "Requirements & Workflows vs Agents",
    description: "When to use structured workflows vs autonomous agents",
    tasks: ["Understand workflow vs agent tradeoffs", "Turn vague idea into user stories with AI"],
  },
  {
    day: "Day 2",
    title: "Planning Mode & ReAct Pattern",
    description: "Claude Code's planning mode and reasoning-before-acting",
    tasks: ["Practice planning mode on a feature", "Iterate on plan through follow-up questions"],
  },
  {
    day: "Day 3",
    title: "Agentic Workflow Patterns",
    description: "Core patterns: chaining, routing, parallelization, orchestration",
    tasks: ["Study workflow pattern examples", "Design a multi-step workflow"],
  },
  {
    day: "Day 4",
    title: "Architecture & Documentation",
    description: "Using AI to propose architectures and generate ADRs",
    tasks: ["Generate 2-3 architecture options", "Draft an ADR with AI"],
  },
  {
    day: "Day 5",
    title: "Project Kickoff",
    description: "Start core project: scaffold, requirements, initial architecture",
    tasks: ["Scaffold project structure", "Document requirements and architecture decisions"],
  },
];

const workflowPatterns = [
  {
    name: "Prompt Chaining",
    description: "Break tasks into sequential steps where each LLM call processes the output of the previous one",
    example: "Generate outline → Write sections → Review and edit",
    when: "Well-defined tasks with clear sequence",
  },
  {
    name: "Routing",
    description: "Classify inputs and direct to specialized handlers—use smaller models for simple tasks",
    example: "Categorize query → Route to specialist agent",
    when: "Distinct task categories with different requirements",
  },
  {
    name: "Parallelization",
    description: "Run independent subtasks simultaneously, then combine results",
    example: "Analyze multiple files in parallel → Synthesize findings",
    when: "Independent subtasks that can run concurrently",
  },
  {
    name: "Orchestrator-Workers",
    description: "One LLM breaks down tasks, delegates to workers, and synthesizes results",
    example: "Planner identifies files → Workers implement → Planner reviews",
    when: "Complex tasks where scope isn't known upfront",
  },
  {
    name: "Evaluator-Optimizer",
    description: "Generator produces output, evaluator provides feedback in iterative loops",
    example: "Write code → Run tests → Fix failures → Repeat",
    when: "Clear success criteria and iterative improvement needed",
  },
];

const workflowVsAgent = [
  { aspect: "Predictability", workflow: "High—defined code paths", agent: "Lower—dynamic decisions" },
  { aspect: "Flexibility", workflow: "Limited to predefined paths", agent: "Adapts to novel situations" },
  { aspect: "Cost/Latency", workflow: "More efficient", agent: "Higher—more LLM calls" },
  { aspect: "Best For", workflow: "Well-defined, repeatable tasks", agent: "Open-ended, exploratory tasks" },
];

export function Week2Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-2">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <MapIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 2: Planning & Agentic Patterns</h2>
          <p className="text-foreground/60">Workflows, planning, and when to use agents</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week covers the critical decision of when to use structured workflows vs autonomous agents, and the
            core patterns that power agentic systems. You'll learn planning mode, the ReAct pattern, and start your core
            project.
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
              <li>Understand when to use workflows vs autonomous agents</li>
              <li>Learn the 5 core agentic workflow patterns</li>
              <li>Master Claude Code's planning mode (Shift+Tab)</li>
              <li>Understand the ReAct pattern: reasoning before acting</li>
              <li>Generate architecture proposals and ADRs</li>
              <li>
                <strong>Start core project</strong>: scaffold, requirements, architecture
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Workflows vs Agents */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Workflow className="h-5 w-5" />
              Workflows vs Agents
            </CardTitle>
            <CardDescription>Start simple—add complexity only when needed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-foreground/70">
                <strong>Anthropic's key insight:</strong> Most successful agent implementations use simple, composable
                patterns. Don't build agents when a workflow will do.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left font-semibold">Aspect</th>
                      <th className="py-2 text-left font-semibold text-blue-600 dark:text-blue-400">Workflow</th>
                      <th className="py-2 text-left font-semibold text-purple-600 dark:text-purple-400">Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowVsAgent.map((row) => (
                      <tr className="border-slate-100 border-b dark:border-slate-800" key={row.aspect}>
                        <td className="py-2 font-medium">{row.aspect}</td>
                        <td className="py-2 text-blue-600 dark:text-blue-400">{row.workflow}</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400">{row.agent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Patterns */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">5 Core Agentic Workflow Patterns</h3>
          <div className="space-y-3">
            {workflowPatterns.map((pattern) => (
              <Card key={pattern.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{pattern.name}</CardTitle>
                  <CardDescription>{pattern.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                      <p className="mb-1 font-semibold text-foreground/50 text-xs uppercase">Example</p>
                      <p className="text-foreground/70 text-sm">{pattern.example}</p>
                    </div>
                    <div className="rounded bg-blue-50 p-3 dark:bg-blue-950/30">
                      <p className="mb-1 font-semibold text-foreground/50 text-xs uppercase">When to Use</p>
                      <p className="text-foreground/70 text-sm">{pattern.when}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Planning Mode */}
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
                Planning mode implements the <strong>ReAct pattern</strong>—Reasoning and Acting. The AI researches your
                codebase and creates a plan before making changes.
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
            doc drafted. You've identified which workflow patterns apply to your project.
          </p>
        </div>
      </div>
    </section>
  );
}
