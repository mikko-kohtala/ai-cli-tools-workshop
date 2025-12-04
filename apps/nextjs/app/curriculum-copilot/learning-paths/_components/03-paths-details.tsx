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
        Role-Specific Path Details (Weeks 2–4)
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Five roles: Developer, Designer, Product, Sales/Customer Success, Data/Analytics. All share Week 1 foundations
        and Week 5–6.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <PathSection title="Developer (Weeks 2–4)">
          <ul className="list-disc space-y-2 pl-6">
            <li>Requirements to code: user stories → scaffolds; refactoring; idiomatic improvements.</li>
            <li>Agentic workflows: codegen + reviewer; test generation; triage for failures.</li>
            <li>Quality & debugging: logs/stack traces to hypotheses; regression prevention.</li>
          </ul>
        </PathSection>
        <PathSection title="Designer (Weeks 2–4)">
          <ul className="list-disc space-y-2 pl-6">
            <li>UX ideation: prompts for flows, copy, error messages; accessibility checks.</li>
            <li>Design-to-dev handoff: component specs, tokens, and Tailwind variants (with dark mode).</li>
            <li>Prototype automation: agents to update storybook/docs; copy consistency.</li>
          </ul>
        </PathSection>
        <PathSection title="Product (Weeks 2–4)">
          <ul className="list-disc space-y-2 pl-6">
            <li>Discovery: stakeholder questions, risk lists, acceptance criteria; backlog shaping.</li>
            <li>Decision artifacts: ADRs, trade-off analyses, roadmaps drafted by AI; human review.</li>
            <li>Agentic planning: role definitions, review gates, governance and escalation.</li>
          </ul>
        </PathSection>
        <PathSection title="Sales / Customer Success (Weeks 2–4)">
          <ul className="list-disc space-y-2 pl-6">
            <li>Enablement: call summaries, objection handling scripts, KB macro drafting.</li>
            <li>Customer context: log/issue summarization; churn risk signals; handoff notes.</li>
            <li>Agent tools: retrieval helpers over docs/KB; safe automation boundaries.</li>
          </ul>
        </PathSection>
        <PathSection title="Data / Analytics (Weeks 2–4)">
          <ul className="list-disc space-y-2 pl-6">
            <li>Query assistance: AI-aided SQL, dashboard explanations, trend summaries.</li>
            <li>Data models: propose metrics/definitions; experiment plans and AB outlines.</li>
            <li>Agentic analytics: scheduled summaries, anomaly alerts, decision logs.</li>
          </ul>
        </PathSection>
      </div>
      <div className="mt-8 text-gray-700 dark:text-gray-300">
        <h3 className="font-semibold text-gray-800 text-xl dark:text-gray-300">Week 5–6 (Shared)</h3>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Week 5: CI/CD, deployment, observability, agentic ops and runbooks.</li>
          <li>Week 6: Capstone per role—agentic feature or internal tool; present outcomes and risks.</li>
        </ul>
      </div>
    </section>
  );
}
