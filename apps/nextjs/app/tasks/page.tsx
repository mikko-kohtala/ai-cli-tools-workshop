import Link from "next/link";

const tasks = [
  {
    number: 1,
    title: "Getting Started with Codex CLI",
    description: "Install Codex CLI, verify your setup, and learn how to start your first coding session.",
  },
  {
    number: 2,
    title: "Scaffold a Project with Codex CLI",
    description: "Practice directing Codex CLI to plan and build a small automation script inside a clean workspace.",
  },
  {
    number: 3,
    title: "Refine Code and Tests with Codex CLI",
    description:
      "Learn how to steer Codex CLI through refactoring, adding tests, and validating results with higher reasoning depth.",
  },
  {
    number: 5,
    title: "Build a Retro Arcade Game",
    description:
      "Create a playable HTML5 canvas runner game iteratively—start simple, improve step-by-step with AI pair programming.",
  },
];

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Workshop Tasks</h1>
        <p className="text-lg">Hands-on exercises to learn Codex CLI through practical application.</p>
      </div>

      <div className="grid gap-6">
        {tasks.map((task) => (
          <Link
            className="group relative rounded-lg border p-6 transition-colors hover:border-foreground/50"
            href={`/tasks/${task.number}`}
            key={task.number}
          >
            <div className="space-y-2">
              <h2 className="font-semibold text-2xl tracking-tight">
                Task {task.number}: {task.title}
              </h2>
              <p className="text-muted-foreground">{task.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
