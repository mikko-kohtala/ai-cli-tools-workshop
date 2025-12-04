"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "../presentation/_components/12-table-of-contents";
import { OverviewSection } from "./_components/01-overview-section";
import { DailyStructureSection } from "./_components/02-daily-structure-section";
import { WeekSections } from "./_components/03-weeks";

const sections = [
  { id: "overview", title: "Curriculum Overview" },
  { id: "daily-structure", title: "Daily Structure" },
  { id: "weeks", title: "Weeks 1–6" },
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
          const { offsetTop, offsetHeight } = element as HTMLElement;
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
          <OverviewSection />
          <Separator className="my-16" />
          <DailyStructureSection />
          <Separator className="my-16" />
          <WeekSections />
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
