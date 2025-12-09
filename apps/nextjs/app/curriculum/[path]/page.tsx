"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "../_components/table-of-contents";
import { Week1Section } from "../_components/week-1-section";
import { Week2Section } from "../_components/week-2-section";
import { Week7Section } from "../_components/week-7-section";
import { Week8Section } from "../_components/week-8-section";
import { WeekSectionDivergent } from "../_components/week-section-divergent";
import { colorClasses, type LearningPath, learningPaths } from "../_data/curriculum-data";

const sections = [
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

const validPaths: LearningPath[] = ["developer", "product", "design", "qa"];

export default function PathCurriculumPage({ params }: { params: Promise<{ path: string }> }) {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen] = useState(true);
  const [pathId, setPathId] = useState<LearningPath | null>(null);

  useEffect(() => {
    params.then((p) => {
      if (validPaths.includes(p.path as LearningPath)) {
        setPathId(p.path as LearningPath);
      }
    });
  }, [params]);

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

  if (pathId === null) {
    return null; // Loading state
  }

  const pathMeta = learningPaths[pathId];
  if (!pathMeta) {
    notFound();
  }

  const colors = colorClasses[pathMeta.color];
  const Icon = pathMeta.icon;

  return (
    <div className="flex flex-1">
      <div className="flex-1 overflow-auto">
        <div className="w-full p-8">
          {/* Path Header */}
          <div className="mb-8">
            <Link
              className="mb-4 inline-flex items-center gap-2 text-foreground/60 text-sm transition-colors hover:text-foreground"
              href="/curriculum"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to curriculum overview
            </Link>

            <div className="flex items-center gap-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colors.bg}`}>
                <Icon className={`h-8 w-8 ${colors.text}`} />
              </div>
              <div>
                <h1 className="font-bold text-4xl">{pathMeta.name} Path</h1>
                <p className="text-foreground/60">{pathMeta.description}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {pathMeta.tools.map((tool) => (
                <span
                  className="rounded bg-slate-100 px-3 py-1 text-slate-700 text-sm dark:bg-slate-800 dark:text-slate-300"
                  key={tool}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Weeks */}
          <Week1Section />
          <Separator className="my-16" />
          <Week2Section />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={pathId} weekNumber={3} />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={pathId} weekNumber={4} />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={pathId} weekNumber={5} />
          <Separator className="my-16" />
          <WeekSectionDivergent selectedPath={pathId} weekNumber={6} />
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
