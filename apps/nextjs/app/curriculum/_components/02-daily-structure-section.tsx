export function DailyStructureSection() {
  return (
    <section className="mb-16" id="daily-structure">
      <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-300">Daily Structure</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <h4 className="font-semibold text-gray-800 dark:text-gray-300">Learning (1–2h)</h4>
          <ul className="list-disc space-y-2 pl-6">
            <li>Concept brief: core idea, when to use it, pitfalls.</li>
            <li>Demo: 2–3 prompts or CLI commands with expected outputs (include an agent or tool-use example when relevant).</li>
            <li>Reading: short docs/ADRs/examples; note constraints and best practices.</li>
          </ul>
        </div>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <h4 className="font-semibold text-gray-800 dark:text-gray-300">Deep Work (tasks)</h4>
          <ul className="list-disc space-y-2 pl-6">
            <li>Apply today’s concept to the ongoing project feature.</li>
            <li>Use explicit checkpoints: human diff review, test runs, doc updates.</li>
            <li>Record prompts that worked, context supplied, and outcomes.</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-gray-700 dark:text-gray-300">
        <h4 className="font-semibold text-gray-800 dark:text-gray-300">Wrap-up (15–30m)</h4>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Log: mistakes, fixes, learned constraints.</li>
          <li>Optional: ask AI to summarize progress and propose tomorrow’s plan.</li>
          <li>Update tickets/ADRs/docs to keep artifacts current.</li>
        </ul>
      </div>
    </section>
  );
}
