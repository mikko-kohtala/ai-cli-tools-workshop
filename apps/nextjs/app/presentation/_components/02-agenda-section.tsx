import { FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const agendaItems = [
  {
    title: "AI CLI tools landscape",
    description: "Overview of available tools (Codex CLI, Claude Code, Gemini CLI, Amp) and common use cases",
  },
  {
    title: "Key concepts: Context, Planning & Tools",
    description: "Context window management, planning mode vs. execution, and how AI uses tools to take action",
  },
  {
    title: "Architecture & Reasoning",
    description: "How these tools work under the hood and how to control reasoning depth for different tasks",
  },
  {
    title: "Security & Control",
    description: "Filesystem access levels, approval flows, and best practices for safe AI-assisted development",
  },
  {
    title: "Choosing your tool & Q&A",
    description: "Decision factors for selecting the right tool for your needs, followed by open discussion",
  },
];

export function AgendaSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="agenda">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="font-bold text-4xl">Agenda</h2>
      </div>
      <Card>
        <CardContent className="p-8">
          <div className="space-y-6">
            <p className="mb-6 text-lg">
              This 90-minute workshop is structured to give you both theoretical understanding and practical hands-on
              experience with AI CLI tools. Here's what we'll cover:
            </p>
            <ul className="space-y-4">
              {agendaItems.map((item, index) => (
                <li className="flex items-start gap-3" key={`workshop-${item.title}`}>
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <span className="font-semibold text-blue-600 text-sm dark:text-blue-400">{index + 1}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-lg">{item.title}</span>
                    <p className="mt-1">{item.description}</p>
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
