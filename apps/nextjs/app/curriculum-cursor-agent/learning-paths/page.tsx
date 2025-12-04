"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { IntroSection } from "./_components/01-intro-section";
import { PathVisualization } from "./_components/02-path-visualization";
import { CommonFoundationSection } from "./_components/03-common-foundation-section";
import { PathDetailsSection } from "./_components/04-path-details-section";
import { ConvergenceSection } from "./_components/05-convergence-section";
import { CapstoneSection } from "./_components/06-capstone-section";
import { TableOfContents } from "./_components/07-table-of-contents";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "visualization", title: "Learning Paths Overview" },
  { id: "foundation", title: "Week 1: Common Foundation" },
  { id: "paths", title: "Weeks 2-4: Specialized Paths" },
  { id: "convergence", title: "Week 5: Path Convergence" },
  { id: "capstone", title: "Week 6: Capstone" },
];

const SCROLL_OFFSET = 100;

export default function LearningPathsPage() {
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
          <PathVisualization />
          <Separator className="my-16" />
          <CommonFoundationSection />
          <Separator className="my-16" />
          <PathDetailsSection />
          <Separator className="my-16" />
          <ConvergenceSection />
          <Separator className="my-16" />
          <CapstoneSection />
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
