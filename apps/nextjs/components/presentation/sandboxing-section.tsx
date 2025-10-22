import { AlertTriangle, Info, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SandboxingSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-3xl">Working with Sandboxing</h2>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Know Your Environment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Always check the active <code className="rounded bg-muted px-2 py-1">sandbox_mode</code> before running
              commands. Understanding your current environment helps you make informed decisions about what operations
              are safe to perform.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">
                $ codex --status
                <br />
                Current sandbox mode: workspace-write
                <br />
                Network access: limited
                <br />
                Approval policy: on-request
              </code>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Default to Safety
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Start with workspace-safe operations and request escalation only if the policy allows. This approach
              minimizes risk while still enabling productive AI assistance.
            </p>
            <Tabs className="w-full" defaultValue="safe">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="safe">Safe Operations</TabsTrigger>
                <TabsTrigger value="escalation">Escalation</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="safe">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Read and analyze files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Run tests and linters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Create new files in project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Modify existing project files</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="escalation">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">System-level changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Package installations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Network requests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">File deletions</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Read-Only Exploration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Treat read-only environments as exploratory unless the user explicitly asks for changes. This mode is
              perfect for code analysis, documentation generation, and understanding existing codebases.
            </p>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/20">
              <h4 className="mb-2 font-semibold">Read-Only Use Cases:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Code quality analysis and suggestions</li>
                <li>• Documentation generation from code</li>
                <li>• Security vulnerability scanning</li>
                <li>• Performance optimization recommendations</li>
                <li>• Code review and feedback</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Destructive Commands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Keep destructive commands off-limits unless the user explicitly mandates them. Always provide clear
              warnings and confirmation prompts for potentially harmful operations.
            </p>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
              <h4 className="mb-2 font-semibold text-red-900 dark:text-red-100">Dangerous Operations:</h4>
              <ul className="space-y-1 text-red-800 text-sm dark:text-red-200">
                <li>
                  • <code>rm -rf</code> commands
                </li>
                <li>• Database drops or truncates</li>
                <li>• System configuration changes</li>
                <li>• Package uninstallations</li>
                <li>• Git history rewrites</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
