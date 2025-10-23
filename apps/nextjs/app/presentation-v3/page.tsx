"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AgendaSection } from "./_components/AgendaSection";
import { ApprovalsSection } from "./_components/ApprovalsSection";
import { ArchitectureSection } from "./_components/ArchitectureSection";
import { CommunicationSection } from "./_components/CommunicationSection";
import { ConceptsSection } from "./_components/ConceptsSection";
import { DemoSection } from "./_components/DemoSection";
import { GlanceSection } from "./_components/GlanceSection";
import { IntroSection } from "./_components/IntroSection";
import { NextStepsSection } from "./_components/NextStepsSection";
import { QASection } from "./_components/QASection";
import { SandboxingSection } from "./_components/SandboxingSection";
import { SelectionChecklistSection } from "./_components/SelectionChecklistSection";
import { SessionsSection } from "./_components/SessionsSection";
import { TableOfContents } from "./_components/TableOfContents";
import { TipsSection } from "./_components/TipsSection";
import { ToolComparisonSection } from "./_components/ToolComparisonSection";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "agenda", title: "Agenda" },
  { id: "glance", title: "AI CLI at a Glance" },
  { id: "concepts", title: "Common Concepts" },
  { id: "comparison", title: "Tool Comparison" },
  { id: "selection", title: "Selection Checklist" },
  { id: "architecture", title: "Common Architecture" },
  { id: "sandboxing", title: "Sandboxing & Permissions" },
  { id: "approvals", title: "Approvals & Safety" },
  { id: "sessions", title: "Effective Sessions" },
  { id: "communication", title: "Communication Patterns" },
  { id: "tips", title: "Pro Tips" },
  { id: "demo", title: "Demo Flow" },
  { id: "next-steps", title: "Next Steps" },
  { id: "qa", title: "Q & A" },
];

const SCROLL_OFFSET = 100;

export default function PresentationPage() {
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
        <div className="mx-auto max-w-6xl p-8">
          <IntroSection />
          <Separator className="my-16" />
          <AgendaSection />
          <Separator className="my-16" />
          <GlanceSection />
          <Separator className="my-16" />
          <ConceptsSection />
          <Separator className="my-16" />
          <ToolComparisonSection />
          <Separator className="my-16" />
          <SelectionChecklistSection />
          <Separator className="my-16" />
          <ArchitectureSection />
          <Separator className="my-16" />
          <SandboxingSection />
          <Separator className="my-16" />
          <ApprovalsSection />
          <Separator className="my-16" />
          <SessionsSection />
          <Separator className="my-16" />
          <CommunicationSection />
          <Separator className="my-16" />
          <TipsSection />
          <Separator className="my-16" />
          <DemoSection />
          <Separator className="my-16" />
          <NextStepsSection />
          <Separator className="my-16" />
          <QASection />
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
