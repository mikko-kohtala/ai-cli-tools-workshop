import { Code2 } from "lucide-react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { SlideContainer } from "./slide-container";

export function TitleSlide() {
  return (
    <SlideContainer color="emerald" slideNumber={1}>
      <CardHeader className="pt-12 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">
            <Code2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="mb-4 font-bold text-4xl text-gray-800 md:text-5xl dark:text-gray-200">
            AI-Assisted Development
          </h1>
          <p className="mb-2 font-medium text-emerald-600 text-lg dark:text-emerald-400">Developer Path</p>
          <p className="max-w-xl text-gray-600 text-lg dark:text-gray-400">
            8-week intensive curriculum for shipping production code faster with AI-powered development workflows
          </p>
        </div>
      </CardHeader>
      <CardContent className="pb-12">
        <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm dark:text-gray-400">
          <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">8 weeks</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Claude Code</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Claude Agent SDK</span>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
