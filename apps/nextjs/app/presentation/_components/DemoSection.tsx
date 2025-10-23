import { AlertTriangle, Lightbulb, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DemoSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="demo">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
          <Terminal className="h-5 w-5 text-violet-600 dark:text-violet-400" />
        </div>
        <h2 className="font-bold text-4xl">Demo Flow Idea</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Let's walk through a complete development workflow using Codex CLI. This example demonstrates how all the
              concepts we've discussed come together in practice.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 border-2 border-violet-200">
        <CardContent className="p-8">
          <div className="space-y-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                  1
                </div>
                <h3 className="font-semibold text-2xl text-violet-600">Scope</h3>
              </div>
              <Card>
                <CardContent className="p-4">
                  <p className="mb-3 text-lg">"Refactor logging module for structured output"</p>
                  <p className="text-foreground/70 text-sm">
                    <strong>Context:</strong> The current logging uses console.log throughout the app. We want to switch
                    to a structured logger (like Winston or Pino) that supports log levels, timestamps, and structured
                    data.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator />

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                  2
                </div>
                <h3 className="font-semibold text-2xl text-violet-600">Plan</h3>
              </div>
              <Card>
                <CardContent className="p-4">
                  <p className="mb-3 font-semibold text-base">
                    Analyze files → draft approach → implement changes → run tests
                  </p>
                  <div className="rounded bg-slate-50 dark:bg-slate-900/30 p-4">
                    <p className="mb-2 font-semibold text-sm">Codex's generated plan:</p>
                    <ol className="list-inside list-decimal space-y-2 text-sm">
                      <li>Search for all console.log occurrences (estimated: 50-100 files)</li>
                      <li>Install pino logger package</li>
                      <li>Create logger utility module with configuration</li>
                      <li>Replace console.log with structured logger calls</li>
                      <li>Update tests to verify logging</li>
                      <li>Run full test suite to ensure nothing broke</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                  3
                </div>
                <h3 className="font-semibold text-2xl text-violet-600">Execution</h3>
              </div>
              <Tabs defaultValue="step1">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="step1">Analysis</TabsTrigger>
                  <TabsTrigger value="step2">Setup</TabsTrigger>
                  <TabsTrigger value="step3">Refactor</TabsTrigger>
                  <TabsTrigger value="step4">Verify</TabsTrigger>
                </TabsList>
                <TabsContent className="mt-4" value="step1">
                  <Card>
                    <CardContent className="p-4">
                      <pre className="rounded bg-slate-50 dark:bg-slate-900/30 p-3 text-sm">
                        <code className="text-green-600">You:</code> <code>Find all console.log usage{"\n"}</code>
                        <code className="text-blue-600">Codex:</code>{" "}
                        <code>
                          {" "}
                          Searching...{"\n"}Found 73 occurrences in 28 files{"\n"}
                          {"\n"}Most common patterns:{"\n"}- Error logging: 25{"\n"}- Debug info: 31{"\n"}- User
                          actions: 17{"\n"}
                          {"\n"}Ready to proceed with refactoring?
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="mt-4" value="step2">
                  <Card>
                    <CardContent className="p-4">
                      <pre className="rounded bg-slate-50 dark:bg-slate-900/30 p-3 text-sm">
                        <code className="text-green-600">You:</code> <code>Yes, use pino{"\n"}</code>
                        <code className="text-blue-600">Codex:</code>{" "}
                        <code>
                          {" "}
                          Installing pino...{"\n"}✓ Installed pino@8.15.0{"\n"}
                          {"\n"}Creating src/utils/logger.ts...{"\n"}Configured with:{"\n"}- JSON output in production
                          {"\n"}- Pretty print in development{"\n"}- Log levels: error, warn, info, debug
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="mt-4" value="step3">
                  <Card>
                    <CardContent className="p-4">
                      <pre className="rounded bg-slate-50 dark:bg-slate-900/30 p-3 text-sm">
                        <code className="text-blue-600">Codex:</code>{" "}
                        <code>
                          {" "}
                          Refactoring 28 files...{"\n"}
                          {"\n"}[Progress bar: ████████░░ 80%]{"\n"}
                          {"\n"}Modified:{"\n"}• src/auth/login.ts{"\n"}• src/api/users.ts{"\n"}•
                          src/components/Dashboard.tsx{"\n"}[...25 more files]{"\n"}
                          {"\n"}✓ Refactoring complete
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="mt-4" value="step4">
                  <Card>
                    <CardContent className="p-4">
                      <pre className="rounded bg-slate-50 dark:bg-slate-900/30 p-3 text-sm">
                        <code className="text-green-600">You:</code> <code>Run tests{"\n"}</code>
                        <code className="text-blue-600">Codex:</code>{" "}
                        <code>
                          {" "}
                          Running test suite...{"\n"}
                          {"\n"}✓ 124 tests passed{"\n"}✗ 2 tests failed{"\n"}
                          {"\n"}Failed tests:{"\n"}• utils/logger.test.ts:45 - Expected log format{"\n"}•
                          api/users.test.ts:89 - Mock logger not defined{"\n"}
                          {"\n"}Would you like me to fix these?
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <Separator />

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                  4
                </div>
                <h3 className="font-semibold text-2xl text-violet-600">Wrap-up</h3>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="mb-2 font-semibold text-base">Summary of changes:</p>
                      <ul className="list-inside list-disc space-y-1 text-foreground/70">
                        <li>Installed pino logger (1 dependency)</li>
                        <li>Created logger utility with environment-aware config</li>
                        <li>Refactored 73 logging statements across 28 files</li>
                        <li>Fixed 2 test failures related to logging</li>
                        <li>All 124 tests now passing</li>
                      </ul>
                    </div>
                    <div className="rounded border border-amber-200 bg-amber-50 dark:bg-amber-950/30 p-3">
                      <p className="mb-2 flex items-center gap-2 font-semibold">
                        <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        Considerations:
                      </p>
                      <ul className="list-inside list-disc space-y-1 text-foreground/70 text-xs">
                        <li>Log output format changed - update any log parsing scripts</li>
                        <li>Production logs now JSON - ensure log aggregation tools can handle this</li>
                        <li>Some debug logs may be more verbose now</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-base">Suggested next steps:</p>
                      <ol className="list-inside list-decimal space-y-1 text-foreground/70">
                        <li>
                          Review the changes with <code className="rounded bg-slate-100 dark:bg-slate-800 px-1">git diff</code>
                        </li>
                        <li>Test manually in development environment</li>
                        <li>Update documentation to reflect new logging approach</li>
                        <li>Create a commit: "Refactor: migrate to structured logging with Pino"</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-violet-200 bg-violet-50 dark:bg-violet-950/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-400" />
            <div>
              <p className="mb-2 font-semibold text-lg">Key Takeaways from This Demo</p>
              <ul className="list-inside list-disc space-y-2 text-foreground/70 text-sm">
                <li>The agent created a plan before starting work</li>
                <li>Each step was clearly communicated with progress updates</li>
                <li>When tests failed, the agent proactively offered to fix them</li>
                <li>The wrap-up included context, risks, and suggested next steps</li>
                <li>You remained in control throughout the entire process</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
