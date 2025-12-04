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
    description: "Software engineers building applications, APIs, and systems",
  },
  {
    id: "product",
    name: "Product Path",
    subtitle: "Product managers & owners",
    icon: Users,
    color: "blue",
    description: "Product managers defining features, roadmaps, and strategy",
  },
  {
    id: "design",
    name: "Design Path",
    subtitle: "Designers & UX",
    icon: Palette,
    color: "purple",
    description: "UX/UI designers creating user experiences and interfaces",
  },
];

export function PathVisualization() {
  return (
    <section className="mb-16 scroll-mt-16" id="visualization">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Route className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Learning Paths Overview</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-lg leading-relaxed">
              The curriculum follows a branching and converging structure designed to accommodate different roles while
              building shared understanding:
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

      {/* Visual Timeline */}
      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Visual Timeline</h3>
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
          <CardContent className="p-8">
            <div className="relative">
              {/* Week 1 - Single Path */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-lg bg-indigo-600 px-6 py-3 text-white dark:bg-indigo-500">
                    <span className="font-semibold text-lg">Week 1: Common Foundation</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-2 w-32 bg-indigo-600 dark:bg-indigo-500" />
                </div>
              </div>

              {/* Weeks 2-4 - Branching Paths */}
              <div className="mb-8">
                <div className="mb-6 flex items-center justify-center gap-2">
                  <div className="h-2 w-16 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="h-8 w-0.5 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="flex gap-4">
                    {paths.map((path) => {
                      const Icon = path.icon;
                      const colorClasses = {
                        green: "bg-green-600 dark:bg-green-500",
                        purple: "bg-purple-600 dark:bg-purple-500",
                        blue: "bg-blue-600 dark:bg-blue-500",
                      };
                      return (
                        <div className="flex flex-col items-center" key={path.id}>
                          <div className={`h-2 w-16 ${colorClasses[path.color as keyof typeof colorClasses]}`} />
                          <div className="mt-2 flex flex-col items-center gap-2">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full ${colorClasses[path.color as keyof typeof colorClasses]} text-white`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <span className="text-center font-medium text-xs">{path.name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <div className="h-2 w-16 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="h-8 w-0.5 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="flex gap-4">
                    {paths.map((path) => {
                      const colorClasses = {
                        green: "bg-green-600 dark:bg-green-500",
                        purple: "bg-purple-600 dark:bg-purple-500",
                        blue: "bg-blue-600 dark:bg-blue-500",
                      };
                      return (
                        <div
                          className={`h-2 w-16 ${colorClasses[path.color as keyof typeof colorClasses]}`}
                          key={path.id}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <div className="h-2 w-16 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="h-8 w-0.5 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="flex gap-4">
                    {paths.map((path) => {
                      const colorClasses = {
                        green: "bg-green-600 dark:bg-green-500",
                        purple: "bg-purple-600 dark:bg-purple-500",
                        blue: "bg-blue-600 dark:bg-blue-500",
                      };
                      return (
                        <div
                          className={`h-2 w-16 ${colorClasses[path.color as keyof typeof colorClasses]}`}
                          key={path.id}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-indigo-100 px-4 py-2 dark:bg-indigo-900/30">
                    <span className="font-medium text-sm">Weeks 2-4: Specialized Paths</span>
                  </div>
                </div>
              </div>

              {/* Weeks 5-8 - Convergence */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-center gap-2">
                  <div className="h-2 w-16 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="h-8 w-0.5 bg-indigo-600 dark:bg-indigo-500" />
                  <div className="flex gap-4">
                    {paths.map((path) => {
                      const colorClasses = {
                        green: "bg-green-600 dark:bg-green-500",
                        purple: "bg-purple-600 dark:bg-purple-500",
                        blue: "bg-blue-600 dark:bg-blue-500",
                      };
                      return (
                        <div
                          className={`h-2 w-16 ${colorClasses[path.color as keyof typeof colorClasses]}`}
                          key={path.id}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-lg bg-indigo-600 px-6 py-3 text-white dark:bg-indigo-500">
                    <span className="font-semibold text-lg">Weeks 5-8: Convergence & Capstone</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-2 w-32 bg-indigo-600 dark:bg-indigo-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Path Cards */}
      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Three Learning Paths</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;
            const colorClasses = {
              green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
              purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
              blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
            };
            return (
              <Card key={path.id}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Icon className={`h-5 w-5 ${colorClasses[path.color as keyof typeof colorClasses]}`} />
                  </div>
                  <CardTitle className="text-lg">{path.name}</CardTitle>
                  <CardDescription className="text-sm">{path.subtitle}</CardDescription>
                  <p className="mt-2 text-sm text-foreground/70">{path.description}</p>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
