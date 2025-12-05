import Link from "next/link";
import { Presentation } from "lucide-react";
import { CurriculumOverview } from "./_components/curriculum-overview";
import { PathSelector } from "./_components/path-selector";

export default function CurriculumPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="w-full p-8">
        <CurriculumOverview />
        <div className="mb-12 flex justify-center">
          <Link
            href="/curriculum/slides"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-400 dark:hover:bg-indigo-900/40"
          >
            <Presentation className="h-5 w-5" />
            View Slides
          </Link>
        </div>
        <PathSelector />
      </div>
    </div>
  );
}
