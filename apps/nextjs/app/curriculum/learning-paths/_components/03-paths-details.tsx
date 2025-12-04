function PathSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
      <h3 className="font-semibold text-gray-800 text-xl dark:text-gray-300">{title}</h3>
      <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}

export function PathsDetails() {
  return (
    <section className="mb-16" id="details">
      <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-300">
        Role-Specific Path Details (Weeks 2–6)
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Three roles: Developer, Product, Design. All share Week 1 foundations and Weeks 7–8 for integration and capstone.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <PathSection title="Developer (Weeks 2–6)">
          <ul className="list-disc space-y-2 pl-6">
            <li>Requirements to code: user stories → scaffolds; refactoring; idiomatic improvements.</li>
            <li>Agentic workflows: codegen + reviewer; test generation; triage for failures.</li>
            <li>Quality & debugging: logs/stack traces to hypotheses; regression prevention.</li>
          </ul>
        </PathSection>
        <PathSection title="Design (Weeks 2–6)">
          <ul className="list-disc space-y-2 pl-6">
            <li>UX ideation: prompts for flows, copy, error messages; accessibility checks.</li>
            <li>Design-to-dev handoff: component specs, tokens, and Tailwind variants (with dark mode).</li>
            <li>Prototype automation: agents to update storybook/docs; copy consistency.</li>
          </ul>
        </PathSection>
        <PathSection title="Product (Weeks 2–6)">
          <ul className="list-disc space-y-2 pl-6">
            <li>Discovery: stakeholder questions, risk lists, acceptance criteria; backlog shaping.</li>
            <li>Decision artifacts: ADRs, trade-off analyses, roadmaps drafted by AI; human review.</li>
            <li>Agentic planning: role definitions, review gates, governance and escalation.</li>
          </ul>
        </PathSection>

      </div>
      <div className="mt-8 text-gray-700 dark:text-gray-300">
        <h3 className="font-semibold text-gray-800 text-xl dark:text-gray-300">Weeks 7–8 (Shared)</h3>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Week 7: Shared integration — CI/CD, deployment, observability, agentic ops and runbooks.</li>
          <li>Week 8: Capstone per role—agentic feature or internal tool; present outcomes and risks.</li>
        </ul>
      </div>
    </section>
  );
}
