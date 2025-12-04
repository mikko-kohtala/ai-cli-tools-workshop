import { BookOpen, Code, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyBlocks = [
  {
    title: "Learning Block (1–2 hours)",
    icon: BookOpen,
    color: "blue",
    activities: [
      "Short reading/watching: concept of the day",
      "Hands-on demo: trying a few prompts or tool commands",
      "Understanding theory before practice",
    ],
  },
  {
    title: "Deep Work Block (Tasks)",
    icon: Code,
    color: "green",
    activities: [
      "Apply the concept to the ongoing project",
      "Use AI heavily, but with explicit checkpoints",
      "Human review of AI-generated code",
      "Document what AI helped with vs. where it struggled",
    ],
  },
  {
    title: "Wrap-up (15–30 min)",
    icon: FileText,
    color: "purple",
    activities: [
      "Quick log: prompts that worked well, mistakes, lessons",
      "Optional: ask AI to summarize the day's progress",
      "Reflect on improvements for tomorrow",
    ],
  },
];

const checkpoints = [
  {
    title: "Human Review",
    description: "Always review AI-generated code before committing",
  },
  {
    title: "Document Learnings",
    description: "Write down what AI helped with and where it struggled",
  },
  {
    title: "Verify Understanding",
    description: "Ensure you understand the code, not just accepting it",
  },
  {
    title: "Iterate & Improve",
    description: "Use AI suggestions as starting points, refine based on your expertise",
  },
];

export function DailyStructureSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="daily-structure">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
          <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="font-bold text-4xl">Daily Structure</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Each day follows a structured template designed to maximize learning and practical application. This
              rhythm ensures you build understanding before applying it, and reflect on your progress regularly.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Daily Blocks</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {dailyBlocks.map((block) => {
            const Icon = block.icon;
            const colorClasses = {
              blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
              purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
            };
            return (
              <Card key={`block-${block.title}`}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Icon className={`h-5 w-5 ${colorClasses[block.color as keyof typeof colorClasses]}`} />
                  </div>
                  <CardTitle className="text-lg">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {block.activities.map((activity) => (
                      <li className="flex items-start gap-2 text-sm" key={activity}>
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/30" />
                        <span className="text-foreground/80">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Critical Checkpoints</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {checkpoints.map((checkpoint) => (
            <Card key={`checkpoint-${checkpoint.title}`}>
              <CardHeader>
                <CardTitle className="text-base">{checkpoint.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{checkpoint.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
