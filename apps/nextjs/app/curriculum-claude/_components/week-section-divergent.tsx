import { Layers, Target, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { colorClasses, getDivergentWeek, type LearningPath, learningPaths } from "../_data/curriculum-data";

interface WeekSectionDivergentProps {
  weekNumber: number;
  selectedPath: LearningPath;
}

export function WeekSectionDivergent({ weekNumber, selectedPath }: WeekSectionDivergentProps) {
  const weekData = getDivergentWeek(weekNumber);
  if (!weekData) {
    return null;
  }

  const pathContent = weekData.paths[selectedPath];
  const pathMeta = learningPaths[selectedPath];
  const colors = colorClasses[weekData.color];
  const pathColors = colorClasses[pathMeta.color];
  const Icon = pathMeta.icon;

  return (
    <section className="mb-16 scroll-mt-16" id={`week-${weekNumber}`}>
      <div className="mb-6 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg}`}>
          <span className={`font-bold ${colors.text}`}>{weekNumber}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-4xl">
              Week {weekNumber}: {weekData.title}
            </h2>
            <span className={`rounded-full px-3 py-1 font-medium text-xs ${pathColors.badge}`}>
              <Icon className="mr-1 inline h-3 w-3" />
              {pathMeta.name}
            </span>
          </div>
          <p className="text-foreground/60">{weekData.subtitle}</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            This week focuses on {pathMeta.name.toLowerCase()}-specific skills. You'll learn techniques tailored to your
            role while building practical experience.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className={`border-l-4 ${colors.border}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Layers className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              {pathContent.objectives.map((obj) => (
                <li key={obj}>{obj}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Daily Breakdown */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Daily Breakdown</h3>
          <div className="space-y-3">
            {pathContent.dailyTopics.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className={`rounded px-2 py-1 font-mono text-sm ${colors.badge}`}>{day.day}</span>
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

        {/* Tools */}
        <Card className={`border-l-4 ${pathColors.border}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Wrench className="h-5 w-5" />
              Tools for This Week
            </CardTitle>
            <CardDescription>Primary tools for {pathMeta.name.toLowerCase()}s this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {pathContent.tools.map((tool) => (
                <span
                  className="rounded bg-slate-100 px-3 py-1 text-slate-700 text-sm dark:bg-slate-800 dark:text-slate-300"
                  key={tool}
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Path-specific tip */}
        <div
          className={`rounded-lg border p-4 ${pathColors.light} border-${pathMeta.color}-200 dark:border-${pathMeta.color}-800`}
        >
          <div className="flex items-center gap-2">
            <Target className={`h-5 w-5 ${pathColors.text}`} />
            <p className={`font-semibold ${pathColors.text}`}>{pathMeta.name} Focus</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">{pathMeta.description}</p>
        </div>

        {/* Milestone */}
        <div
          className={`rounded-lg border-2 border-dashed p-4 ${colors.light}`}
          style={{ borderColor: `var(--${weekData.color}-300)` }}
        >
          <p className={`mb-2 font-semibold ${colors.text}`}>Week {weekNumber} Milestone</p>
          <p className="text-foreground/70 text-sm">{pathContent.milestone}</p>
        </div>
      </div>
    </section>
  );
}
