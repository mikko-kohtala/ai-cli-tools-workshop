import {
  BookOpen,
  Bot,
  Brush,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Compass,
  Cpu,
  Flag,
  GitBranch,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const outcomes = [
  "Ship a small but real feature with agents in the loop (code, tests, infra).",
  "Design safe plan → act → verify loops with human approvals for risky steps.",
  "Switch between tools (Codex CLI, Claude Code, Gemini CLI, Amp) based on task fit.",
  "Document decisions: ADRs, runbooks, prompt logs, and agent evaluations.",
  "Coach teammates on agentic workflows, limits, and governance basics.",
];

const audience = [
  { title: "Experienced devs", detail: "Comfortable with Git, CLI, and a primary language/framework.", icon: Users },
  { title: "Team leads/ICs", detail: "Need repeatable patterns they can roll out to squads.", icon: ClipboardCheck },
  { title: "DevOps/SRE", detail: "Want agents that stay safe in CI/CD and on-call contexts.", icon: ShieldCheck },
  { title: "Product-minded devs", detail: "Care about end-to-end delivery, not just code generation.", icon: BookOpen },
];

const paths = [
  {
    title: "Developer path",
    audience: "Software developers",
    icon: Cpu,
    accent: "bg-blue-50 dark:bg-blue-950/30",
    focus: [
      "Ship refactors and features with plan → act → verify loops.",
      "Use AI CLIs for diffs, tests, and repo navigation with approvals.",
      "Pair with product/design prompts to keep scope and UX aligned.",
    ],
    deliverable: "Feature slice with tests, ADR, and an ops-ready runbook.",
  },
  {
    title: "Product path",
    audience: "Product managers & owners",
    icon: Compass,
    accent: "bg-amber-50 dark:bg-amber-950/30",
    focus: [
      "Backlog shaping: epics, slices, and acceptance criteria with agents.",
      "Risk/assumption mapping plus stakeholder updates and release notes.",
      "Translate design/dev feedback into crisp tickets and success metrics.",
    ],
    deliverable: "Prioritized backlog, lean spec, and decision log ready for build.",
  },
  {
    title: "Design path",
    audience: "Designers & UX",
    icon: Brush,
    accent: "bg-rose-50 dark:bg-rose-950/30",
    focus: [
      "UX copy, flows, and accessibility checks co-written with agents.",
      "Variant prompts for empty states, errors, onboarding, and tone.",
      "Developer-ready notes with tokens, states, and acceptance snapshots.",
    ],
    deliverable: "Flow map + UX copy deck + accessibility checklist for the feature.",
  },
];

const success = [
  "Agent runs are reproducible: logged prompts, diffs, and approvals.",
  "Each week ends with a concrete artifact (ADR, tests, runbook, demo).",
  "Capstone deployed with a dry-run mode and rollback notes.",
  "Prompts and guardrails captured in a small handbook for the team.",
];

const dailyCadence = [
  {
    title: "Learn (1–2h)",
    description: "Concept brief plus 2–3 prompts to try immediately.",
    example: "Prompt a planning agent to list risks and unknowns for today's ticket.",
    icon: Clock3,
    accent: "bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Build (deep work)",
    description: "Apply the idea to the live project with AI tools in the loop.",
    example: "Use Codex CLI to draft a diff, then ask Claude Code to refactor it.",
    icon: Workflow,
    accent: "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300",
  },
  {
    title: "Agent drill",
    description: "Run a plan → act → verify loop on a scoped change.",
    example: "Have Gemini CLI propose a test plan, execute dry-run, log verdicts.",
    icon: Bot,
    accent: "bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300",
  },
  {
    title: "Ship & reflect",
    description: "Checkpoint, human review, and quick log of wins/gaps.",
    example: "Record prompts that worked, surprises, and what to automate next.",
    icon: Flag,
    accent: "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300",
  },
];

const weeks = [
  {
    title: "Week 1 — Foundations & Agentic Basics",
    theme: "Mindset, safety, and your first terminal agent.",
    focus: [
      "LLM limits, safe prompting, AGENT.md-style briefs",
      "Install & configure Codex CLI, Claude Code, Gemini CLI, Amp",
      "Build a simple plan → act → verify loop with tool calls",
    ],
    agentFocus: ["Scratchpads & context windows", "Approval checkpoints", "Minimal vs. high reasoning modes"],
    artifacts: "Tiny agent that reads a file, proposes a change, drafts a diff; human-reviewed merge.",
  },
  {
    title: "Week 2 — Path Discovery & Scoping",
    theme: "Branch into Developer/Product/Design paths to map needs.",
    focus: [
      "Persona-specific discovery: repo map (dev), outcomes & constraints (product), flows & UX edges (design)",
      "Backlog shaping with agents: epics, slices, acceptance criteria",
      "Assumption/risk log seeded by agent Q&A and stakeholder prompts",
    ],
    agentFocus: ["Path context kits", "Assumption and risk logging prompts", "Planner + executor pairing per path"],
    artifacts: "Path discovery packet: goals, prioritized backlog, risks, and acceptance criteria.",
  },
  {
    title: "Week 3 — Architecture & Prototyping",
    theme: "Choose approaches and spike with agents.",
    focus: [
      "Architecture options + ADR drafts with agents as co-authors",
      "Prototypes for CLI flows, UX copy, or story maps depending on path",
      "Decision reviews with cross-path feedback loops",
    ],
    agentFocus: [
      "Architecture optioning",
      "Rapid spike loops (generate → run → reflect)",
      "Context chunking for mocks and code",
    ],
    artifacts: "Prototype or spike per path plus ADR and decision log.",
  },
  {
    title: "Week 4 — Implementation & Pairing",
    theme: "Ship slices with path pairings.",
    focus: [
      "ReAct loops for code, UX copy, and acceptance tests",
      "Design and product reviews feeding dev tasks and regression tests",
      "Refactors and dependency updates with agent guardrails",
    ],
    agentFocus: ["Diff-aware editing", "Prompt libraries for code and UX copy", "Traceable plans with approvals"],
    artifacts: "Feature slices shipped with tests, UX notes, and updated tickets.",
  },
  {
    title: "Week 5 — Evaluation, Testing & Guardrails",
    theme: "Harden what you built.",
    focus: [
      "Test plans and regression cases auto-suggested by agents",
      "Red-team prompts for safety, secrets, and misuse",
      "Observability: logs, dry-run defaults, approvals, and rollback notes",
    ],
    agentFocus: ["Self-check prompts", "Contract tests for agent output", "Safety filters and rate limits"],
    artifacts: "Higher coverage, safety checklist signed off, seeded bugs found and fixed.",
  },
  {
    title: "Week 6 — Delivery & Operations",
    theme: "Run agents in CI/CD and on-call contexts.",
    focus: [
      "Containerize/schedule agents; dry-run in CI",
      "Quality gates for diffs, migrations, and configs",
      "Runbooks, alert triage, and postmortem drafting with agents",
    ],
    agentFocus: ["Dry-run modes", "CI hooks with approvals", "Chat-to-runbook workflows"],
    artifacts: "Ops-ready agent job (dry-run default), runbook, and release plan.",
  },
  {
    title: "Week 7 — Automation & Scale",
    theme: "Make path playbooks repeatable and cost-aware.",
    focus: [
      "Schedule recurring tasks (lint, copy checks, backlog hygiene)",
      "Template prompts and context kits for each path",
      "Cost/latency tuning, fallbacks, and retries",
    ],
    agentFocus: ["Tool orchestration and schedulers", "Cost/latency controls", "Reusable prompt kits per path"],
    artifacts: "Automated agent playbook with run logs and rollback steps.",
  },
  {
    title: "Week 8 — Capstone & Showcase",
    theme: "Blend paths into a final demo.",
    focus: [
      "Integrate dev, product, and design outputs into one feature",
      "Demo scripting, metrics, and user narrative",
      "Postmortem: what to automate next and adoption plan",
    ],
    agentFocus: [
      "Demo scripting with agents",
      "Evaluation loops for adoption metrics",
      "Rollout and rollback storytelling",
    ],
    artifacts: "Capstone demo with docs, runbook, and adoption plan.",
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
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Badge
              className="w-fit bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200"
              variant="secondary"
            >
              8-week AI SDLC curriculum
            </Badge>
            <h1 className="font-bold text-4xl leading-tight md:text-5xl">
              Bring AI agents into every stage of the SDLC
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Practical, repeatable AI and agentic workflows—from ideation to operations—with daily prompts, safety
              guardrails, and a capstone that mirrors real product delivery.
            </p>
            <div className="rounded-xl border bg-slate-50 p-4 dark:bg-slate-900/50">
              <p className="mb-3 font-medium text-slate-800 text-sm dark:text-slate-200">By Week 8 you will:</p>
              <ul className="space-y-2 text-slate-700 text-sm dark:text-slate-300">
                {outcomes.map((item) => (
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
                <span>Primary tool: Codex CLI; compare Claude Code, Gemini CLI, Amp</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Agentic workflows start Week 1 (plan → act → verify) with approvals</span>
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
            <CardContent className="text-muted-foreground text-sm">Example: {item.example}</CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          <h2 className="font-semibold text-2xl">Who this is for</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <Card className="h-full" key={item.title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <item.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">{item.detail}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <GitBranch className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <h2 className="font-semibold text-2xl">Learning paths</h2>
        </div>
        <p className="text-muted-foreground text-sm">
          Weeks 2–3 dive into the Developer, Product, and Design paths; we reconverge each week to share artifacts and
          keep scope, UX, and delivery aligned.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Card className={`h-full border-0 shadow-sm ${path.accent}`} key={path.title}>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/70 dark:bg-slate-900/70">
                  <path.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">{path.title}</CardTitle>
                  <CardDescription>{path.audience}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700 text-sm dark:text-slate-200">
                <ul className="space-y-2">
                  {path.focus.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <Sparkles className="mt-0.5 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-white/70 p-2 font-medium text-slate-800 text-xs shadow-inner dark:bg-slate-900/70 dark:text-slate-100">
                  Signature deliverable: {path.deliverable}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
                <div className="rounded-lg bg-indigo-50 p-3 text-sm dark:bg-indigo-950/30">
                  <p className="mb-2 font-medium text-indigo-900 dark:text-indigo-100">Agent skill</p>
                  <ul className="space-y-2 text-indigo-900 dark:text-indigo-100">
                    {week.agentFocus.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <Cpu className="mt-0.5 h-4 w-4" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 text-sm dark:bg-emerald-950/30">
                  <p className="mb-1 font-medium text-emerald-900 dark:text-emerald-100">Build & deliver</p>
                  <p className="text-emerald-800 dark:text-emerald-200">{week.artifacts}</p>
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
          <h2 className="font-semibold text-2xl">Capstone path (Weeks 7–8)</h2>
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

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Flag className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          <h2 className="font-semibold text-2xl">Success criteria</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Evidence of progress</CardTitle>
              <CardDescription>What “good” looks like each week.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              <ul className="space-y-2">
                {success.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Keep the loop tight</CardTitle>
              <CardDescription>Default workflow to reuse daily.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              <ol className="list-decimal space-y-1 pl-4">
                <li>Summarize task + constraints to the agent (paste ticket + files).</li>
                <li>Ask for a plan; trim to 3–6 steps; mark risky actions.</li>
                <li>Run with dry-run/approval; capture diffs and logs.</li>
                <li>Have a second agent (or human) review; add tests.</li>
                <li>Ship or roll back; note prompts that worked.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
