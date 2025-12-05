"use client";

import { useState } from "react";
import type { LearningPath } from "../_data/curriculum-data";
import { GoalsSlide } from "./_components/goals-slide";
import { StructureSlide } from "./_components/structure-slide";
import { TitleSlide } from "./_components/title-slide";
import { WeekSlideDivergent } from "./_components/week-slide-divergent";
import { WeekSlideShared } from "./_components/week-slide-shared";

export default function SlidesPage() {
  const [selectedPath, setSelectedPath] = useState<LearningPath>("developer");

  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto max-w-4xl space-y-8 p-8">
        {/* Slide 1: Title */}
        <TitleSlide />

        {/* Slide 2: Goals */}
        <GoalsSlide />

        {/* Slide 3: Structure */}
        <StructureSlide />

        {/* Slides 4-5: Weeks 1-2 (shared) */}
        <WeekSlideShared slideNumber={4} weekNumber={1} />
        <WeekSlideShared slideNumber={5} weekNumber={2} />

        {/* Slides 6-9: Weeks 3-6 (divergent) */}
        <WeekSlideDivergent onPathChange={setSelectedPath} selectedPath={selectedPath} slideNumber={6} weekNumber={3} />
        <WeekSlideDivergent onPathChange={setSelectedPath} selectedPath={selectedPath} slideNumber={7} weekNumber={4} />
        <WeekSlideDivergent onPathChange={setSelectedPath} selectedPath={selectedPath} slideNumber={8} weekNumber={5} />
        <WeekSlideDivergent onPathChange={setSelectedPath} selectedPath={selectedPath} slideNumber={9} weekNumber={6} />

        {/* Slides 10-11: Weeks 7-8 (shared) */}
        <WeekSlideShared slideNumber={10} weekNumber={7} />
        <WeekSlideShared slideNumber={11} weekNumber={8} />
      </div>
    </div>
  );
}
