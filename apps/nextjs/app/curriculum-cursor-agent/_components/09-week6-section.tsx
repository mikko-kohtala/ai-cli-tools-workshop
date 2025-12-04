import { Code, GitBranch, Layers, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: Workflow,
    title: "Advanced Agent Orchestration",
    description:
      "Building complex multi-agent systems that coordinate across different tasks. Creating agent hierarchies and workflow pipelines",
  },
  {
    icon: Layers,
    title: "Integration Patterns",
    description:
      "Integrating AI tools into existing development workflows, CI/CD pipelines, and team processes. Building seamless AI-assisted development environments",
  },
  {
    icon: Code,
    title: "Performance Optimization",
    description:
      "Optimizing AI tool usage for speed and cost. Managing context windows efficiently, caching strategies, and prompt optimization",
  },
  {
    icon: GitBranch,
    title: "Cross-Functional Collaboration",
    description:
      "Using AI to facilitate collaboration between developers, designers, and product managers. Shared workflows and communication patterns",
  },
];

export function Week6Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 6: Advanced Topics & Integration</h2>
          <p className="font-medium text-foreground/70 text-sm">
            Theme: Advanced AI workflows and cross-functional integration
          </p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Master advanced agentic workflow patterns and orchestration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Integrate AI tools into complex, multi-step development processes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Learn cross-functional collaboration patterns with AI assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Explore advanced use cases and optimization techniques</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Key Topics</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={`topic-${topic.title}`}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-sm leading-relaxed">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Week 6 Project Focus</h3>
        <Card className="bg-indigo-50 dark:bg-indigo-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base">This week focuses on advanced integration and cross-functional workflows:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Build complex multi-agent workflows that coordinate across different tasks</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Integrate AI tools into existing CI/CD pipelines and team processes</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Optimize AI tool usage for performance and cost efficiency</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Practice cross-functional collaboration patterns with AI assistance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
