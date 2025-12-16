import { Code2 } from "lucide-react";

export function DeveloperHero() {
  return (
    <section className="mb-12 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30">
        <Code2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h1 className="mb-4 font-bold text-4xl text-gray-800 md:text-5xl dark:text-gray-200">
        Developer AI Tools Mastery
      </h1>
      <p className="mx-auto max-w-2xl text-gray-600 text-lg dark:text-gray-400">
        8-week intensive curriculum for experienced developers. Skip the basics, dive deep into
        AI-assisted development, and build production-ready agents.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[
          { label: "Experienced Devs", color: "emerald" },
          { label: "Skip Basics", color: "blue" },
          { label: "Build Agents", color: "amber" },
        ].map((badge) => (
          <span
            className={`rounded-full px-4 py-2 font-medium text-sm ${
              badge.color === "emerald"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                : badge.color === "blue"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
            }`}
            key={badge.label}
          >
            {badge.label}
          </span>
        ))}
      </div>
    </section>
  );
}
