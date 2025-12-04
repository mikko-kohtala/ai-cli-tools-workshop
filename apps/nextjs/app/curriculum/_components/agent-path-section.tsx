import { Bot, Layers, Target, Workflow } from "lucide-react";

export function AgentPathSection() {
  return (
    <section className="w-full px-8" id="agents">
      <div className="mx-auto max-w-5xl space-y-5 rounded-lg border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/40">
            <Bot className="h-5 w-5 text-purple-600 dark:text-purple-300" />
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl">Agent Learning Path</h2>
            <p className="text-muted-foreground text-sm">
              Agents are AI-powered components that can observe context, call tools, and take actions towards a goal.
              This curriculum introduces them early in a safe, controlled way and then gradually expands their
              responsibilities.
            </p>
            <ul className="space-y-1 text-muted-foreground text-xs">
              <li>Start with simple, scripted &quot;agent-like&quot; workflows around your local project.</li>
              <li>Gradually introduce tools and APIs that agents can call under clear guardrails.</li>
              <li>Only move towards more autonomous or orchestrated agents when the use case is well understood.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2 rounded-md border bg-slate-50 p-4 text-xs dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-1 flex items-center gap-2 font-semibold text-slate-700 uppercase tracking-wide dark:text-slate-200">
              <Target className="h-4 w-4" />
              Weeks 1–2
            </div>
            <p className="text-muted-foreground">
              Understand what agents are, when to prefer simple prompts, and how to run your first agent-style workflow
              against a local project.
            </p>
          </div>

          <div className="space-y-2 rounded-md border bg-slate-50 p-4 text-xs dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-1 flex items-center gap-2 font-semibold text-slate-700 uppercase tracking-wide dark:text-slate-200">
              <Workflow className="h-4 w-4" />
              Weeks 3–4
            </div>
            <p className="text-muted-foreground">
              Design single-agent workflows that can read code, call tools, and propose changes, while you stay in the
              loop for review, testing, and deployment.
            </p>
          </div>

          <div className="space-y-2 rounded-md border bg-slate-50 p-4 text-xs dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-1 flex items-center gap-2 font-semibold text-slate-700 uppercase tracking-wide dark:text-slate-200">
              <Layers className="h-4 w-4" />
              Weeks 5–6
            </div>
            <p className="text-muted-foreground">
              Explore how agents fit into CI/CD, data workflows, and operations: scheduled jobs, event-driven
              workflows, and safe guardrails around infrastructure, data, and secrets.
            </p>
          </div>

          <div className="space-y-2 rounded-md border bg-slate-50 p-4 text-xs dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-1 flex items-center gap-2 font-semibold text-slate-700 uppercase tracking-wide dark:text-slate-200">
              <Bot className="h-4 w-4" />
              Weeks 7–8
            </div>
            <p className="text-muted-foreground">
              Design and run a capstone that uses agents to support a real company process (e.g., reporting,
              documentation, or operations), with clear ownership, runbooks, and human review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
