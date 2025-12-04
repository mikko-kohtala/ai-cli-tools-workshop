function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{title}</h3>
      <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  );
}

export function WeekSections() {
  return (
    <section id="weeks">
      <Section id="week-1" title="Week 1 – Foundations & Tools">
        <p>Mindset, capabilities vs limitations, safety. Install/setup Claude Code, Codex CLI; editor integrations.</p>
        <p>Prompting basics: clear instructions, constraints, examples; context management.</p>
        <p>Project: scaffold a small service/CLI; generate boilerplate and basic tests with AI, human-reviewed.</p>
      </Section>

      <Section id="week-2" title="Week 2 – Requirements & Architecture with AI">
        <p>Turn ideas into user stories and acceptance criteria; stakeholder questions.</p>
        <p>AI-assisted planning: milestones, tickets; backlog drafts (epics, tasks).</p>
        <p>Architecture options and trade-offs; sequence diagrams, component/data models; ADRs drafted by AI.</p>
      </Section>

      <Section id="week-3" title="Week 3 – Implementation Workflows with AI">
        <p>Generate scaffolds, refactor, idiomatic improvements; navigate/explain codebases.</p>
        <p>Feed effective context: files, diffs, errors; chunking and summarization strategies.</p>
        <p>CLI workflows (Claude Code, Codex CLI): edit files by description, suggest improvements, explain stack traces.</p>
      </Section>

      <Section id="week-4" title="Week 4 – Testing, Quality & Debugging">
        <p>AI-generated unit/integration tests from specs; test strategy per feature.</p>
        <p>Debug via logs/stack traces; hypothesize root causes and propose experiments.</p>
        <p>AI first-pass reviews: style, bugs, performance, readability; regression test cases after fixes.</p>
      </Section>

      <Section id="week-5" title="Week 5 – DevOps, Deployment & Operations">
        <p>Infra as code drafts (Docker/K8s/Terraform), CI/CD configs (GitHub Actions) with quality gates.</p>
        <p>Deploy to a simple environment; config help without sharing secrets.</p>
        <p>Observability: metrics/logs suggestions; interpret alerts; draft runbooks and keep ops docs current.</p>
      </Section>

      <Section id="week-6" title="Week 6 – AI Across Company & Capstone">
        <p>AI for product/UX, support, docs, analytics; governance, privacy, prompt injection basics.</p>
        <p>Capstone: full mini SDLC—define feature/tool, plan/architect, implement/tests/infra, deploy, document & present.</p>
        <p>Reflection: where AI helped/struggled; how to apply in real company workflows.</p>
      </Section>
    </section>
  );
}
