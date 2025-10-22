import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function KeyConceptsSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-3xl">Key Concepts</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">Environment Context</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-blue-800 dark:text-blue-200">
              Every Codex CLI session starts with a comprehensive understanding of your environment, including current
              working directory, sandbox mode, network access, and approval settings.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Current working directory (cwd)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Sandbox mode configuration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Network access permissions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Approval policy settings</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-green-900 dark:text-green-100">Plan & Execute</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-green-800 dark:text-green-200">
              Agents build lightweight, transparent plans before executing code-heavy tasks, allowing you to review and
              approve the approach before any changes are made.
            </p>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/20">
              <h4 className="mb-2 font-semibold">Example Plan:</h4>
              <ol className="list-inside list-decimal space-y-1 text-sm">
                <li>Analyze current logging implementation</li>
                <li>Identify structured logging requirements</li>
                <li>Refactor logger configuration</li>
                <li>Update log statements throughout codebase</li>
                <li>Add tests for new logging behavior</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-purple-900 dark:text-purple-100">Tooling Contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-purple-800 dark:text-purple-200">
              Strict usage guidelines for shell, plan, and view_image tools ensure predictable and safe interactions
              with your development environment.
            </p>
            <Tabs className="w-full" defaultValue="shell">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="shell">Shell</TabsTrigger>
                <TabsTrigger value="plan">Plan</TabsTrigger>
                <TabsTrigger value="view">View Image</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="shell">
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">Execute commands with proper error handling and output formatting</code>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="plan">
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">Create structured, reviewable plans before code execution</code>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="view">
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">Display images and diagrams for visual context</code>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-orange-900 dark:text-orange-100">Outputs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-orange-800 dark:text-orange-200">
              Plain-text responses styled by the CLI provide clear, actionable information without overwhelming you with
              raw command outputs or technical jargon.
            </p>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950/20">
              <h4 className="mb-2 font-semibold">Example Output:</h4>
              <div className="space-y-1 text-sm">
                <p>✅ Refactored logging module successfully</p>
                <p>📁 Modified: src/utils/logger.ts</p>
                <p>🧪 Added: tests/logger.test.ts</p>
                <p>📊 Updated: 12 log statements across 3 files</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
