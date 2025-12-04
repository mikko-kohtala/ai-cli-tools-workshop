"use client";

import { Separator } from "@/components/ui/separator";
import { PathsIntro } from "./_components/01-paths-intro";
import { PathsVisualization } from "./_components/02-paths-visualization";
import { PathsDetails } from "./_components/03-paths-details";
import { TableOfContents } from "../../presentation/_components/12-table-of-contents";
import { useEffect, useState } from "react";

const sections = [
  { id: "intro", title: "Learning Paths Overview" },
  { id: "viz", title: "6-Week Pivot Visualization" },
  { id: "details", title: "Path Details by Role" },
];

const SCROLL_OFFSET = 100;

export default function LearningPathsPage() {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el as HTMLElement;
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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-1">
      <div className="flex-1 overflow-auto">
        <div className="w-full p-8">
          <PathsIntro />
          <Separator className="my-16" />
          <PathsVisualization />
          <Separator className="my-16" />
          <PathsDetails />
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
