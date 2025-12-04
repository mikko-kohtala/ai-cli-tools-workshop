"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { IntroSection } from "./_components/01-intro-section";
import { OverviewSection } from "./_components/02-overview-section";
import { DailyStructureSection } from "./_components/03-daily-structure-section";
import { Week1Section } from "./_components/04-week1-section";
import { Week2Section } from "./_components/05-week2-section";
import { Week3Section } from "./_components/06-week3-section";
import { Week4Section } from "./_components/07-week4-section";
import { Week5Section } from "./_components/08-week5-section";
import { Week6Section } from "./_components/09-week6-section";
import { TableOfContents } from "./_components/10-table-of-contents";
import { Week7Section } from "./_components/10-week7-section";
import { Week8Section } from "./_components/11-week8-section";
import { LearningPathsSection } from "./_components/12-learning-paths-section";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "overview", title: "Curriculum Overview" },
  { id: "daily-structure", title: "Daily Structure" },
  { id: "learning-paths", title: "Learning Paths" },
  { id: "week1", title: "Week 1: Foundations & Tools" },
  { id: "week2", title: "Week 2: Requirements & Architecture" },
  { id: "week3", title: "Week 3: Implementation Workflows" },
  { id: "week4", title: "Week 4: Testing & Quality" },
  { id: "week5", title: "Week 5: DevOps & Deployment" },
  { id: "week6", title: "Week 6: Advanced Topics" },
  { id: "week7", title: "Week 7: Company Processes" },
  { id: "week8", title: "Week 8: Capstone" },
];

const SCROLL_OFFSET = 100;

export default function CurriculumPage() {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen] = useState(true);

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
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="w-full p-8">
          <IntroSection />
          <Separator className="my-16" />
          <OverviewSection />
          <Separator className="my-16" />
          <DailyStructureSection />
          <Separator className="my-16" />
          <LearningPathsSection />
          <Separator className="my-16" />
          <Week1Section />
          <Separator className="my-16" />
          <Week2Section />
          <Separator className="my-16" />
          <Week3Section />
          <Separator className="my-16" />
          <Week4Section />
          <Separator className="my-16" />
          <Week5Section />
          <Separator className="my-16" />
          <Week6Section />
          <Separator className="my-16" />
          <Week7Section />
          <Separator className="my-16" />
          <Week8Section />
        </div>
      </div>

      {/* Table of Contents Sidebar */}
      <TableOfContents
        activeSection={activeSection}
        isOpen={tocOpen}
        onSectionClick={scrollToSection}
        sections={sections}
      />
    </div>
  );
}
