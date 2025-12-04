import {
  Bot,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Compass,
  Flag,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const dailyCadence = [
  {
    title: "Learn (1–2h)",
    description: "Short concept brief + guided prompt examples to try immediately.",
    icon: Clock3,
    accent: "bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Build (deep work)",
    description: "Apply the idea to the running project with AI tools in the loop.",
    icon: Workflow,
    accent: "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300",
  },
  {
    title: "Agent drill",
    description: "Run a small plan → act → verify loop with an agent on today’s feature.",
    icon: Bot,
    accent: "bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300",
  },
  {
    title: "Ship & reflect",
    description: "Checkpoint, human review, and a quick log of what AI helped vs. missed.",
    icon: Flag,
    accent: "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300",
  },
];

const weeks = [
  {
    title: "Week 1 — Foundations & Agentic Basics",
    theme: "Mindset, safety, and building your first terminal agent.",
    focus: [
      "LLM limits, safe prompting, and AGENT.md-style instructions",
      "Install & configure Codex CLI, Claude Code, Gemini CLI, Amp",
      "First agent: simple plan → act → verify loop with tool calls",
    ],
    build: "Ship a tiny agent that reads a file, proposes a change, drafts a diff; review and merge.",
  },
  {
    title: "Week 2 — Discovery, Planning & Multi-Agent Patterns",
    theme: "Use agents to clarify scope and decompose work.",
    focus: [
      "Stakeholder questions, user stories, edge-case mining via agents",
      "Structured task decomposition and ticket drafts from agent plans",
      "Architecture options + ADR drafts with an agent as co-author",
    ],
    build: "Adopt an architecture, commit an ADR, and wire a planning agent that outputs tasks.",
  },
  {
    title: "Week 3 — Agent-led Implementation & Refactors",
    theme: "ReAct-style loops, tool use, and repo navigation with agents.",
    focus: [
      "Describe → generate → review → improve with guardrails",
      "Function calling/tool use (e.g., apply_patch) and context chunking",
      "Refactors, explanations, and prompt libraries for repeatable asks",
    ],
    build: "Implement core features; keep a prompt/agent cookbook with best commands.",
  },
  {
    title: "Week 4 — Evaluation, Testing & Guardrails",
    theme: "Reliability and safety for agent outputs.",
    focus: [
      "Test plans and regression cases auto-suggested by agents",
      "Red-teaming prompts, safety filters, and approval checkpoints",
      "Observability: logging agent steps and ensuring reproducible runs",
    ],
    build: "Increase coverage; add contract tests for agent outputs and fix 2–3 seeded bugs.",
  },
  {
    title: "Week 5 — Delivery & Operations for Agents",
    theme: "Run agents in CI/CD and operations.",
    focus: [
      "Containerize agents; schedule or trigger via CI",
      "Quality gates: diff review policies, dry-runs, sandboxed commands",
      "Ops prompts: runbooks, alert triage, postmortem drafting",
    ],
    build: "Ship the service plus an ops-ready agent job (dry-run by default) with runbook.",
  },
  {
    title: "Week 6 — Capstone: Multi-Agent Feature",
    theme: "Full SDLC with an agentic workflow.",
    focus: [
      "Select a feature/internal tool that benefits from agent orchestration",
      "Plan, implement, and evaluate using agents with human review",
      "Document: ADRs, runbooks, user docs, and reflection",
    ],
    build: "Deliver demo + docs + reflection on where agents helped vs. struggled.",
  },
];

const tools = [
  {
    name: "Codex CLI",
    tagline: "Open-source, multi-provider CLI with reasoning levels (minimal/medium/high).",
    highlights: [
      "Terminal-native edits, apply_patch diffs, and plan flows",
      "Sandbox/approval controls for safer agent execution",
      "Switch providers via --model flag or /model command",
    ],
    tone: "bg-slate-50 dark:bg-slate-900",
  },
  {
    name: "Claude Code",
    tagline: "Anthropic's coding agent with natural-language thinking controls (think → ultrathink).",
    highlights: [
      "Great at refactors and code explanations",
      "Deep reasoning toggle (ultrathink) for harder problems",
      "Plan/explore modes for agentic edits in terminal and IDE",
    ],
    tone: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    name: "Gemini CLI",
    tagline: "Google's multimodal CLI with built-in agent that handles text, code, and images.",
    highlights: [
      "Tight fit with Google Cloud developer tooling",
      "Mixed text+image debugging plus MCP-style plugins",
      "Open-source agent with ReAct-style loops and reasoning boost",
    ],
    tone: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    name: "Amp (Sourcegraph)",
    tagline: "Codebase-scale assistant with subagents and code search baked in.",
    highlights: [
      "Understands large monorepos via search index",
      "Oracle/second-opinion subagent for risky changes",
      "CLI + VS Code extension share agentic workflows",
    ],
    tone: "bg-emerald-50 dark:bg-emerald-950/20",
  },
];

const agentPatterns = [
  {
    title: "Plan → Act → Verify",
    description: "Use planning prompts, execute in sandbox, and require human approval on risky steps.",
    icon: Compass,
  },
  {
    title: "Tools & APIs",
    description: "Function calls, MCP tools, shell/diff commands, and model switching when tasks change.",
    icon: Workflow,
  },
  {
    title: "Memory & Context",
    description: "Repo summaries, scratchpads, and AGENT.md-style instructions to keep agents on-brief.",
    icon: Layers,
  },
  {
    title: "Safety gates",
    description: "Approval flows, rate limits, PII stripping, and reproducible logs for every run.",
    icon: ShieldCheck,
  },
];

const capstone = [
  {
    title: "Plan",
    items: ["Define a small but valuable feature/internal tool", "Draft scope, risks, and success criteria with AI"],
    icon: Compass,
  },
  {
    title: "Build",
    items: ["Implement with AI CLIs in the loop", "Pair AI-generated code with human review and tests"],
    icon: Bot,
  },
  {
    title: "Ship",
    items: ["Containerize and deploy a demo", "Write runbook + user docs from AI drafts"],
    icon: Rocket,
  },
  {
    title: "Reflect",
    items: ["Note where AI saved time vs. where it struggled", "List prompt patterns to reuse next sprint"],
    icon: Sparkles,
  },
];

export default function CurriculumPage() {
  return (
    <div className="flex w-full flex-col gap-10 p-6 md:p-8">
      <section className="rounded-2xl border bg-white px-6 py-8 shadow-sm dark:bg-slate-900">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Badge
              className="w-fit bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200"
              variant="secondary"
            >
              6-week AI SDLC curriculum
            </Badge>
            <h1 className="font-bold text-4xl leading-tight md:text-5xl">
              Bring AI agents into every stage of the SDLC
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Designed for experienced software developers who want practical, repeatable AI and agentic workflows—from
              ideation to operations—with daily prompts, safety guardrails, and a capstone that mirrors real product
              delivery.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-slate-700 text-sm shadow-inner dark:bg-slate-800/80 dark:text-slate-200">
            <div className="flex items-center gap-2 font-medium">
              <CalendarClock className="h-5 w-5" />
              <span>October 28, 2025 • 14:00–15:30</span>
            </div>
            <Separator className="my-3" />
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Daily: 1–2h learning + hands-on tasks the rest of the day</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Primary tool: Codex CLI, with Claude Code, Gemini CLI, and Amp for comparison</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Agentic workflows start Week 1 (plan → act → verify) with human approval on changes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Focus on capability-based choices; models and names evolve fast</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dailyCadence.map((item) => (
          <Card className="h-full" key={item.title}>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.accent}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Layers className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          <h2 className="font-semibold text-2xl">Agent building blocks</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {agentPatterns.map((pattern) => (
            <Card className="h-full" key={pattern.title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <pattern.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{pattern.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">{pattern.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <h2 className="font-semibold text-2xl">Week-by-week map</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {weeks.map((week) => (
            <Card className="h-full" key={week.title}>
              <CardHeader className="space-y-1">
                <CardTitle className="text-lg">{week.title}</CardTitle>
                <CardDescription>{week.theme}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-900/50">
                  <p className="mb-2 font-medium text-slate-800 dark:text-slate-100">Learning focus</p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    {week.focus.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <Sparkles className="mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 text-sm dark:bg-emerald-950/30">
                  <p className="mb-1 font-medium text-emerald-900 dark:text-emerald-100">Build & deliver</p>
                  <p className="text-emerald-800 dark:text-emerald-200">{week.build}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Layers className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          <h2 className="font-semibold text-2xl">Tooling threads (agents everywhere)</h2>
        </div>
        <p className="text-muted-foreground text-sm">
          Examples only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <Card className={`h-full border-0 shadow-sm ${tool.tone}`} key={tool.name}>
              <CardHeader>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription>{tool.tagline}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700 text-sm dark:text-slate-200">
                  {tool.highlights.map((highlight) => (
                    <li className="flex gap-2" key={highlight}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <h2 className="font-semibold text-2xl">Safety, governance, and quality gates</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Prompt hygiene</CardTitle>
              <CardDescription>No secrets, minimal PII, and red-team suspicious inputs.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Use local env files and mask tokens; review AI-suggested commands before execution; prefer read-only
              prompts for production data.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Human-in-the-loop</CardTitle>
              <CardDescription>Explicit review steps every day.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Require human approval on diffs, CI configs, and migrations; pair AI-generated tests with manual edge
              cases.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Traceability</CardTitle>
              <CardDescription>Document AI decisions.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Keep a lightweight log of prompts, outputs, and edits; link ADRs to the prompts that generated options.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Rocket className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          <h2 className="font-semibold text-2xl">Capstone path (Week 6)</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {capstone.map((phase) => (
            <Card className="h-full" key={phase.title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                  <phase.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{phase.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm">
                {phase.items.map((item) => (
                  <div className="flex gap-2" key={item}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
