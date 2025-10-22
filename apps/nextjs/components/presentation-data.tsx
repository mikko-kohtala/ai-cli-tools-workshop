import type { Slide } from "./presentation";

export const presentationSlides: Slide[] = [
  {
    id: "title",
    title: "Codex CLI Tool",
    subtitle: "Empowering collaborative coding assistance from your terminal",
    image: "/images/codex-cli-logo.png", // Placeholder for Codex CLI logo
    imageAlt: "Codex CLI Logo",
    content: (
      <div className="text-center">
        <div className="mb-8 text-6xl">🤖</div>
        <p className="text-muted-foreground text-xl">AI CLI Tools Workshop - October 28, 2025</p>
        <div className="mt-8 rounded-lg bg-muted/50 p-6">
          <p className="font-medium text-lg">14:00–15:30</p>
          <p className="text-muted-foreground">Interactive Workshop & Presentation</p>
        </div>
      </div>
    ),
  },
  {
    id: "agenda",
    title: "Agenda",
    content: (
      <div className="space-y-6">
        <ul className="space-y-4 text-lg sm:text-xl">
          <li className="flex items-center gap-4">
            <span className="text-2xl">🎯</span>
            <span>Why Codex CLI matters</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-2xl">⚙️</span>
            <span>How the CLI harness works</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-2xl">🔒</span>
            <span>Working with sandboxing and approvals</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-2xl">🚀</span>
            <span>Building effective workflows</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-2xl">💡</span>
            <span>Pro tips and next steps</span>
          </li>
        </ul>
        <div className="mt-8 rounded-lg border-blue-500 border-l-4 bg-blue-50 p-6 dark:bg-blue-950/20">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>25 minutes</strong> presentation + <strong>1 hour</strong> hands-on workshop
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "overview",
    title: "Codex CLI at a Glance",
    image: "/images/codex-cli-overview.png", // Placeholder for architecture diagram
    imageAlt: "Codex CLI Overview",
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Terminal-First Interface</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              GPT-5-based coding agents that work directly from your command line
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Natural Language Bridge</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Connects natural language requests with local tooling seamlessly
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Developer Velocity</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Hyper-focused on speed and reproducibility in development workflows
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Project Constraints</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Respects project boundaries while automating routine tasks
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "key-concepts",
    title: "Key Concepts",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 sm:p-6 dark:bg-blue-950/20">
            <h3 className="mb-3 font-semibold text-blue-900 text-lg sm:text-xl dark:text-blue-100">
              Environment Context
            </h3>
            <p className="text-blue-800 text-sm sm:text-base dark:text-blue-200">
              Every session starts with cwd, sandbox, network, and approval settings
            </p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 sm:p-6 dark:bg-green-950/20">
            <h3 className="mb-3 font-semibold text-green-900 text-lg sm:text-xl dark:text-green-100">Plan & Execute</h3>
            <p className="text-green-800 text-sm sm:text-base dark:text-green-200">
              Agents build lightweight plans before touching code-heavy tasks
            </p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 sm:p-6 dark:bg-purple-950/20">
            <h3 className="mb-3 font-semibold text-lg text-purple-900 sm:text-xl dark:text-purple-100">
              Tooling Contracts
            </h3>
            <p className="text-purple-800 text-sm sm:text-base dark:text-purple-200">
              Shell, plan, and view_image tools with strict usage guidelines
            </p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 sm:p-6 dark:bg-orange-950/20">
            <h3 className="mb-3 font-semibold text-lg text-orange-900 sm:text-xl dark:text-orange-100">Outputs</h3>
            <p className="text-orange-800 text-sm sm:text-base dark:text-orange-200">
              Plain-text responses styled by the CLI; no raw command dumps
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "architecture",
    title: "Harness Architecture",
    image: "/images/codex-architecture.png", // Placeholder for architecture diagram
    imageAlt: "Codex CLI Architecture",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="rounded-lg border-blue-500 border-l-4 bg-blue-50 p-4 sm:p-6 dark:bg-blue-950/20">
            <h3 className="mb-2 font-semibold text-blue-900 text-lg sm:text-xl dark:text-blue-100">CLI Frontend</h3>
            <p className="text-blue-800 text-sm sm:text-base dark:text-blue-200">
              Wraps prompts, agent replies, and inline diffs for a seamless experience
            </p>
          </div>
          <div className="rounded-lg border-green-500 border-l-4 bg-green-50 p-4 sm:p-6 dark:bg-green-950/20">
            <h3 className="mb-2 font-semibold text-green-900 text-lg sm:text-xl dark:text-green-100">Sandbox Layer</h3>
            <p className="text-green-800 text-sm sm:text-base dark:text-green-200">
              Enforces filesystem/network policies (read-only, workspace-write, danger)
            </p>
          </div>
          <div className="rounded-lg border-purple-500 border-l-4 bg-purple-50 p-4 sm:p-6 dark:bg-purple-950/20">
            <h3 className="mb-2 font-semibold text-lg text-purple-900 sm:text-xl dark:text-purple-100">
              Approval Flow
            </h3>
            <p className="text-purple-800 text-sm sm:text-base dark:text-purple-200">
              Controls escalations (never, on-request, on-failure, untrusted)
            </p>
          </div>
          <div className="rounded-lg border-orange-500 border-l-4 bg-orange-50 p-4 sm:p-6 dark:bg-orange-950/20">
            <h3 className="mb-2 font-semibold text-lg text-orange-900 sm:text-xl dark:text-orange-100">
              Agent Runtime
            </h3>
            <p className="text-orange-800 text-sm sm:text-base dark:text-orange-200">
              Delivers instructions, templates, and formatting for reliable output
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sandboxing",
    title: "Working with Sandboxing",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Know Your Environment</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Always check the active{" "}
              <code className="rounded bg-muted px-2 py-1 text-xs sm:text-sm">sandbox_mode</code> before running
              commands
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Default to Safety</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Start with workspace-safe operations; request escalation only if policy allows
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Read-Only Exploration</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Treat read-only environments as exploratory unless user explicitly asks for changes
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-lg sm:text-xl">Destructive Commands</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Keep destructive commands off-limits unless user mandates them
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "approval-policies",
    title: "Approval Policies in Practice",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <div className="rounded-lg border-red-500 border-l-4 bg-red-50 p-4 sm:p-6 dark:bg-red-950/20">
            <h3 className="mb-2 font-semibold text-base text-red-900 sm:text-lg dark:text-red-100">never</h3>
            <p className="text-red-800 text-xs sm:text-sm dark:text-red-200">
              No escalation requests; work around limitations
            </p>
          </div>
          <div className="rounded-lg border-yellow-500 border-l-4 bg-yellow-50 p-4 sm:p-6 dark:bg-yellow-950/20">
            <h3 className="mb-2 font-semibold text-base text-yellow-900 sm:text-lg dark:text-yellow-100">on-request</h3>
            <p className="text-xs text-yellow-800 sm:text-sm dark:text-yellow-200">
              Ask for permission via{" "}
              <code className="rounded bg-yellow-100 px-1 py-0.5 text-xs dark:bg-yellow-900">
                with_escalated_permissions
              </code>
            </p>
          </div>
          <div className="rounded-lg border-orange-500 border-l-4 bg-orange-50 p-4 sm:p-6 dark:bg-orange-950/20">
            <h3 className="mb-2 font-semibold text-base text-orange-900 sm:text-lg dark:text-orange-100">on-failure</h3>
            <p className="text-orange-800 text-xs sm:text-sm dark:text-orange-200">
              Retry only after a sandbox failure justifies it
            </p>
          </div>
          <div className="rounded-lg border-purple-500 border-l-4 bg-purple-50 p-4 sm:p-6 dark:bg-purple-950/20">
            <h3 className="mb-2 font-semibold text-base text-purple-900 sm:text-lg dark:text-purple-100">untrusted</h3>
            <p className="text-purple-800 text-xs sm:text-sm dark:text-purple-200">
              Most commands require user confirmation first
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "effective-sessions",
    title: "Building Effective Sessions",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 sm:h-8 sm:w-8 dark:bg-blue-900 dark:text-blue-300">
              1
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Clarify Tasks</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Restate goals when needed for clarity</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-8 sm:w-8 dark:bg-green-900 dark:text-green-300">
              2
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Draft Plans</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Create 2+ step plans for non-trivial work and keep them updated
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 sm:h-8 sm:w-8 dark:bg-purple-900 dark:text-purple-300">
              3
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Summarize Changes</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Provide file references and command suggestions
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 sm:h-8 sm:w-8 dark:bg-orange-900 dark:text-orange-300">
              4
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Offer Next Steps</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Suggest tests or commits without overstepping
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "communication",
    title: "Communication Guidelines",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Be Concise & Structured</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Friendly, structured content for quick scanning
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Reference Files Precisely</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Clickable paths with precise line numbers</p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Summarize Outputs</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Avoid raw command dumps; summarize key findings
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Use Code Fences</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Code fences for snippets, inline backticks for literals
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "pro-tips",
    title: "Pro Tips for Power Users",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 dark:from-blue-950/20 dark:to-purple-950/20">
            <h3 className="mb-2 font-semibold text-base sm:text-lg">
              Prefer <code className="rounded bg-white/50 px-1 py-0.5 text-xs dark:bg-black/20">rg</code> for Fast
              Searches
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Specify <code className="rounded bg-white/50 px-1 py-0.5 text-xs dark:bg-black/20">workdir</code> on every
              shell call
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-4 sm:p-6 dark:from-green-950/20 dark:to-blue-950/20">
            <h3 className="mb-2 font-semibold text-base sm:text-lg">Use ASCII and Minimal Comments</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Add comments only when clarity demands it</p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 dark:from-purple-950/20 dark:to-pink-950/20">
            <h3 className="mb-2 font-semibold text-base sm:text-lg">Monitor File Changes</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Watch for unexpected changes and pause if they appear
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 dark:from-orange-950/20 dark:to-red-950/20">
            <h3 className="mb-2 font-semibold text-base sm:text-lg">CLI Styles Text</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Keep formatting minimal but intentional</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "demo-flow",
    title: "Demo Flow Idea",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="rounded-lg border p-4 sm:p-6">
          <h3 className="mb-4 font-semibold text-lg sm:text-xl">
            Scope: "Refactor logging module for structured output"
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 sm:h-8 sm:w-8 dark:bg-blue-900 dark:text-blue-300">
                1
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">Analyze files</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Understand current logging implementation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-8 sm:w-8 dark:bg-green-900 dark:text-green-300">
                2
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">Draft approach</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Plan the refactoring strategy</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 sm:h-8 sm:w-8 dark:bg-purple-900 dark:text-purple-300">
                3
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">Implement changes</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Apply the refactoring with proper structure</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 sm:h-8 sm:w-8 dark:bg-orange-900 dark:text-orange-300">
                4
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">Run tests</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Verify the changes work correctly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "next-steps",
    title: "Next Steps",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Install & Explore</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Run Codex CLI locally; explore sandbox configurations
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Script Common Commands</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Create reusable scripts for lint/test workflows
            </p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Share Feedback</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Help the Codex team refine agent workflows</p>
          </div>
          <div className="rounded-lg border p-4 sm:p-6">
            <h3 className="mb-3 font-semibold text-base sm:text-lg">Integrate into Onboarding</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Add CLI usage to team guides and playbooks</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "qa",
    title: "Q & A",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center">
          <div className="mb-6 text-4xl sm:mb-8 sm:text-6xl">❓</div>
          <h2 className="mb-4 font-bold text-2xl sm:mb-6 sm:text-3xl">Questions & Discussion</h2>
          <div className="space-y-3 text-left sm:space-y-4">
            <div className="rounded-lg border p-4 sm:p-6">
              <h3 className="mb-2 font-semibold text-base sm:text-lg">What workflows can we automate next?</h3>
            </div>
            <div className="rounded-lg border p-4 sm:p-6">
              <h3 className="mb-2 font-semibold text-base sm:text-lg">
                How should we tune policies for our organization?
              </h3>
            </div>
            <div className="rounded-lg border p-4 sm:p-6">
              <h3 className="mb-2 font-semibold text-base sm:text-lg">
                Which repositories benefit most from agent-assisted development?
              </h3>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
