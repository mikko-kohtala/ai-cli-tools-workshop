import { Separator } from "@/components/ui/separator";
import { DeveloperHero } from "./_components/developer-hero";
import { ToolsShowcase } from "./_components/tools-showcase";
import { developerWeeks } from "./_components/week-data";
import { WeekOverview } from "./_components/week-overview";
import { WeekSection } from "./_components/week-section";

export const metadata = {
  title: "Developer AI Tools Mastery | 8-Week Curriculum",
  description:
    "Intensive 8-week curriculum for experienced developers. Master AI-assisted development, build custom tools with MCP, and create production-ready agents.",
};

export default function DeveloperCurriculumPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <DeveloperHero />
      <WeekOverview />
      <ToolsShowcase />

      <Separator className="my-12" />

      <div className="space-y-8">
        {developerWeeks.map((week) => (
          <WeekSection key={week.weekNumber} week={week} />
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="mt-16 rounded-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 text-center dark:border-emerald-800 dark:from-emerald-950/30 dark:to-cyan-950/30">
        <h2 className="mb-4 font-bold text-2xl">Ready to Master AI-Assisted Development?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-foreground/70">
          This curriculum takes you from AI tools setup to building production agents. By week 8,
          you'll ship code faster, debug smarter, and automate repetitive workflows with custom
          agents.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-700 text-sm dark:bg-emerald-900/30 dark:text-emerald-400">
            8 Weeks
          </span>
          <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700 text-sm dark:bg-blue-900/30 dark:text-blue-400">
            40 Daily Topics
          </span>
          <span className="rounded-full bg-amber-100 px-4 py-2 font-medium text-amber-700 text-sm dark:bg-amber-900/30 dark:text-amber-400">
            Build Real Agents
          </span>
        </div>
      </div>
    </div>
  );
}
