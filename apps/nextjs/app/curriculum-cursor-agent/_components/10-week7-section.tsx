import { BarChart, FileText, MessageSquare, Shield, Users, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: Users,
    title: "AI in Product & UX",
    description: "Brainstorming features with AI. Using AI to create UX copy, error messages, onboarding flows",
  },
  {
    icon: Workflow,
    title: "Cross-Functional Agent Workflows",
    description:
      "Building agents for different departments: product research agents, documentation agents, analytics agents. Creating workflows that span multiple business functions",
  },
  {
    icon: MessageSquare,
    title: "AI in Support & Operations",
    description:
      "Drafting macros and KB articles from logs/interactions. Designing simple internal chatbots or retrieval helpers (conceptual)",
  },
  {
    icon: FileText,
    title: "AI in Documentation & Org Knowledge",
    description: "Converting specs to docs, FAQs, how-tos. Summarizing sprint notes, retrospectives, incident reports",
  },
  {
    icon: BarChart,
    title: "AI in Analytics & Decision-Making",
    description: "Helping write queries (SQL), interpret dashboards, summarize trends",
  },
  {
    icon: Shield,
    title: "Governance, Ethics & Risk",
    description:
      "Data privacy, secure prompting, prompt injection basics. Human-in-the-loop: who approves what AI produces?",
  },
];

const projectFocus = [
  "Design and implement an AI-powered feature or internal tool for a non-engineering department",
  "Create cross-functional agent workflows that span multiple business functions",
  "Document governance and approval processes for AI-generated content",
  "Build a practical solution that demonstrates AI's value beyond code",
];

export function Week7Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week7">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 7: AI Across Company Processes</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: Beyond code – AI for the whole company</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>See AI as a horizontal capability across departments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Practice designing AI-powered features and internal tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Build and deploy agent workflows that demonstrate AI's value across company processes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>Understand governance, ethics, and risk management for AI in organizations</span>
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
        <h3 className="mb-6 font-semibold text-2xl">Week 7 Project Focus</h3>
        <Card className="bg-indigo-50 dark:bg-indigo-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base">
              This week, you'll explore how AI can be applied beyond software development to support various company
              processes:
            </p>
            <ul className="space-y-2">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-2 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600 dark:text-indigo-400" />
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
