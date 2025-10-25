import Link from "next/link";

const TASKS = [
  {
    description: "Install Codex CLI and get comfortable starting and ending sessions.",
    number: 1,
    title: "Getting Started with Codex CLI",
  },
  {
    description: "Spin up a fresh workspace and let Codex CLI help you scaffold project notes.",
    number: 2,
    title: "Create a Project Journal with Codex",
  },
  {
    description: "Partner with Codex CLI to build and iterate on a small utility script.",
    number: 3,
    title: "Ship a Helpful Automation Script",
  },
  {
    description: "Build a playable browser-based arcade game through iterative AI-assisted development.",
    number: 5,
    title: "Build a Dino Runner Arcade Game",
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
        {TASKS.map((task) => (
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
