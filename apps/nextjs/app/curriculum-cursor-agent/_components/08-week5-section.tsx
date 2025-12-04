import { BarChart, Cloud, GitBranch, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: Cloud,
    title: "Infrastructure as Code",
    description:
      "Generating Dockerfiles, basic Kubernetes manifests, or IaC snippets (Terraform, etc.). Asking AI to explain existing infra files",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    description:
      "Using AI to draft CI configs (GitHub Actions, GitLab CI, etc.). Getting AI to suggest quality gates (tests, lint, security scans)",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Deploying the project to a simple environment (e.g., cloud service, container platform). Using AI to help with configuration issues & environment variables (without sharing secrets)",
  },
  {
    icon: BarChart,
    title: "Observability & Operations",
    description:
      "Asking AI to suggest metrics and logs for key features. Using AI to interpret log output or alerts and propose runbook steps",
  },
];

const projectFocus = [
  "Containerize and deploy the project",
  "Add monitoring/logging basics (even if simulated)",
  "Document deployment and runbooks — drafted by AI, edited by dev",
  "Practice the ops workflow: deploy → monitor → troubleshoot → document",
];

export function Week5Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week5">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
          <Cloud className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 5: DevOps, Deployment & Operations</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: AI across build, deploy & run</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>Use AI to help set up infra and pipelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>Apply AI to operations: monitoring, on-call, troubleshooting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>Understand how AI can document and support DevOps workflows</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Key Topics</h3>
        <div className="grid gap-4 md:grid-cols-2">
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
                  <p className="text-foreground/80 text-sm leading-relaxed">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Project Focus</h3>
        <Card className="bg-cyan-50 dark:bg-cyan-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base">This week, you'll deploy your project and set up operational practices:</p>
            <ul className="space-y-2">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-2 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600 dark:text-cyan-400" />
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
