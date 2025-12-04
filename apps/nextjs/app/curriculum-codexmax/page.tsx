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
    title: "Ship & reflect",
    description: "Checkpoint, human review, and a quick log of what AI helped vs. missed.",
    icon: Flag,
    accent: "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300",
  },
];

const weeks = [
  {
    title: "Week 1 — Foundations & Tooling",
    theme: "Mindset, safety, and installing the core AI CLIs.",
    focus: [
      "LLM capabilities/limits; safe prompting habits",
      "Install & configure Codex CLI, Claude Code, Gemini CLI, Amp",
      "Context management and reasoning-depth controls",
    ],
    build: "Scaffold a small service/CLI with AI-generated boilerplate and tests.",
  },
  {
    title: "Week 2 — Requirements & Architecture",
    theme: "Use AI to clarify scope and propose designs.",
    focus: [
      "Turn ideas into user stories, acceptance criteria, edge-case lists",
      "Have AI propose architecture options and justify trade-offs",
      "Draft ADRs and a lean design doc with AI, then human edit",
    ],
    build: "Adopt one architecture, commit ADR, and stub the main components.",
  },
  {
    title: "Week 3 — Implementation Loops",
    theme: "Tight human+AI coding cycles and repo navigation.",
    focus: [
      "Describe → generate → review → improve loop",
      "Refactors and idiomatic code suggestions via CLI commands",
      "Feeding diffs/logs/errors as context for targeted help",
    ],
    build: "Implement core features; maintain running changelog of AI prompts that worked best.",
  },
  {
    title: "Week 4 — Testing & Debugging",
    theme: "Reliability with AI-generated tests and faster root-cause hunts.",
    focus: [
      "Ask AI for test plans and boundary cases",
      "Generate unit/integration tests, then harden them manually",
      "Use stack traces/logs to have AI hypothesize and propose fixes",
    ],
    build: "Increase coverage on the project; fix 2–3 seeded bugs with AI assistance.",
  },
  {
    title: "Week 5 — DevOps & Operations",
    theme: "AI for shipping and running software.",
    focus: [
      "Generate Dockerfiles/CI configs and review for safety",
      "Deployment walk-through with AI as copilot (no secrets in prompts)",
      "Observability prompts: metrics, logs, runbooks",
    ],
    build: "Containerize and deploy a demo; add a minimal runbook drafted by AI, edited by humans.",
  },
  {
    title: "Week 6 — Company Impact & Capstone",
    theme: "AI beyond code plus a full-SDLC mini project.",
    focus: [
      "AI for docs, support macros, analytics queries, and product copy",
      "Governance: data privacy, IP, prompt-injection awareness",
      "Capstone planning: scope, milestones, demo script",
    ],
    build: "Ship the capstone feature/tool with docs, ADRs, runbook, and a short reflection.",
  },
];

const tools = [
  {
    name: "Codex CLI",
    tagline: "Open-source, multi-provider CLI with reasoning levels (minimal/medium/high).",
    highlights: [
      "Terminal-native edits and apply_patch diffs",
      "Sandbox/approval flows for safer execution",
      "Switch providers via --model flag or /model command",
    ],
    tone: "bg-slate-50 dark:bg-slate-900",
  },
  {
    name: "Claude Code",
    tagline: "Anthropic's coding agent with natural-language thinking controls (think → ultrathink).",
    highlights: [
      "Great at refactors and code explanations",
      "Deep reasoning toggle for harder problems",
      "Works in terminal and IDE contexts",
    ],
    tone: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    name: "Gemini CLI",
    tagline: "Google's multimodal CLI that pairs code with images or logs when needed.",
    highlights: [
      "Tight fit with Google Cloud developer tooling",
      "Good at mixed text+image debugging",
      "Fast first-pass generations with reasoning boost option",
    ],
    tone: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    name: "Amp (Sourcegraph)",
    tagline: "Codebase-scale assistant with subagents and code search baked in.",
    highlights: [
      "Understands large monorepos via search index",
      "Oracle/second-opinion checks for risky changes",
      "CLI + VS Code extension for the same workflows",
    ],
    tone: "bg-emerald-50 dark:bg-emerald-950/20",
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
            <h1 className="font-bold text-4xl leading-tight md:text-5xl">Bring AI into every stage of the SDLC</h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Designed for experienced software developers who want practical, repeatable AI workflows—from ideation to
              operations—with daily prompts, safety guardrails, and a capstone that mirrors real product delivery.
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
                <span>Focus on capability-based choices; models and names evolve fast</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
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
          <h2 className="font-semibold text-2xl">Tooling threads (used throughout)</h2>
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
