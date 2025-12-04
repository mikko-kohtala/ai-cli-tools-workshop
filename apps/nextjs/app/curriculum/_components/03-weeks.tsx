function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16" id={id}>
      <h3 className="font-semibold text-gray-800 text-xl dark:text-gray-300">{title}</h3>
      <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  );
}

export function WeekSections() {
  return (
    <section id="weeks">
      <Section id="week-1" title="Week 1 – Foundations, Tools & Agents">
        <ul className="list-disc space-y-2 pl-6">
          <li>Mindset: AI as augmentation; strengths/limits; verification habits.</li>
          <li>Tooling: install and configure Claude Code, Codex CLI; model switching; IDE integrations.</li>
          <li>Prompting: clear objectives, constraints, examples; provide repo context, diffs, and logs.</li>
          <li>Agents 101: single-agent patterns, tool-use (filesystem, git), guardrails, and handoffs.</li>
          <li>Safety: secrets handling, IP awareness, prompt injection basics.</li>
          <li>Project: scaffold a small service/CLI, generate boilerplate and starter tests; review diffs.</li>
        </ul>
      </Section>

      <Section id="week-2" title="Week 2 – Requirements, Architecture & Agentic Planning">
        <ul className="list-disc space-y-2 pl-6">
          <li>Requirements: user stories, acceptance criteria; stakeholder question lists drafted by AI.</li>
          <li>Planning: milestones, tickets, estimates; AI-drafted backlog refined by humans.</li>
          <li>Architecture: propose options, compare trade-offs; generate diagrams and data models.</li>
          <li>Agentic workflows: task decomposition, role definitions, routing prompts, review gates.</li>
          <li>Agent safety: tool permissions, guardrails, escalation paths to humans.</li>
          <li>ADRs: draft decisions with AI, then edit; record constraints and alternatives.</li>
          <li>Deliverables: design doc, chosen architecture, initial backlog, agent workflow sketch.</li>
        </ul>
      </Section>

      <Section id="week-3" title="Week 3 – Implementation Workflows with AI & Agents">
        <ul className="list-disc space-y-2 pl-6">
          <li>Scaffolding and refactoring loops; idiomatic improvements per language/framework.</li>
          <li>Context feeding: target functions, partial files, diffs, stack traces; summarize large modules.</li>
          <li>CLI workflows: describe edits, request naming improvements, ask for test suggestions.</li>
          <li>Agent orchestration: codegen agent + reviewer agent; automatic TODO extraction and ticket linking.</li>
          <li>Navigation: explain unfamiliar code; produce function/module summaries.</li>
          <li>Deliverables: core feature routes/handlers/services with reviewed AI changes, agent pair demo.</li>
        </ul>
      </Section>

      <Section id="week-4" title="Week 4 – Testing, Quality & Debugging (Agent-Assisted)">
        <ul className="list-disc space-y-2 pl-6">
          <li>Test design: unit/integration from specs and signatures; coverage goals.</li>
          <li>Debugging: feed logs and traces; generate hypotheses and experiments; bisect changes.</li>
          <li>Quality: AI first-pass reviews for style, performance, readability; track improvements.</li>
          <li>Regression: generate cases after fixes; ensure stability with CI.</li>
          <li>Agent support: test generation agent; triage agent to cluster failures and suggest fixes.</li>
          <li>Deliverables: expanded test suites, refactored modules, agent-enabled debugging workflow.</li>
        </ul>
      </Section>

      <Section id="week-5" title="Week 5 – DevOps, Deployment & Operations (Agentic Ops)">
        <ul className="list-disc space-y-2 pl-6">
          <li>IaC drafts: Dockerfiles, K8s manifests, Terraform snippets; AI explanations of existing infra.</li>
          <li>CI/CD: GitHub Actions with quality gates (lint, tests, security scans); release workflows.</li>
          <li>Deployment: simple environment; configuration via secure prompts (no secrets shared).</li>
          <li>Observability: metrics/logs to track; interpret alerts; draft and update runbooks.</li>
          <li>Ops agents: log summarizer, alert explainer, runbook navigator; safe automation boundaries.</li>
          <li>Deliverables: containerized app, CI pipeline, basic monitoring, agentic ops runbooks.</li>
        </ul>
      </Section>

      <Section id="week-6" title="Week 6 – AI Across Company & Governance">
        <ul className="list-disc space-y-2 pl-6">
          <li>Product/UX: brainstorm features, generate UX copy and error messages with AI.</li>
          <li>Support/docs: draft macros, KB articles; convert specs to user docs and FAQs.</li>
          <li>Analytics: help write queries, interpret dashboards, summarize trends.</li>
          <li>Governance: privacy, secure prompting, approvals; human-in-the-loop policies.</li>
          <li>Preparation: finalize capstone scopes, risks, and success criteria.</li>
        </ul>
      </Section>

      <Section id="week-7" title="Week 7 – Capstone Build (Agentic Feature)">
        <ul className="list-disc space-y-2 pl-6">
          <li>Implement capstone with agent-assisted workflows and quality gates.</li>
          <li>Cross-functional collaboration across learning paths; integrate ops and monitoring.</li>
          <li>Dry runs, user feedback, and iteration loops.</li>
        </ul>
      </Section>

      <Section id="week-8" title="Week 8 – Capstone Presentations & Retrospective">
        <ul className="list-disc space-y-2 pl-6">
          <li>Present outcomes, demos, and risk assessments.</li>
          <li>Retrospective: what worked, what to improve; write-up and action items.</li>
          <li>Next steps: roadmap proposals and adoption plans.</li>
        </ul>
      </Section>
    </section>
  );
}
