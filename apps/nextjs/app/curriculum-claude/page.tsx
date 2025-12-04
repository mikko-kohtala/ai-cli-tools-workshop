import { CurriculumOverview } from "./_components/curriculum-overview";
import { PathSelector } from "./_components/path-selector";

export default function CurriculumPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="w-full p-8">
        <CurriculumOverview />
        <PathSelector />
      </div>
    </div>
  );
}
