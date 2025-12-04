import { Briefcase, Code2, Megaphone, Palette, Settings } from "lucide-react";
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
    name: "Developers",
    icon: Code2,
    color: "emerald",
    description: "Code generation, testing, debugging, and building production-ready AI integrations",
    weeks: [
      {
        week: 2,
        title: "Planning & Architecture",
        topics: [
          "AI-assisted requirements and design",
          "Architecture exploration with Claude",
          "ADRs and technical documentation",
          "Code scaffolding and project setup",
        ],
      },
      {
        week: 3,
        title: "Implementation",
        topics: [
          "Code generation patterns",
          "Multi-file editing workflows",
          "Refactoring with AI",
          "Working with existing codebases",
        ],
      },
      {
        week: 4,
        title: "Testing & Quality",
        topics: ["Test generation strategies", "Debugging with AI", "Code review workflows", "Performance analysis"],
      },
    ],
    tools: ["Claude Code", "Codex CLI", "GitHub Copilot", "Cursor"],
    outcome: "Ship production code 2-3x faster with AI assistance",
  },
  {
    id: "design",
    name: "Designers",
    icon: Palette,
    color: "pink",
    description: "User research, prototyping, design systems, and visual design with AI assistance",
    weeks: [
      {
        week: 2,
        title: "Research & Discovery",
        topics: [
          "AI-assisted user research synthesis",
          "Persona and journey creation",
          "Competitive analysis",
          "Design brief generation",
        ],
      },
      {
        week: 3,
        title: "Design & Prototyping",
        topics: [
          "AI image generation for concepts",
          "Design system documentation",
          "Copy and microcopy generation",
          "Rapid prototyping workflows",
        ],
      },
      {
        week: 4,
        title: "Iteration & Handoff",
        topics: [
          "Design critique with AI",
          "Accessibility audits",
          "Developer handoff documentation",
          "Design token management",
        ],
      },
    ],
    tools: ["Figma AI", "Midjourney", "Claude", "Adobe Firefly"],
    outcome: "From research to polished designs in half the time",
  },
  {
    id: "product",
    name: "Product",
    icon: Briefcase,
    color: "blue",
    description: "Requirements, roadmaps, user stories, and strategic planning with AI",
    weeks: [
      {
        week: 2,
        title: "Discovery & Requirements",
        topics: [
          "User story generation",
          "PRD creation and refinement",
          "Feature prioritization frameworks",
          "Stakeholder interview synthesis",
        ],
      },
      {
        week: 3,
        title: "Strategy & Analysis",
        topics: [
          "Competitive landscape analysis",
          "Market research synthesis",
          "OKR and metric definition",
          "Risk assessment",
        ],
      },
      {
        week: 4,
        title: "Communication",
        topics: [
          "Roadmap presentations",
          "Stakeholder updates",
          "Release notes and changelogs",
          "Customer feedback synthesis",
        ],
      },
    ],
    tools: ["Claude", "Notion AI", "Linear", "Productboard"],
    outcome: "Double your output while improving strategic clarity",
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    icon: Megaphone,
    color: "amber",
    description: "Content creation, outreach, customer insights, and campaign optimization",
    weeks: [
      {
        week: 2,
        title: "Content & Messaging",
        topics: [
          "Blog and article generation",
          "Email sequence creation",
          "Social media content",
          "Brand voice consistency",
        ],
      },
      {
        week: 3,
        title: "Customer Intelligence",
        topics: [
          "Prospect research automation",
          "Call transcript analysis",
          "Competitive positioning",
          "Personalization at scale",
        ],
      },
      {
        week: 4,
        title: "Analytics & Optimization",
        topics: ["Campaign performance analysis", "A/B test interpretation", "Sales forecasting", "Report generation"],
      },
    ],
    tools: ["Claude", "Jasper", "Copy.ai", "HubSpot AI"],
    outcome: "10x content output, personalized at scale",
  },
  {
    id: "ops",
    name: "Operations",
    icon: Settings,
    color: "purple",
    description: "Process documentation, support workflows, and operational automation",
    weeks: [
      {
        week: 2,
        title: "Documentation",
        topics: [
          "SOP and runbook creation",
          "Knowledge base articles",
          "Process documentation",
          "Training material generation",
        ],
      },
      {
        week: 3,
        title: "Support & Service",
        topics: [
          "Response template creation",
          "Ticket categorization",
          "FAQ generation from tickets",
          "Escalation workflows",
        ],
      },
      {
        week: 4,
        title: "Analysis & Reporting",
        topics: ["Operational metrics dashboards", "Trend analysis", "Capacity planning", "Incident postmortems"],
      },
    ],
    tools: ["Claude", "Notion AI", "Zendesk AI", "Confluence"],
    outcome: "Automate routine work, focus on high-impact operations",
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
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/40",
    border: "border-l-amber-500",
    text: "text-amber-700 dark:text-amber-400",
    light: "bg-amber-50 dark:bg-amber-950/30",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/40",
    border: "border-l-purple-500",
    text: "text-purple-700 dark:text-purple-400",
    light: "bg-purple-50 dark:bg-purple-950/30",
  },
};

export function PathDetailsSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-2 text-center font-bold text-2xl">Specialized Tracks (Weeks 2-4)</h2>
      <p className="mb-8 text-center text-foreground/60">Each role follows a customized path during weeks 2-4</p>

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
                <div className="mb-6 grid gap-4 md:grid-cols-3">
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
