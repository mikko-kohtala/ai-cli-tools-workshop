import { Code, Palette, ShoppingCart, Users, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pathDetails = [
  {
    id: "developers",
    name: "Developers",
    icon: Code,
    color: "green",
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
    id: "designers",
    name: "Designers",
    icon: Palette,
    color: "purple",
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
  {
    id: "product",
    name: "Product Managers",
    icon: Users,
    color: "blue",
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
    id: "sales",
    name: "Sales & Marketing",
    icon: ShoppingCart,
    color: "orange",
    weeks: [
      {
        week: 2,
        title: "Content Creation & Messaging",
        focus: "AI for sales emails, marketing copy, presentations, and content generation",
      },
      {
        week: 3,
        title: "Customer Engagement",
        focus: "AI tools for customer research, personalized outreach, and sales workflow automation",
      },
      {
        week: 4,
        title: "Analytics & Optimization",
        focus: "AI for sales analytics, conversion optimization, and marketing performance analysis",
      },
    ],
  },
  {
    id: "operations",
    name: "Operations & Support",
    icon: Wrench,
    color: "cyan",
    weeks: [
      {
        week: 2,
        title: "Process Documentation & Training",
        focus: "AI for creating runbooks, training materials, and operational documentation",
      },
      {
        week: 3,
        title: "Support & Troubleshooting",
        focus: "AI-assisted customer support, troubleshooting workflows, and knowledge base creation",
      },
      {
        week: 4,
        title: "Automation & Efficiency",
        focus: "AI for process automation, workflow optimization, and operational efficiency improvements",
      },
    ],
  },
];

export function PathDetailsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="paths">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Weeks 2-4: Specialized Paths</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              During Weeks 2-4, each role follows a specialized path tailored to their specific needs and use cases.
              While the structure is similar (planning → execution → quality), the content and tools differ based on
              what each role actually does day-to-day.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              <strong>Path structure:</strong> Each path follows a three-week progression: Week 2 focuses on planning
              and strategy for that role, Week 3 focuses on execution and workflow automation, and Week 4 focuses on
              quality, optimization, and iteration. This structure ensures deep, role-specific learning while
              maintaining a consistent learning rhythm.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12 space-y-8">
        {pathDetails.map((path) => {
          const Icon = path.icon;
          const colorClasses = {
            green: {
              bg: "bg-green-50 dark:bg-green-950/30",
              border: "border-green-200 dark:border-green-800",
              text: "text-green-600 dark:text-green-400",
              dot: "bg-green-600 dark:bg-green-400",
            },
            purple: {
              bg: "bg-purple-50 dark:bg-purple-950/30",
              border: "border-purple-200 dark:border-purple-800",
              text: "text-purple-600 dark:text-purple-400",
              dot: "bg-purple-600 dark:text-purple-400",
            },
            blue: {
              bg: "bg-blue-50 dark:bg-blue-950/30",
              border: "border-blue-200 dark:border-blue-800",
              text: "text-blue-600 dark:text-blue-400",
              dot: "bg-blue-600 dark:bg-blue-400",
            },
            orange: {
              bg: "bg-orange-50 dark:bg-orange-950/30",
              border: "border-orange-200 dark:border-orange-800",
              text: "text-orange-600 dark:text-orange-400",
              dot: "bg-orange-600 dark:text-orange-400",
            },
            cyan: {
              bg: "bg-cyan-50 dark:bg-cyan-950/30",
              border: "border-cyan-200 dark:border-cyan-800",
              text: "text-cyan-600 dark:text-cyan-400",
              dot: "bg-cyan-600 dark:text-cyan-400",
            },
          };
          const colors = colorClasses[path.color as keyof typeof colorClasses];
          return (
            <Card className={`${colors.border} border-2`} key={path.id}>
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{path.name} Path</CardTitle>
                    <CardDescription className="text-base">
                      Specialized learning for {path.name.toLowerCase()} during Weeks 2-4
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
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
    </section>
  );
}
