import { BookOpen, Shield, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const foundationTopics = [
  {
    icon: BookOpen,
    title: "AI Fundamentals",
    description:
      "Understanding what LLMs are, their capabilities and limitations. Learning when AI excels and when human judgment is essential. Building realistic expectations about AI tools.",
  },
  {
    icon: Terminal,
    title: "Tool Setup & Basics",
    description:
      "Installing and configuring AI CLI tools (Claude Code, Codex CLI). Learning basic commands, authentication, and tool-specific features. Understanding the differences between tools.",
  },
  {
    icon: BookOpen,
    title: "Prompting Essentials",
    description:
      "Mastering the art of clear instructions, providing context, and structuring prompts for effective results. Learning token limits and context window management.",
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description:
      "Understanding what data you're sending to AI services, recognizing sensitive information, implementing security best practices. Learning to work safely with AI tools.",
  },
];

export function CommonFoundationSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="foundation">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Week 1: Common Foundation</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              Everyone starts together in Week 1, learning the foundational concepts that apply regardless of role. This
              shared foundation ensures that when paths diverge in Week 2, everyone has the same baseline understanding
              of AI tools, prompting, and safety practices.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              <strong>Why common foundation matters:</strong> Even though developers, designers, and product managers
              use AI differently, they all need to understand how AI tools work, how to prompt effectively, and how to
              use them safely. This shared knowledge makes cross-functional collaboration much easier in later weeks.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Foundation Topics</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {foundationTopics.map((topic) => {
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

      <Card className="bg-indigo-50 dark:bg-indigo-950/30">
        <CardContent className="p-6">
          <h3 className="mb-3 font-semibold text-xl">Week 1 Project</h3>
          <p className="text-base text-foreground/80 leading-relaxed">
            Everyone completes the same foundational project: using AI to scaffold a small project, generate initial
            code, and create your first specialized agent. This project demonstrates core concepts that everyone will
            use throughout the curriculum, regardless of their role-specific path.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
