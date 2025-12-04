export function PathsIntro() {
  return (
    <section className="mb-16" id="intro">
      <h1 className="font-bold text-3xl text-gray-800 dark:text-gray-300">
        Learning Paths: 6-Week Curriculum with Role Pivots
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Same 6-week scaffold as the core curriculum. Weeks 2–4 pivot into role-specific learning paths, then converge in
        Week 5 for shared DevOps/operations, and complete a joint capstone in Week 6.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        <li>Week 1: Foundations, Tools & Agents — common baseline for all roles.</li>
        <li>Weeks 2–4: Role-specific specializations (Developer, Designer, Product, Sales/CS, Data/Analytics).</li>
        <li>Week 5: Shared Ops focus — CI/CD, deployment, observability, agentic operations.</li>
        <li>Week 6: Capstone — cross-functional agentic feature or internal tool presented by each path.</li>
      </ul>
    </section>
  );
}
