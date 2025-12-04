import { Lightbulb, Settings, Shield, Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyTopics = [
  {
    day: "Day 1",
    title: "What are LLMs?",
    description: "Understanding large language models, capabilities, and limitations for coding",
    tasks: ["Read intro materials on LLMs", "Try basic code completion in IDE"],
  },
  {
    day: "Day 2",
    title: "Tool Setup",
    description: "Install and configure Claude Code (primary) and Codex CLI",
    tasks: ["Install Claude Code", "Configure API keys", "Run first prompts"],
  },
  {
    day: "Day 3",
    title: "Project Configuration",
    description: "CLAUDE.md, .claude directory, and project-specific instructions",
    tasks: ["Create CLAUDE.md for a project", "Configure coding standards"],
  },
  {
    day: "Day 4",
    title: "Prompting Basics",
    description: "Clear instructions, constraints, examples, and context",
    tasks: ["Practice prompt patterns", "Generate simple functions"],
  },
  {
    day: "Day 5",
    title: "Safety & Review",
    description: "Approval modes, reviewing AI output, no secrets in prompts",
    tasks: ["Configure approval modes", "Practice reviewing AI code"],
  },
];

const keySkills = [
  { name: "Context Management", description: "Understanding tokens, context windows, /context and /clear commands" },
  { name: "Trust Calibration", description: "When to trust AI output, when to verify, how to review effectively" },
  { name: "Tool Commands", description: "Basic CLI commands, file operations, search patterns" },
  { name: "Project Setup", description: "CLAUDE.md configuration, coding standards, memory" },
];

export function Week1Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week-1">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
          <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 1: Foundations & Mindset</h2>
          <p className="text-foreground/60">Building the right mental model for AI-assisted development</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week establishes the foundation: understanding what LLMs can and cannot do, setting up your tools
            correctly, and developing the right mindset for AI as "augmented expert" rather than replacement.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Terminal className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              <li>Understand what LLMs are and are not good at for coding tasks</li>
              <li>Install and configure Claude Code and Codex CLI</li>
              <li>Learn basic prompting and context management</li>
              <li>Set up project configuration (CLAUDE.md)</li>
              <li>Understand safety basics: approval modes, no secrets in prompts</li>
            </ul>
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
                    <span className="rounded bg-emerald-100 px-2 py-1 font-mono text-emerald-700 text-sm dark:bg-emerald-900/30 dark:text-emerald-400">
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

        {/* Key Skills */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Key Skills to Develop</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {keySkills.map((skill) => (
              <div className="rounded-lg border p-4" key={skill.name}>
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <p className="font-semibold">{skill.name}</p>
                </div>
                <p className="mt-1 text-foreground/70 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="mb-2 font-semibold text-sm">Key Mindset Shift</p>
          <p className="text-foreground/70 text-sm">
            AI is not a replacement for understanding code—it's a force multiplier for experts. The goal is
            <strong> AI-augmented expertise</strong>, not AI-dependent development. Always maintain comprehension of
            what the AI generates.
          </p>
        </div>

        {/* Safety Box */}
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/30">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            <p className="font-semibold text-rose-700 dark:text-rose-400">Safety First</p>
          </div>
          <ul className="mt-2 list-inside list-disc space-y-1 text-foreground/70 text-sm">
            <li>Never include secrets, API keys, or credentials in prompts</li>
            <li>Review all AI-generated code before committing</li>
            <li>Use approval modes to control what AI can do automatically</li>
            <li>Keep context focused—larger isn't always better</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
