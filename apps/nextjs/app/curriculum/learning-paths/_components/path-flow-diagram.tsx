import { Bot, Briefcase, Code2, Palette, ShieldCheck, Users } from "lucide-react";

const paths = [
  { id: "dev", name: "Developer", icon: Code2, color: "emerald" },
  { id: "product", name: "Product", icon: Briefcase, color: "blue" },
  { id: "design", name: "Design", icon: Palette, color: "pink" },
  { id: "qa", name: "QA", icon: ShieldCheck, color: "amber" },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; line: string }> = {
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/40",
    border: "border-emerald-300 dark:border-emerald-700",
    text: "text-emerald-700 dark:text-emerald-400",
    line: "bg-emerald-400 dark:bg-emerald-600",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/40",
    border: "border-blue-300 dark:border-blue-700",
    text: "text-blue-700 dark:text-blue-400",
    line: "bg-blue-400 dark:bg-blue-600",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900/40",
    border: "border-pink-300 dark:border-pink-700",
    text: "text-pink-700 dark:text-pink-400",
    line: "bg-pink-400 dark:bg-pink-600",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/40",
    border: "border-amber-300 dark:border-amber-700",
    text: "text-amber-700 dark:text-amber-400",
    line: "bg-amber-400 dark:bg-amber-600",
  },
};

export function PathFlowDiagram() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center font-bold text-2xl">The Learning Journey</h2>

      <div className="relative mx-auto max-w-4xl">
        {/* Weeks 1-2 - Starting Point */}
        <div className="flex flex-col items-center">
          <div className="mb-2 rounded-full bg-slate-200 px-3 py-1 font-mono text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-400">
            WEEKS 1-2
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-indigo-300 bg-indigo-100 dark:border-indigo-700 dark:bg-indigo-900/40">
            <Users className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
          </div>
          <p className="mt-2 font-semibold text-indigo-700 dark:text-indigo-400">All Together</p>
          <p className="text-foreground/60 text-sm">Foundations & AI Basics</p>
        </div>

        {/* Diverging Lines */}
        <div className="relative mt-4 flex justify-center">
          <svg
            aria-label="Lines diverging from shared foundation to specialized tracks"
            className="h-16 w-full max-w-4xl"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            viewBox="0 0 800 60"
          >
            <defs>
              <linearGradient id="line-emerald" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="line-blue" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="line-pink" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="line-amber" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            {/* Lines from center to each path */}
            <path d="M400,0 Q400,30 100,55" fill="none" stroke="url(#line-emerald)" strokeWidth="3" />
            <path d="M400,0 Q400,30 300,55" fill="none" stroke="url(#line-blue)" strokeWidth="3" />
            <path d="M400,0 Q400,30 500,55" fill="none" stroke="url(#line-pink)" strokeWidth="3" />
            <path d="M400,0 Q400,30 700,55" fill="none" stroke="url(#line-amber)" strokeWidth="3" />
          </svg>
        </div>

        {/* Weeks 3-6 - Divergent Paths */}
        <div className="mb-2 text-center">
          <span className="rounded-full bg-slate-200 px-3 py-1 font-mono text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-400">
            WEEKS 3-6
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 md:gap-6">
          {paths.map((path) => {
            const colors = colorClasses[path.color];
            const Icon = path.icon;
            return (
              <div className="flex flex-col items-center" key={path.id}>
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 md:h-20 md:w-20 ${colors.bg} ${colors.border}`}
                >
                  <Icon className={`h-8 w-8 md:h-10 md:w-10 ${colors.text}`} />
                </div>
                <p className={`mt-2 text-center font-medium text-sm md:text-base ${colors.text}`}>{path.name}</p>
                {/* Vertical line down */}
                <div className={`mt-2 h-20 w-1 rounded-full ${colors.line}`} />
              </div>
            );
          })}
        </div>

        {/* Converging Lines */}
        <div className="relative flex justify-center">
          <svg
            aria-label="Lines converging from specialized tracks to agent building"
            className="h-16 w-full max-w-4xl"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            viewBox="0 0 800 60"
          >
            <defs>
              <linearGradient id="conv-emerald" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="conv-blue" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="conv-pink" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="conv-amber" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <path d="M100,5 Q100,30 400,55" fill="none" stroke="url(#conv-emerald)" strokeWidth="3" />
            <path d="M300,5 Q300,30 400,55" fill="none" stroke="url(#conv-blue)" strokeWidth="3" />
            <path d="M500,5 Q500,30 400,55" fill="none" stroke="url(#conv-pink)" strokeWidth="3" />
            <path d="M700,5 Q700,30 400,55" fill="none" stroke="url(#conv-amber)" strokeWidth="3" />
          </svg>
        </div>

        {/* Weeks 7-8 - Converged */}
        <div className="flex flex-col items-center">
          <div className="mb-2 rounded-full bg-slate-200 px-3 py-1 font-mono text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-400">
            WEEKS 7-8
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-100 to-rose-100 dark:border-amber-700 dark:from-amber-900/40 dark:to-rose-900/40">
            <Bot className="h-10 w-10 text-amber-600 dark:text-amber-400" />
          </div>
          <p className="mt-2 font-semibold text-amber-700 dark:text-amber-400">All Together</p>
          <p className="text-foreground/60 text-sm">Building Agents & Capstone</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="h-3 w-3 rounded-full bg-indigo-500" />
          <span className="text-foreground/70">Shared Foundation (Weeks 1-2)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="h-3 w-10 rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 via-pink-400 to-amber-400" />
          <span className="text-foreground/70">Specialized Tracks (Weeks 3-6)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="h-3 w-3 rounded-full bg-rose-500" />
          <span className="text-foreground/70">Agent Building & Capstone (Weeks 7-8)</span>
        </div>
      </div>
    </section>
  );
}
