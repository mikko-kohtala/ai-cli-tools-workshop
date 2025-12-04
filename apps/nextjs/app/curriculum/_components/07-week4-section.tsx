import { Bug, CheckCircle, Shield, TestTube, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: TestTube,
    title: "Test Strategy",
    description:
      "Using AI to suggest a test plan for a feature. Generating unit tests & integration tests from function signatures/user stories",
  },
  {
    icon: Workflow,
    title: "Testing Agents & Workflows",
    description:
      "Creating specialized test-runner agents that automatically run tests and fix failures. Building quality assurance workflows with chained agents",
  },
  {
    icon: Bug,
    title: "Debugging",
    description:
      "Feeding stack traces, log snippets, and 'what changed' to AI. Asking AI to hypothesize root causes and propose experiments",
  },
  {
    icon: CheckCircle,
    title: "Code Review & Quality",
    description:
      "AI as first-pass reviewer: style, potential bugs, complexity. Linting, performance suggestions, and readability improvements",
  },
  {
    icon: Shield,
    title: "Regression Prevention",
    description: "Asking AI for 'what could break here?' Generating regression test cases after a bug fix",
  },
];

const projectFocus = [
  "Create specialized testing agents (test-runner, code-reviewer, debugger agents)",
  "Build automated quality workflows that chain testing → review → fix agents",
  "Expand test coverage of the project - AI-generated tests, reviewed and refined by the dev",
  "Use AI to investigate at least 2–3 deliberately introduced bugs",
  "Use AI to perform a structured review of a module and refactor accordingly",
  "Practice the quality workflow: generate tests → run → debug failures → improve",
];

export function Week4Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week4">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
          <TestTube className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 4: Testing, Quality & Debugging</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: AI for reliability and maintainability</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                <span>Use AI to design and generate tests (unit, integration)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                <span>Use AI to debug issues via logs, stack traces, and failing tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                <span>Improve code quality and maintainability using AI suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                <span>Build automated testing and quality assurance agent workflows</span>
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
                  <p className="text-foreground/70 text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Project Focus</h3>
        <Card className="bg-orange-50 dark:bg-orange-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base">
              This week, you'll focus on quality, testing, and debugging with AI assistance:
            </p>
            <ul className="space-y-2">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-2 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:text-orange-400" />
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
