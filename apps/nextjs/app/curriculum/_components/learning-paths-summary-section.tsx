import { Code2, Palette, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const paths = [
  {
    id: "developer",
    name: "Developer path",
    roleLabel: "Software developers",
    icon: Code2,
    colorClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    description: "AI-assisted coding, agents for code workflows, testing, DevOps, and data tasks.",
  },
  {
    id: "product",
    name: "Product path",
    roleLabel: "Product managers & owners",
    icon: Share2,
    colorClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    description: "Discovery, requirements, roadmaps, and stakeholder communication with AI support.",
  },
  {
    id: "design",
    name: "Design path",
    roleLabel: "Designers & UX",
    icon: Palette,
    colorClass: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
    description: "Flows, copy, prototyping, and research using AI as a creative partner.",
  },
];

export function LearningPathsSummarySection() {
  return (
    <section className="w-full px-8" id="learning-paths">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Role-based Learning Paths</h2>
          <p className="text-muted-foreground text-sm">
            The 8-week curriculum supports three core roles. Week 1 sets shared foundations, Weeks 2–6 go deeper into
            role-specific practice, and Weeks 7–8 bring everyone back together for a shared capstone.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <Card key={path.id} className="h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${path.colorClass}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-sm">{path.name}</CardTitle>
                    <p className="text-[11px] text-muted-foreground">{path.roleLabel}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xs">{path.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
