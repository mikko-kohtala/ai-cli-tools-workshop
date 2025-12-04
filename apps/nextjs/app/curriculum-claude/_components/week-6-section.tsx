import { Building2, FileCheck, Lightbulb, Shield, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "AI in Product & UX",
    description: "Brainstorming features, UX copy, error messages",
    tasks: ["Brainstorm feature ideas with AI", "Generate UX copy for a flow"],
  },
  {
    day: "Day 2",
    title: "AI in Documentation",
    description: "Converting specs to docs, FAQs, knowledge bases",
    tasks: ["Generate user documentation", "Create FAQ from support patterns"],
  },
  {
    day: "Day 3",
    title: "Governance & Security",
    description: "Data privacy, secure prompting, human-in-the-loop",
    tasks: ["Review security best practices", "Define approval workflows"],
  },
  {
    day: "Day 4-5",
    title: "Capstone Project",
    description: "Full SDLC cycle on a new mini-project",
    tasks: ["Plan → Design → Implement → Test → Deploy", "Document everything"],
  },
];

const companyProcesses = [
  {
    area: "Product",
    uses: ["Feature brainstorming", "User story refinement", "Competitive analysis", "UX copy generation"],
  },
  {
    area: "Support",
    uses: ["KB article drafting", "Response macros", "Incident summaries", "Escalation triage"],
  },
  {
    area: "Documentation",
    uses: ["API docs from code", "User guides", "FAQ generation", "Release notes"],
  },
  {
    area: "Analytics",
    uses: ["SQL query help", "Dashboard interpretation", "Trend summarization", "Report drafting"],
  },
];

const governanceChecklist = [
  { item: "No secrets in prompts", description: "Never include API keys, passwords, or credentials" },
  { item: "Review before commit", description: "Human reviews all AI-generated code before merging" },
  { item: "IP awareness", description: "Understand what data is sent to AI providers" },
  { item: "Human-in-the-loop", description: "Define what requires human approval vs. auto-approval" },
  { item: "Prompt injection awareness", description: "Understand risks when AI processes user input" },
];

const capstoneRequirements = [
  "Define requirements with AI assistance",
  "Create architecture plan and ADR",
  "Implement core functionality",
  "Add tests (unit + integration)",
  "Containerize and set up CI/CD",
  "Deploy to a platform",
  "Write user documentation",
  "Present what you built",
];

export function Week6Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 dark:bg-rose-900/30">
          <Building2 className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 6: Enterprise & Capstone</h2>
          <p className="text-foreground/60">Beyond code—AI across the company</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            The final week expands beyond coding: how AI helps across company processes, governance considerations, and
            a capstone project where you apply everything learned in a full SDLC cycle.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-rose-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Trophy className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Understand AI applications across company processes</li>
              <li>Learn governance, security, and IP considerations</li>
              <li>Complete a capstone project demonstrating full SDLC</li>
              <li>Reflect on where AI helped and where it struggled</li>
              <li>Develop personal best practices for AI-assisted work</li>
            </ul>
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

        {/* Governance */}
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Shield className="h-5 w-5" />
              Governance & Security
            </CardTitle>
            <CardDescription>Essential considerations for enterprise AI use</CardDescription>
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

        {/* Capstone */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileCheck className="h-5 w-5" />
              Capstone Project
            </CardTitle>
            <CardDescription>Demonstrate mastery across the full SDLC</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground/70">
              Build a small but meaningful feature or tool using everything you've learned. The capstone should
              demonstrate AI assistance at every stage:
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
            <li>Where did AI help the most? The least?</li>
            <li>What prompting patterns worked best for you?</li>
            <li>What would you do differently next time?</li>
            <li>How will you incorporate AI into your daily work going forward?</li>
          </ul>
        </div>

        {/* Final Outcome */}
        <div className="rounded-lg border-2 border-rose-300 border-dashed bg-rose-50/50 p-4 dark:border-rose-700 dark:bg-rose-950/20">
          <p className="mb-2 font-semibold text-rose-700 dark:text-rose-400">Curriculum Outcome</p>
          <p className="text-foreground/70 text-sm">
            You are now an <strong>AI-augmented developer</strong>: able to use AI tools confidently across the full
            SDLC, understanding both capabilities and limitations, working safely and effectively, and ready to help
            your team adopt AI-assisted practices.
          </p>
        </div>
      </div>
    </section>
  );
}
