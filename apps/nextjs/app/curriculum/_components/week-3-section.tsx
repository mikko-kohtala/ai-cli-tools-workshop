import { Code, FolderSearch, Layers, RefreshCw, Wrench } from "lucide-react";
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
    title: "Tool Use Deep Dive",
    description: "Understanding how agents use tools: files, shell, web, MCP",
    tasks: ["Observe tool calls in Claude Code", "Understand MCP basics"],
  },
  {
    day: "Day 3",
    title: "Multi-File Editing & Refactoring",
    description: "Coordinated changes across multiple files with AI",
    tasks: ["Implement feature spanning 3+ files", "Refactor with AI assistance"],
  },
  {
    day: "Day 4",
    title: "Working with Existing Codebases",
    description: "Understanding unfamiliar code, generating summaries",
    tasks: ["Explore unfamiliar codebase with AI", "Generate module summaries"],
  },
  {
    day: "Day 5",
    title: "Context & Tool Best Practices",
    description: "Managing context, designing tool interfaces",
    tasks: ["Practice context management", "Implement core project features"],
  },
];

const toolCategories = [
  {
    category: "File System",
    tools: ["Read", "Write", "Edit", "Glob", "Grep"],
    description: "Navigate and modify code files",
    agentUse: "Core capability—every agent needs file access",
  },
  {
    category: "Shell/Terminal",
    tools: ["Bash", "Command execution"],
    description: "Run commands, build, test, deploy",
    agentUse: "Enables verification and iteration loops",
  },
  {
    category: "Web Access",
    tools: ["WebFetch", "WebSearch"],
    description: "Retrieve docs, search for solutions",
    agentUse: "Extends agent knowledge beyond training data",
  },
  {
    category: "MCP Servers",
    tools: ["Playwright", "Database", "GitHub", "Custom"],
    description: "External integrations via Model Context Protocol",
    agentUse: "Enables specialized domain capabilities",
  },
];

const toolDesignPrinciples = [
  {
    principle: "Clear Documentation",
    description: "Tools need thorough docs with examples—AI reads them just like developers do",
  },
  {
    principle: "Minimize Overhead",
    description: "Don't force the agent to track line counts, escape strings, or maintain complex state",
  },
  {
    principle: "Atomic Operations",
    description: "Prefer small, verifiable actions over large batch operations",
  },
  {
    principle: "Error Messages Matter",
    description: "Clear errors help agents self-correct—cryptic errors cause loops",
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
    name: "Verify-and-Iterate",
    steps: ["Generate code", "Run tests/build", "AI analyzes failures", "Fix and repeat until green"],
  },
  {
    name: "Explore-then-Modify",
    steps: [
      "AI reads and summarizes existing code",
      "Propose changes",
      "Human approves approach",
      "Execute modifications",
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
          <h2 className="font-bold text-4xl">Week 3: Implementation & Tool Use</h2>
          <p className="text-foreground/60">Coding with AI and understanding agent tools</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week is about integrating AI into your daily coding workflow and understanding how agents use tools.
            Tool use is fundamental to agentic AI—it's what transforms an LLM from a text generator into an autonomous
            agent that can take real actions.
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
              <li>Understand how agents use tools (file, shell, web, MCP)</li>
              <li>Learn tool design principles for building your own agents</li>
              <li>Handle multi-file edits and refactoring effectively</li>
              <li>Navigate and understand unfamiliar codebases</li>
              <li>
                <strong>Core project</strong>: Implement main features
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Tool Categories */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Wrench className="h-5 w-5" />
              Agent Tool Categories
            </CardTitle>
            <CardDescription>Tools transform LLMs into agents that can take action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {toolCategories.map((cat) => (
                <div className="rounded-lg border p-4" key={cat.category}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{cat.category}</h4>
                    <div className="flex gap-1">
                      {cat.tools.map((tool) => (
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800" key={tool}>
                          {tool}
                        </code>
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-foreground/70 text-sm">{cat.description}</p>
                  <p className="mt-1 text-purple-600 text-sm dark:text-purple-400">{cat.agentUse}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tool Design Principles */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Tool Design Principles</h3>
          <p className="mb-4 text-foreground/70">
            When building agents, invest as much in tool design as prompt engineering. Well-designed tools make agents
            more reliable.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {toolDesignPrinciples.map((item) => (
              <div className="rounded-lg border p-4" key={item.principle}>
                <p className="font-semibold">{item.principle}</p>
                <p className="mt-1 text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Loop */}
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader>
            <CardTitle className="text-2xl">The Implementation Loop</CardTitle>
            <CardDescription>Core workflows for AI-assisted coding</CardDescription>
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
                <p className="font-semibold text-emerald-700 text-sm dark:text-emerald-300">3. Verify</p>
                <p className="text-foreground/60 text-xs">Run tests/build</p>
              </div>
              <span className="text-2xl text-foreground/30">→</span>
              <div className="rounded-lg bg-amber-100 px-4 py-2 text-center dark:bg-amber-900/50">
                <p className="font-semibold text-amber-700 text-sm dark:text-amber-300">4. Iterate</p>
                <p className="text-foreground/60 text-xs">Fix & improve</p>
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
            <p className="font-semibold text-purple-700 dark:text-purple-400">Context Management for Agents</p>
          </div>
          <ul className="mt-2 list-inside list-disc space-y-1 text-foreground/70 text-sm">
            <li>Agents need focused context—don't dump entire codebases</li>
            <li>Use summarization before detailed exploration</li>
            <li>Clear context between unrelated tasks</li>
            <li>Design tools to return concise, actionable information</li>
          </ul>
        </div>

        {/* Project Milestone */}
        <div className="rounded-lg border-2 border-purple-300 border-dashed bg-purple-50/50 p-4 dark:border-purple-700 dark:bg-purple-950/20">
          <p className="mb-2 font-semibold text-purple-700 dark:text-purple-400">Core Project Milestone</p>
          <p className="text-foreground/70 text-sm">
            By end of Week 3: Core features implemented—routes, handlers, services, data layer. You understand how
            Claude Code uses tools internally. Ready for testing.
          </p>
        </div>
      </div>
    </section>
  );
}
