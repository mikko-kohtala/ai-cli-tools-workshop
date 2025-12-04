export function PathsIntro() {
  return (
    <section className="mb-16" id="intro">
      <h1 className="font-bold text-3xl text-gray-800 dark:text-gray-300">
        Learning Paths: 8-Week Curriculum with Role Pivots
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        8-week scaffold aligned with the core curriculum. Weeks 2–6 pivot into three role-specific paths, then converge
        in Week 7 for shared integration and complete capstones in Week 8.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        <li>Week 1: Foundations, Tools & Agents — common baseline for all roles.</li>
        <li>Weeks 2–6: Role-specific specializations — Developer, Product, Design.</li>
        <li>Week 7: Shared integration — CI/CD, deployment, observability, agentic operations.</li>
        <li>Week 8: Capstone — cross-functional agentic feature or internal tool presented by each path.</li>
      </ul>
    </section>
  );
}
