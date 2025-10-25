import Link from "next/link";

const TASKS = [
  {
    number: 1,
    title: "Task 1: Getting Started with Codex CLI",
    description: "Install Codex CLI, verify your setup, and explore the interactive session basics.",
  },
  {
    number: 2,
    title: "Task 2: Create Your Codex Workspace",
    description: "Spin up a new Git repo, author AGENTS.md guidance, and let Codex scaffold starter files.",
  },
  {
    number: 3,
    title: "Task 3: Pair Program a JSON Helper",
    description: "Collaborate with Codex to transform stand-up notes into a Markdown agenda and commit the results.",
  },
  {
    number: 4,
    title: "Task 4: Automate an Incident Snapshot",
    description: "Use codex exec with schemas and resumes to convert logs into structured reports.",
  },
  {
    number: 5,
    title: "Task 5: Build an Arcade Mini-Game",
    description: "Iterate on a retro-inspired game with Codex CLI, layering features and comparing AI CLIs.",
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
              <h2 className="font-semibold text-2xl tracking-tight">{task.title}</h2>
              <p className="text-muted-foreground">{task.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
