import { BookOpen, Code, Shield, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: BookOpen,
    title: "What is an LLM?",
    description:
      "Capabilities & limitations for coding. Understanding when AI excels and when human judgment is essential",
  },
  {
    icon: Code,
    title: "AI as Pair Programmer",
    description: "When to trust, when to verify, how to review AI code. Building the right mental model",
  },
  {
    icon: Terminal,
    title: "Tooling Setup",
    description: "CLI tools: Claude Code, Codex CLI. Editor/IDE integration (VS Code, JetBrains, etc.)",
  },
  {
    icon: BookOpen,
    title: "Prompting Basics",
    description:
      "Giving clear instructions, constraints, and examples. Supplying context: repo summaries, file snippets, error logs",
  },
  {
    icon: Shield,
    title: "Safety Basics",
    description: "No secrets in prompts, no production credentials, IP awareness. Security best practices from day one",
  },
];

const projectFocus = [
  "Pick a small greenfield service or CLI app",
  "Use AI to scaffold repo (basic structure, README, starter code)",
  "Use AI to generate initial boilerplate, simple functions, and tests",
  "Practice the review cycle: generate → review → refine",
];

export function Week1Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week1">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
          <Terminal className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 1: Foundations & Tools</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: Mindset + core AI dev tools</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                <span>Understand what LLMs are and are not good at</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                <span>Install and set up core tools (Claude Code, Codex CLI, editor integrations)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                <span>Learn basic prompting and context management for coding tasks</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Key Topics</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={`topic-${topic.title}`}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Project Focus</h3>
        <Card className="bg-green-50 dark:bg-green-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base">
              This week, you'll start a simple but real project to practice the fundamentals:
            </p>
            <ul className="space-y-2">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-2 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
