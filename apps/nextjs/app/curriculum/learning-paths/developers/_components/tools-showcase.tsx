import { Bot, Code2, Terminal, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  {
    name: "Claude Code",
    description:
      "Anthropic's official CLI for Claude. The primary tool for AI-assisted development throughout this curriculum.",
    icon: Terminal,
    color: "emerald",
  },
  {
    name: "Claude Agent SDK",
    description:
      "Build custom AI agents with tool use, context management, and multi-agent orchestration.",
    icon: Bot,
    color: "amber",
  },
  {
    name: "MCP (Model Context Protocol)",
    description:
      "Extend AI capabilities with custom tools, database connections, and API integrations.",
    icon: Wrench,
    color: "pink",
  },
  {
    name: "Codex CLI",
    description:
      "Open-source alternative supporting multiple LLM providers. Useful for comparison and flexibility.",
    icon: Code2,
    color: "blue",
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900/30",
    text: "text-pink-600 dark:text-pink-400",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
};

export function ToolsShowcase() {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-center font-semibold text-2xl">Primary Tools</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const colors = colorClasses[tool.color];
          return (
            <Card className="transition-shadow hover:shadow-md" key={tool.name}>
              <CardHeader className="pb-2">
                <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg}`}>
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tool.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
