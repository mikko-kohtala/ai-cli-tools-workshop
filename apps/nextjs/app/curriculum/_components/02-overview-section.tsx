import { CheckCircle, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const learningGoals = [
  {
    title: "Master AI Development Tools",
    description: "Use AI tools (Claude Code, Codex CLI, etc.) confidently in daily coding workflows",
  },
  {
    title: "Build Agents & Agentic Workflows",
    description:
      "Create specialized AI agents for specific tasks and build complex agentic workflows that automate multi-step processes",
  },
  {
    title: "Apply AI Across Full SDLC",
    description: "Leverage AI for requirements, planning, design, implementation, testing, deployment, and maintenance",
  },
  {
    title: "Understand Company-Wide Impact",
    description: "See how AI development supports broader company processes (product, ops, support, docs, analytics)",
  },
  {
    title: "Work Safely & Responsibly",
    description: "Understand security, IP, data privacy, and limitations of AI-assisted development",
  },
];

const curriculumStructure = [
  {
    week: 1,
    theme: "Foundations & Tools",
    focus: "Mindset + core AI dev tools + creating your first agents",
  },
  {
    week: 2,
    theme: "Requirements & Architecture",
    focus: "Using AI at the front of the SDLC",
  },
  {
    week: 3,
    theme: "Implementation Workflows",
    focus: "Coding faster & safer with AI + building agentic workflows",
  },
  {
    week: 4,
    theme: "Testing & Quality",
    focus: "AI for reliability + automated testing agents",
  },
  {
    week: 5,
    theme: "DevOps & Deployment",
    focus: "AI across build, deploy & run",
  },
  {
    week: 6,
    theme: "Company Processes & Capstone",
    focus: "Beyond code – agents across departments + full SDLC capstone",
  },
];

export function OverviewSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="overview">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="font-bold text-4xl">Curriculum Overview</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              This 6-week intensive program is designed for software developers who want to integrate AI tools into
              their development workflow. Each week builds on the previous, taking you from basic tool setup through
              advanced AI-assisted development practices across the entire software development lifecycle.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Learning Goals</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {learningGoals.map((goal) => (
            <Card key={`goal-${goal.title}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  {goal.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">6-Week Structure</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {curriculumStructure.map((item) => (
            <Card key={`week-${item.week}`}>
              <CardHeader>
                <CardTitle className="text-xl">Week {item.week}</CardTitle>
                <CardDescription className="font-medium text-base">{item.theme}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm">{item.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-blue-50 dark:bg-blue-950/30">
        <CardContent className="p-6">
          <h3 className="mb-3 font-semibold text-xl">Time Commitment</h3>
          <p className="text-base text-foreground/80 leading-relaxed">
            Each weekday includes <strong>1–2 hours</strong> of focused learning and reading, followed by hands-on tasks
            for the rest of the day. This structure ensures you understand concepts deeply before applying them
            practically.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
