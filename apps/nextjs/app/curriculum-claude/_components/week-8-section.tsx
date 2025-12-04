import { Building2, Container, FileCheck, Lightbulb, Shield, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "CI/CD & Docker Essentials",
    description: "Automated pipelines and containerization basics",
    tasks: ["Generate GitHub Actions workflow with AI", "Containerize an application"],
  },
  {
    day: "Day 2",
    title: "AI Across Company Processes",
    description: "How AI helps product, support, docs, and analytics",
    tasks: ["Brainstorm AI applications for different teams", "Generate documentation with AI"],
  },
  {
    day: "Day 3",
    title: "Governance & Security",
    description: "Enterprise considerations for AI and agents",
    tasks: ["Review security best practices", "Define approval workflows"],
  },
  {
    day: "Day 4-5",
    title: "Capstone Project",
    description: "Full SDLC cycle with an agent component",
    tasks: ["Design → Implement → Test → Deploy", "Include agent or agentic workflow"],
  },
];

const devopsEssentials = [
  {
    topic: "CI/CD with GitHub Actions",
    description: "Automated testing, building, and deployment pipelines",
    aiHelp: "AI generates workflow files and troubleshoots failures",
  },
  {
    topic: "Docker Basics",
    description: "Containerize applications for consistent deployment",
    aiHelp: "AI generates Dockerfiles and multi-stage builds",
  },
  {
    topic: "Environment Configuration",
    description: "Managing configs across environments safely",
    aiHelp: "AI helps structure config files (without secrets)",
  },
];

const companyProcesses = [
  {
    area: "Product",
    uses: ["Feature brainstorming", "User story refinement", "Competitive analysis"],
  },
  {
    area: "Support",
    uses: ["KB article drafting", "Response templates", "Ticket triage agents"],
  },
  {
    area: "Documentation",
    uses: ["API docs from code", "User guides", "Release notes"],
  },
  {
    area: "Analytics",
    uses: ["SQL query help", "Report interpretation", "Dashboard agents"],
  },
];

const governanceChecklist = [
  { item: "No secrets in prompts", description: "Never include API keys, passwords, or credentials" },
  { item: "Review before commit", description: "Human reviews all AI-generated code" },
  { item: "IP awareness", description: "Understand what data is sent to AI providers" },
  { item: "Agent boundaries", description: "Define what agents can and cannot do" },
  { item: "Human-in-the-loop", description: "Approval flows for critical actions" },
];

const capstoneRequirements = [
  "Define requirements with AI assistance",
  "Create architecture plan (with ADR)",
  "Implement using agentic workflows",
  "Build or integrate an agent component",
  "Add tests (unit + integration)",
  "Containerize and set up CI/CD",
  "Deploy to a platform",
  "Document and present",
];

export function Week8Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 dark:bg-rose-900/30">
          <Trophy className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 8: Capstone & Deploy</h2>
          <p className="text-foreground/60">DevOps essentials, enterprise AI, and your capstone project</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            The final week brings it all together: essential DevOps skills for deployment, understanding AI across
            company processes, and a capstone project that demonstrates your full capabilities—including an agent
            component tailored to your learning path.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-rose-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Building2 className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Set up CI/CD pipelines and containerize applications</li>
              <li>Understand AI applications across company processes</li>
              <li>Learn governance, security, and IP considerations</li>
              <li>Complete capstone project with agent component</li>
              <li>Reflect on AI-assisted development practices</li>
            </ul>
          </CardContent>
        </Card>

        {/* DevOps Essentials */}
        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Container className="h-5 w-5" />
              DevOps Essentials
            </CardTitle>
            <CardDescription>What every team member needs to deploy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {devopsEssentials.map((item) => (
                <div className="rounded-lg border p-4" key={item.topic}>
                  <h4 className="font-semibold">{item.topic}</h4>
                  <p className="mt-1 text-foreground/70 text-sm">{item.description}</p>
                  <p className="mt-1 text-cyan-600 text-sm dark:text-cyan-400">{item.aiHelp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Company Processes */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            <h3 className="font-semibold text-2xl">AI Across Company Processes</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {companyProcesses.map((process) => (
              <Card key={process.area}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{process.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-1 text-foreground/70 text-sm">
                    {process.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Breakdown */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Daily Breakdown</h3>
          <div className="space-y-3">
            {dailyTopics.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-rose-100 px-2 py-1 font-mono text-rose-700 text-sm dark:bg-rose-900/30 dark:text-rose-400">
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

        {/* Governance */}
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Shield className="h-5 w-5" />
              Governance & Security
            </CardTitle>
            <CardDescription>Enterprise considerations for AI and agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {governanceChecklist.map((item) => (
                <div className="flex items-start gap-3 rounded-lg border p-3" key={item.item}>
                  <div className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-amber-500" />
                  <div>
                    <p className="font-semibold text-sm">{item.item}</p>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Capstone */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileCheck className="h-5 w-5" />
              Capstone Project
            </CardTitle>
            <CardDescription>Demonstrate mastery from your learning path—with agents</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              Build a project relevant to your role. The capstone must include an agent component or agentic workflow,
              demonstrating your ability to build autonomous AI systems:
            </p>
            <div className="grid gap-2 md:grid-cols-2">
              {capstoneRequirements.map((req, i) => (
                <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-900/30" key={req}>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 text-xs dark:bg-indigo-900/30 dark:text-indigo-400">
                    {i + 1}
                  </span>
                  <span className="text-foreground/70 text-sm">{req}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reflection */}
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/30">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            <p className="font-semibold text-rose-700 dark:text-rose-400">Reflection Questions</p>
          </div>
          <ul className="mt-2 list-inside list-disc space-y-1 text-foreground/70 text-sm">
            <li>Where did AI and agents help the most? The least?</li>
            <li>What patterns worked best for your workflow?</li>
            <li>How will you apply what you learned to your team?</li>
            <li>What guardrails are essential for your domain?</li>
          </ul>
        </div>

        {/* Final Outcome */}
        <div className="rounded-lg border-2 border-rose-300 border-dashed bg-rose-50/50 p-4 dark:border-rose-700 dark:bg-rose-950/20">
          <p className="mb-2 font-semibold text-rose-700 dark:text-rose-400">Curriculum Outcome</p>
          <p className="text-foreground/70 text-sm">
            You are now an <strong>AI-augmented professional</strong> who can build agents. You understand agentic
            workflows, the Claude Agent SDK, and how to deploy autonomous systems safely. You're ready to help your team
            adopt AI-assisted practices and build custom agents for your domain.
          </p>
        </div>
      </div>
    </section>
  );
}
