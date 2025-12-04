"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { CurriculumOverview } from "./_components/curriculum-overview";
import { PathTabs } from "./_components/path-tabs";
import { TableOfContents } from "./_components/table-of-contents";
import { Week1Section } from "./_components/week-1-section";
import { Week2Section } from "./_components/week-2-section";
import { Week7Section } from "./_components/week-7-section";
import { Week8Section } from "./_components/week-8-section";
import { WeekSectionDivergent } from "./_components/week-section-divergent";
import type { LearningPath } from "./_data/curriculum-data";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "week-1", title: "Week 1: Foundations" },
  { id: "week-2", title: "Week 2: AI Basics" },
  { id: "week-3", title: "Week 3: Domain Fundamentals" },
  { id: "week-4", title: "Week 4: Core Workflows" },
  { id: "week-5", title: "Week 5: Advanced" },
  { id: "week-6", title: "Week 6: Integration" },
  { id: "week-7", title: "Week 7: Agents" },
  { id: "week-8", title: "Week 8: Capstone" },
];

const SCROLL_OFFSET = 100;

export default function CurriculumPage() {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen] = useState(true);
  const [selectedPath, setSelectedPath] = useState<LearningPath>("developer");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-1">
      <div className="flex-1 overflow-auto">
        <div className="w-full p-8">
          <CurriculumOverview />
          <PathTabs onPathChange={setSelectedPath} selectedPath={selectedPath} />
          <Separator className="my-16" />
          <Week1Section />
          <Separator className="my-16" />
          <Week2Section />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={selectedPath} weekNumber={3} />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={selectedPath} weekNumber={4} />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={selectedPath} weekNumber={5} />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={selectedPath} weekNumber={6} />
          <Separator className="my-16" />
          <Week7Section />
          <Separator className="my-16" />
          <Week8Section />
        </div>
      </div>

      <TableOfContents
        activeSection={activeSection}
        isOpen={tocOpen}
        onSectionClick={scrollToSection}
        sections={sections}
      />
    </div>
  );
}
