"use client";

import { Calendar, CheckCircle2 } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { colorClasses, getDivergentWeek, type LearningPath, learningPaths } from "../../_data/curriculum-data";
import { PathTabs } from "./path-tabs";
import { SlideContainer } from "./slide-container";

interface WeekSlideDivergentProps {
  weekNumber: 3 | 4 | 5 | 6;
  slideNumber: number;
  selectedPath: LearningPath;
  onPathChange: (path: LearningPath) => void;
}

export function WeekSlideDivergent({ weekNumber, slideNumber, selectedPath, onPathChange }: WeekSlideDivergentProps) {
  const week = getDivergentWeek(weekNumber);
  if (!week) return null;

  const pathContent = week.paths[selectedPath];
  const colors = colorClasses[week.color];
  const pathMeta = learningPaths[selectedPath];

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
      <CardContent className="space-y-4">
        <PathTabs onPathChange={onPathChange} selectedPath={selectedPath} />

        <div className={`rounded-lg ${colors.light} p-4`}>
          <p className={`mb-3 font-semibold ${colors.text}`}>{pathMeta.name} Path Objectives</p>
          <ul className="space-y-2">
            {pathContent.objectives.map((objective) => (
              <li className="flex items-start gap-2 text-foreground/80 text-sm" key={objective}>
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${colors.text}`} />
                {objective}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <span className={`inline-block rounded-full px-3 py-1 text-xs ${colors.badge}`}>Path-specific</span>
          <span className="text-foreground/60 text-xs">Tools: {pathContent.tools.join(", ")}</span>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
