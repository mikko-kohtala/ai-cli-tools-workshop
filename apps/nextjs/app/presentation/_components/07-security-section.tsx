import { AlertTriangle, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const securityPrinciples = [
  {
    title: "Know your tool's access level",
    description:
      "Before starting work, understand what permissions your AI CLI tool has. Most tools show this in their startup message or configuration.",
  },
  {
    title: "Start with minimal permissions",
    description:
      "Begin with read-only or workspace-only access. You can always grant more permissions later if needed, but you can't undo accidental changes.",
  },
  {
    title: "Use approval flows for risky operations",
    description:
      "Configure your tool to ask for confirmation before file modifications, network access, or command execution in sensitive projects.",
  },
  {
    title: "Review what the agent plans to do",
    description:
      "Most tools present a plan before execution. Take time to understand the approach, especially for complex or critical tasks.",
  },
];

const accessLevels = [
  {
    level: "Read-only",
    color: "green",
    description: "Can read files, analyze code, and answer questions. Cannot modify anything.",
    useCase: "Exploring new codebases, code reviews, understanding architecture.",
    example: "Codex CLI: --sandbox read-only",
  },
  {
    level: "Workspace-scoped",
    color: "blue",
    description: "Can modify files within the project directory. Cannot access parent directories or system files.",
    useCase: "Active development, refactoring, adding features, bug fixes.",
    example: "Most tools use this as the default",
  },
  {
    level: "Full system access",
    color: "red",
    description: "Unrestricted access to filesystem and commands. Use with extreme caution.",
    useCase: "System configuration, deployment scripts, infrastructure work.",
    example: "Requires explicit opt-in across tools",
  },
];

const approvalStrategies = [
  {
    name: "Automatic approval",
    description: "Tool executes actions without asking",
    pros: "Fast, minimal friction for trusted operations",
    cons: "Less control, higher risk of unwanted changes",
    when: "Prototyping, low-stakes experiments, well-tested workflows",
  },
  {
    name: "Ask on request",
    description: "Tool asks permission when it needs elevated access",
    pros: "Balanced approach, maintains flow while ensuring awareness",
    cons: "May interrupt workflow occasionally",
    when: "Interactive development, learning the tool",
  },
  {
    name: "Ask on failure",
    description: "Tool tries within restrictions, asks only if it fails",
    pros: "Minimizes interruptions, respects boundaries",
    cons: "May require retry after initial failure",
    when: "Experienced users who want safety with minimal friction",
  },
  {
    name: "Always ask",
    description: "Tool confirms before most operations",
    pros: "Maximum control and visibility",
    cons: "Can be tedious for frequent operations",
    when: "Critical codebases, production environments, initial evaluation",
  },
];

const securityScenarios = [
  {
    title: "Code Review",
    accessLevel: "Read-only",
    approvalStrategy: "N/A (no modifications)",
    task: "Review the authentication module and identify security issues",
    status: "✓ Safe: No files modified",
    statusColor: "green",
  },
  {
    title: "Feature Development",
    accessLevel: "Workspace-scoped",
    approvalStrategy: "Ask on request",
    task: "Add pagination to the user list component",
    status: "✓ Safe: Only project files affected",
    statusColor: "blue",
  },
  {
    title: "Dependency Updates",
    accessLevel: "Workspace-scoped",
    approvalStrategy: "Ask on request",
    task: "Update React to the latest version and fix breaking changes",
    status: "⚠ Review: Check compatibility before proceeding",
    statusColor: "amber",
  },
  {
    title: "Infrastructure Setup",
    accessLevel: "Full system access",
    approvalStrategy: "Always ask",
    task: "Configure nginx to reverse proxy to this app",
    status: "⚠ Warning: System files will be modified",
    statusColor: "red",
  },
];

export function SecuritySection() {
  return (
    <section className="mb-16 scroll-mt-16" id="security">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
          <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <h2 className="font-bold text-4xl">Security & Control</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Security is paramount when giving AI agents access to your codebase. Modern AI CLI tools implement
              multiple layers of protection: filesystem sandboxing limits where changes can be made, approval mechanisms
              control when actions are executed, and clear communication ensures you always know what's happening. These
              features work together to give you confidence while maintaining velocity.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Security Best Practices</h3>
        <Card>
          <CardContent className="p-8">
            <ul className="space-y-4">
              {securityPrinciples.map((principle) => (
                <li className="flex items-start gap-3" key={`principle-${principle.title}`}>
                  <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <div>
                    <p className="font-semibold text-lg">{principle.title}</p>
                    <p className="mt-1 text-foreground/70 text-sm">{principle.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs className="mb-12" defaultValue="access">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="access">Filesystem Access</TabsTrigger>
          <TabsTrigger value="approval">Approval Strategies</TabsTrigger>
          <TabsTrigger value="scenarios">Real-world Scenarios</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="access">
          <div className="space-y-4">
            {accessLevels.map((level) => {
              const borderClass =
                level.color === "green"
                  ? "border-l-green-500"
                  : level.color === "blue"
                    ? "border-l-blue-500"
                    : level.color === "red"
                      ? "border-l-red-500"
                      : "border-l-slate-300";
              return (
                <Card className={cn("border-l-4", borderClass)} key={`access-${level.level}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{level.level}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-sm">
                      <strong>Use when:</strong> {level.useCase}
                    </p>
                    <p className="rounded bg-slate-50 p-2 text-foreground/60 text-xs dark:bg-slate-900/30">
                      {level.example}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent className="mt-4" value="approval">
          <div className="grid gap-4 md:grid-cols-2">
            {approvalStrategies.map((strategy) => (
              <Card key={`strategy-${strategy.name}`}>
                <CardHeader>
                  <CardTitle className="text-base">{strategy.name}</CardTitle>
                  <CardDescription className="text-sm">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-green-600 dark:text-green-400">Pros:</p>
                    <p className="text-foreground/70">{strategy.pros}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 dark:text-red-400">Cons:</p>
                    <p className="text-foreground/70">{strategy.cons}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Best for:</p>
                    <p className="text-foreground/70">{strategy.when}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent className="mt-4" value="scenarios">
          <div className="space-y-4">
            {securityScenarios.map((scenario) => {
              const statusClass =
                scenario.statusColor === "green"
                  ? "text-green-600 dark:text-green-400"
                  : scenario.statusColor === "blue"
                    ? "text-blue-600 dark:text-blue-400"
                    : scenario.statusColor === "amber"
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-red-600 dark:text-red-400";
              return (
                <Card key={`scenario-${scenario.title}`}>
                  <CardHeader>
                    <CardTitle className="text-base">Scenario: {scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>
                      <strong>Access Level:</strong> {scenario.accessLevel}
                    </p>
                    <p>
                      <strong>Approval Strategy:</strong> {scenario.approvalStrategy}
                    </p>
                    <p className="text-foreground/70">
                      <strong>Task:</strong> "{scenario.task}"
                    </p>
                    <p className={statusClass}>{scenario.status}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <p className="mb-2 font-semibold text-lg">Security Mindset</p>
              <p className="text-foreground/70 text-sm">
                Treat AI CLI tools with the same security considerations you'd apply to any powerful development tool.
                Start restrictive, understand what's happening before approving actions, and gradually build trust as
                you become familiar with how your chosen tool behaves. The goal is to work efficiently while maintaining
                control and safety.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
