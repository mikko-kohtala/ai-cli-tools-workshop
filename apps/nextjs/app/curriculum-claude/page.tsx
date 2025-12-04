"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { CurriculumOverview } from "./_components/curriculum-overview";
import { TableOfContents } from "./_components/table-of-contents";
import { Week1Section } from "./_components/week-1-section";
import { Week2Section } from "./_components/week-2-section";
import { Week3Section } from "./_components/week-3-section";
import { Week4Section } from "./_components/week-4-section";
import { Week5Section } from "./_components/week-5-section";
import { Week6Section } from "./_components/week-6-section";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "week-1", title: "Week 1: Foundations" },
  { id: "week-2", title: "Week 2: Planning" },
  { id: "week-3", title: "Week 3: Implementation" },
  { id: "week-4", title: "Week 4: Testing" },
  { id: "week-5", title: "Week 5: DevOps" },
  { id: "week-6", title: "Week 6: Capstone" },
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
      <div className="flex-1 overflow-auto">
        <div className="w-full p-8">
          <CurriculumOverview />
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
