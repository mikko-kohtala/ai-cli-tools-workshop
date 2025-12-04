"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type LearningPath, learningPaths } from "../_data/curriculum-data";

interface PathTabsProps {
  selectedPath: LearningPath;
  onPathChange: (path: LearningPath) => void;
}

export function PathTabs({ selectedPath, onPathChange }: PathTabsProps) {
  return (
    <div className="sticky top-0 z-10 mb-8 border-b bg-background/95 py-4 backdrop-blur">
      <div className="flex items-center justify-center gap-4">
        <span className="hidden text-foreground/60 text-sm sm:block">Learning Path:</span>
        <Tabs onValueChange={(v) => onPathChange(v as LearningPath)} value={selectedPath}>
          <TabsList className="grid w-full max-w-md grid-cols-3">
            {(Object.keys(learningPaths) as LearningPath[]).map((pathId) => {
              const path = learningPaths[pathId];
              const Icon = path.icon;
              return (
                <TabsTrigger className="gap-2" key={pathId} value={pathId}>
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{path.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
