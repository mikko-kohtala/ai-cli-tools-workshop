import { Bot, Code2, Network, Shield, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "Claude Agent SDK Introduction",
    description: "Setting up the SDK, understanding the agent harness",
    tasks: ["Install Claude Agent SDK", "Run first simple agent", "Understand agent lifecycle"],
  },
  {
    day: "Day 2",
    title: "Building Custom Tools",
    description: "Creating tools your agent can use to take actions",
    tasks: ["Create a custom tool", "Register tools with agent", "Test tool invocation"],
  },
  {
    day: "Day 3",
    title: "Agent Loops & Context Management",
    description: "Managing agent execution loops and automatic context",
    tasks: ["Implement agent loop patterns", "Handle context overflow"],
  },
  {
    day: "Day 4",
    title: "Multi-Agent Systems",
    description: "Orchestrating multiple agents for complex tasks",
    tasks: ["Build orchestrator-worker pattern", "Implement agent handoffs"],
  },
  {
    day: "Day 5",
    title: "Safety, Guardrails & Deployment",
    description: "Production-ready agents with proper safety measures",
    tasks: ["Add guardrails and approval flows", "Sandbox and deploy agent"],
  },
];

const sdkComponents = [
  {
    component: "Agent Harness",
    description: "Core runtime that manages agent execution, tool calls, and context",
    key: "Powers Claude Code—same foundation for your agents",
  },
  {
    component: "Tool Registry",
    description: "Define and register tools the agent can use",
    key: "File operations, shell, web, or custom integrations",
  },
  {
    component: "Context Manager",
    description: "Automatic context management to prevent overflow",
    key: "Handles summarization and pruning automatically",
  },
  {
    component: "Hooks System",
    description: "Lifecycle hooks for monitoring and control",
    key: "Pre/post tool execution, error handling, logging",
  },
];

const agentUseCases = [
  {
    useCase: "Code Assistant",
    description: "Reads files, writes code, runs tests, iterates on solutions",
    example: "Build a specialized linter or code reviewer",
  },
  {
    useCase: "Data Pipeline",
    description: "Fetches data, transforms, validates, and stores results",
    example: "Automated report generation from multiple sources",
  },
  {
    useCase: "Customer Support",
    description: "Handles queries, accesses knowledge base, escalates when needed",
    example: "Tier-1 support agent with human handoff",
  },
  {
    useCase: "DevOps Automation",
    description: "Monitors systems, diagnoses issues, takes remediation actions",
    example: "On-call assistant that investigates alerts",
  },
];

const safetyChecklist = [
  { item: "Sandbox execution", description: "Limit file system and network access" },
  { item: "Approval flows", description: "Human-in-the-loop for destructive actions" },
  { item: "Rate limiting", description: "Prevent runaway API costs" },
  { item: "Audit logging", description: "Track all agent actions for review" },
  { item: "Graceful degradation", description: "Handle failures without data loss" },
];

export function Week7Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-7">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
          <Bot className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 7: Building Agents</h2>
          <p className="text-foreground/60">Creating production-ready agents with the Claude Agent SDK</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week you'll build your own agents using the Claude Agent SDK. You'll learn to create custom tools,
            manage agent loops, orchestrate multi-agent systems, and deploy production-ready agents with proper safety
            guardrails.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Code2 className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Set up and understand the Claude Agent SDK</li>
              <li>Build custom tools for your agents</li>
              <li>Implement agent loops with automatic context management</li>
              <li>Create multi-agent systems with orchestration patterns</li>
              <li>Add safety guardrails and approval workflows</li>
              <li>
                <strong>Build an agent</strong>: Design and deploy a working agent
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* SDK Components */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Wrench className="h-5 w-5" />
              Claude Agent SDK Components
            </CardTitle>
            <CardDescription>Built on the same foundation that powers Claude Code</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sdkComponents.map((comp) => (
                <div className="rounded-lg border p-4" key={comp.component}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{comp.component}</h4>
                  </div>
                  <p className="mt-1 text-foreground/70 text-sm">{comp.description}</p>
                  <p className="mt-1 text-amber-600 text-sm dark:text-amber-400">{comp.key}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Agent Architecture */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">Agent Architecture</CardTitle>
            <CardDescription>The core loop that powers autonomous agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900/30">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="rounded-lg bg-blue-100 px-4 py-3 text-center dark:bg-blue-900/50">
                  <p className="font-semibold text-blue-700 text-sm dark:text-blue-300">User Goal</p>
                  <p className="text-foreground/60 text-xs">Input task</p>
                </div>
                <span className="text-2xl text-foreground/30">→</span>
                <div className="rounded-lg bg-purple-100 px-4 py-3 text-center dark:bg-purple-900/50">
                  <p className="font-semibold text-purple-700 text-sm dark:text-purple-300">Agent Reasons</p>
                  <p className="text-foreground/60 text-xs">Plan next step</p>
                </div>
                <span className="text-2xl text-foreground/30">→</span>
                <div className="rounded-lg bg-amber-100 px-4 py-3 text-center dark:bg-amber-900/50">
                  <p className="font-semibold text-amber-700 text-sm dark:text-amber-300">Tool Call</p>
                  <p className="text-foreground/60 text-xs">Execute action</p>
                </div>
                <span className="text-2xl text-foreground/30">→</span>
                <div className="rounded-lg bg-emerald-100 px-4 py-3 text-center dark:bg-emerald-900/50">
                  <p className="font-semibold text-emerald-700 text-sm dark:text-emerald-300">Observe</p>
                  <p className="text-foreground/60 text-xs">Process result</p>
                </div>
                <span className="text-2xl text-foreground/30">↺</span>
              </div>
              <p className="mt-4 text-center text-foreground/60 text-sm">
                Loop continues until goal is achieved or agent decides to stop
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Agent Use Cases</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {agentUseCases.map((uc) => (
              <Card key={uc.useCase}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{uc.useCase}</CardTitle>
                  <CardDescription>{uc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded bg-amber-50 p-2 dark:bg-amber-950/30">
                    <p className="text-amber-700 text-sm dark:text-amber-400">{uc.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Breakdown */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Daily Breakdown</h3>
          <div className="space-y-3">
            {dailyTopics.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-amber-100 px-2 py-1 font-mono text-amber-700 text-sm dark:bg-amber-900/30 dark:text-amber-400">
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

        {/* Multi-Agent */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="font-semibold text-blue-700 dark:text-blue-400">Multi-Agent Systems</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            Complex tasks often benefit from multiple specialized agents working together. Patterns include:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-foreground/70 text-sm">
            <li>
              <strong>Orchestrator-Workers:</strong> Planner agent delegates to specialist agents
            </li>
            <li>
              <strong>Pipeline:</strong> Agents process data in sequence, each adding value
            </li>
            <li>
              <strong>Debate:</strong> Multiple agents propose solutions, synthesizer picks best
            </li>
          </ul>
        </div>

        {/* Safety Checklist */}
        <Card className="border-l-4 border-l-rose-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Shield className="h-5 w-5" />
              Production Safety Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {safetyChecklist.map((item) => (
                <div className="flex items-start gap-3 rounded-lg border p-3" key={item.item}>
                  <div className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-rose-500" />
                  <div>
                    <p className="font-semibold text-sm">{item.item}</p>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Milestone */}
        <div className="rounded-lg border-2 border-amber-300 border-dashed bg-amber-50/50 p-4 dark:border-amber-700 dark:bg-amber-950/20">
          <p className="mb-2 font-semibold text-amber-700 dark:text-amber-400">Week 7 Milestone</p>
          <p className="text-foreground/70 text-sm">
            By end of Week 7: You've built a working agent with custom tools, proper error handling, and safety
            guardrails. The agent can be deployed and run autonomously within defined boundaries.
          </p>
        </div>
      </div>
    </section>
  );
}
