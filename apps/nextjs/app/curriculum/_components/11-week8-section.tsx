import { CheckCircle, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const capstoneSteps = [
  {
    step: 1,
    title: "Define",
    description:
      "Define a small but meaningful feature or internal tool that uses AI in some way (or is at least heavily built with AI assistance). Consider building agents for specific workflows",
  },
  {
    step: 2,
    title: "Plan",
    description:
      "Plan requirements, user stories, architecture — all co-created with AI, documented. Design agent workflows that span the full SDLC",
  },
  {
    step: 3,
    title: "Implement",
    description:
      "Implement using AI dev tools for code, tests, and infra. Create and use specialized agents throughout the implementation process",
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

const reflectionPoints = [
  "Where did AI excel? Where did it struggle?",
  "What patterns and workflows worked best for you?",
  "How would you apply these tools in your real work?",
  "What would you do differently next time?",
  "How has your understanding of AI-assisted development evolved?",
];

export function Week8Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
          <Rocket className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 8: Capstone Project</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: Full SDLC capstone with AI assistance</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-xl">Objectives</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span>Consolidate everything you've learned in a comprehensive capstone project</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span>Follow a complete SDLC cycle from requirements to deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span>Demonstrate proficiency with AI tools across all development phases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span>Reflect on your learning journey and plan for continued growth</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Capstone Project</h3>
        <Card className="bg-emerald-50 dark:bg-emerald-950/30">
          <CardContent className="p-6">
            <p className="mb-6 text-base">
              Run a mini full SDLC cycle applying everything you've learned. This capstone should demonstrate your
              ability to use AI tools effectively across the entire software development lifecycle:
            </p>
            <div className="space-y-4">
              {capstoneSteps.map((step) => (
                <div className="flex gap-4" key={`step-${step.step}`}>
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 font-semibold text-sm text-white dark:bg-emerald-400">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-base">{step.title}</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Reflection & Next Steps</h3>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              The capstone isn't just about building something—it's about reflecting on your learning journey and
              understanding how to apply these tools in your real work. Take time to think deeply about:
            </p>
            <ul className="space-y-3">
              {reflectionPoints.map((point) => (
                <li className="flex items-start gap-3 text-sm" key={point}>
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-emerald-100 p-4 dark:bg-emerald-900/30">
              <p className="mb-2 font-semibold text-sm">💡 Final Thoughts:</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                This curriculum has equipped you with the knowledge and skills to be an AI-augmented developer.
                Remember: AI tools are powerful, but they're tools. Your judgment, expertise, and understanding of your
                domain are what make you valuable. Use AI to amplify your capabilities, not replace your thinking.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
