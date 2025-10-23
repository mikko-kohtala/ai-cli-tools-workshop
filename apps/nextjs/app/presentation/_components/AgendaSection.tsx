import { FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const agendaItems = [
  {
    title: "Why AI CLI tools matter",
    description:
      "Understanding the paradigm shift in development workflows and the unique value proposition of terminal-based AI assistants",
  },
  {
    title: "The AI CLI tools landscape",
    description: "Overview of available tools, their capabilities, and when to use them for different scenarios",
  },
  {
    title: "Core concepts and architecture patterns",
    description: "How these tools work under the hood, from project context to security layers and agent runtimes",
  },
  {
    title: "Security and control mechanisms",
    description: "Understanding filesystem access, approval flows, and best practices for safe AI-assisted development",
  },
  {
    title: "Effective usage and choosing your tool",
    description: "Practical strategies for working with AI CLI tools and selecting the right one for your needs",
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
