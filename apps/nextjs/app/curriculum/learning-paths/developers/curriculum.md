# Developer AI Tools Mastery

**8-week intensive curriculum for experienced developers**

Skip the basics, dive deep into AI-assisted development, and build production-ready agents.

**Target Audience:** Experienced developers new to AI tools
**Format:** 8 weeks, 5 days per week
**Primary Tools:** Claude Code, Claude Agent SDK, MCP, Codex CLI

---

## Week 1: AI-Assisted Development Foundations

*Tools, setup, and effective prompting for code*

This week establishes your AI development environment and core skills. You'll understand the AI CLI tools landscape, configure Claude Code for optimal workflow, and master effective prompting patterns for code generation. By week's end, you'll have a production-ready setup with project-specific AI instructions.

### Objectives

- Understand the AI CLI tools landscape: Claude Code, Codex CLI, Gemini CLI, Amp
- Install and configure Claude Code with optimal settings
- Master effective prompting patterns for code generation
- Set up project-specific AI instructions (CLAUDE.md)
- Establish efficient context management practices
- Understand model selection and when to use different reasoning levels

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | AI CLI Tools Landscape | Overview of Claude Code, Codex CLI, Gemini CLI, Amp, Cursor, and Copilot | Survey available AI coding tools; Understand capabilities and trade-offs of each; Choose tools for your workflow |
| Day 2 | Claude Code Deep Setup | Installation, configuration, model selection, and approval modes | Install Claude Code CLI; Configure API keys and settings; Understand auto-accept vs approval modes; Test different models and reasoning levels |
| Day 3 | Prompting for Code | Describe-generate-refine pattern, constraints, examples in prompts | Practice the describe-generate-refine loop; Write prompts with clear constraints; Use examples to guide output format; Complete 10 code generation tasks |
| Day 4 | Project Configuration | CLAUDE.md, coding standards, memory, .claude directory structure | Create CLAUDE.md for 2-3 real projects; Define coding standards and conventions; Configure project-specific instructions |
| Day 5 | Context Management | Tokens, context windows, /context, /clear, when to reset | Understand token limits and context windows; Practice /context and /clear commands; Learn when to start fresh vs continue |

### Key Skills

- **Tool Selection** - Choosing the right AI tool for different development tasks
- **Prompt Engineering** - Writing effective prompts with constraints and examples
- **Project Setup** - CLAUDE.md configuration and coding standards
- **Context Optimization** - Managing token usage and context windows effectively

### Tools

Claude Code, Codex CLI

### Milestone

Development environment fully configured with CLAUDE.md for primary projects

---

## Week 2: Code Generation & Navigation

*Multi-file editing and codebase exploration*

Master multi-file code generation and codebase navigation. You'll learn to coordinate changes across multiple files, explore unfamiliar codebases with AI assistance, and manage context effectively for large projects. These skills form the foundation of productive AI-assisted development.

### Objectives

- Master multi-file code generation workflows
- Navigate and understand unfamiliar codebases with AI
- Implement features that span multiple modules
- Manage context effectively for large codebases
- Generate documentation from existing code
- Build mental models for AI-assisted exploration

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | Single-File Generation | Component creation, function implementation, refactoring | Generate 5 complete modules from scratch; Practice iterative refinement; Learn to provide good context |
| Day 2 | Multi-File Orchestration | Coordinated changes across files, maintaining consistency | Implement feature spanning 3+ files; Maintain consistency across modules; Handle imports and dependencies |
| Day 3 | Codebase Exploration | Navigation commands, understanding architecture with AI | Explore an unfamiliar open-source project; Map out architecture with AI assistance; Trace data flow through the system |
| Day 4 | Context Strategies | Selective file inclusion, summarization, chunking | Practice with 10K+ line codebase; Use selective context inclusion; Learn summarization techniques |
| Day 5 | Code Understanding | Generate documentation, explain complex code, trace flows | Document an existing module; Explain complex algorithms; Generate API documentation |

### Key Skills

- **Multi-File Editing** - Coordinating changes across multiple files consistently
- **Codebase Navigation** - Exploring and understanding unfamiliar code with AI
- **Architecture Comprehension** - Building mental models of system architecture
- **Documentation Generation** - Creating docs from existing code and patterns

### Tools

Claude Code, GitHub Copilot

### Milestone

Successfully navigate and modify unfamiliar codebase with AI assistance

---

## Week 3: Testing & Quality

*Test generation and AI-assisted code review*

Generate comprehensive test suites with AI assistance. You'll learn to create unit, integration, and E2E tests, identify coverage gaps, and implement AI-powered code review workflows. This week transforms testing from a chore into a high-leverage activity.

### Objectives

- Generate comprehensive test suites with AI assistance
- Achieve and maintain high test coverage
- Implement AI-powered code review workflows
- Use property-based and edge case testing
- Build testing automation pipelines
- Create effective test data and mocks

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | Unit Test Generation | Generate tests from implementation, identify coverage gaps | Generate tests for existing module; Identify untested edge cases; Practice test-driven prompting |
| Day 2 | Integration Testing | API tests, database tests, service mocks | Build integration test suite; Create mock services; Test API endpoints |
| Day 3 | Edge Cases & Property Testing | AI-identified edge cases, fuzzing, property-based testing | Identify 20 edge cases with AI; Implement property-based tests; Test boundary conditions |
| Day 4 | Code Review Workflows | AI-assisted PR review, generating review comments | Review 3 PRs with AI assistance; Generate constructive feedback; Identify security and performance issues |
| Day 5 | Coverage & Quality Gates | Coverage analysis, linting, pre-commit hooks | Set up CI quality gates; Configure coverage thresholds; Implement pre-commit hooks |

### Key Skills

- **Test Generation** - Creating comprehensive tests from implementations
- **Coverage Analysis** - Identifying and filling coverage gaps
- **AI Code Review** - Using AI to review PRs and provide feedback
- **Quality Automation** - Setting up automated quality gates and checks

### Tools

Claude Code, Playwright, Jest/Vitest

### Milestone

Test suite with 80%+ coverage and automated quality gates

---

## Week 4: Debugging & Performance

*Systematic debugging and optimization*

Master systematic debugging with AI assistance. You'll analyze logs, interpret stack traces, profile applications, and identify performance bottlenecks. This week builds the skills to diagnose and fix complex issues efficiently.

### Objectives

- Master systematic debugging workflows with AI
- Analyze and interpret logs, stack traces, and error messages
- Identify and fix performance bottlenecks
- Profile applications and optimize hot paths
- Build debugging playbooks for common issues
- Implement monitoring and observability

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | Systematic Debugging | Error analysis, hypothesis generation, root cause finding | Debug 5 real bugs with AI; Practice hypothesis-driven debugging; Document root cause analysis |
| Day 2 | Log Analysis | Parse logs, identify patterns, correlate events | Analyze production log samples; Build log parsing prompts; Correlate events across services |
| Day 3 | Stack Trace Investigation | Understand traces, find root causes, fix error chains | Debug 3 complex stack traces; Trace through async operations; Fix cascading errors |
| Day 4 | Performance Profiling | CPU/memory profiling, flame graphs, bottleneck identification | Profile an application; Read and interpret flame graphs; Identify hot paths |
| Day 5 | Optimization Patterns | Algorithmic improvements, caching, lazy loading | Implement 5 optimizations; Add caching where appropriate; Measure improvement metrics |

### Key Skills

- **Root Cause Analysis** - Systematically finding the source of bugs
- **Log Correlation** - Connecting events across logs and services
- **Performance Profiling** - Using profilers to identify bottlenecks
- **Optimization Strategies** - Applying the right optimization for each problem

### Tools

Claude Code, Chrome DevTools, Node Profiler

### Milestone

Debug complex issue and achieve 50% performance improvement in target area

---

## Week 5: Architecture & Refactoring

*Large-scale changes and API design*

Execute large-scale refactoring with AI guidance. You'll migrate legacy code, design APIs, document architectural decisions, and apply design patterns. This week develops the skills for significant codebase evolution.

### Objectives

- Execute large-scale refactoring with AI guidance
- Migrate legacy code to modern patterns
- Design and review API architectures
- Document architectural decisions (ADRs)
- Apply design patterns with AI assistance
- Plan and execute breaking changes safely

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | Refactoring Patterns | Extract, rename, move, inline with AI coordination | Refactor 3 large modules; Practice extract method/class; Maintain test coverage during refactoring |
| Day 2 | Legacy Migration | Identify patterns, plan migration, execute safely | Migrate a legacy module; Update deprecated patterns; Maintain backwards compatibility |
| Day 3 | API Design | RESTful design, GraphQL schemas, OpenAPI specs | Design API with AI assistance; Generate OpenAPI specification; Review API for consistency |
| Day 4 | Architecture Documentation | Document current state, write ADRs, identify improvements | Write an ADR with AI; Document system architecture; Identify technical debt |
| Day 5 | Design Patterns | Apply patterns with AI, recognize anti-patterns | Implement 3 design patterns; Identify and fix anti-patterns; Refactor to improve structure |

### Key Skills

- **Safe Refactoring** - Making large changes without breaking functionality
- **Legacy Handling** - Modernizing old code while maintaining stability
- **API Design** - Creating consistent, well-documented APIs
- **Architecture Docs** - Writing ADRs and system documentation

### Tools

Claude Code, Cursor

### Milestone

Major refactoring complete with ADR documentation

---

## Week 6: MCP & Tool Building

*Custom integrations and MCP servers*

Build custom tools using the Model Context Protocol (MCP). You'll understand MCP architecture, create custom servers, integrate with databases and APIs, and deploy production tools. This week expands what AI can do for your specific workflows.

### Objectives

- Understand Model Context Protocol (MCP) architecture
- Build custom MCP servers for specific integrations
- Create tools that extend Claude Code capabilities
- Integrate with databases, APIs, and external services
- Design tool interfaces for AI consumption
- Deploy and maintain production MCP servers

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | MCP Fundamentals | Protocol architecture, server/client model, tool schemas | Study MCP specification; Run example MCP servers; Understand tool schemas |
| Day 2 | Building MCP Servers | Create server with custom tools, test locally | Build simple MCP server; Define tool schemas; Test with Claude Code |
| Day 3 | Database Integration | Connect to databases, query generation, data tools | Build database MCP server; Implement query tools; Add data exploration features |
| Day 4 | API Integration | External API tools, authentication, rate limiting | Build API integration server; Handle authentication; Implement rate limiting |
| Day 5 | Advanced MCP | Resources, prompts, streaming, production deployment | Add resources and prompts; Implement streaming; Deploy MCP server |

### Key Skills

- **MCP Protocol** - Understanding the Model Context Protocol architecture
- **Tool Development** - Building custom tools for AI consumption
- **Integration Patterns** - Connecting AI to databases and external APIs
- **Production Deployment** - Deploying and maintaining MCP servers

### Tools

Claude Code, MCP SDK, TypeScript/Python

### Milestone

Working MCP server deployed with 3+ custom tools

---

## Week 7: Agents & Automation

*Building autonomous coding agents*

Build autonomous agents using the Claude Agent SDK. You'll understand agent architecture, implement agent loops, create multi-agent systems, and add production guardrails. This week unlocks the power of AI agents for automated development workflows.

### Objectives

- Understand agent architecture and the agent loop
- Build agents using Claude Agent SDK
- Implement multi-agent orchestration patterns
- Add guardrails, approval flows, and safety measures
- Create agents for specific development workflows
- Handle context management and memory in agents

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | Agent Fundamentals | Agent vs workflow, ReAct pattern, agent loops | Study Claude Agent SDK; Understand ReAct pattern; Run example agents |
| Day 2 | Building Your First Agent | SDK setup, tool registration, basic agent implementation | Build code review agent; Register custom tools; Implement basic agent loop |
| Day 3 | Context & Memory | Automatic context, summarization, persistent memory | Implement context strategies; Add memory to agents; Handle long conversations |
| Day 4 | Multi-Agent Systems | Orchestrator-worker, pipelines, agent handoffs | Build 2-agent system; Implement orchestrator pattern; Handle agent communication |
| Day 5 | Safety & Guardrails | Approval flows, sandboxing, rate limits, boundaries | Add production guardrails; Implement approval flows; Set agent boundaries |

### Key Skills

- **Agent Architecture** - Understanding how AI agents work and loop
- **Claude Agent SDK** - Building agents with the official SDK
- **Multi-Agent Patterns** - Orchestrating multiple agents together
- **Production Safety** - Implementing guardrails and approval flows

### Tools

Claude Agent SDK, Claude Code

### Milestone

Working agent with custom tools and safety guardrails

---

## Week 8: Production Workflows & Capstone

*CI/CD, team practices, and final project*

Bring it all together with production workflows and a capstone project. You'll set up CI/CD with AI, establish team practices, and complete an end-to-end project demonstrating your full capabilities. This week solidifies your skills for real-world application.

### Objectives

- Set up CI/CD pipelines with AI assistance
- Implement team AI workflows and best practices
- Complete capstone project demonstrating full capabilities
- Deploy agent-augmented application to production
- Document and share learnings with team
- Build sustainable AI-assisted development habits

### Daily Breakdown

| Day | Topic | Description | Tasks |
|-----|-------|-------------|-------|
| Day 1 | CI/CD with AI | GitHub Actions generation, test automation, deployment | Generate CI/CD pipeline; Automate test runs; Set up deployment workflow |
| Day 2 | Team Workflows | Shared prompts, team guidelines, onboarding materials | Create team AI playbook; Document best practices; Build onboarding guide |
| Day 3 | Capstone: Design | Define requirements, plan architecture, design with AI | Define capstone requirements; Design architecture; Plan implementation |
| Day 4 | Capstone: Implement | Build application with agent component, use all learned skills | Implement core features; Build agent component; Write tests |
| Day 5 | Capstone: Deploy & Present | Deploy to production, document, present to stakeholders | Deploy application; Write documentation; Present and demo |

### Key Skills

- **CI/CD Automation** - Generating and maintaining CI/CD pipelines
- **Team Practices** - Establishing AI workflows for teams
- **Full-Stack Delivery** - End-to-end project completion with AI
- **Technical Presentation** - Documenting and presenting technical work

### Tools

Claude Code, Claude Agent SDK, GitHub Actions, Docker

### Milestone

Deployed capstone with integrated agent, documented and presented

---

## Summary

| Week | Focus | Milestone |
|------|-------|-----------|
| 1 | Foundations | Dev environment configured with CLAUDE.md |
| 2 | Code Generation | Navigate unfamiliar codebase with AI |
| 3 | Testing | 80%+ coverage with quality gates |
| 4 | Debugging | 50% performance improvement |
| 5 | Architecture | Major refactoring with ADR |
| 6 | MCP | Deployed MCP server with 3+ tools |
| 7 | Agents | Working agent with guardrails |
| 8 | Production | Deployed capstone with agent |

**Total:** 8 weeks, 40 daily topics, production-ready AI development skills
