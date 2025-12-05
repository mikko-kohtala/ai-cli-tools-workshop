import { Calendar, CheckCircle2 } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { colorClasses, getSharedWeek } from "../../_data/curriculum-data";
import { SlideContainer } from "./slide-container";

interface WeekSlideSharedProps {
  weekNumber: 1 | 2 | 7 | 8;
  slideNumber: number;
}

export function WeekSlideShared({ weekNumber, slideNumber }: WeekSlideSharedProps) {
  const week = getSharedWeek(weekNumber);
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
      <CardContent>
        <div className={`rounded-lg ${colors.light} p-4`}>
          <p className={`mb-3 font-semibold ${colors.text}`}>Objectives</p>
          <ul className="space-y-2">
            {week.objectives.map((objective) => (
              <li className="flex items-start gap-2 text-foreground/80 text-sm" key={objective}>
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${colors.text}`} />
                {objective}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <span className={`inline-block rounded-full px-3 py-1 text-xs ${colors.badge}`}>Shared across all paths</span>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
