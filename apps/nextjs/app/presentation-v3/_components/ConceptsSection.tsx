import { Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ConceptsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="concepts">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
          <Settings className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="font-bold text-4xl">Common Concepts</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              To use AI CLI tools effectively, it helps to understand the core concepts that govern how agents operate.
              These ensure your sessions are secure, predictable, and aligned with your project's requirements.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Environment Context</CardTitle>
            <CardDescription className="text-base">
              Every session starts with cwd, sandbox, network, and approval settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              When you start an AI CLI, it captures your working directory and project context (git status, env vars,
              available tools). This helps the agent understand your structure and make informed decisions.
            </p>
            <Tabs defaultValue="cwd">
              <TabsList>
                <TabsTrigger value="cwd">Working Directory</TabsTrigger>
                <TabsTrigger value="sandbox">Sandbox Mode</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="cwd">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900/30">
                  <p className="mb-2 text-sm">
                    <strong>Example:</strong>
                  </p>
                  <pre className="rounded border bg-white p-3 text-sm dark:bg-slate-950">
                    <code>
                      {
                        "$ pwd\n/Users/dev/my-app\n\n$ <cli>\n<cli> vX.Y.Z\nContext: /Users/dev/my-app (git: main)\nReady!"
                      }
                    </code>
                  </pre>
                  <p className="mt-3 text-foreground/70 text-sm">
                    The agent knows it's working in{" "}
                    <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-800">/Users/dev/my-app</code> on the
                    main branch.
                  </p>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="sandbox">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900/30">
                  <p className="mb-2 text-sm">Sandbox modes control file system access:</p>
                  <ul className="list-inside list-disc space-y-1 text-sm">
                    <li>
                      <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-800">read-only</code>: Can read files
                      but not modify them
                    </li>
                    <li>
                      <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-800">workspace-write</code>: Can
                      modify files within the project (default)
                    </li>
                    <li>
                      <code className="rounded bg-white px-1 py-0.5 dark:bg-slate-800">danger</code>: Unrestricted
                      access (use with caution)
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="network">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900/30">
                  <p className="mb-2 text-sm">Network policies determine what the agent can access:</p>
                  <ul className="list-inside list-disc space-y-1 text-sm">
                    <li>Install npm packages</li>
                    <li>Fetch documentation</li>
                    <li>Make API calls for testing</li>
                    <li>Clone repositories (if allowed)</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">Plan & Execute</CardTitle>
            <CardDescription className="text-base">
              Agents build lightweight plans before touching code-heavy tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              For non-trivial tasks (anything requiring more than 2 steps), most AI CLIs create a plan before executing.
              This gives you visibility into what will happen and a chance to adjust the approach before any code
              changes.
            </p>
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30">
              <CardContent className="p-4">
                <p className="mb-2 font-semibold text-sm">Example Planning Session:</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-green-600">You:</span> Add authentication to the app
                  </p>
                  <p>
                    <span className="font-semibold text-blue-600">Agent:</span> I'll help you add authentication. Here's
                    my plan:
                  </p>
                  <ol className="ml-4 list-inside list-decimal space-y-1 text-foreground/70">
                    <li>Install required packages (bcrypt, jsonwebtoken)</li>
                    <li>Create auth middleware</li>
                    <li>Add login/signup endpoints</li>
                    <li>Update protected routes</li>
                    <li>Add environment variables for JWT secret</li>
                  </ol>
                  <p className="mt-3">
                    <span className="font-semibold text-blue-600">Agent:</span> Does this approach work for you?
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl">Tooling Contracts</CardTitle>
            <CardDescription className="text-base">
              Shell, plan, and view_image tools with strict usage guidelines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              AI CLIs have access to specific tools that let them interact with your system. Each tool has a
              "contract"—rules about when and how it can be used—to keep behavior predictable and safe.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">shell</CardTitle>
                  <CardDescription className="text-sm">Execute commands</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-foreground/70">Run npm scripts, git commands, tests, and builds</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">plan</CardTitle>
                  <CardDescription className="text-sm">Create task plans</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-foreground/70">Break down complex tasks into steps</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">view_image</CardTitle>
                  <CardDescription className="text-sm">Analyze screenshots</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-foreground/70">Understand UI issues from images</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl">Outputs</CardTitle>
            <CardDescription className="text-base">
              Plain-text responses styled by the CLI; no raw command dumps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              Well-designed AI CLIs optimize for clarity. Instead of dumping raw logs, they summarize results, highlight
              what changed, and show clean diffs for quick review.
            </p>
            <Tabs defaultValue="bad">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bad">❌ Raw Output</TabsTrigger>
                <TabsTrigger value="good">✅ Agent Output</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="bad">
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-xs">
                  <code>{`npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp...
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm notice created a lockfile as package-lock.json
npm notice
added 234 packages from 123 contributors and audited 234 packages in 12.345s
found 0 vulnerabilities`}</code>
                </pre>
              </TabsContent>
              <TabsContent className="mt-4" value="good">
                <div className="rounded-lg bg-slate-50 p-4 text-sm dark:bg-slate-900/30">
                  <p className="font-semibold text-green-600">✓ Installed dependencies</p>
                  <p className="mt-2 text-foreground/70">Added 234 packages. No vulnerabilities found.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
