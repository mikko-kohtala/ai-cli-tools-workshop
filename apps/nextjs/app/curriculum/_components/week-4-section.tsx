import { Bug, CheckCircle, Search, TestTube } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "Test Strategy",
    description: "Using AI to design test plans and identify test cases",
    tasks: ["Generate test plan for a feature", "Identify edge cases with AI"],
  },
  {
    day: "Day 2",
    title: "Unit Test Generation",
    description: "Generating unit tests from function signatures and behavior",
    tasks: ["Generate unit tests for service layer", "Review and refine test assertions"],
  },
  {
    day: "Day 3",
    title: "Integration Testing",
    description: "Testing component interactions and API endpoints",
    tasks: ["Generate integration tests", "Test API endpoints with AI assistance"],
  },
  {
    day: "Day 4",
    title: "Debugging with AI",
    description: "Using stack traces, logs, and error messages to find bugs",
    tasks: ["Debug 2-3 introduced bugs with AI", "Practice root cause analysis"],
  },
  {
    day: "Day 5",
    title: "Code Review & Quality",
    description: "AI as first-pass reviewer, quality improvements",
    tasks: ["Review module with AI", "Apply suggested improvements"],
  },
];

const testingPatterns = [
  {
    name: "Test Plan Generation",
    description: "Describe feature → AI suggests test scenarios, edge cases, and boundary conditions",
  },
  {
    name: "Test from Signature",
    description: "Give function signature → AI generates tests covering happy path and error cases",
  },
  {
    name: "Regression After Fix",
    description: "After fixing bug → AI generates regression test to prevent recurrence",
  },
  {
    name: "Coverage Analysis",
    description: "Share coverage report → AI suggests missing test scenarios",
  },
];

const debuggingWorkflow = [
  { step: "Share Error", description: "Paste stack trace, error message, or failing test output" },
  { step: "AI Hypothesizes", description: "AI proposes possible root causes based on error pattern" },
  { step: "Investigate", description: "AI suggests specific checks: log statements, assertions, inspections" },
  { step: "Fix & Verify", description: "Implement fix, verify with test, add regression test" },
];

export function Week4Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-4">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <TestTube className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 4: Testing & Quality</h2>
          <p className="text-foreground/60">AI for reliability and maintainability</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week focuses on using AI to improve code quality: designing tests, generating test code, debugging
            issues, and performing code reviews. You'll add comprehensive tests to your core project.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Use AI to design comprehensive test strategies</li>
              <li>Generate unit and integration tests</li>
              <li>Debug issues using AI with stack traces and logs</li>
              <li>Use AI as a first-pass code reviewer</li>
              <li>Improve code quality based on AI suggestions</li>
              <li>
                <strong>Core project</strong>: Add comprehensive test coverage
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Test Pyramid */}
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader>
            <CardTitle className="text-2xl">Test Pyramid with AI</CardTitle>
            <CardDescription>AI can help at every level of the testing pyramid</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-2 py-4">
              <div className="w-32 rounded bg-amber-100 py-2 text-center dark:bg-amber-900/50">
                <p className="font-semibold text-amber-700 text-xs dark:text-amber-300">E2E Tests</p>
                <p className="text-[10px] text-foreground/60">Few, slow, high confidence</p>
              </div>
              <div className="w-48 rounded bg-blue-100 py-2 text-center dark:bg-blue-900/50">
                <p className="font-semibold text-blue-700 text-xs dark:text-blue-300">Integration Tests</p>
                <p className="text-[10px] text-foreground/60">Component interactions</p>
              </div>
              <div className="w-64 rounded bg-emerald-100 py-2 text-center dark:bg-emerald-900/50">
                <p className="font-semibold text-emerald-700 text-xs dark:text-emerald-300">Unit Tests</p>
                <p className="text-[10px] text-foreground/60">Many, fast, isolated functions</p>
              </div>
            </div>
            <p className="mt-2 text-center text-foreground/70 text-sm">
              AI excels at generating unit tests. Integration and E2E tests need more human guidance on setup and
              assertions.
            </p>
          </CardContent>
        </Card>

        {/* Daily Breakdown */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Daily Breakdown</h3>
          <div className="space-y-3">
            {dailyTopics.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-indigo-100 px-2 py-1 font-mono text-indigo-700 text-sm dark:bg-indigo-900/30 dark:text-indigo-400">
                      {day.day}
                    </span>
                    <CardTitle className="text-lg">{day.title}</CardTitle>
                  </div>
                  <CardDescription>{day.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded bg-slate-50 p-3 dark:bg-slate-900/30">
                    <p className="mb-2 font-semibold text-foreground/50 text-xs uppercase">Tasks</p>
                    <ul className="list-inside list-disc space-y-1 text-foreground/70 text-sm">
                      {day.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testing Patterns */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Testing Patterns</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {testingPatterns.map((pattern) => (
              <div className="rounded-lg border p-4" key={pattern.name}>
                <div className="flex items-center gap-2">
                  <TestTube className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  <p className="font-semibold">{pattern.name}</p>
                </div>
                <p className="mt-1 text-foreground/70 text-sm">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Debugging Workflow */}
        <Card className="border-l-4 border-l-rose-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Bug className="h-5 w-5" />
              Debugging Workflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {debuggingWorkflow.map((item, i) => (
                <div className="flex items-start gap-3" key={item.step}>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 font-semibold text-rose-700 text-xs dark:bg-rose-900/30 dark:text-rose-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{item.step}</p>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Review */}
        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/30">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">AI as Code Reviewer</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            Use AI for first-pass reviews: style issues, potential bugs, complexity warnings. But remember:
            <strong> AI reviews supplement, not replace, human review</strong>. Humans catch business logic issues and
            architectural concerns better.
          </p>
        </div>

        {/* Project Milestone */}
        <div className="rounded-lg border-2 border-indigo-300 border-dashed bg-indigo-50/50 p-4 dark:border-indigo-700 dark:bg-indigo-950/20">
          <p className="mb-2 font-semibold text-indigo-700 dark:text-indigo-400">Core Project Milestone</p>
          <p className="text-foreground/70 text-sm">
            By end of Week 4: Comprehensive test coverage—unit tests for services, integration tests for APIs. All tests
            passing. Code reviewed and quality improved.
          </p>
        </div>
      </div>
    </section>
  );
}
