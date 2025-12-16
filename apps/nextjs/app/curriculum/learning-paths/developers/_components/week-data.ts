import {
  Bot,
  Bug,
  Code2,
  Layers,
  Rocket,
  Terminal,
  TestTube,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DailyTopic {
  day: string;
  title: string;
  description: string;
  tasks: string[];
}

export interface KeySkill {
  name: string;
  description: string;
}

export interface DeveloperWeek {
  weekNumber: number;
  title: string;
  subtitle: string;
  color: string;
  colorClasses: {
    bg: string;
    bgLight: string;
    text: string;
    border: string;
  };
  icon: LucideIcon;
  overview: string;
  objectives: string[];
  dailyTopics: DailyTopic[];
  keySkills: KeySkill[];
  tools: string[];
  milestone: string;
}

export const developerWeeks: DeveloperWeek[] = [
  {
    weekNumber: 1,
    title: "AI-Assisted Development Foundations",
    subtitle: "Tools, setup, and effective prompting for code",
    color: "emerald",
    colorClasses: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-500",
    },
    icon: Terminal,
    overview:
      "This week establishes your AI development environment and core skills. You'll understand the AI CLI tools landscape, configure Claude Code for optimal workflow, and master effective prompting patterns for code generation. By week's end, you'll have a production-ready setup with project-specific AI instructions.",
    objectives: [
      "Understand the AI CLI tools landscape: Claude Code, Codex CLI, Gemini CLI, Amp",
      "Install and configure Claude Code with optimal settings",
      "Master effective prompting patterns for code generation",
      "Set up project-specific AI instructions (CLAUDE.md)",
      "Establish efficient context management practices",
      "Understand model selection and when to use different reasoning levels",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "AI CLI Tools Landscape",
        description:
          "Overview of Claude Code, Codex CLI, Gemini CLI, Amp, Cursor, and Copilot",
        tasks: [
          "Survey available AI coding tools",
          "Understand capabilities and trade-offs of each",
          "Choose tools for your workflow",
        ],
      },
      {
        day: "Day 2",
        title: "Claude Code Deep Setup",
        description:
          "Installation, configuration, model selection, and approval modes",
        tasks: [
          "Install Claude Code CLI",
          "Configure API keys and settings",
          "Understand auto-accept vs approval modes",
          "Test different models and reasoning levels",
        ],
      },
      {
        day: "Day 3",
        title: "Prompting for Code",
        description:
          "Describe-generate-refine pattern, constraints, examples in prompts",
        tasks: [
          "Practice the describe-generate-refine loop",
          "Write prompts with clear constraints",
          "Use examples to guide output format",
          "Complete 10 code generation tasks",
        ],
      },
      {
        day: "Day 4",
        title: "Project Configuration",
        description:
          "CLAUDE.md, coding standards, memory, .claude directory structure",
        tasks: [
          "Create CLAUDE.md for 2-3 real projects",
          "Define coding standards and conventions",
          "Configure project-specific instructions",
        ],
      },
      {
        day: "Day 5",
        title: "Context Management",
        description:
          "Tokens, context windows, /context, /clear, when to reset",
        tasks: [
          "Understand token limits and context windows",
          "Practice /context and /clear commands",
          "Learn when to start fresh vs continue",
        ],
      },
    ],
    keySkills: [
      {
        name: "Tool Selection",
        description: "Choosing the right AI tool for different development tasks",
      },
      {
        name: "Prompt Engineering",
        description: "Writing effective prompts with constraints and examples",
      },
      {
        name: "Project Setup",
        description: "CLAUDE.md configuration and coding standards",
      },
      {
        name: "Context Optimization",
        description: "Managing token usage and context windows effectively",
      },
    ],
    tools: ["Claude Code", "Codex CLI"],
    milestone:
      "Development environment fully configured with CLAUDE.md for primary projects",
  },
  {
    weekNumber: 2,
    title: "Code Generation & Navigation",
    subtitle: "Multi-file editing and codebase exploration",
    color: "blue",
    colorClasses: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      bgLight: "bg-blue-50 dark:bg-blue-950/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-500",
    },
    icon: Code2,
    overview:
      "Master multi-file code generation and codebase navigation. You'll learn to coordinate changes across multiple files, explore unfamiliar codebases with AI assistance, and manage context effectively for large projects. These skills form the foundation of productive AI-assisted development.",
    objectives: [
      "Master multi-file code generation workflows",
      "Navigate and understand unfamiliar codebases with AI",
      "Implement features that span multiple modules",
      "Manage context effectively for large codebases",
      "Generate documentation from existing code",
      "Build mental models for AI-assisted exploration",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "Single-File Generation",
        description: "Component creation, function implementation, refactoring",
        tasks: [
          "Generate 5 complete modules from scratch",
          "Practice iterative refinement",
          "Learn to provide good context",
        ],
      },
      {
        day: "Day 2",
        title: "Multi-File Orchestration",
        description:
          "Coordinated changes across files, maintaining consistency",
        tasks: [
          "Implement feature spanning 3+ files",
          "Maintain consistency across modules",
          "Handle imports and dependencies",
        ],
      },
      {
        day: "Day 3",
        title: "Codebase Exploration",
        description: "Navigation commands, understanding architecture with AI",
        tasks: [
          "Explore an unfamiliar open-source project",
          "Map out architecture with AI assistance",
          "Trace data flow through the system",
        ],
      },
      {
        day: "Day 4",
        title: "Context Strategies",
        description: "Selective file inclusion, summarization, chunking",
        tasks: [
          "Practice with 10K+ line codebase",
          "Use selective context inclusion",
          "Learn summarization techniques",
        ],
      },
      {
        day: "Day 5",
        title: "Code Understanding",
        description:
          "Generate documentation, explain complex code, trace flows",
        tasks: [
          "Document an existing module",
          "Explain complex algorithms",
          "Generate API documentation",
        ],
      },
    ],
    keySkills: [
      {
        name: "Multi-File Editing",
        description: "Coordinating changes across multiple files consistently",
      },
      {
        name: "Codebase Navigation",
        description: "Exploring and understanding unfamiliar code with AI",
      },
      {
        name: "Architecture Comprehension",
        description: "Building mental models of system architecture",
      },
      {
        name: "Documentation Generation",
        description: "Creating docs from existing code and patterns",
      },
    ],
    tools: ["Claude Code", "GitHub Copilot"],
    milestone:
      "Successfully navigate and modify unfamiliar codebase with AI assistance",
  },
  {
    weekNumber: 3,
    title: "Testing & Quality",
    subtitle: "Test generation and AI-assisted code review",
    color: "purple",
    colorClasses: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      bgLight: "bg-purple-50 dark:bg-purple-950/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-500",
    },
    icon: TestTube,
    overview:
      "Generate comprehensive test suites with AI assistance. You'll learn to create unit, integration, and E2E tests, identify coverage gaps, and implement AI-powered code review workflows. This week transforms testing from a chore into a high-leverage activity.",
    objectives: [
      "Generate comprehensive test suites with AI assistance",
      "Achieve and maintain high test coverage",
      "Implement AI-powered code review workflows",
      "Use property-based and edge case testing",
      "Build testing automation pipelines",
      "Create effective test data and mocks",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "Unit Test Generation",
        description: "Generate tests from implementation, identify coverage gaps",
        tasks: [
          "Generate tests for existing module",
          "Identify untested edge cases",
          "Practice test-driven prompting",
        ],
      },
      {
        day: "Day 2",
        title: "Integration Testing",
        description: "API tests, database tests, service mocks",
        tasks: [
          "Build integration test suite",
          "Create mock services",
          "Test API endpoints",
        ],
      },
      {
        day: "Day 3",
        title: "Edge Cases & Property Testing",
        description: "AI-identified edge cases, fuzzing, property-based testing",
        tasks: [
          "Identify 20 edge cases with AI",
          "Implement property-based tests",
          "Test boundary conditions",
        ],
      },
      {
        day: "Day 4",
        title: "Code Review Workflows",
        description: "AI-assisted PR review, generating review comments",
        tasks: [
          "Review 3 PRs with AI assistance",
          "Generate constructive feedback",
          "Identify security and performance issues",
        ],
      },
      {
        day: "Day 5",
        title: "Coverage & Quality Gates",
        description: "Coverage analysis, linting, pre-commit hooks",
        tasks: [
          "Set up CI quality gates",
          "Configure coverage thresholds",
          "Implement pre-commit hooks",
        ],
      },
    ],
    keySkills: [
      {
        name: "Test Generation",
        description: "Creating comprehensive tests from implementations",
      },
      {
        name: "Coverage Analysis",
        description: "Identifying and filling coverage gaps",
      },
      {
        name: "AI Code Review",
        description: "Using AI to review PRs and provide feedback",
      },
      {
        name: "Quality Automation",
        description: "Setting up automated quality gates and checks",
      },
    ],
    tools: ["Claude Code", "Playwright", "Jest/Vitest"],
    milestone: "Test suite with 80%+ coverage and automated quality gates",
  },
  {
    weekNumber: 4,
    title: "Debugging & Performance",
    subtitle: "Systematic debugging and optimization",
    color: "indigo",
    colorClasses: {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      bgLight: "bg-indigo-50 dark:bg-indigo-950/30",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-500",
    },
    icon: Bug,
    overview:
      "Master systematic debugging with AI assistance. You'll analyze logs, interpret stack traces, profile applications, and identify performance bottlenecks. This week builds the skills to diagnose and fix complex issues efficiently.",
    objectives: [
      "Master systematic debugging workflows with AI",
      "Analyze and interpret logs, stack traces, and error messages",
      "Identify and fix performance bottlenecks",
      "Profile applications and optimize hot paths",
      "Build debugging playbooks for common issues",
      "Implement monitoring and observability",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "Systematic Debugging",
        description: "Error analysis, hypothesis generation, root cause finding",
        tasks: [
          "Debug 5 real bugs with AI",
          "Practice hypothesis-driven debugging",
          "Document root cause analysis",
        ],
      },
      {
        day: "Day 2",
        title: "Log Analysis",
        description: "Parse logs, identify patterns, correlate events",
        tasks: [
          "Analyze production log samples",
          "Build log parsing prompts",
          "Correlate events across services",
        ],
      },
      {
        day: "Day 3",
        title: "Stack Trace Investigation",
        description: "Understand traces, find root causes, fix error chains",
        tasks: [
          "Debug 3 complex stack traces",
          "Trace through async operations",
          "Fix cascading errors",
        ],
      },
      {
        day: "Day 4",
        title: "Performance Profiling",
        description: "CPU/memory profiling, flame graphs, bottleneck identification",
        tasks: [
          "Profile an application",
          "Read and interpret flame graphs",
          "Identify hot paths",
        ],
      },
      {
        day: "Day 5",
        title: "Optimization Patterns",
        description: "Algorithmic improvements, caching, lazy loading",
        tasks: [
          "Implement 5 optimizations",
          "Add caching where appropriate",
          "Measure improvement metrics",
        ],
      },
    ],
    keySkills: [
      {
        name: "Root Cause Analysis",
        description: "Systematically finding the source of bugs",
      },
      {
        name: "Log Correlation",
        description: "Connecting events across logs and services",
      },
      {
        name: "Performance Profiling",
        description: "Using profilers to identify bottlenecks",
      },
      {
        name: "Optimization Strategies",
        description: "Applying the right optimization for each problem",
      },
    ],
    tools: ["Claude Code", "Chrome DevTools", "Node Profiler"],
    milestone:
      "Debug complex issue and achieve 50% performance improvement in target area",
  },
  {
    weekNumber: 5,
    title: "Architecture & Refactoring",
    subtitle: "Large-scale changes and API design",
    color: "cyan",
    colorClasses: {
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      bgLight: "bg-cyan-50 dark:bg-cyan-950/30",
      text: "text-cyan-600 dark:text-cyan-400",
      border: "border-cyan-500",
    },
    icon: Layers,
    overview:
      "Execute large-scale refactoring with AI guidance. You'll migrate legacy code, design APIs, document architectural decisions, and apply design patterns. This week develops the skills for significant codebase evolution.",
    objectives: [
      "Execute large-scale refactoring with AI guidance",
      "Migrate legacy code to modern patterns",
      "Design and review API architectures",
      "Document architectural decisions (ADRs)",
      "Apply design patterns with AI assistance",
      "Plan and execute breaking changes safely",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "Refactoring Patterns",
        description: "Extract, rename, move, inline with AI coordination",
        tasks: [
          "Refactor 3 large modules",
          "Practice extract method/class",
          "Maintain test coverage during refactoring",
        ],
      },
      {
        day: "Day 2",
        title: "Legacy Migration",
        description: "Identify patterns, plan migration, execute safely",
        tasks: [
          "Migrate a legacy module",
          "Update deprecated patterns",
          "Maintain backwards compatibility",
        ],
      },
      {
        day: "Day 3",
        title: "API Design",
        description: "RESTful design, GraphQL schemas, OpenAPI specs",
        tasks: [
          "Design API with AI assistance",
          "Generate OpenAPI specification",
          "Review API for consistency",
        ],
      },
      {
        day: "Day 4",
        title: "Architecture Documentation",
        description: "Document current state, write ADRs, identify improvements",
        tasks: [
          "Write an ADR with AI",
          "Document system architecture",
          "Identify technical debt",
        ],
      },
      {
        day: "Day 5",
        title: "Design Patterns",
        description: "Apply patterns with AI, recognize anti-patterns",
        tasks: [
          "Implement 3 design patterns",
          "Identify and fix anti-patterns",
          "Refactor to improve structure",
        ],
      },
    ],
    keySkills: [
      {
        name: "Safe Refactoring",
        description: "Making large changes without breaking functionality",
      },
      {
        name: "Legacy Handling",
        description: "Modernizing old code while maintaining stability",
      },
      {
        name: "API Design",
        description: "Creating consistent, well-documented APIs",
      },
      {
        name: "Architecture Docs",
        description: "Writing ADRs and system documentation",
      },
    ],
    tools: ["Claude Code", "Cursor"],
    milestone: "Major refactoring complete with ADR documentation",
  },
  {
    weekNumber: 6,
    title: "MCP & Tool Building",
    subtitle: "Custom integrations and MCP servers",
    color: "pink",
    colorClasses: {
      bg: "bg-pink-100 dark:bg-pink-900/30",
      bgLight: "bg-pink-50 dark:bg-pink-950/30",
      text: "text-pink-600 dark:text-pink-400",
      border: "border-pink-500",
    },
    icon: Wrench,
    overview:
      "Build custom tools using the Model Context Protocol (MCP). You'll understand MCP architecture, create custom servers, integrate with databases and APIs, and deploy production tools. This week expands what AI can do for your specific workflows.",
    objectives: [
      "Understand Model Context Protocol (MCP) architecture",
      "Build custom MCP servers for specific integrations",
      "Create tools that extend Claude Code capabilities",
      "Integrate with databases, APIs, and external services",
      "Design tool interfaces for AI consumption",
      "Deploy and maintain production MCP servers",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "MCP Fundamentals",
        description: "Protocol architecture, server/client model, tool schemas",
        tasks: [
          "Study MCP specification",
          "Run example MCP servers",
          "Understand tool schemas",
        ],
      },
      {
        day: "Day 2",
        title: "Building MCP Servers",
        description: "Create server with custom tools, test locally",
        tasks: [
          "Build simple MCP server",
          "Define tool schemas",
          "Test with Claude Code",
        ],
      },
      {
        day: "Day 3",
        title: "Database Integration",
        description: "Connect to databases, query generation, data tools",
        tasks: [
          "Build database MCP server",
          "Implement query tools",
          "Add data exploration features",
        ],
      },
      {
        day: "Day 4",
        title: "API Integration",
        description: "External API tools, authentication, rate limiting",
        tasks: [
          "Build API integration server",
          "Handle authentication",
          "Implement rate limiting",
        ],
      },
      {
        day: "Day 5",
        title: "Advanced MCP",
        description: "Resources, prompts, streaming, production deployment",
        tasks: [
          "Add resources and prompts",
          "Implement streaming",
          "Deploy MCP server",
        ],
      },
    ],
    keySkills: [
      {
        name: "MCP Protocol",
        description: "Understanding the Model Context Protocol architecture",
      },
      {
        name: "Tool Development",
        description: "Building custom tools for AI consumption",
      },
      {
        name: "Integration Patterns",
        description: "Connecting AI to databases and external APIs",
      },
      {
        name: "Production Deployment",
        description: "Deploying and maintaining MCP servers",
      },
    ],
    tools: ["Claude Code", "MCP SDK", "TypeScript/Python"],
    milestone: "Working MCP server deployed with 3+ custom tools",
  },
  {
    weekNumber: 7,
    title: "Agents & Automation",
    subtitle: "Building autonomous coding agents",
    color: "amber",
    colorClasses: {
      bg: "bg-amber-100 dark:bg-amber-900/30",
      bgLight: "bg-amber-50 dark:bg-amber-950/30",
      text: "text-amber-600 dark:text-amber-400",
      border: "border-amber-500",
    },
    icon: Bot,
    overview:
      "Build autonomous agents using the Claude Agent SDK. You'll understand agent architecture, implement agent loops, create multi-agent systems, and add production guardrails. This week unlocks the power of AI agents for automated development workflows.",
    objectives: [
      "Understand agent architecture and the agent loop",
      "Build agents using Claude Agent SDK",
      "Implement multi-agent orchestration patterns",
      "Add guardrails, approval flows, and safety measures",
      "Create agents for specific development workflows",
      "Handle context management and memory in agents",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "Agent Fundamentals",
        description: "Agent vs workflow, ReAct pattern, agent loops",
        tasks: [
          "Study Claude Agent SDK",
          "Understand ReAct pattern",
          "Run example agents",
        ],
      },
      {
        day: "Day 2",
        title: "Building Your First Agent",
        description: "SDK setup, tool registration, basic agent implementation",
        tasks: [
          "Build code review agent",
          "Register custom tools",
          "Implement basic agent loop",
        ],
      },
      {
        day: "Day 3",
        title: "Context & Memory",
        description: "Automatic context, summarization, persistent memory",
        tasks: [
          "Implement context strategies",
          "Add memory to agents",
          "Handle long conversations",
        ],
      },
      {
        day: "Day 4",
        title: "Multi-Agent Systems",
        description: "Orchestrator-worker, pipelines, agent handoffs",
        tasks: [
          "Build 2-agent system",
          "Implement orchestrator pattern",
          "Handle agent communication",
        ],
      },
      {
        day: "Day 5",
        title: "Safety & Guardrails",
        description: "Approval flows, sandboxing, rate limits, boundaries",
        tasks: [
          "Add production guardrails",
          "Implement approval flows",
          "Set agent boundaries",
        ],
      },
    ],
    keySkills: [
      {
        name: "Agent Architecture",
        description: "Understanding how AI agents work and loop",
      },
      {
        name: "Claude Agent SDK",
        description: "Building agents with the official SDK",
      },
      {
        name: "Multi-Agent Patterns",
        description: "Orchestrating multiple agents together",
      },
      {
        name: "Production Safety",
        description: "Implementing guardrails and approval flows",
      },
    ],
    tools: ["Claude Agent SDK", "Claude Code"],
    milestone: "Working agent with custom tools and safety guardrails",
  },
  {
    weekNumber: 8,
    title: "Production Workflows & Capstone",
    subtitle: "CI/CD, team practices, and final project",
    color: "rose",
    colorClasses: {
      bg: "bg-rose-100 dark:bg-rose-900/30",
      bgLight: "bg-rose-50 dark:bg-rose-950/30",
      text: "text-rose-600 dark:text-rose-400",
      border: "border-rose-500",
    },
    icon: Rocket,
    overview:
      "Bring it all together with production workflows and a capstone project. You'll set up CI/CD with AI, establish team practices, and complete an end-to-end project demonstrating your full capabilities. This week solidifies your skills for real-world application.",
    objectives: [
      "Set up CI/CD pipelines with AI assistance",
      "Implement team AI workflows and best practices",
      "Complete capstone project demonstrating full capabilities",
      "Deploy agent-augmented application to production",
      "Document and share learnings with team",
      "Build sustainable AI-assisted development habits",
    ],
    dailyTopics: [
      {
        day: "Day 1",
        title: "CI/CD with AI",
        description: "GitHub Actions generation, test automation, deployment",
        tasks: [
          "Generate CI/CD pipeline",
          "Automate test runs",
          "Set up deployment workflow",
        ],
      },
      {
        day: "Day 2",
        title: "Team Workflows",
        description: "Shared prompts, team guidelines, onboarding materials",
        tasks: [
          "Create team AI playbook",
          "Document best practices",
          "Build onboarding guide",
        ],
      },
      {
        day: "Day 3",
        title: "Capstone: Design",
        description: "Define requirements, plan architecture, design with AI",
        tasks: [
          "Define capstone requirements",
          "Design architecture",
          "Plan implementation",
        ],
      },
      {
        day: "Day 4",
        title: "Capstone: Implement",
        description:
          "Build application with agent component, use all learned skills",
        tasks: [
          "Implement core features",
          "Build agent component",
          "Write tests",
        ],
      },
      {
        day: "Day 5",
        title: "Capstone: Deploy & Present",
        description: "Deploy to production, document, present to stakeholders",
        tasks: [
          "Deploy application",
          "Write documentation",
          "Present and demo",
        ],
      },
    ],
    keySkills: [
      {
        name: "CI/CD Automation",
        description: "Generating and maintaining CI/CD pipelines",
      },
      {
        name: "Team Practices",
        description: "Establishing AI workflows for teams",
      },
      {
        name: "Full-Stack Delivery",
        description: "End-to-end project completion with AI",
      },
      {
        name: "Technical Presentation",
        description: "Documenting and presenting technical work",
      },
    ],
    tools: ["Claude Code", "Claude Agent SDK", "GitHub Actions", "Docker"],
    milestone: "Deployed capstone with integrated agent, documented and presented",
  },
];
