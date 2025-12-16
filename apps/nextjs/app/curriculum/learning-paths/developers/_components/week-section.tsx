import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Settings, Target } from "lucide-react";
import type { DeveloperWeek } from "./week-data";

interface WeekSectionProps {
  week: DeveloperWeek;
}

export function WeekSection({ week }: WeekSectionProps) {
  const Icon = week.icon;

  return (
    <section className="mb-16 scroll-mt-16" id={`week-${week.weekNumber}`}>
      <div className="mb-6 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${week.colorClasses.bg}`}>
          <Icon className={`h-5 w-5 ${week.colorClasses.text}`} />
        </div>
        <div>
          <h2 className="font-bold text-4xl">
            Week {week.weekNumber}: {week.title}
          </h2>
          <p className="text-foreground/60">{week.subtitle}</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">{week.overview}</p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Objectives */}
        <Card className={`border-l-4 ${week.colorClasses.border}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-5 w-5" />
              Week Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-foreground/70">
              {week.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Daily Breakdown */}
        <div>
          <h3 className="mb-4 font-semibold text-2xl">Daily Breakdown</h3>
          <div className="space-y-3">
            {week.dailyTopics.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded px-2 py-1 font-mono text-sm ${week.colorClasses.bg} ${week.colorClasses.text}`}
                    >
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
            {week.keySkills.map((skill) => (
              <div className="rounded-lg border p-4" key={skill.name}>
                <div className="flex items-center gap-2">
                  <Settings className={`h-4 w-4 ${week.colorClasses.text}`} />
                  <p className="font-semibold">{skill.name}</p>
                </div>
                <p className="mt-1 text-foreground/70 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className={`rounded-lg border p-4 ${week.colorClasses.bgLight}`}>
          <p className="mb-2 font-semibold text-sm">Primary Tools</p>
          <div className="flex flex-wrap gap-2">
            {week.tools.map((tool) => (
              <span
                className="rounded-full bg-white px-3 py-1 text-sm dark:bg-slate-800"
                key={tool}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Milestone */}
        <div
          className={`rounded-lg border p-4 ${week.colorClasses.bgLight} border-l-4 ${week.colorClasses.border}`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className={`h-5 w-5 ${week.colorClasses.text}`} />
            <p className="font-semibold">Week Milestone</p>
          </div>
          <p className="mt-1 text-foreground/70">{week.milestone}</p>
        </div>
      </div>
    </section>
  );
}
