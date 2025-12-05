import { Bot, Clock } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideContainer } from "./slide-container";

export function StructureSlide() {
  return (
    <SlideContainer color="blue" slideNumber={3}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <CardTitle className="text-2xl">Daily Structure</CardTitle>
            <CardDescription>How each day is organized</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
            <p className="mb-2 font-semibold text-amber-700 dark:text-amber-400">1-2h Learning Block</p>
            <ul className="space-y-1 text-foreground/70 text-sm">
              <li>Short reading/watching</li>
              <li>Hands-on demo</li>
            </ul>
          </div>
          <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950/30">
            <p className="mb-2 font-semibold text-emerald-700 dark:text-emerald-400">Deep Work Block</p>
            <ul className="space-y-1 text-foreground/70 text-sm">
              <li>Apply to project</li>
              <li>Document learnings</li>
            </ul>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
            <p className="mb-2 font-semibold text-blue-700 dark:text-blue-400">15-30min Wrap-up</p>
            <ul className="space-y-1 text-foreground/70 text-sm">
              <li>Log effective prompts</li>
              <li>Summarize progress</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <p className="font-semibold text-amber-700 dark:text-amber-400">Bookend Structure</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            Weeks 1-2 and 7-8 are shared across all paths. Weeks 3-6 diverge into role-specific tracks.
          </p>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
