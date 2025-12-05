import { Calendar, CheckCircle2, Milestone, Wrench } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { colorClasses, getUnifiedWeek } from "../../_data/curriculum-data";
import { SlideContainer } from "./slide-container";

interface WeekSlideProps {
  weekNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  slideNumber: number;
}

export function WeekSlide({ weekNumber, slideNumber }: WeekSlideProps) {
  const week = getUnifiedWeek(weekNumber);
  if (!week) return null;

  const colors = colorClasses[week.color];

  return (
    <SlideContainer color={week.color} slideNumber={slideNumber}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg}`}>
            <Calendar className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <CardTitle className="text-2xl">
              Week {weekNumber}: {week.title}
            </CardTitle>
            <CardDescription>{week.subtitle}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overview */}
        <p className="text-foreground/80 leading-relaxed">{week.overview}</p>

        {/* Objectives */}
        <div className={`rounded-lg ${colors.light} p-4`}>
          <p className={`mb-3 font-semibold ${colors.text}`}>Learning Objectives</p>
          <ul className="space-y-2">
            {week.objectives.map((objective) => (
              <li className="flex items-start gap-2 text-foreground/80 text-sm" key={objective}>
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${colors.text}`} />
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Daily Topics */}
        <div>
          <p className="mb-3 font-semibold text-foreground/90">Daily Topics</p>
          <div className="grid gap-2">
            {week.dailyTopics.map((topic) => (
              <div
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-3"
                key={topic.day}
              >
                <span className={`shrink-0 font-medium text-sm ${colors.text}`}>{topic.day}</span>
                <div>
                  <p className="font-medium text-sm">{topic.title}</p>
                  <p className="text-foreground/60 text-xs">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Tools & Milestone */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-border/50 border-t pt-4">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-foreground/50" />
            <span className="text-foreground/70 text-sm">{week.tools.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Milestone className={`h-4 w-4 ${colors.text}`} />
            <span className={`text-sm ${colors.text}`}>{week.milestone}</span>
          </div>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
