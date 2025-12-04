export function OverviewSection() {
  return (
    <section id="overview" className="mb-16">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300">6-Week AI Development Curriculum</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Goal: enable everyday developers to use AI confidently across the full SDLC—requirements, design, implementation,
        testing, deployment, and operations—plus broader company processes. Each weekday: 1–2h learning, then hands-on tasks.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        <li>Use AI tools (Claude Code, Codex CLI, Gemini CLI, Amp) effectively.</li>
        <li>Apply AI to planning, coding, testing, DevOps, and documentation.</li>
        <li>Work safely: security, privacy, IP, and human-in-the-loop review.</li>
      </ul>
    </section>
  );
}
