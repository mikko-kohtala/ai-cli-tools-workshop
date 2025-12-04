export function OverviewSection() {
  return (
    <section className="mb-16" id="overview">
      <h1 className="font-bold text-4xl text-gray-800 dark:text-gray-300">6-Week AI Development Curriculum</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Goal: turn everyday developers into AI-augmented engineers across the full SDLC—requirements, design,
        implementation, testing, deployment, operations—and broader company processes. Weekdays include 1–2h focused
        learning followed by deep hands-on tasks that apply the concept immediately.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-semibold text-gray-800 text-lg dark:text-gray-300">Outcomes</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Operate CLI assistants (Claude Code, Codex CLI) and switch models confidently.</li>
            <li>Design and build simple Agents; orchestrate agentic workflows for coding and ops tasks.</li>
            <li>Apply AI to planning, design, coding, testing, CI/CD, deployment, docs, and runbooks.</li>
            <li>Adopt human-in-the-loop habits: verify diffs, add constraints, review for safety and quality.</li>
            <li>Communicate impact: where AI accelerates product, support, docs, analytics—and where it doesn’t.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg dark:text-gray-300">Principles</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Capability-focused: pick tools by fit, not version numbers.</li>
            <li>Context discipline: supply diffs, logs, targeted snippets; summarize large files.</li>
            <li>Secure prompting: never include secrets; sanitize inputs; mitigate prompt injection.</li>
            <li>Documentation-first: AI drafts, human edits; capture decisions via ADRs and tickets.</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-semibold text-gray-800 text-lg dark:text-gray-300">Audience & Prereqs</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Audience: normal software developers (any stack) aiming to add AI into daily workflows.</li>
            <li>Prereqs: basic git, package manager (npm/pnpm), ability to run local apps and tests.</li>
            <li>Setup: accounts for selected model providers, CLI tools installed, demo repo ready.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg dark:text-gray-300">Evaluation</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Weekly deliverables: code, tests, ADRs/design docs, CI configs, ops runbooks.</li>
            <li>Quality gates: human diff review, passing tests, lint checks, safe prompts.</li>
            <li>Capstone presentation: demo the agentic feature, risks, and company impact.</li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-gray-600 text-sm dark:text-gray-400">
        Examples only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit.
      </p>
    </section>
  );
}
