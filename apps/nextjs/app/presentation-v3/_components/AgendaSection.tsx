import { FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const agendaItems = [
  {
    title: "Why AI CLI tools matter",
    description: "The shift toward terminal-first AI assistants and where they fit in dev workflows",
  },
  {
    title: "Landscape & selection",
    description: "What’s out there (Codex, Claude, Gemini, Amp Code, Opencode) and how to choose",
  },
  {
    title: "Common architecture",
    description: "Frontend, sandbox/permissions, approvals, agent runtime — shared building blocks",
  },
  {
    title: "Safety: sandboxing + approvals",
    description: "Practical security patterns you can apply across tools",
  },
  {
    title: "Effective sessions",
    description: "How to communicate, plan, validate, and iterate with an agent",
  },
  {
    title: "Pro tips & next steps",
    description: "Advanced techniques and adopting AI CLIs in your team",
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
              This 90-minute workshop blends overview and hands-on practice with AI CLI tools. Here’s the flow we’ll
              follow:
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
