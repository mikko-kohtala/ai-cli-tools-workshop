"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type LearningPath, learningPaths } from "../../_data/curriculum-data";

interface PathTabsProps {
  selectedPath: LearningPath;
  onPathChange: (path: LearningPath) => void;
}

export function PathTabs({ selectedPath, onPathChange }: PathTabsProps) {
  return (
    <Tabs onValueChange={(v) => onPathChange(v as LearningPath)} value={selectedPath}>
      <TabsList>
        {(Object.keys(learningPaths) as LearningPath[]).map((pathId) => {
          const path = learningPaths[pathId];
          const Icon = path.icon;
          return (
            <TabsTrigger className="gap-2" key={pathId} value={pathId}>
              <Icon className="h-4 w-4" />
              {path.name}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
