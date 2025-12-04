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
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              Week 2 focuses on the front-end of the software development lifecycle—the planning and design phase that
              happens before you write a single line of code. Many developers skip this phase or do it poorly, but AI
              tools excel at helping you think through requirements, explore architectural options, and create
              comprehensive planning documents.
            </p>
            <h3 className="mb-4 font-semibold text-xl">Week 2 Objectives</h3>
            <p className="mb-4 text-foreground/70 text-sm leading-relaxed">
              By the end of this week, you should be able to:
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div>
                  <span className="font-medium">Use AI to clarify requirements and discover edge cases:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Transform vague ideas into structured user stories, use cases, and acceptance criteria. Use AI to
                    ask probing questions, identify missing requirements, and surface edge cases you might have missed.
                    Learn to use AI as a requirements analysis partner.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div>
                  <span className="font-medium">Use AI to help design architecture and select technologies:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Generate multiple architectural options, compare tradeoffs, and make informed technology choices.
                    Use AI to create diagrams (sequence diagrams, component diagrams, data models) and explore different
                    architectural patterns. Learn to evaluate AI's architectural suggestions critically.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div>
                  <span className="font-medium">Start working with structured planning artifacts:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Create user stories, epics, tickets, acceptance criteria, design documents, and Architecture
                    Decision Records (ADRs). Learn how AI can draft these documents, then refine them with your domain
                    expertise. Understand the value of planning documentation in AI-assisted development.
                  </span>
                </div>
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
                  <p className="text-foreground/80 text-sm leading-relaxed">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Week 2 Project Focus</h3>
        <Card className="bg-blue-50 dark:bg-blue-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base leading-relaxed">
              This week, you'll use AI to plan and design your project before implementation. Resist the urge to start
              coding immediately—spending time on planning will save you significant time later and result in better
              architecture.
            </p>
            <p className="mb-4 text-foreground/70 text-sm leading-relaxed">
              <strong>Why planning matters:</strong> AI tools are excellent at generating code, but they work best when
              they have clear direction. Well-planned projects lead to better AI suggestions, fewer refactors, and more
              maintainable code.
            </p>
            <h4 className="mb-3 font-semibold text-base">Planning Tasks:</h4>
            <ul className="space-y-3">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-3 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-blue-100 p-4 dark:bg-blue-900/30">
              <p className="mb-2 font-semibold text-sm">💡 Pro Tip:</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Have AI generate multiple architecture options, then critically evaluate each. Don't accept the first
                suggestion—explore alternatives, understand tradeoffs, and make informed decisions based on your
                requirements and constraints.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
