import { Briefcase, Code2, Palette, Sparkles } from "lucide-react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { SlideContainer } from "./slide-container";

export function TitleSlide() {
  return (
    <SlideContainer color="indigo" slideNumber={1}>
      <CardHeader className="pt-12 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
            <Sparkles className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="mb-4 font-bold text-4xl text-gray-800 md:text-5xl dark:text-gray-200">
            AI-Assisted Work
          </h1>
          <p className="max-w-xl text-gray-600 text-lg dark:text-gray-400">
            8-week curriculum for accelerating your work with AI-powered workflows
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pb-12">
        {/* Three paths */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-800 dark:bg-emerald-950/30">
            <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="font-medium text-emerald-700 dark:text-emerald-400">Developer</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950/30">
            <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="font-medium text-blue-700 dark:text-blue-400">Product</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-pink-200 bg-pink-50 px-4 py-2 dark:border-pink-800 dark:bg-pink-950/30">
            <Palette className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <span className="font-medium text-pink-700 dark:text-pink-400">Design</span>
          </div>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm dark:text-gray-400">
          <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">8 weeks</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Claude</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Agent SDK</span>
        </div>
      </CardContent>
    </SlideContainer>
  );
}
