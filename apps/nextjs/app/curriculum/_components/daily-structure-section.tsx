import { Clock, ListChecks, NotebookText } from "lucide-react";

export function DailyStructureSection() {
  return (
    <section className="w-full px-8" id="daily-structure">
      <div className="mx-auto max-w-4xl space-y-6 rounded-lg border bg-gradient-to-br from-slate-50 to-slate-100 p-6 dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-900/40">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-slate-700">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Day Structure</h2>
            <p className="text-muted-foreground text-sm">
              Every weekday follows the same rhythm: short focused learning, then deep project work using AI CLI tools.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2 rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-2 font-semibold text-slate-500 text-xs uppercase tracking-wide dark:text-slate-400">
              <NotebookText className="h-4 w-4" />
              Learning block (1–2h)
            </div>
            <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
              <li>Short reading or video on the concept of the day</li>
              <li>Guided demo prompts in Claude Code or Codex CLI</li>
              <li>Quick discussion of &quot;what to watch for&quot; during practice</li>
            </ul>
          </div>

          <div className="space-y-2 rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-2 font-semibold text-slate-500 text-xs uppercase tracking-wide dark:text-slate-400">
              <ListChecks className="h-4 w-4" />
              Project work (rest of the day)
            </div>
            <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
              <li>Apply the concept to the ongoing project</li>
              <li>Use AI heavily, but always keep human review steps</li>
              <li>Capture prompts and workflows that worked well</li>
            </ul>
          </div>

          <div className="space-y-2 rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-2 font-semibold text-slate-500 text-xs uppercase tracking-wide dark:text-slate-400">
              <Clock className="h-4 w-4" />
              Daily wrap-up (15–30 min)
            </div>
            <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
              <li>Write a short log of what AI helped with</li>
              <li>Note where AI struggled or was misleading</li>
              <li>Optionally ask an AI tool to summarise the day</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
