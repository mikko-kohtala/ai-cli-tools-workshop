import { Code, FolderSearch, Layers, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "Code Generation Patterns",
    description: "Describe → generate → refine → improve cycle",
    tasks: ["Generate a service layer component", "Practice the refinement loop"],
  },
  {
    day: "Day 2",
    title: "Refactoring with AI",
    description: "Extract functions, rename variables, improve code structure",
    tasks: ["Refactor existing code with AI", "Make code more idiomatic"],
  },
  {
    day: "Day 3",
    title: "Multi-File Editing",
    description: "Coordinated changes across multiple files",
    tasks: ["Implement feature spanning 3+ files", "Practice planning multi-file changes"],
  },
  {
    day: "Day 4",
    title: "Working with Existing Code",
    description: "Understanding unfamiliar codebases, generating summaries",
    tasks: ["Explore unfamiliar codebase with AI", "Generate module summaries"],
  },
  {
    day: "Day 5",
    title: "Context Chunking",
    description: "Managing large codebases, summarization strategies",
    tasks: ["Practice context management", "Implement core project features"],
  },
];

const implementationPatterns = [
  {
    name: "Describe → Generate → Refine",
    steps: [
      "Describe what you need clearly",
      "Let AI generate initial code",
      "Review and request improvements",
      "Manually refine edge cases",
    ],
  },
  {
    name: "Boilerplate Delegation",
    steps: [
      "Identify repetitive patterns",
      "Have AI generate DTOs, mappers, configs",
      "Review for consistency",
      "Apply project conventions",
    ],
  },
  {
    name: "Incremental Building",
    steps: [
      "Start with minimal implementation",
      "Add features incrementally",
      "Test each addition",
      "Refactor as patterns emerge",
    ],
  },
];

export function Week3Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-3">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
          <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 3: Implementation Workflows</h2>
          <p className="text-foreground/60">Coding faster and safer with AI</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week is about integrating AI into your daily coding workflow. You'll learn patterns for code
            generation, refactoring, and navigating codebases—implementing the main features of your core project.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Layers className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Master the describe → generate → refine → improve cycle</li>
              <li>Use AI for refactoring: extract, rename, restructure</li>
              <li>Handle multi-file edits effectively</li>
              <li>Navigate and understand unfamiliar codebases</li>
              <li>Manage context effectively for large projects</li>
              <li>
                <strong>Core project</strong>: Implement main features
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Implementation Loop Diagram */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="text-2xl">The Implementation Loop</CardTitle>
            <CardDescription>The core workflow for AI-assisted coding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg bg-slate-50 p-6 dark:bg-slate-900/30">
              <div className="rounded-lg bg-purple-100 px-4 py-2 text-center dark:bg-purple-900/50">
                <p className="font-semibold text-purple-700 text-sm dark:text-purple-300">1. Describe</p>
                <p className="text-foreground/60 text-xs">Clear instructions</p>
              </div>
              <span className="text-2xl text-foreground/30">→</span>
              <div className="rounded-lg bg-blue-100 px-4 py-2 text-center dark:bg-blue-900/50">
                <p className="font-semibold text-blue-700 text-sm dark:text-blue-300">2. Generate</p>
                <p className="text-foreground/60 text-xs">AI creates code</p>
              </div>
              <span className="text-2xl text-foreground/30">→</span>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 text-center dark:bg-emerald-900/50">
                <p className="font-semibold text-emerald-700 text-sm dark:text-emerald-300">3. Review</p>
                <p className="text-foreground/60 text-xs">Human checks</p>
              </div>
              <span className="text-2xl text-foreground/30">→</span>
              <div className="rounded-lg bg-amber-100 px-4 py-2 text-center dark:bg-amber-900/50">
                <p className="font-semibold text-amber-700 text-sm dark:text-amber-300">4. Refine</p>
                <p className="text-foreground/60 text-xs">Iterate & improve</p>
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
                    <span className="rounded bg-purple-100 px-2 py-1 font-mono text-purple-700 text-sm dark:bg-purple-900/30 dark:text-purple-400">
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

        {/* Implementation Patterns */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Implementation Patterns</h3>
          <div className="space-y-4">
            {implementationPatterns.map((pattern) => (
              <Card key={pattern.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <RefreshCw className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    {pattern.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {pattern.steps.map((step, i) => (
                      <div className="flex items-center gap-2" key={step}>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-700 text-xs dark:bg-purple-900/30 dark:text-purple-400">
                          {i + 1}
                        </span>
                        <span className="text-foreground/70 text-sm">{step}</span>
                        {i < pattern.steps.length - 1 && <span className="text-foreground/30">→</span>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Context Management */}
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/30">
          <div className="flex items-center gap-2">
            <FolderSearch className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <p className="font-semibold text-purple-700 dark:text-purple-400">Context Chunking Strategy</p>
          </div>
          <ul className="mt-2 list-inside list-disc space-y-1 text-foreground/70 text-sm">
            <li>Summarize large files before asking specific questions</li>
            <li>
              Use <code className="rounded bg-white px-1 dark:bg-slate-800">/clear</code> when switching between
              unrelated tasks
            </li>
            <li>Keep one task per conversation for best results</li>
            <li>Reference specific line numbers and file paths for precision</li>
          </ul>
        </div>

        {/* Project Milestone */}
        <div className="rounded-lg border-2 border-purple-300 border-dashed bg-purple-50/50 p-4 dark:border-purple-700 dark:bg-purple-950/20">
          <p className="mb-2 font-semibold text-purple-700 dark:text-purple-400">Core Project Milestone</p>
          <p className="text-foreground/70 text-sm">
            By end of Week 3: Core features implemented—routes, handlers, services, data layer. Code reviewed and
            refactored. Ready for testing.
          </p>
        </div>
      </div>
    </section>
  );
}
