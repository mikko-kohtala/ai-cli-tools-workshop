import { BookOpen, FileText, Layout, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: Target,
    title: "Requirements & Product Thinking",
    description:
      "Turning vague ideas into user stories, use cases, and acceptance criteria (with AI help). Asking AI to propose 'questions to ask stakeholders'",
  },
  {
    icon: FileText,
    title: "Planning",
    description:
      "Breaking work into milestones, tickets, and tasks. AI-generated backlog drafts (epics, tickets, acceptance criteria)",
  },
  {
    icon: Layout,
    title: "Architecture & Design",
    description:
      "Using AI to propose architectures & compare tradeoffs. Generating sequence diagrams, component diagrams, data models",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "ADRs (Architecture Decision Records): drafting them with AI and then editing. Design documents from prompts",
  },
];

const projectFocus = [
  "Refine requirements using AI - turn initial ideas into structured user stories",
  "Have AI propose 2–3 architecture options and justify choice",
  "Produce a short design doc and ADRs (AI drafts, human-reviewed)",
  "Practice the planning workflow: idea → requirements → architecture → documentation",
];

export function Week2Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week2">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 2: Requirements, Discovery & Architecture</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: Using AI at the front of the SDLC</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span>Use AI to clarify requirements and discover edge cases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span>Use AI to help design architecture and select technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span>Start working with structured planning artifacts</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Key Topics</h3>
        <div className="grid gap-4 md:grid-cols-2">
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
                  <p className="text-foreground/70 text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Project Focus</h3>
        <Card className="bg-blue-50 dark:bg-blue-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base">
              This week, you'll use AI to plan and design your project before implementation:
            </p>
            <ul className="space-y-2">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-2 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
