"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AgendaSection } from "./_components/AgendaSection";
import { ArchitecturePatternsSection } from "./_components/ArchitecturePatternsSection";
import { ChoosingToolSection } from "./_components/ChoosingToolSection";
import { ConceptsSection } from "./_components/ConceptsSection";
import { DemoSection } from "./_components/DemoSection";
import { EffectiveUsageSection } from "./_components/EffectiveUsageSection";
import { IntroSection } from "./_components/IntroSection";
import { LandscapeSection } from "./_components/LandscapeSection";
import { QASection } from "./_components/QASection";
import { ReasoningSection } from "./_components/ReasoningSection";
import { SecuritySection } from "./_components/SecuritySection";
import { TableOfContents } from "./_components/TableOfContents";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "agenda", title: "Agenda" },
  { id: "landscape", title: "AI CLI Tools Landscape" },
  { id: "concepts", title: "Core Concepts" },
  { id: "architecture", title: "Architecture & Design Patterns" },
  { id: "reasoning", title: "Models & Reasoning" },
  { id: "security", title: "Security & Control" },
  { id: "effective-usage", title: "Effective Usage" },
  { id: "demo", title: "Demo Flow" },
  { id: "choosing", title: "Choosing Your Tool" },
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
          <LandscapeSection />
          <Separator className="my-16" />
          <ConceptsSection />
          <Separator className="my-16" />
          <ArchitecturePatternsSection />
          <Separator className="my-16" />
          <ReasoningSection />
          <Separator className="my-16" />
          <SecuritySection />
          <Separator className="my-16" />
          <EffectiveUsageSection />
          <Separator className="my-16" />
          <DemoSection />
          <Separator className="my-16" />
          <ChoosingToolSection />
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
