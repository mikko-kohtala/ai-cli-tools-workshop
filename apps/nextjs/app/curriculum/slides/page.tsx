import { GoalsSlide } from "./_components/goals-slide";
import { StructureSlide } from "./_components/structure-slide";
import { TitleSlide } from "./_components/title-slide";
import { WeekSlide } from "./_components/week-slide";

export default function SlidesPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto max-w-4xl space-y-8 p-8">
        {/* Slide 1: Title */}
        <TitleSlide />

        {/* Slide 2: Goals */}
        <GoalsSlide />

        {/* Slide 3: Structure */}
        <StructureSlide />

        {/* Slides 4-11: Weekly content */}
        <WeekSlide slideNumber={4} weekNumber={1} />
        <WeekSlide slideNumber={5} weekNumber={2} />
        <WeekSlide slideNumber={6} weekNumber={3} />
        <WeekSlide slideNumber={7} weekNumber={4} />
        <WeekSlide slideNumber={8} weekNumber={5} />
        <WeekSlide slideNumber={9} weekNumber={6} />
        <WeekSlide slideNumber={10} weekNumber={7} />
        <WeekSlide slideNumber={11} weekNumber={8} />
      </div>
    </div>
  );
}
