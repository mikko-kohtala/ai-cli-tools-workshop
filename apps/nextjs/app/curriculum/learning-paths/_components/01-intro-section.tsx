import { Route } from "lucide-react";

export function IntroSection() {
  return (
    <section className="mb-16 flex min-h-[50vh] flex-col justify-center" id="intro">
      <div className="space-y-6 text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800 dark:bg-gray-700">
          <Route className="h-10 w-10 text-gray-100" />
        </div>
        <h1 className="font-bold text-5xl text-gray-800 md:text-6xl dark:text-gray-300">
          Learning Paths: Role-Specific AI Mastery
        </h1>
        <p className="mx-auto max-w-3xl pt-4 text-gray-600 text-xl dark:text-gray-400">
          A flexible 8-week curriculum that starts with common foundations, branches into role-specific paths, then
          converges for advanced topics and collaborative capstone projects
        </p>
        <div className="mx-auto max-w-3xl pt-6">
          <p className="text-base text-gray-600 dark:text-gray-400">
            This curriculum recognizes that different roles use AI tools differently. While everyone needs foundational
            knowledge, developers, product managers, and designers have unique needs. Weeks 2-4 diverge into three specialized paths, then Weeks 5-8 bring everyone together for advanced topics, cross-functional collaboration, and capstone projects.
          </p>
        </div>
      </div>
    </section>
  );
}
