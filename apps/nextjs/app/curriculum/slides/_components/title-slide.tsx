import { BookOpen } from "lucide-react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { SlideContainer } from "./slide-container";

export function TitleSlide() {
  return (
    <SlideContainer color="indigo" slideNumber={1}>
      <CardHeader className="pt-12 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
            <BookOpen className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="mb-4 font-bold text-4xl text-gray-800 md:text-5xl dark:text-gray-200">
            AI-Assisted Development
          </h1>
          <p className="max-w-xl text-gray-600 text-xl dark:text-gray-400">
            8-week curriculum with specialized learning paths for developers, product managers, and designers
          </p>
        </div>
      </CardHeader>
      <CardContent className="pb-12">
        <div className="flex justify-center gap-8 text-gray-500 text-sm dark:text-gray-400">
          <span>8 weeks</span>
          <span>3 paths</span>
          <span>Claude Code + Agent SDK</span>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
