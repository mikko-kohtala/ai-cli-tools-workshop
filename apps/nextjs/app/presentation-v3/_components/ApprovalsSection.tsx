import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const approvalPolicies = [
  {
    name: "never",
    color: "red",
    description: "No escalation requests; work around limitations",
    details:
      "In this mode, the agent will never ask for elevated permissions. If it encounters a sandbox restriction, it will try to work around it or inform you that the task cannot be completed.",
    bestFor: "Fully automated CI/CD pipelines, untrusted environments",
  },
  {
    name: "on-request",
    color: "blue",
    description: "Ask for permission via with_escalated_permissions",
    details:
      "The agent can request elevated permissions when needed. You'll see a prompt explaining what it wants to do and why, and you can approve or deny the request.",
    bestFor: "Interactive development sessions, learning the tool",
  },
  {
    name: "on-failure",
    color: "amber",
    description: "Retry only after a sandbox failure justifies it",
    details:
      "The agent tries to complete tasks within sandbox restrictions first. Only if it fails due to permissions will it ask for escalation.",
    bestFor: "Balanced approach between safety and convenience",
  },
  {
    name: "untrusted",
    color: "purple",
    description: "Most commands require user confirmation first",
    details:
      "Maximum safety mode. The agent asks for confirmation before most operations, including file modifications and command execution.",
    bestFor: "Critical codebases, production environments, initial evaluation",
  },
];

// vendor commands vary; show generic patterns inline in the UI

export function ApprovalsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="approvals">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30">
          <CheckCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="font-bold text-4xl">Approvals & Safety</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Approval policies work hand-in-hand with sandboxing to control what the agent can do autonomously and when
              it should ask for permission. These policies help you balance automation and control across any AI CLI.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {approvalPolicies.map((policy) => (
          <Card className="border-2" key={`policy-${policy.name}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className={`text-${policy.color}-600`}>{policy.name}</span>
              </CardTitle>
              <CardDescription>{policy.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-foreground/70 text-sm">{policy.details}</p>
              <p className="text-sm">
                <strong>Best for:</strong> {policy.bestFor}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="interactive">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="interactive">Interactive Example</TabsTrigger>
          <TabsTrigger value="configure">How to Configure</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="interactive">
          <Card>
            <CardContent className="p-6">
              <p className="mb-3 font-semibold text-sm">Approval flow in action (on-request mode):</p>
              <div className="space-y-3 rounded-lg bg-slate-50 p-4 text-sm dark:bg-slate-900/30">
                <div>
                  <p className="font-semibold text-green-600">You: Install the axios package</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600">Agent: I need to run 'npm install axios'. This will:</p>
                  <ul className="mt-1 ml-4 list-inside list-disc text-foreground/80">
                    <li>Download and install axios from npm registry</li>
                    <li>Update package.json and package-lock.json</li>
                    <li>Use network access to download the package</li>
                  </ul>
                  <p className="mt-2 font-semibold text-blue-600">Approve this action? [y/N]</p>
                </div>
                <div>
                  <p className="font-semibold text-green-600">You: y</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600">Agent: ✓ Installed axios@1.6.0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="mt-4" value="configure">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3 text-sm">
                <p className="text-foreground/70">Configuration patterns (vary by tool):</p>
                <ul className="ml-4 list-inside list-disc space-y-1 text-foreground/80">
                  <li>CLI flag: <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">{`<cli> --approval on-request`}</code></li>
                  <li>Config set: <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">{`<cli> config set approval on-request`}</code></li>
                  <li>Environment: <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">APPROVAL_POLICY=untrusted</code></li>
                </ul>
                <p className="mt-2 text-foreground/70">Check your tool's docs for exact commands and defaults.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
