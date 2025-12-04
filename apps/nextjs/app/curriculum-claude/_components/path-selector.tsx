import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { colorClasses, type LearningPath, learningPaths } from "../_data/curriculum-data";

export function PathSelector() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-center font-bold text-2xl">Choose Your Learning Path</h2>
      <p className="mb-8 text-center text-foreground/60">
        Select your role to see a customized curriculum with path-specific content for weeks 3-6
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {(Object.keys(learningPaths) as LearningPath[]).map((pathId) => {
          const path = learningPaths[pathId];
          const colors = colorClasses[path.color];
          const Icon = path.icon;

          return (
            <Link href={`/curriculum-claude/${pathId}`} key={pathId}>
              <Card
                className={`group h-full cursor-pointer border-2 transition-all hover:shadow-lg ${colors.border} hover:scale-[1.02]`}
              >
                <CardHeader>
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg}`}>
                    <Icon className={`h-7 w-7 ${colors.text}`} />
                  </div>
                  <CardTitle className="flex items-center justify-between text-xl">
                    {path.name} Path
                    <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${colors.text}`} />
                  </CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1 font-semibold text-foreground/50 text-xs uppercase">Primary Tools</p>
                      <div className="flex flex-wrap gap-1">
                        {path.tools.slice(0, 3).map((tool) => (
                          <span
                            className="rounded bg-slate-100 px-2 py-0.5 text-slate-700 text-xs dark:bg-slate-800 dark:text-slate-300"
                            key={tool}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`rounded-lg p-3 ${colors.light}`}>
                      <p className={`font-medium text-sm ${colors.text}`}>{path.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
