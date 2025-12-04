import { AgentPathSection } from "./_components/agent-path-section";
import { DailyStructureSection } from "./_components/daily-structure-section";
import { CurriculumHeroSection } from "./_components/hero-section";
import { ToolsAndCompanyImpactSection } from "./_components/tools-and-company-impact-section";
import { WeeklyOutlineSection } from "./_components/weekly-outline-section";

export default function CurriculumPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-12 py-4">
        <CurriculumHeroSection />
        <WeeklyOutlineSection />
        <AgentPathSection />
        <DailyStructureSection />
        <ToolsAndCompanyImpactSection />
      </div>
    </div>
  );
}
