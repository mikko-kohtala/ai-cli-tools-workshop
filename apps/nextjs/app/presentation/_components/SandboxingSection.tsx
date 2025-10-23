import { AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sandboxingGuidelines = [
  {
    title: "Know the active sandbox_mode before running commands",
    description:
      "Always check your current sandbox mode with 'codex config sandbox'. This tells you what level of access the agent has.",
  },
  {
    title: "Default to workspace-safe operations",
    description:
      "The 'workspace-write' mode is recommended for most development work. It allows file modifications within your project but prevents access to system files or parent directories.",
  },
  {
    title: "Treat read-only environments as exploratory",
    description:
      "Use 'read-only' mode when you want the agent to analyze code, answer questions, or suggest changes without actually modifying anything.",
  },
  {
    title: "Keep destructive commands off-limits",
    description:
      "Even in 'danger' mode, be cautious with operations like 'rm -rf', database drops, or production deployments. Always review what the agent plans to do.",
  },
];

const sandboxModes = [
  {
    mode: "read-only",
    color: "green",
    description: "Can read files, analyze code, and answer questions. Cannot modify anything.",
    useCase: "Exploring a new codebase, getting code explanations, or auditing for issues.",
  },
  {
    mode: "workspace-write (default)",
    color: "blue",
    description: "Can modify files within the project directory. Cannot access parent directories or system files.",
    useCase: "Active development, refactoring, adding features, or fixing bugs.",
  },
  {
    mode: "danger",
    color: "red",
    description: "Unrestricted access to the filesystem. Use with extreme caution.",
    useCase:
      "System-level tasks, modifying configuration files outside the project, or when you fully trust the agent.",
  },
];

const configExamples = [
  {
    title: "Set sandbox mode globally:",
    command: "codex config set sandbox workspace-write",
  },
  {
    title: "Set for current session only:",
    command: "codex --sandbox read-only",
  },
  {
    title: "Check current setting:",
    command: "codex config sandbox",
  },
];

const scenarioExamples = [
  {
    title: "Code Review",
    mode: "read-only",
    request: "Review the authentication module and identify any security issues",
    status: "Safe: No files will be modified",
    statusColor: "green",
  },
  {
    title: "Feature Development",
    mode: "workspace-write",
    request: "Add pagination to the user list component",
    status: "Safe: Only project files affected",
    statusColor: "blue",
  },
  {
    title: "System Setup",
    mode: "danger",
    request: "Configure nginx to reverse proxy to this app",
    status: "Warning: System files will be modified",
    statusColor: "red",
  },
];

export function SandboxingSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="sandboxing">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
          <Shield className="h-5 w-5 text-amber-600" />
        </div>
        <h2 className="font-bold text-4xl">Working with Sandboxing</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Sandboxing is one of Codex CLI's most important security features. It creates a protective boundary around
              your project, ensuring the AI agent can only perform actions you've explicitly allowed. Think of it as a
              security guard that checks every request before letting it through.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="p-8">
          <ul className="space-y-4">
            {sandboxingGuidelines.map((item) => (
              <li className="flex items-start gap-3" key={`security-${item.title}`}>
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="mt-1 text-foreground/70 text-sm">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Tabs className="mb-8" defaultValue="modes">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="modes">Sandbox Modes</TabsTrigger>
          <TabsTrigger value="config">Configuration</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="modes">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {sandboxModes.map((mode) => (
                  <div className={`border-l-4 border-l-${mode.color}-500 pl-4`} key={`mode-${mode.mode}`}>
                    <h4 className="font-semibold text-lg">{mode.mode}</h4>
                    <p className="text-foreground/70 text-sm">{mode.description}</p>
                    <p className="mt-2 text-sm">
                      <strong>Use when:</strong> {mode.useCase}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="mt-4" value="config">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {configExamples.map((example) => (
                  <div key={`config-${example.command}`}>
                    <p className="mb-2 font-semibold text-sm">{example.title}</p>
                    <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-slate-50 text-sm">
                      <code>{example.command}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="mt-4" value="examples">
          <div className="space-y-4">
            {scenarioExamples.map((scenario) => (
              <Card key={`scenario-${scenario.title}`}>
                <CardHeader>
                  <CardTitle className="text-base">Scenario: {scenario.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-2">
                    <strong>Mode:</strong> {scenario.mode}
                  </p>
                  <p className="text-foreground/70">"{scenario.request}"</p>
                  <p className={`mt-2 text-${scenario.statusColor}-600`}>✓ {scenario.status}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div>
              <p className="mb-2 font-semibold text-lg">Best Practice: Start Restrictive</p>
              <p className="text-foreground/70 text-sm">
                When working with a new project or experimenting with Codex CLI, start with 'read-only' or
                'workspace-write' mode. You can always escalate permissions if needed, but it's much harder to undo
                accidental changes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
