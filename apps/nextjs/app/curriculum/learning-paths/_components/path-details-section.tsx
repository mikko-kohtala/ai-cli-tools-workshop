import { Briefcase, Code2, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PathData {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  weeks: {
    week: number;
    title: string;
    topics: string[];
  }[];
  tools: string[];
  outcome: string;
}

const pathsData: PathData[] = [
  {
    id: "dev",
    name: "Developer",
    icon: Code2,
    color: "emerald",
    description: "Code generation, testing, debugging, and building production-ready AI integrations",
    weeks: [
      {
        week: 3,
        title: "Domain Fundamentals",
        topics: [
          "Code generation patterns",
          "Tool use deep dive (files, shell, MCP)",
          "Multi-file editing workflows",
          "Codebase navigation with AI",
        ],
      },
      {
        week: 4,
        title: "Core Workflows",
        topics: ["Test generation strategies", "Debugging with AI", "Code review workflows", "Performance analysis"],
      },
      {
        week: 5,
        title: "Advanced Techniques",
        topics: ["Complex refactoring", "API integration patterns", "Legacy migration", "Architecture review with AI"],
      },
      {
        week: 6,
        title: "Integration & Collaboration",
        topics: ["Product collaboration", "Design implementation", "Team documentation", "AI workflow sharing"],
      },
    ],
    tools: ["Claude Code", "Codex CLI", "GitHub Copilot", "Cursor"],
    outcome: "Ship production code 2-3x faster with AI assistance",
  },
  {
    id: "product",
    name: "Product",
    icon: Briefcase,
    color: "blue",
    description: "Requirements, roadmaps, user stories, and strategic planning with AI",
    weeks: [
      {
        week: 3,
        title: "Domain Fundamentals",
        topics: [
          "User story generation",
          "PRD creation and refinement",
          "Feature prioritization frameworks",
          "Stakeholder interview synthesis",
        ],
      },
      {
        week: 4,
        title: "Core Workflows",
        topics: ["Competitive analysis", "Market research synthesis", "OKR definition", "Risk assessment"],
      },
      {
        week: 5,
        title: "Advanced Techniques",
        topics: [
          "Roadmap presentations",
          "Stakeholder updates",
          "Release communications",
          "Customer feedback synthesis",
        ],
      },
      {
        week: 6,
        title: "Integration & Collaboration",
        topics: ["Engineering partnership", "Design alignment", "Cross-team planning", "AI culture building"],
      },
    ],
    tools: ["Claude", "Notion AI", "Linear", "Productboard"],
    outcome: "Double your output while improving strategic clarity",
  },
  {
    id: "design",
    name: "Design",
    icon: Palette,
    color: "pink",
    description: "User research, prototyping, design systems, and visual design with AI assistance",
    weeks: [
      {
        week: 3,
        title: "Domain Fundamentals",
        topics: [
          "AI-assisted research synthesis",
          "Persona and journey creation",
          "Competitive analysis",
          "Design brief generation",
        ],
      },
      {
        week: 4,
        title: "Core Workflows",
        topics: [
          "Concept generation with AI",
          "Design system documentation",
          "Copy and microcopy generation",
          "Rapid prototyping workflows",
        ],
      },
      {
        week: 5,
        title: "Advanced Techniques",
        topics: [
          "Design critique with AI",
          "Accessibility audits",
          "Developer handoff docs",
          "Design token management",
        ],
      },
      {
        week: 6,
        title: "Integration & Collaboration",
        topics: ["Engineering partnership", "Product alignment", "Design knowledge sharing", "AI tools evangelism"],
      },
    ],
    tools: ["Figma AI", "Midjourney", "Claude", "Adobe Firefly"],
    outcome: "From research to polished designs in half the time",
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; light: string }> = {
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/40",
    border: "border-l-emerald-500",
    text: "text-emerald-700 dark:text-emerald-400",
    light: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900/40",
    border: "border-l-pink-500",
    text: "text-pink-700 dark:text-pink-400",
    light: "bg-pink-50 dark:bg-pink-950/30",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/40",
    border: "border-l-blue-500",
    text: "text-blue-700 dark:text-blue-400",
    light: "bg-blue-50 dark:bg-blue-950/30",
  },
};

export function PathDetailsSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-2 text-center font-bold text-2xl">Specialized Tracks (Weeks 3-6)</h2>
      <p className="mb-8 text-center text-foreground/60">Each role follows a customized path during weeks 3-6</p>

      <div className="space-y-8">
        {pathsData.map((path) => {
          const colors = colorClasses[path.color];
          const Icon = path.icon;

          return (
            <Card className={`border-l-4 ${colors.border}`} key={path.id}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{path.name} Track</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Weekly breakdown */}
                <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {path.weeks.map((week) => (
                    <div className={`rounded-lg p-4 ${colors.light}`} key={week.week}>
                      <div className="mb-2 flex items-center gap-2">
                        <span className={`rounded px-2 py-0.5 font-mono text-xs ${colors.bg} ${colors.text}`}>
                          Week {week.week}
                        </span>
                      </div>
                      <p className={`mb-2 font-semibold text-sm ${colors.text}`}>{week.title}</p>
                      <ul className="space-y-1">
                        {week.topics.map((topic) => (
                          <li className="text-foreground/70 text-xs" key={topic}>
                            • {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Tools and outcome */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                  <div>
                    <p className="mb-1 font-semibold text-foreground/50 text-xs uppercase">Primary Tools</p>
                    <div className="flex flex-wrap gap-1">
                      {path.tools.map((tool) => (
                        <span
                          className="rounded bg-slate-100 px-2 py-0.5 text-slate-700 text-xs dark:bg-slate-800 dark:text-slate-300"
                          key={tool}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-lg px-4 py-2 ${colors.light}`}>
                    <p className={`font-medium text-sm ${colors.text}`}>{path.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
