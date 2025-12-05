import { Bot, Lightbulb, Settings, Shield, Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "What are LLMs & AI Agents?",
    description: "Understanding LLMs, capabilities, limitations, and what makes AI 'agentic'",
    tasks: ["Read intro materials on LLMs", "Understand the difference between chat and agents"],
  },
  {
    day: "Day 2",
    title: "Tool Setup",
    description: "Install Claude Code, Codex CLI, and understand the Claude Agent SDK",
    tasks: ["Install Claude Code", "Configure API keys", "Run first prompts", "Explore SDK docs"],
  },
  {
    day: "Day 3",
    title: "Project Configuration",
    description: "CLAUDE.md, .claude directory, and project-specific instructions",
    tasks: ["Create CLAUDE.md for a project", "Configure coding standards"],
  },
  {
    day: "Day 4",
    title: "Prompting & Tool Use Basics",
    description: "Clear instructions, constraints, and understanding how AI uses tools",
    tasks: ["Practice prompt patterns", "Observe how AI uses file and shell tools"],
  },
  {
    day: "Day 5",
    title: "Safety, Approval & Agent Boundaries",
    description: "Approval modes, sandboxing, and setting boundaries for AI actions",
    tasks: ["Configure approval modes", "Practice reviewing AI actions"],
  },
];

const keySkills = [
  { name: "Context Management", description: "Understanding tokens, context windows, /context and /clear commands" },
  { name: "Trust Calibration", description: "When to trust AI output, when to verify, how to review effectively" },
  { name: "Tool Use Understanding", description: "How AI uses tools: file operations, shell commands, web search" },
  { name: "Project Setup", description: "CLAUDE.md configuration, coding standards, memory" },
];

const agentVsChat = [
  { aspect: "Control Flow", chat: "User drives each step", agent: "AI decides next actions" },
  { aspect: "Tool Use", chat: "Optional, user-approved", agent: "Autonomous, goal-driven" },
  { aspect: "Persistence", chat: "Single conversation", agent: "Maintains state across tasks" },
  { aspect: "Complexity", chat: "Simple Q&A", agent: "Multi-step problem solving" },
];

export function Week1Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-1">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
          <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 1: Foundations & Mindset</h2>
          <p className="text-foreground/60">Understanding AI, agents, and the right mental model</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week establishes the foundation: understanding what LLMs and AI agents can do, setting up your tools,
            and developing the right mindset for AI as "augmented expert." You'll learn the difference between simple
            chat and agentic AI that can take autonomous actions.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Terminal className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Understand what LLMs are and are not good at for coding tasks</li>
              <li>Learn what makes AI "agentic" vs simple chat interfaces</li>
              <li>Install and configure Claude Code, Codex CLI, and explore the Agent SDK</li>
              <li>Learn basic prompting and understand how AI uses tools</li>
              <li>Set up project configuration (CLAUDE.md)</li>
              <li>Understand safety: approval modes, sandboxing, agent boundaries</li>
            </ul>
          </CardContent>
        </Card>

        {/* What is an AI Agent */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Bot className="h-5 w-5" />
              What is an AI Agent?
            </CardTitle>
            <CardDescription>Understanding the spectrum from chat to autonomous agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-foreground/70">
                An <strong>AI agent</strong> is an LLM that can take autonomous actions to accomplish goals. Unlike
                simple chat, agents can use tools, make decisions, and iterate on results without human intervention at
                each step.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left font-semibold">Aspect</th>
                      <th className="py-2 text-left font-semibold text-slate-500">Simple Chat</th>
                      <th className="py-2 text-left font-semibold text-indigo-600 dark:text-indigo-400">AI Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agentVsChat.map((row) => (
                      <tr className="border-slate-100 border-b dark:border-slate-800" key={row.aspect}>
                        <td className="py-2 font-medium">{row.aspect}</td>
                        <td className="py-2 text-foreground/60">{row.chat}</td>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400">{row.agent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-3 dark:border-indigo-800 dark:bg-indigo-950/30">
                <p className="text-foreground/70 text-sm">
                  <strong>Claude Code is an agent.</strong> It reads files, writes code, runs commands, and iterates on
                  solutions. The <strong>Claude Agent SDK</strong> lets you build your own agents with similar
                  capabilities.
                </p>
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
                    <span className="rounded bg-emerald-100 px-2 py-1 font-mono text-emerald-700 text-sm dark:bg-emerald-900/30 dark:text-emerald-400">
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

        {/* Key Skills */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Key Skills to Develop</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {keySkills.map((skill) => (
              <div className="rounded-lg border p-4" key={skill.name}>
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <p className="font-semibold">{skill.name}</p>
                </div>
                <p className="mt-1 text-foreground/70 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="mb-2 font-semibold text-sm">Key Mindset Shift</p>
          <p className="text-foreground/70 text-sm">
            AI is not a replacement for understanding code—it's a force multiplier for experts. With agents, you're not
            just prompting—you're <strong>orchestrating autonomous systems</strong>. Always maintain comprehension of
            what the AI generates and does.
          </p>
        </div>

        {/* Safety Box */}
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/30">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            <p className="font-semibold text-rose-700 dark:text-rose-400">Safety First (Especially with Agents)</p>
          </div>
          <ul className="mt-2 list-inside list-disc space-y-1 text-foreground/70 text-sm">
            <li>Never include secrets, API keys, or credentials in prompts</li>
            <li>Review all AI-generated code before committing</li>
            <li>Use approval modes to control what AI can do automatically</li>
            <li>Sandbox agents—limit file system and network access appropriately</li>
            <li>Start with simple workflows before building autonomous agents</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
