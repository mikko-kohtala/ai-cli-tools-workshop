import { Target } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideContainer } from "./slide-container";

const goals = [
  {
    title: "Master AI CLI Tools",
    description: "Use Claude Code and Codex CLI confidently in daily coding",
  },
  {
    title: "Build AI Agents",
    description: "Create autonomous agents using the Claude Agent SDK",
  },
  {
    title: "Full SDLC Coverage",
    description: "Apply AI and agents across requirements, design, implementation, testing, and deployment",
  },
  {
    title: "Work Safely",
    description: "Handle security, governance, and agent boundaries properly",
  },
];

export function GoalsSlide() {
  return (
    <SlideContainer color="emerald" slideNumber={2}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <CardTitle className="text-2xl">Learning Goals</CardTitle>
            <CardDescription>What you'll achieve by the end of this curriculum</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {goals.map((goal) => (
            <div
              className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30"
              key={goal.title}
            >
              <p className="mb-1 font-semibold text-emerald-700 dark:text-emerald-400">{goal.title}</p>
              <p className="text-foreground/70 text-sm">{goal.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </SlideContainer>
  );
}
