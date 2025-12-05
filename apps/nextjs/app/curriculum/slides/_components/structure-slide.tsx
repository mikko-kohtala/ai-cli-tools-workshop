import { Clock, Layers } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideContainer } from "./slide-container";

export function StructureSlide() {
  return (
    <SlideContainer color="blue" slideNumber={3}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <CardTitle className="text-2xl">Curriculum Structure</CardTitle>
            <CardDescription>How the 8 weeks are organized</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Phases */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border-emerald-500 border-l-4 bg-emerald-50 p-4 dark:bg-emerald-950/30">
            <p className="font-medium text-emerald-600 text-xs uppercase tracking-wide dark:text-emerald-400">
              Weeks 1-2
            </p>
            <p className="mt-1 font-semibold text-emerald-700 dark:text-emerald-400">Foundations</p>
            <p className="mt-1 text-foreground/70 text-sm">
              AI fundamentals, tool setup, agentic patterns, and planning
            </p>
          </div>
          <div className="rounded-lg border-purple-500 border-l-4 bg-purple-50 p-4 dark:bg-purple-950/30">
            <p className="font-medium text-purple-600 text-xs uppercase tracking-wide dark:text-purple-400">
              Weeks 3-6
            </p>
            <p className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Role-Specific Skills</p>
            <p className="mt-1 text-foreground/70 text-sm">
              Domain fundamentals, core workflows, advanced techniques, and collaboration
            </p>
          </div>
          <div className="rounded-lg border-amber-500 border-l-4 bg-amber-50 p-4 dark:bg-amber-950/30">
            <p className="font-medium text-amber-600 text-xs uppercase tracking-wide dark:text-amber-400">Weeks 7-8</p>
            <p className="mt-1 font-semibold text-amber-700 dark:text-amber-400">Agents & Capstone</p>
            <p className="mt-1 text-foreground/70 text-sm">
              Claude Agent SDK, multi-agent systems, and capstone project
            </p>
          </div>
        </div>

        {/* Daily Structure */}
        <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4 text-foreground/60" />
            <p className="font-semibold text-foreground/90">Daily Structure</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <p className="font-medium text-amber-600 text-sm dark:text-amber-400">1-2h Learning</p>
              <p className="text-foreground/60 text-xs">Concepts, demos, and hands-on examples</p>
            </div>
            <div>
              <p className="font-medium text-emerald-600 text-sm dark:text-emerald-400">Deep Work</p>
              <p className="text-foreground/60 text-xs">Apply to your project with AI assistance</p>
            </div>
            <div>
              <p className="font-medium text-blue-600 text-sm dark:text-blue-400">15-30min Wrap-up</p>
              <p className="text-foreground/60 text-xs">Log prompts and document progress</p>
            </div>
          </div>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
