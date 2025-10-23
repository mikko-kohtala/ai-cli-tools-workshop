import { FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const agendaItems = [
  {
    title: "Why Codex CLI matters",
    description:
      "Understanding the paradigm shift in development workflows and the benefits of terminal-based AI assistants",
  },
  {
    title: "How the CLI harness works",
    description: "Deep dive into the architecture, from frontend to agent runtime",
  },
  {
    title: "Working with sandboxing and approvals",
    description: "Security best practices and policy configurations for safe AI-assisted development",
  },
  {
    title: "Building effective workflows",
    description: "Practical strategies for communicating with the agent and structuring development sessions",
  },
  {
    title: "Pro tips and next steps",
    description: "Advanced techniques and how to integrate Codex CLI into your team's workflow",
  },
];

export function AgendaSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="agenda">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
          <FileCode className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="font-bold text-4xl">Agenda</h2>
      </div>
      <Card>
        <CardContent className="p-8">
          <div className="space-y-6">
            <p className="mb-6 text-lg text-muted-foreground">
              This 90-minute workshop is structured to give you both theoretical understanding and practical hands-on
              experience with Codex CLI. Here's what we'll cover:
            </p>
            <ul className="space-y-4">
              {agendaItems.map((item, index) => (
                <li className="flex items-start gap-3" key={`workshop-${item.title}`}>
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="font-semibold text-blue-600 text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-lg">{item.title}</span>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
