import { Code, FileSearch, RefreshCw, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: Code,
    title: "AI-Assisted Implementation Patterns",
    description:
      "'Describe → generate scaffold → manually refine → ask AI for improvements.' Using AI to fill in 'boring' boilerplate: DTOs, mappers, configs",
  },
  {
    icon: RefreshCw,
    title: "Refactoring with AI",
    description:
      "Asking for refactor suggestions, extracting functions/classes. Making code more idiomatic for specific language/framework",
  },
  {
    icon: FileSearch,
    title: "Working with Existing Codebases",
    description: "Asking AI to explain unfamiliar code. Generating function-level & module-level summaries",
  },
  {
    icon: Terminal,
    title: "CLI Workflow",
    description:
      "Typical commands/workflows in Claude Code / Codex CLI: 'Edit this file with description…', 'Given this diff, suggest better naming/tests', 'Explain this stack trace & propose fix'",
  },
];

const projectFocus = [
  "Implement core features of the project using AI",
  "Generate routes, handlers, services, data access layer",
  "Continuous cycle: human plans → AI generates → human reviews → AI improves",
  "Practice context management: how much code to paste, when to summarize vs. show details",
];

export function Week3Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week3">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
          <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 3: Implementation Workflows with AI</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: Coding faster & safer with AI</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:bg-purple-400" />
                <span>Incorporate AI into daily coding loops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:bg-purple-400" />
                <span>Use CLI tools for refactoring, code generation, and navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:bg-purple-400" />
                <span>Learn how to feed context effectively (files, error outputs, partial diffs)</span>
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
        <Card className="bg-purple-50 dark:bg-purple-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base">
              This week, you'll implement the core features of your project using AI assistance:
            </p>
            <ul className="space-y-2">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-2 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:text-purple-400" />
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
