import { Building2, MessageCircleQuestion, Sparkles, Terminal } from "lucide-react";

export function ToolsAndCompanyImpactSection() {
  return (
    <section className="w-full px-8" id="tools-and-impact">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
        <div className="flex-1 space-y-4 rounded-lg border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="font-semibold text-xl">Core AI CLI tools &amp; agents</h2>
              <p className="text-muted-foreground text-xs">
                The curriculum uses a small set of focused tools so participants build durable workflows rather than
                tool hype.
              </p>
            </div>
          </div>

          <ul className="mt-3 space-y-2 text-muted-foreground text-xs">
            <li>
              <span className="font-medium text-slate-900 dark:text-slate-100">Claude Code</span> – reasoning-focused
              coding assistant with natural language control over thinking depth.
            </li>
            <li>
              <span className="font-medium text-slate-900 dark:text-slate-100">Codex CLI</span> – open-source CLI for
              working with multiple model providers from your terminal, including support for agentic workflows via
              configuration and commands.
            </li>
            <li>
              <span className="font-medium text-slate-900 dark:text-slate-100">Gemini CLI</span> – Google&apos;s command
              line interface for using Gemini models in developer workflows.
            </li>
            <li>
              <span className="font-medium text-slate-900 dark:text-slate-100">Amp</span> – Sourcegraph&apos;s VS Code
              extension and CLI with powerful code navigation and reasoning.
            </li>
            <li>
              <span className="font-medium text-slate-900 dark:text-slate-100">Agent runtimes &amp; frameworks</span> –
              libraries and services that let you define tools, goals, and control loops so agents can act on your
              behalf within clear guardrails.
            </li>
          </ul>

          <p className="mt-4 rounded-md bg-slate-50 p-3 text-[11px] text-slate-600 dark:bg-slate-950/40 dark:text-slate-400">
            Examples only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit, not on
            any specific model version.
          </p>
        </div>

        <div className="flex-1 space-y-4 rounded-lg border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Building2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="font-semibold text-xl">AI across company processes</h2>
              <p className="text-muted-foreground text-xs">
                Beyond writing code, participants see how AI development can support the wider organisation.
              </p>
            </div>
          </div>

          <ul className="mt-3 space-y-2 text-muted-foreground text-xs">
            <li>Product &amp; UX – shaping features, user stories, and UX copy with AI assistance.</li>
            <li>Support &amp; operations – drafting macros, help articles, and lightweight internal assistants.</li>
            <li>Documentation &amp; knowledge – turning specs and conversations into living docs and FAQs.</li>
            <li>Analytics &amp; decision-making – helping teammates explore data and summarise trends.</li>
          </ul>

          <div className="mt-4 space-y-2 rounded-md bg-slate-50 p-3 text-[11px] text-slate-700 dark:bg-slate-950/40 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <MessageCircleQuestion className="h-4 w-4" />
              <span className="font-semibold">Capstone focus</span>
            </div>
            <p>
              In the final weeks, each participant designs a capstone feature or internal tool, following a mini
              end-to-end SDLC with AI support—from requirements through deployment and documentation.
            </p>
          </div>

          <p className="mt-2 flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
            <Sparkles className="h-3 w-3" />
            The goal is AI-augmented experts, not AI-dependent teams—humans stay accountable for decisions and quality.
          </p>
        </div>
      </div>
    </section>
  );
}
