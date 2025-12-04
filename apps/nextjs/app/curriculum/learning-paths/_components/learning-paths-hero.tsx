import { Route } from "lucide-react";

export function LearningPathsHero() {
  return (
    <section className="mb-12 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
        <Route className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
      </div>
      <h1 className="mb-4 font-bold text-4xl text-gray-800 md:text-5xl dark:text-gray-200">
        Role-Based Learning Paths
      </h1>
      <p className="mx-auto max-w-2xl text-gray-600 text-lg dark:text-gray-400">
        One curriculum, five specialized tracks. Everyone starts together, diverges into role-specific learning, then
        converges to build with AI agents.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["Developers", "Designers", "Product", "Sales & Marketing", "Operations"].map((role) => (
          <span
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 text-sm dark:bg-slate-800 dark:text-slate-300"
            key={role}
          >
            {role}
          </span>
        ))}
      </div>
    </section>
  );
}
