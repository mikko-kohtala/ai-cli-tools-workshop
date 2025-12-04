import { Activity, Container, FileText, GitBranch } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "CI/CD Pipelines",
    description: "Using AI to draft GitHub Actions workflows",
    tasks: ["Generate CI workflow with AI", "Add linting, testing, and build steps"],
  },
  {
    day: "Day 2",
    title: "Docker Basics",
    description: "Containerizing applications with AI assistance",
    tasks: ["Generate Dockerfile for project", "Understand multi-stage builds"],
  },
  {
    day: "Day 3",
    title: "Environment Configuration",
    description: "Managing configs and secrets safely",
    tasks: ["Set up environment variables", "Configure for different environments"],
  },
  {
    day: "Day 4",
    title: "Deployment",
    description: "Deploying containerized app to a platform",
    tasks: ["Deploy to cloud platform", "Verify deployment with AI troubleshooting"],
  },
  {
    day: "Day 5",
    title: "Operational Docs",
    description: "Runbooks, deployment guides, monitoring setup",
    tasks: ["Generate runbook with AI", "Document deployment process"],
  },
];

const cicdComponents = [
  { name: "Lint", description: "Code style and quality checks", ai: "AI generates ESLint/Prettier configs" },
  { name: "Test", description: "Run test suites", ai: "AI helps configure test runners" },
  { name: "Build", description: "Compile and bundle", ai: "AI troubleshoots build failures" },
  { name: "Deploy", description: "Push to environment", ai: "AI generates deployment scripts" },
];

const dockerConcepts = [
  { concept: "Dockerfile", description: "Build instructions for container image" },
  { concept: "Multi-stage builds", description: "Smaller images by separating build and runtime" },
  { concept: "docker-compose", description: "Multi-container local development" },
  { concept: ".dockerignore", description: "Exclude files from build context" },
];

export function Week5Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-5">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
          <Container className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 5: DevOps Essentials</h2>
          <p className="text-foreground/60">AI across build, deploy, and run</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week covers DevOps essentials every developer needs: CI/CD pipelines and Docker basics. You'll
            containerize your core project and set up automated workflows—all with AI assistance.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GitBranch className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Create CI/CD pipelines with GitHub Actions</li>
              <li>Containerize applications with Docker</li>
              <li>Manage environment configuration safely</li>
              <li>Deploy to a cloud platform</li>
              <li>Generate operational documentation</li>
              <li>
                <strong>Core project</strong>: Containerize and add CI/CD
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CI/CD Pipeline */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">CI/CD Pipeline with AI</CardTitle>
            <CardDescription>AI helps generate and troubleshoot pipeline configurations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg bg-slate-50 p-4 dark:bg-slate-900/30">
              {cicdComponents.map((comp, i) => (
                <div className="flex items-center gap-2" key={comp.name}>
                  <div className="rounded-lg bg-blue-100 px-4 py-2 text-center dark:bg-blue-900/50">
                    <p className="font-semibold text-blue-700 text-sm dark:text-blue-300">{comp.name}</p>
                    <p className="text-[10px] text-foreground/60">{comp.description}</p>
                  </div>
                  {i < cicdComponents.length - 1 && <span className="text-foreground/30 text-xl">→</span>}
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {cicdComponents.map((comp) => (
                <div className="rounded bg-slate-50 p-2 dark:bg-slate-900/30" key={comp.name}>
                  <p className="font-semibold text-xs">{comp.name}</p>
                  <p className="text-[10px] text-foreground/60">{comp.ai}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Docker */}
        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Container className="h-5 w-5" />
              Docker Essentials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {dockerConcepts.map((item) => (
                <div className="rounded-lg border p-3" key={item.concept}>
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800">{item.concept}</code>
                  <p className="mt-1 text-foreground/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-800 dark:bg-cyan-950/30">
              <p className="text-foreground/70 text-sm">
                <strong>AI tip:</strong> Ask AI to generate a Dockerfile for your stack. Provide: language, framework,
                build process, and any special requirements. AI will suggest multi-stage builds for smaller images.
              </p>
            </div>
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
                    <span className="rounded bg-amber-100 px-2 py-1 font-mono text-amber-700 text-sm dark:bg-amber-900/30 dark:text-amber-400">
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

        {/* Operational Docs */}
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <p className="font-semibold text-amber-700 dark:text-amber-400">AI-Generated Runbooks</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            AI excels at drafting operational documentation: "If service X is down, check A, B, C." Provide context
            about your system and common failure modes. <strong>Always review</strong> before publishing—AI may miss
            critical steps or assume incorrect defaults.
          </p>
        </div>

        {/* Monitoring */}
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <p className="font-semibold text-emerald-700 dark:text-emerald-400">Basic Monitoring</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            Ask AI: "What metrics should I monitor for this service?" and "What logs should I capture?" AI can suggest
            health check endpoints, log formats, and basic alerting thresholds.
          </p>
        </div>

        {/* Project Milestone */}
        <div className="rounded-lg border-2 border-amber-300 border-dashed bg-amber-50/50 p-4 dark:border-amber-700 dark:bg-amber-950/20">
          <p className="mb-2 font-semibold text-amber-700 dark:text-amber-400">Core Project Milestone</p>
          <p className="text-foreground/70 text-sm">
            By end of Week 5: Project containerized with Docker, CI/CD pipeline running on GitHub Actions, deployed to a
            platform, with deployment docs and runbook drafted.
          </p>
        </div>
      </div>
    </section>
  );
}
