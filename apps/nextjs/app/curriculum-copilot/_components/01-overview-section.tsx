export function OverviewSection() {
  return (
    <section className="mb-16" id="overview">
      <h1 className="font-bold text-4xl text-gray-800 dark:text-gray-300">6-Week AI Development Curriculum</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Goal: enable everyday developers to use AI confidently across the full SDLC—requirements, design,
        implementation, testing, deployment, and operations—plus broader company processes. Each weekday: 1–2h learning,
        then hands-on tasks.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-semibold text-gray-800 text-lg dark:text-gray-300">Outcomes</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Operate CLI assistants (Claude Code, Codex CLI) and switch models confidently.</li>
            <li>Design and build simple Agents; orchestrate agentic workflows for coding tasks.</li>
            <li>Use AI in planning, design, coding, testing, DevOps, documentation, and ops runbooks.</li>
            <li>Adopt human-in-the-loop: verify diffs, add constraints, review for safety and quality.</li>
            <li>Communicate impact: how AI accelerates product, support, docs, analytics.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg dark:text-gray-300">Principles</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Capability-focused: pick tools by fit, not version numbers.</li>
            <li>Context discipline: pass diffs, logs, and summaries—avoid pasting entire files blindly.</li>
            <li>Secure prompting: never include secrets; sanitize inputs; mitigate prompt injection.</li>
            <li>Documentation-first: AI drafts, human edits; capture decisions via ADRs.</li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-gray-600 text-sm dark:text-gray-400">
        Examples only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit.
      </p>
    </section>
  );
}
