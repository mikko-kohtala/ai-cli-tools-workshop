import { Code, FileSearch, RefreshCw, Terminal, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: Code,
    title: "AI-Assisted Implementation Patterns",
    description:
      "'Describe → generate scaffold → manually refine → ask AI for improvements.' Using AI to fill in 'boring' boilerplate: DTOs, mappers, configs",
  },
  {
    icon: Workflow,
    title: "Building Agentic Workflows",
    description:
      "Creating multi-step agent workflows: plan → execute → validate → iterate. Chaining agents for complex tasks. Building reusable implementation agents",
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
  "Create specialized implementation agents (e.g., API builder agent, database agent)",
  "Build agentic workflows that chain multiple agents together",
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
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              Week 3 is where you transition from planning to building. This is when AI tools really shine—generating
              code, refactoring, and helping you navigate complex codebases. You'll learn to integrate AI seamlessly
              into your daily coding workflow while maintaining code quality and architectural integrity.
            </p>
            <h3 className="mb-4 font-semibold text-xl">Week 3 Objectives</h3>
            <p className="mb-4 text-foreground/70 text-sm leading-relaxed">
              By the end of this week, you should be able to:
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:bg-purple-400" />
                <div>
                  <span className="font-medium">Incorporate AI into daily coding loops:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Make AI tools a natural part of your development workflow. Learn when to use AI for different types
                    of tasks (boilerplate generation, refactoring, debugging, documentation). Develop muscle memory for
                    effective AI-assisted coding patterns.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:bg-purple-400" />
                <div>
                  <span className="font-medium">Use CLI tools for refactoring, code generation, and navigation:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Master CLI commands for common tasks: editing files, generating code, refactoring patterns, and
                    navigating codebases. Learn tool-specific workflows and shortcuts that accelerate development
                    without sacrificing quality.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:bg-purple-400" />
                <div>
                  <span className="font-medium">Learn how to feed context effectively:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Understand what context to provide (files, error outputs, partial diffs, architecture docs) and how
                    much. Learn to summarize large codebases, identify relevant files, and structure context for optimal
                    AI performance. Master the art of context management.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:bg-purple-400" />
                <div>
                  <span className="font-medium">Build advanced agentic workflows:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Create specialized agents for implementation tasks (API builders, database agents, frontend
                    components). Chain multiple agents together for complex workflows. Learn to orchestrate agentic
                    systems that handle multi-step implementation tasks autonomously.
                  </span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Key Topics</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                  <p className="text-foreground/80 text-sm leading-relaxed">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Week 3 Project Focus</h3>
        <Card className="bg-purple-50 dark:bg-purple-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base leading-relaxed">
              This week, you'll implement the core features of your project using AI assistance. This is where you put
              everything you've learned into practice—using AI to generate code while maintaining quality and
              architectural integrity.
            </p>
            <p className="mb-4 text-foreground/70 text-sm leading-relaxed">
              <strong>Implementation strategy:</strong> Use AI to generate initial implementations, then review,
              refactor, and improve. Don't accept the first AI suggestion—iterate until the code meets your standards.
              This process teaches you to work effectively with AI while maintaining code quality.
            </p>
            <h4 className="mb-3 font-semibold text-base">Implementation Tasks:</h4>
            <ul className="space-y-3">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-3 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 dark:text-purple-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-purple-100 p-4 dark:bg-purple-900/30">
              <p className="mb-2 font-semibold text-sm">💡 Pro Tip:</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Create agents for repetitive implementation patterns (e.g., API endpoint agent, database model agent).
                Once you've built these agents, you can reuse them across projects, dramatically accelerating future
                development while maintaining consistency.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
