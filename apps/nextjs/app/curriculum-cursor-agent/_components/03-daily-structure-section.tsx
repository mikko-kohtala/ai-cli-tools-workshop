import { BookOpen, Code, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dailyBlocks = [
  {
    title: "Learning Block (1–2 hours)",
    icon: BookOpen,
    color: "blue",
    activities: [
      "Read assigned materials: documentation, tutorials, or articles covering the day's concept",
      "Watch video demonstrations showing the concept in action with real examples",
      "Try hands-on demos: experiment with a few prompts or tool commands in a safe environment",
      "Take notes: document key concepts, important commands, and questions that arise",
      "Understand theory before practice: build mental models before applying to your project",
    ],
  },
  {
    title: "Deep Work Block (Tasks)",
    icon: Code,
    color: "green",
    activities: [
      "Apply the concept to your ongoing project: use what you learned in a real context",
      "Use AI heavily, but with explicit checkpoints: don't blindly accept AI suggestions",
      "Human review of AI-generated code: understand every line before committing",
      "Iterate and refine: use AI suggestions as starting points, then improve based on your expertise",
      "Document what AI helped with vs. where it struggled: build your personal knowledge base",
      "Test thoroughly: verify AI-generated code works correctly and handles edge cases",
    ],
  },
  {
    title: "Wrap-up (15–30 min)",
    icon: FileText,
    color: "purple",
    activities: [
      "Quick log: document prompts that worked well, mistakes made, and lessons learned",
      "Update your learning journal: record successful patterns and anti-patterns",
      "Optional: ask AI to summarize the day's progress and suggest improvements",
      "Reflect on improvements for tomorrow: what will you do differently?",
      "Plan tomorrow's learning focus: identify what you need to learn next",
    ],
  },
];

const checkpoints = [
  {
    title: "Human Review",
    description:
      "Always review AI-generated code before committing. Read through every line, understand the logic, check for security issues, and verify it aligns with your project's architecture and coding standards. Never commit code you don't understand.",
  },
  {
    title: "Document Learnings",
    description:
      "Write down what AI helped with and where it struggled. Keep a learning journal that tracks successful prompts, patterns that work well, and situations where AI fell short. This builds your personal playbook for effective AI-assisted development.",
  },
  {
    title: "Verify Understanding",
    description:
      "Ensure you understand the code, not just accepting it. If AI generates code you don't fully understand, ask questions, read documentation, or break it down into smaller pieces. The goal is AI-augmented expertise, not AI dependency.",
  },
  {
    title: "Iterate & Improve",
    description:
      "Use AI suggestions as starting points, refine based on your expertise. AI is excellent at generating initial drafts, but your domain knowledge, architectural understanding, and coding standards should guide the final implementation.",
  },
  {
    title: "Test Everything",
    description:
      "Always test AI-generated code thoroughly. Write tests, check edge cases, verify error handling, and ensure the code integrates properly with existing systems. Don't assume AI-generated code is production-ready.",
  },
  {
    title: "Maintain Code Quality",
    description:
      "Apply your team's coding standards, linting rules, and best practices to AI-generated code. Use AI to accelerate development, not to bypass quality gates. Code quality remains your responsibility.",
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
            <p className="mb-4 text-lg leading-relaxed">
              Each day follows a structured template designed to maximize learning and practical application. This
              rhythm ensures you build understanding before applying it, and reflect on your progress regularly.
            </p>
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              The daily structure is intentionally designed to balance theory and practice. Starting with focused
              learning prevents you from diving into complex tasks without understanding the fundamentals. The extended
              deep work period allows you to experiment, make mistakes, and iterate—which is where real skill
              development happens.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              <strong>Why this structure works:</strong> Research shows that spaced repetition and active recall are
              more effective than passive consumption. By learning a concept, immediately applying it, and then
              reflecting on the experience, you create stronger neural pathways and develop practical intuition for when
              and how to use AI tools effectively.
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
        <h3 className="mb-6 font-semibold text-2xl">Critical Checkpoints & Best Practices</h3>
        <p className="mb-6 text-base text-foreground/80 leading-relaxed">
          These checkpoints are non-negotiable practices that ensure you're building expertise, not dependency. Follow
          these guidelines religiously to maintain code quality and architectural integrity while leveraging AI's
          capabilities.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
