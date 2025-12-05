"use client";

import { LearningPathsHero } from "./_components/learning-paths-hero";
import { PathDetailsSection } from "./_components/path-details-section";
import { PathFlowDiagram } from "./_components/path-flow-diagram";
import { SharedWeeksSection } from "./_components/shared-weeks-section";

export default function LearningPathsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <LearningPathsHero />
      <PathFlowDiagram />
      <SharedWeeksSection />
      <PathDetailsSection />
    </div>
  );
}
