import { BarChart, FileText, MessageSquare, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: Users,
    title: "AI in Product & UX",
    description: "Brainstorming features with AI. Using AI to create UX copy, error messages, onboarding flows",
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

const capstoneSteps = [
  {
    step: 1,
    title: "Define",
    description:
      "Define a small but meaningful feature or internal tool that uses AI in some way (or is at least heavily built with AI assistance)",
  },
  {
    step: 2,
    title: "Plan",
    description: "Plan requirements, user stories, architecture — all co-created with AI, documented",
  },
  {
    step: 3,
    title: "Implement",
    description: "Implement using AI dev tools for code, tests, and infra",
  },
  {
    step: 4,
    title: "Deploy",
    description: "Deploy (even to a simple demo environment)",
  },
  {
    step: 5,
    title: "Document & Present",
    description:
      "Design doc, ADRs, runbook, user docs — heavily AI-drafted, human-curated. Short written reflection: where AI helped, where it struggled, and how they'd use it in real company work",
  },
];

export function Week6Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 6: AI Across Company Processes & Capstone</h2>
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
                <span>Consolidate everything in a capstone that follows full SDLC</span>
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
        <h3 className="mb-6 font-semibold text-2xl">Capstone Project</h3>
        <Card className="bg-indigo-50 dark:bg-indigo-950/30">
          <CardContent className="p-6">
            <p className="mb-6 text-base">Run a mini full SDLC cycle applying everything you've learned:</p>
            <div className="space-y-4">
              {capstoneSteps.map((step) => (
                <div className="flex gap-4" key={`step-${step.step}`}>
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 font-semibold text-sm text-white dark:bg-indigo-400">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-base">{step.title}</h4>
                    <p className="text-foreground/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
