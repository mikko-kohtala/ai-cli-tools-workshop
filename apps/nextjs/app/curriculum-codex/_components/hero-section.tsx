import { Calendar, Compass, GraduationCap, Workflow } from "lucide-react";

export function CurriculumHeroSection() {
  return (
    <section className="w-full px-8" id="overview">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700 text-xs dark:bg-blue-950/30 dark:text-blue-300">
            <Workflow className="h-3 w-3" />
            6-week AI-augmented development journey
          </p>
          <h1 className="font-bold text-4xl md:text-5xl">6-Week AI &amp; Agents Curriculum</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            A structured program for &quot;normal&quot; software developers to integrate AI, agents, and agentic
            workflows into everyday development across the full software delivery lifecycle.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-1 font-semibold text-sm">Who it&apos;s for</h3>
            <p className="text-muted-foreground text-xs">
              Professional developers with solid fundamentals who want to add AI-assisted workflows without becoming ML
              experts.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="mb-1 font-semibold text-sm">Time commitment</h3>
            <p className="text-muted-foreground text-xs">
              6 weeks • 5 days/week. Each day: 1–2 hours of guided learning plus several hours of hands-on project work.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Compass className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-1 font-semibold text-sm">Outcome</h3>
            <p className="text-muted-foreground text-xs">
              Confident use of AI CLI tools and agentic workflows across the SDLC, plus a clear view of how AI can
              support wider company processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
