export function DailyStructureSection() {
  return (
    <section id="daily-structure" className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">Daily Structure</h2>
      <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
        <p>Learning (1–2h): concept of the day + short demo prompts or commands.</p>
        <p>Deep work (tasks): apply to the ongoing project with explicit human review checkpoints.</p>
        <p>Wrap-up (15–30m): log prompts that worked, mistakes, lessons; optional AI summary.</p>
      </div>
    </section>
  );
}
