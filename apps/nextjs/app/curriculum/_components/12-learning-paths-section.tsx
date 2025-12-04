"use client";

import { Code, Palette, Route, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const paths = [
  {
    id: "developer",
    name: "Developer Path",
    subtitle: "Software developers",
    icon: Code,
    color: "green",
    description: "For software engineers building applications, APIs, and systems",
    weeks: [
      {
        week: 2,
        title: "Requirements & Architecture",
        focus: "Using AI for technical planning, architecture design, and technology selection",
      },
      {
        week: 3,
        title: "Implementation Workflows",
        focus: "AI-assisted coding, refactoring, and building agentic development workflows",
      },
      {
        week: 4,
        title: "Testing & Quality",
        focus: "AI for test generation, debugging, code review, and quality assurance",
      },
    ],
  },
  {
    id: "product",
    name: "Product Path",
    subtitle: "Product managers & owners",
    icon: Users,
    color: "blue",
    description: "For product managers defining features, roadmaps, and strategy",
    weeks: [
      {
        week: 2,
        title: "Product Strategy & Planning",
        focus: "AI for market research, competitive analysis, and roadmap planning",
      },
      {
        week: 3,
        title: "Feature Definition & Documentation",
        focus: "Using AI to write PRDs, user stories, acceptance criteria, and product documentation",
      },
      {
        week: 4,
        title: "Analytics & Decision Making",
        focus: "AI for data analysis, user feedback synthesis, and data-driven decision support",
      },
    ],
  },
  {
    id: "design",
    name: "Design Path",
    subtitle: "Designers & UX",
    icon: Palette,
    color: "purple",
    description: "For UX/UI designers creating user experiences and interfaces",
    weeks: [
      {
        week: 2,
        title: "Design Research & Ideation",
        focus: "Using AI for user research synthesis, design ideation, and concept generation",
      },
      {
        week: 3,
        title: "Design Execution",
        focus: "AI tools for UI generation, design system creation, and design workflow automation",
      },
      {
        week: 4,
        title: "Prototyping & Testing",
        focus: "AI-assisted prototyping, user testing analysis, and design iteration workflows",
      },
    ],
  },
];

export function LearningPathsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="learning-paths">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Route className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Learning Paths</h2>
          <p className="font-medium text-foreground/70 text-sm">Role-specific specialization paths</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-lg leading-relaxed">
              The curriculum follows a branching structure designed to accommodate different roles while building shared
              understanding:
            </p>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>
                  <strong>Week 1:</strong> Common foundation—everyone learns the same core concepts about AI tools,
                  prompting, and safety
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>
                  <strong>Weeks 2-4:</strong> Specialized paths—each role follows a path tailored to their specific
                  needs and use cases
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>
                  <strong>Weeks 5-8:</strong> Convergence and capstone—all paths come together for advanced topics,
                  cross-functional collaboration, and final projects
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Three Learning Paths</h3>
        <div className="space-y-8">
          {paths.map((path) => {
            const Icon = path.icon;
            const colorClasses = {
              green: {
                bg: "bg-green-50 dark:bg-green-950/30",
                border: "border-green-200 dark:border-green-800",
                text: "text-green-600 dark:text-green-400",
                dot: "bg-green-600 dark:bg-green-400",
                iconBg: "bg-green-100 dark:bg-green-900/30",
              },
              purple: {
                bg: "bg-purple-50 dark:bg-purple-950/30",
                border: "border-purple-200 dark:border-purple-800",
                text: "text-purple-600 dark:text-purple-400",
                dot: "bg-purple-600 dark:bg-purple-400",
                iconBg: "bg-purple-100 dark:bg-purple-900/30",
              },
              blue: {
                bg: "bg-blue-50 dark:bg-blue-950/30",
                border: "border-blue-200 dark:border-blue-800",
                text: "text-blue-600 dark:text-blue-400",
                dot: "bg-blue-600 dark:bg-blue-400",
                iconBg: "bg-blue-100 dark:bg-blue-900/30",
              },
            };
            const colors = colorClasses[path.color as keyof typeof colorClasses];
            return (
              <Card className={`${colors.border} border-2`} key={path.id}>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.iconBg}`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{path.name}</CardTitle>
                      <CardDescription className="text-base">{path.subtitle}</CardDescription>
                      <p className="mt-1 text-sm text-foreground/70">{path.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-base text-foreground/80 leading-relaxed">
                    During Weeks 2-4, follow this specialized path tailored to your role:
                  </p>
                  <div className="space-y-4">
                    {path.weeks.map((weekDetail) => (
                      <div className="flex gap-4" key={weekDetail.week}>
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.dot} text-white`}
                          >
                            <span className="font-semibold text-sm">{weekDetail.week}</span>
                          </div>
                          {weekDetail.week < 4 && <div className={`mt-2 h-12 w-0.5 ${colors.dot}`} />}
                        </div>
                        <div className="flex-1 pb-4">
                          <h4 className="mb-1 font-semibold text-lg">
                            Week {weekDetail.week}: {weekDetail.title}
                          </h4>
                          <p className="text-foreground/80 text-sm leading-relaxed">{weekDetail.focus}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
