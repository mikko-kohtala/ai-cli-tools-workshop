import { Briefcase, Code2, type LucideIcon, Palette } from "lucide-react";

export type LearningPath = "developer" | "product" | "design";

export interface PathMeta {
  id: LearningPath;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  tools: string[];
  outcome: string;
}

export interface DailyTopic {
  day: string;
  title: string;
  description: string;
  tasks: string[];
}

export interface PathWeekContent {
  objectives: string[];
  dailyTopics: DailyTopic[];
  tools: string[];
  milestone: string;
}

export interface DivergentWeekData {
  weekNumber: number;
  title: string;
  subtitle: string;
  color: string;
  paths: Record<LearningPath, PathWeekContent>;
}

export const learningPaths: Record<LearningPath, PathMeta> = {
  developer: {
    id: "developer",
    name: "Developer",
    description: "Code generation, testing, debugging, and production-ready AI integrations",
    icon: Code2,
    color: "emerald",
    tools: ["Claude Code", "Codex CLI", "GitHub Copilot", "Cursor"],
    outcome: "Ship production code 2-3x faster with AI assistance",
  },
  product: {
    id: "product",
    name: "Product",
    description: "Requirements, roadmaps, user stories, and strategic planning with AI",
    icon: Briefcase,
    color: "blue",
    tools: ["Claude", "Notion AI", "Linear", "Productboard"],
    outcome: "Double your output while improving strategic clarity",
  },
  design: {
    id: "design",
    name: "Design",
    description: "User research, prototyping, design systems, and visual design with AI",
    icon: Palette,
    color: "pink",
    tools: ["Figma AI", "Midjourney", "Claude", "Adobe Firefly"],
    outcome: "From research to polished designs in half the time",
  },
};

export const colorClasses: Record<string, { bg: string; border: string; text: string; light: string; badge: string }> =
  {
    emerald: {
      bg: "bg-emerald-100 dark:bg-emerald-900/40",
      border: "border-l-emerald-500",
      text: "text-emerald-700 dark:text-emerald-400",
      light: "bg-emerald-50 dark:bg-emerald-950/30",
      badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/40",
      border: "border-l-blue-500",
      text: "text-blue-700 dark:text-blue-400",
      light: "bg-blue-50 dark:bg-blue-950/30",
      badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    pink: {
      bg: "bg-pink-100 dark:bg-pink-900/40",
      border: "border-l-pink-500",
      text: "text-pink-700 dark:text-pink-400",
      light: "bg-pink-50 dark:bg-pink-950/30",
      badge: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/40",
      border: "border-l-purple-500",
      text: "text-purple-700 dark:text-purple-400",
      light: "bg-purple-50 dark:bg-purple-950/30",
      badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
    indigo: {
      bg: "bg-indigo-100 dark:bg-indigo-900/40",
      border: "border-l-indigo-500",
      text: "text-indigo-700 dark:text-indigo-400",
      light: "bg-indigo-50 dark:bg-indigo-950/30",
      badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    },
    amber: {
      bg: "bg-amber-100 dark:bg-amber-900/40",
      border: "border-l-amber-500",
      text: "text-amber-700 dark:text-amber-400",
      light: "bg-amber-50 dark:bg-amber-950/30",
      badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    rose: {
      bg: "bg-rose-100 dark:bg-rose-900/40",
      border: "border-l-rose-500",
      text: "text-rose-700 dark:text-rose-400",
      light: "bg-rose-50 dark:bg-rose-950/30",
      badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
    },
    cyan: {
      bg: "bg-cyan-100 dark:bg-cyan-900/40",
      border: "border-l-cyan-500",
      text: "text-cyan-700 dark:text-cyan-400",
      light: "bg-cyan-50 dark:bg-cyan-950/30",
      badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
  };

// Week summaries for overview
export const weekSummary = [
  { week: 1, title: "Foundations & Mindset", color: "bg-emerald-500", focus: "LLMs, agents, tool setup", shared: true },
  {
    week: 2,
    title: "AI Basics & First Steps",
    color: "bg-blue-500",
    focus: "Prompting, workflows, patterns",
    shared: true,
  },
  { week: 3, title: "Domain Fundamentals", color: "bg-purple-500", focus: "Path-specific foundations", shared: false },
  { week: 4, title: "Core Workflows", color: "bg-indigo-500", focus: "Path-specific techniques", shared: false },
  { week: 5, title: "Advanced Techniques", color: "bg-cyan-500", focus: "Path-specific mastery", shared: false },
  {
    week: 6,
    title: "Integration & Collaboration",
    color: "bg-pink-500",
    focus: "Cross-functional AI use",
    shared: false,
  },
  {
    week: 7,
    title: "Building Agents",
    color: "bg-amber-500",
    focus: "Claude Agent SDK, multi-agent systems",
    shared: true,
  },
  { week: 8, title: "Capstone & Deploy", color: "bg-rose-500", focus: "DevOps, governance, capstone", shared: true },
];

// Divergent weeks content (weeks 3-6)
export const divergentWeeks: DivergentWeekData[] = [
  {
    weekNumber: 3,
    title: "Domain Fundamentals",
    subtitle: "Building foundational skills for your role",
    color: "purple",
    paths: {
      developer: {
        objectives: [
          "Master code generation patterns",
          "Understand tool use for coding agents",
          "Handle multi-file editing workflows",
          "Navigate unfamiliar codebases with AI",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Code Generation Patterns",
            description: "Describe → generate → refine cycle",
            tasks: ["Generate a service layer component", "Practice the refinement loop"],
          },
          {
            day: "Day 2",
            title: "Tool Use Deep Dive",
            description: "How agents use tools: files, shell, web, MCP",
            tasks: ["Observe tool calls in Claude Code", "Understand MCP basics"],
          },
          {
            day: "Day 3",
            title: "Multi-File Editing",
            description: "Coordinated changes across multiple files",
            tasks: ["Implement feature spanning 3+ files", "Refactor with AI assistance"],
          },
          {
            day: "Day 4",
            title: "Codebase Navigation",
            description: "Understanding unfamiliar code with AI",
            tasks: ["Explore unfamiliar codebase", "Generate module summaries"],
          },
          {
            day: "Day 5",
            title: "Context Management",
            description: "Managing context and tool interfaces",
            tasks: ["Practice context management", "Implement core features"],
          },
        ],
        tools: ["Claude Code", "Codex CLI"],
        milestone: "Core features implemented with AI assistance",
      },
      product: {
        objectives: [
          "Generate comprehensive user stories",
          "Create and refine PRDs with AI",
          "Apply prioritization frameworks",
          "Synthesize stakeholder interviews",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "User Story Generation",
            description: "AI-assisted story creation and refinement",
            tasks: ["Generate user stories from requirements", "Refine acceptance criteria"],
          },
          {
            day: "Day 2",
            title: "PRD Creation",
            description: "Building product requirement documents",
            tasks: ["Draft PRD sections with AI", "Review and refine specs"],
          },
          {
            day: "Day 3",
            title: "Prioritization Frameworks",
            description: "RICE, MoSCoW, and impact mapping",
            tasks: ["Score features with AI analysis", "Build prioritization matrix"],
          },
          {
            day: "Day 4",
            title: "Interview Synthesis",
            description: "Processing stakeholder feedback",
            tasks: ["Summarize interview transcripts", "Extract key themes and insights"],
          },
          {
            day: "Day 5",
            title: "Requirements Workshop",
            description: "Running effective requirements sessions",
            tasks: ["Prepare workshop materials with AI", "Document outcomes"],
          },
        ],
        tools: ["Claude", "Notion AI"],
        milestone: "Complete PRD with prioritized backlog",
      },
      design: {
        objectives: [
          "Synthesize user research with AI",
          "Create personas and journey maps",
          "Conduct competitive analysis",
          "Generate design briefs",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Research Synthesis",
            description: "Processing user research data",
            tasks: ["Summarize research findings", "Identify patterns and themes"],
          },
          {
            day: "Day 2",
            title: "Persona Creation",
            description: "Building data-driven personas",
            tasks: ["Generate persona drafts", "Refine with real data"],
          },
          {
            day: "Day 3",
            title: "Journey Mapping",
            description: "Visualizing user experiences",
            tasks: ["Map current state journeys", "Identify pain points"],
          },
          {
            day: "Day 4",
            title: "Competitive Analysis",
            description: "Analyzing competitor designs",
            tasks: ["Document competitor patterns", "Identify opportunities"],
          },
          {
            day: "Day 5",
            title: "Design Brief",
            description: "Creating actionable design briefs",
            tasks: ["Generate design brief", "Align with stakeholders"],
          },
        ],
        tools: ["Claude", "Figma AI"],
        milestone: "Research insights documented with design brief",
      },
    },
  },
  {
    weekNumber: 4,
    title: "Core Workflows",
    subtitle: "Mastering essential techniques for your role",
    color: "indigo",
    paths: {
      developer: {
        objectives: [
          "Master test generation strategies",
          "Debug effectively with AI assistance",
          "Implement code review workflows",
          "Analyze performance with AI",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Test Generation",
            description: "AI-generated unit and integration tests",
            tasks: ["Generate test suites", "Review test quality"],
          },
          {
            day: "Day 2",
            title: "Debugging with AI",
            description: "Systematic debugging approaches",
            tasks: ["Debug complex issues with AI", "Document debugging patterns"],
          },
          {
            day: "Day 3",
            title: "Code Review Workflows",
            description: "AI-assisted code review",
            tasks: ["Review PRs with AI assistance", "Generate review comments"],
          },
          {
            day: "Day 4",
            title: "Performance Analysis",
            description: "Finding and fixing bottlenecks",
            tasks: ["Profile application performance", "Optimize with AI suggestions"],
          },
          {
            day: "Day 5",
            title: "Quality Gates",
            description: "Automated quality checks",
            tasks: ["Set up linting with AI", "Implement pre-commit hooks"],
          },
        ],
        tools: ["Claude Code", "GitHub Copilot"],
        milestone: "Test suite with 80%+ coverage, quality gates in place",
      },
      product: {
        objectives: [
          "Analyze competitive landscape",
          "Synthesize market research",
          "Define OKRs and metrics",
          "Conduct risk assessment",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Competitive Analysis",
            description: "Deep dive into competitor strategies",
            tasks: ["Map competitive landscape", "Identify differentiators"],
          },
          {
            day: "Day 2",
            title: "Market Research",
            description: "Synthesizing market data",
            tasks: ["Analyze market trends", "Generate insights report"],
          },
          {
            day: "Day 3",
            title: "OKR Definition",
            description: "Setting measurable objectives",
            tasks: ["Draft OKRs with AI", "Align metrics to goals"],
          },
          {
            day: "Day 4",
            title: "Risk Assessment",
            description: "Identifying and mitigating risks",
            tasks: ["Generate risk matrix", "Plan mitigations"],
          },
          {
            day: "Day 5",
            title: "Strategy Document",
            description: "Bringing it all together",
            tasks: ["Create strategy summary", "Prepare stakeholder presentation"],
          },
        ],
        tools: ["Claude", "Linear"],
        milestone: "Strategy document with OKRs and risk assessment",
      },
      design: {
        objectives: [
          "Generate design concepts with AI",
          "Document design systems",
          "Create copy and microcopy",
          "Build rapid prototypes",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Concept Generation",
            description: "AI-assisted ideation",
            tasks: ["Generate design concepts", "Explore visual directions"],
          },
          {
            day: "Day 2",
            title: "Design Systems",
            description: "Documenting patterns and components",
            tasks: ["Document component library", "Write usage guidelines"],
          },
          {
            day: "Day 3",
            title: "Copy & Microcopy",
            description: "UI text with AI assistance",
            tasks: ["Generate UI copy options", "Refine for brand voice"],
          },
          {
            day: "Day 4",
            title: "Rapid Prototyping",
            description: "Quick iteration on ideas",
            tasks: ["Build interactive prototypes", "Test with stakeholders"],
          },
          {
            day: "Day 5",
            title: "Design Review",
            description: "Critique and refinement",
            tasks: ["Conduct design critique", "Iterate on feedback"],
          },
        ],
        tools: ["Figma AI", "Midjourney"],
        milestone: "Design system documented with prototype ready",
      },
    },
  },
  {
    weekNumber: 5,
    title: "Advanced Techniques",
    subtitle: "Pushing boundaries in your domain",
    color: "cyan",
    paths: {
      developer: {
        objectives: [
          "Implement complex refactoring",
          "Build integrations with AI assistance",
          "Handle legacy code migration",
          "Optimize architecture with AI",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Complex Refactoring",
            description: "Large-scale code transformations",
            tasks: ["Plan refactoring strategy", "Execute with AI assistance"],
          },
          {
            day: "Day 2",
            title: "API Integration",
            description: "Building external integrations",
            tasks: ["Design integration architecture", "Implement with AI help"],
          },
          {
            day: "Day 3",
            title: "Legacy Migration",
            description: "Modernizing existing code",
            tasks: ["Analyze legacy patterns", "Plan migration path"],
          },
          {
            day: "Day 4",
            title: "Architecture Review",
            description: "System design with AI",
            tasks: ["Document current architecture", "Identify improvements"],
          },
          {
            day: "Day 5",
            title: "Technical Documentation",
            description: "AI-assisted docs",
            tasks: ["Generate API documentation", "Write architecture decisions"],
          },
        ],
        tools: ["Claude Code", "Cursor"],
        milestone: "Major refactoring complete with documentation",
      },
      product: {
        objectives: [
          "Create compelling roadmap presentations",
          "Write effective stakeholder updates",
          "Generate release communications",
          "Synthesize customer feedback",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Roadmap Presentations",
            description: "Visual roadmap communication",
            tasks: ["Build roadmap visuals", "Prepare executive summary"],
          },
          {
            day: "Day 2",
            title: "Stakeholder Updates",
            description: "Regular status communication",
            tasks: ["Generate status reports", "Highlight key metrics"],
          },
          {
            day: "Day 3",
            title: "Release Communications",
            description: "Launch and changelog content",
            tasks: ["Write release notes", "Create launch materials"],
          },
          {
            day: "Day 4",
            title: "Feedback Synthesis",
            description: "Processing customer input",
            tasks: ["Analyze feedback themes", "Generate insights report"],
          },
          {
            day: "Day 5",
            title: "Product Narratives",
            description: "Telling the product story",
            tasks: ["Craft product narrative", "Align messaging"],
          },
        ],
        tools: ["Claude", "Productboard"],
        milestone: "Comprehensive product communications ready",
      },
      design: {
        objectives: [
          "Conduct AI-assisted design critique",
          "Perform accessibility audits",
          "Create developer handoff docs",
          "Manage design tokens",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Design Critique",
            description: "Structured feedback with AI",
            tasks: ["Run critique sessions", "Document improvements"],
          },
          {
            day: "Day 2",
            title: "Accessibility Audit",
            description: "WCAG compliance review",
            tasks: ["Audit for accessibility", "Plan remediation"],
          },
          {
            day: "Day 3",
            title: "Developer Handoff",
            description: "Specs and documentation",
            tasks: ["Create spec documentation", "Write implementation notes"],
          },
          {
            day: "Day 4",
            title: "Design Tokens",
            description: "Systematic design variables",
            tasks: ["Define token structure", "Document usage guidelines"],
          },
          {
            day: "Day 5",
            title: "Design QA",
            description: "Quality assurance process",
            tasks: ["Review implemented designs", "Document discrepancies"],
          },
        ],
        tools: ["Figma AI", "Adobe Firefly"],
        milestone: "Accessible designs with complete handoff documentation",
      },
    },
  },
  {
    weekNumber: 6,
    title: "Integration & Collaboration",
    subtitle: "Working across teams with AI",
    color: "pink",
    paths: {
      developer: {
        objectives: [
          "Collaborate with product using AI",
          "Support design implementation",
          "Document for other developers",
          "Build team AI workflows",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Product Collaboration",
            description: "Working with PMs on requirements",
            tasks: ["Review PRDs with AI", "Clarify technical constraints"],
          },
          {
            day: "Day 2",
            title: "Design Implementation",
            description: "Translating designs to code",
            tasks: ["Implement design specs", "Communicate edge cases"],
          },
          {
            day: "Day 3",
            title: "Team Documentation",
            description: "Knowledge sharing",
            tasks: ["Write onboarding docs", "Create runbooks"],
          },
          {
            day: "Day 4",
            title: "AI Workflows",
            description: "Team AI processes",
            tasks: ["Define team AI guidelines", "Share prompt libraries"],
          },
          {
            day: "Day 5",
            title: "Cross-Team Demo",
            description: "Presenting technical work",
            tasks: ["Prepare demo materials", "Present to stakeholders"],
          },
        ],
        tools: ["Claude Code", "GitHub Copilot"],
        milestone: "Team AI workflows documented and shared",
      },
      product: {
        objectives: [
          "Bridge engineering and design",
          "Facilitate cross-team planning",
          "Create shared documentation",
          "Build team AI culture",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Engineering Partnership",
            description: "Working with developers",
            tasks: ["Technical feasibility review", "Scope discussions with AI"],
          },
          {
            day: "Day 2",
            title: "Design Alignment",
            description: "Collaborating with designers",
            tasks: ["Design review sessions", "UX requirements clarity"],
          },
          {
            day: "Day 3",
            title: "Cross-Team Planning",
            description: "Coordinating dependencies",
            tasks: ["Map dependencies with AI", "Create alignment docs"],
          },
          {
            day: "Day 4",
            title: "Shared Knowledge",
            description: "Building team resources",
            tasks: ["Create knowledge base", "Document best practices"],
          },
          {
            day: "Day 5",
            title: "AI Culture",
            description: "Promoting AI adoption",
            tasks: ["Share AI wins", "Train team on tools"],
          },
        ],
        tools: ["Claude", "Notion AI"],
        milestone: "Cross-team AI collaboration playbook",
      },
      design: {
        objectives: [
          "Partner with engineering effectively",
          "Align with product on vision",
          "Share design knowledge",
          "Evangelize AI in design",
        ],
        dailyTopics: [
          {
            day: "Day 1",
            title: "Engineering Partnership",
            description: "Supporting implementation",
            tasks: ["Review implementation", "Provide design support"],
          },
          {
            day: "Day 2",
            title: "Product Alignment",
            description: "Vision and strategy sync",
            tasks: ["Align on product vision", "Design for strategy"],
          },
          {
            day: "Day 3",
            title: "Design Knowledge",
            description: "Sharing design expertise",
            tasks: ["Create design guidelines", "Train team on systems"],
          },
          {
            day: "Day 4",
            title: "AI in Design",
            description: "Promoting AI tools",
            tasks: ["Demo AI design tools", "Share workflows"],
          },
          {
            day: "Day 5",
            title: "Portfolio Review",
            description: "Showcasing work",
            tasks: ["Prepare portfolio", "Present design journey"],
          },
        ],
        tools: ["Figma AI", "Claude"],
        milestone: "Design AI toolkit and guidelines shared",
      },
    },
  },
];

export function getDivergentWeek(weekNumber: number): DivergentWeekData | undefined {
  return divergentWeeks.find((w) => w.weekNumber === weekNumber);
}

export function getPathContent(weekNumber: number, path: LearningPath): PathWeekContent | undefined {
  const week = getDivergentWeek(weekNumber);
  return week?.paths[path];
}

// Shared weeks data (weeks 1, 2, 7, 8)
export interface SharedWeekData {
  weekNumber: number;
  title: string;
  subtitle: string;
  color: string;
  objectives: string[];
}

export const sharedWeeks: SharedWeekData[] = [
  {
    weekNumber: 1,
    title: "Foundations & Mindset",
    subtitle: "Understanding AI, agents, and the right mental model",
    color: "emerald",
    objectives: [
      "Understand what LLMs are and are not good at",
      "Learn what makes AI 'agentic' vs simple chat",
      "Install and configure Claude Code and Codex CLI",
      "Set up project configuration (CLAUDE.md)",
      "Understand safety: approval modes and sandboxing",
    ],
  },
  {
    weekNumber: 2,
    title: "Planning & Agentic Patterns",
    subtitle: "Workflows, planning, and when to use agents",
    color: "blue",
    objectives: [
      "Understand workflows vs autonomous agents",
      "Learn the 5 core agentic workflow patterns",
      "Master Claude Code's planning mode",
      "Understand ReAct: reasoning before acting",
      "Start core project: scaffold and architecture",
    ],
  },
  {
    weekNumber: 7,
    title: "Building Agents",
    subtitle: "Creating production-ready agents with Claude Agent SDK",
    color: "amber",
    objectives: [
      "Set up and understand the Claude Agent SDK",
      "Build custom tools for your agents",
      "Implement agent loops with context management",
      "Create multi-agent systems with orchestration",
      "Add safety guardrails and approval workflows",
    ],
  },
  {
    weekNumber: 8,
    title: "Capstone & Deploy",
    subtitle: "DevOps essentials, enterprise AI, and capstone",
    color: "rose",
    objectives: [
      "Set up CI/CD pipelines and containerization",
      "Understand AI governance and security",
      "Complete capstone project with agent component",
      "Reflect on AI-assisted development practices",
    ],
  },
];

export function getSharedWeek(weekNumber: number): SharedWeekData | undefined {
  return sharedWeeks.find((w) => w.weekNumber === weekNumber);
}
