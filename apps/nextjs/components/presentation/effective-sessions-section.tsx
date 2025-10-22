import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EffectiveSessionsSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-3xl">Building Effective Sessions</h2>

      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  1
                </div>
                Clarify Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Restate goals when needed for clarity. Clear communication ensures the AI understands exactly what you
                want to accomplish and can provide the most relevant assistance.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="mb-1 font-semibold text-sm">❌ Vague Request:</h4>
                  <div className="rounded-lg bg-muted p-3">
                    <code className="text-sm">"fix the bug"</code>
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-sm">✅ Clear Request:</h4>
                  <div className="rounded-lg bg-muted p-3">
                    <code className="text-sm">
                      "fix the null pointer exception in the user authentication service when the database connection
                      fails"
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                  2
                </div>
                Draft Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Create 2+ step plans for non-trivial work and keep them updated. Plans provide transparency and allow
                for course correction before execution.
              </p>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/20">
                <h4 className="mb-2 font-semibold">Example Plan:</h4>
                <ol className="list-inside list-decimal space-y-1 text-sm">
                  <li>Analyze current error handling patterns</li>
                  <li>Identify missing error cases</li>
                  <li>Implement comprehensive error handling</li>
                  <li>Add error logging and monitoring</li>
                  <li>Update tests to cover error scenarios</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                  3
                </div>
                Summarize Changes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Provide file references and command suggestions. Clear summaries help you understand what was changed
                and how to verify the results.
              </p>
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/20">
                <h4 className="mb-2 font-semibold">Example Summary:</h4>
                <div className="space-y-1 text-sm">
                  <p>
                    📁 <strong>Modified:</strong> src/services/auth.ts (lines 45-67)
                  </p>
                  <p>
                    📁 <strong>Added:</strong> src/utils/error-handler.ts
                  </p>
                  <p>
                    📁 <strong>Updated:</strong> tests/auth.test.ts
                  </p>
                  <p>
                    🧪 <strong>Run tests:</strong> <code>npm test auth</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                  4
                </div>
                Offer Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Suggest tests or commits without overstepping. Helpful next steps guide you through the completion of
                your task without being overly prescriptive.
              </p>
              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950/20">
                <h4 className="mb-2 font-semibold">Suggested Next Steps:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Run the test suite to verify changes</li>
                  <li>• Review the diff before committing</li>
                  <li>• Consider adding integration tests</li>
                  <li>• Update documentation if needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
