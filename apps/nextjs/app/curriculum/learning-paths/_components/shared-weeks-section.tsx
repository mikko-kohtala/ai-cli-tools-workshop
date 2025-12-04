import { Bot, Lightbulb, Shield, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const week1Topics = [
  "Understanding LLMs: capabilities, limitations, and how they work",
  "AI tools setup: Claude, ChatGPT, and role-specific tools",
  "Effective prompting: clarity, context, and iteration",
  "Safety fundamentals: data privacy, review practices, governance",
  "Hands-on: first AI-assisted task in your domain",
];

const week5Topics = [
  "What makes an AI agent vs simple chat",
  "Building custom tools for your domain",
  "Agent workflows: automation patterns",
  "Multi-agent collaboration concepts",
  "Safety: guardrails, approval flows, boundaries",
];

const week6Topics = [
  "Capstone project: end-to-end AI workflow",
  "Include agent or automation component",
  "Cross-functional collaboration with AI",
  "Governance and enterprise considerations",
  "Presentation and knowledge sharing",
];

export function SharedWeeksSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center font-bold text-2xl">Shared Learning Weeks</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Week 1 */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded bg-indigo-100 px-2 py-1 font-mono text-indigo-700 text-xs dark:bg-indigo-900/30 dark:text-indigo-400">
                WEEK 1
              </span>
            </div>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              AI Foundations
            </CardTitle>
            <CardDescription>Everyone starts together—building shared vocabulary and skills</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {week1Topics.map((topic) => (
                <li className="flex items-start gap-2 text-foreground/70 text-sm" key={topic}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  {topic}
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg bg-indigo-50 p-3 dark:bg-indigo-950/30">
              <p className="text-indigo-700 text-sm dark:text-indigo-400">
                <strong>Outcome:</strong> Common language for AI collaboration across roles
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Weeks 5-6 */}
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded bg-amber-100 px-2 py-1 font-mono text-amber-700 text-xs dark:bg-amber-900/30 dark:text-amber-400">
                WEEKS 5-6
              </span>
            </div>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Bot className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              Agents & Capstone
            </CardTitle>
            <CardDescription>Paths converge—everyone learns to build and deploy AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-semibold text-sm">Week 5: Building Agents</p>
                <ul className="space-y-1">
                  {week5Topics.map((topic) => (
                    <li className="flex items-start gap-2 text-foreground/70 text-sm" key={topic}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-sm">Week 6: Capstone</p>
                <ul className="space-y-1">
                  {week6Topics.map((topic) => (
                    <li className="flex items-start gap-2 text-foreground/70 text-sm" key={topic}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why Converge */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <p className="font-semibold text-emerald-700 dark:text-emerald-400">Why Everyone Learns Agents</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            Agents automate workflows in every domain—support tickets, design handoffs, sales outreach, product
            feedback. Everyone benefits from understanding how to build and work with AI agents.
          </p>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="font-semibold text-blue-700 dark:text-blue-400">Cross-Functional Capstone</p>
          </div>
          <p className="mt-2 text-foreground/70 text-sm">
            The capstone project encourages collaboration across roles. Developers build, designers design, product
            defines requirements, and everyone contributes their AI-augmented skills.
          </p>
        </div>
      </div>
    </section>
  );
}
