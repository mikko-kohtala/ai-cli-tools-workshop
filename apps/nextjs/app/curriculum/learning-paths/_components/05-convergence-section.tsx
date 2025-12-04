import { Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const convergenceTopics = [
  {
    title: "Cross-Functional Collaboration",
    description:
      "Learn how different roles use AI tools and how to collaborate effectively. Understand each role's AI workflows, tools, and processes to enable better cross-functional teamwork.",
  },
  {
    title: "Shared Workflows & Processes",
    description:
      "Identify common patterns across roles and build shared workflows. Learn to create agentic workflows that span multiple functions, enabling seamless collaboration.",
  },
  {
    title: "Communication & Documentation",
    description:
      "Use AI to bridge communication gaps between roles. Learn to create documentation, summaries, and artifacts that are accessible to all team members regardless of their role.",
  },
  {
    title: "Unified Project Management",
    description:
      "Apply AI tools to project management across functions. Learn to coordinate work, track progress, and manage dependencies when multiple roles are involved.",
  },
];

export function ConvergenceSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="convergence">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Network className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Week 5: Path Convergence</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              Week 5 brings all paths back together. After three weeks of specialized learning, everyone reconvenes to
              learn cross-functional collaboration and shared workflows. This convergence is crucial because real-world
              projects require multiple roles working together.
            </p>
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              <strong>Why convergence matters:</strong> While specialized paths ensure deep role-specific learning, most
              real-world projects require collaboration across functions. Week 5 teaches you how to work effectively
              with team members from other roles, understand their AI workflows, and create shared processes that
              leverage everyone's expertise.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              <strong>Learning approach:</strong> Week 5 combines lectures, workshops, and hands-on exercises where
              participants from different paths work together on cross-functional scenarios. You'll learn each other's
              tools, workflows, and perspectives, building the foundation for effective collaboration in Week 6's
              capstone projects.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Convergence Topics</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {convergenceTopics.map((topic) => (
            <Card key={`topic-${topic.title}`}>
              <CardHeader>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm leading-relaxed">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-indigo-50 dark:bg-indigo-950/30">
        <CardContent className="p-6">
          <h3 className="mb-3 font-semibold text-xl">Week 5 Activities</h3>
          <ul className="space-y-2 text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span>
                <strong>Tool demos:</strong> Each path presents their specialized tools and workflows to the group
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span>
                <strong>Cross-functional workshops:</strong> Mixed teams work on scenarios requiring multiple roles
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span>
                <strong>Shared workflow design:</strong> Teams create agentic workflows that span multiple functions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span>
                <strong>Capstone preparation:</strong> Form teams and begin planning Week 6 capstone projects
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
