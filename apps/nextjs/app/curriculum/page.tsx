import { Presentation } from "lucide-react";
import Link from "next/link";
import { CurriculumOverview } from "./_components/curriculum-overview";
import { PathSelector } from "./_components/path-selector";

export default function CurriculumPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="w-full p-8">
        <CurriculumOverview />
        <div className="mb-12 flex justify-center">
          <Link
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 dark:hover:bg-emerald-900/40"
            href="/curriculum/slides/developer"
          >
            <Presentation className="h-5 w-5" />
            Developer Path Slides
          </Link>
        </div>
        <PathSelector />
      </div>
    </div>
  );
}
