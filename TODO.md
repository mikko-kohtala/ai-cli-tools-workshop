# AI CLI Tools Workshop - TODO

Workshop preparation for October 28, 2025, 14:00–15:30

## Platform & Infrastructure

### App Structure
- [ ] Simplify to single Next.js app (remove Convex monorepo structure)
- [ ] Remove database packages and authentication dependencies
- [ ] Update package.json with correct dependencies
- [ ] Verify Next.js 15, React 19, Tailwind, shadcn/ui setup

### Pages & Components
- [ ] Build landing page (app/page.tsx) following react-19-workshop pattern
  - Workshop info and objectives
  - Getting started section
  - Navigation to presentation and tasks
  - Author info and links
- [ ] Create presentation page structure (app/presentation/)
  - Convert codex-cli-presentation.md to interactive slides
  - Add section navigation
- [ ] Create task pages structure (app/tasks/[1-4]/)
  - Each task: page.tsx (instructions)
  - Each task: work/page.tsx (workspace for participants)
  - Each task: solution/page.tsx (reference solution)
- [ ] Build AppSidebar component
  - Navigation structure
  - Active state highlighting
  - Links to all sections
- [ ] Create shared layout components
  - Tasks layout with sidebar
  - Breadcrumb navigation
  - Consistent header structure

### Deployment
- [ ] Setup Vercel project
- [ ] Configure deployment settings
- [ ] Verify URL: https://ai-cli-tools-workshop.vercel.app
- [ ] Test production build

---

## Content: Presentation (25 minutes)

### Presentation Slides
- [ ] Introduction to AI CLI Tools
  - Why they matter for developers
  - Landscape overview (Codex CLI, Claude Code, Gemini CLI, etc.)
- [ ] Codex CLI Deep Dive
  - What is Codex CLI
  - How it works (terminal-first, GPT-5-based)
  - Key features and capabilities
- [ ] Architecture & Concepts
  - Sandbox modes and safety
  - Approval policies
  - Plan & Execute workflow
- [ ] Best Practices
  - Effective prompting
  - Working with context
  - Communication patterns
- [ ] Demo & Examples
  - Live demonstration
  - Common workflows
- [ ] Q&A preparation

---

## Content: Workshop Tasks (1 hour)

### Task 1: Getting Started with Codex CLI
- [ ] Define learning objective
- [ ] Write task instructions
  - Install and setup verification
  - First interaction
  - Basic commands
- [ ] Create work template
- [ ] Write reference solution
- [ ] Test task completion flow

### Task 2: Planning & Executing Changes
- [ ] Define learning objective
- [ ] Write task instructions
  - Understanding plan mode
  - Making code changes
  - Reviewing output
- [ ] Create work template with starter code
- [ ] Write reference solution
- [ ] Test task completion flow

### Task 3: Git Workflow with Codex CLI
- [ ] Define learning objective
- [ ] Write task instructions
  - Making commits
  - Reviewing changes
  - Branch management
- [ ] Create work template
- [ ] Write reference solution
- [ ] Test task completion flow

### Task 4: Advanced Usage & Best Practices
- [ ] Define learning objective
- [ ] Write task instructions
  - Multi-step workflows
  - Sandbox configuration
  - Troubleshooting
- [ ] Create work template
- [ ] Write reference solution
- [ ] Test task completion flow

---

## Documentation

### Setup Instructions
- [ ] Write comprehensive Codex CLI setup guide
  - Installation steps
  - Authentication setup
  - Configuration options
  - Troubleshooting common issues
- [ ] Create quick-start checklist
- [ ] Add system requirements
- [ ] Document alternative CLI tools setup (Claude Code, etc.)

### Participant Guide
- [ ] Update README.md with workshop information
  - Workshop objectives and structure
  - Prerequisites
  - How to participate
  - Links to resources
- [ ] Create troubleshooting section
  - Common errors and solutions
  - FAQ
  - Support contact info
- [ ] Add resources section
  - Links to official documentation
  - Community resources
  - Additional learning materials

---

## Pre-Workshop Tasks

### Testing & Validation
- [ ] Test all workshop tasks end-to-end
- [ ] Verify task difficulty and time estimates
- [ ] Test with different experience levels
- [ ] Validate setup instructions on clean environment
- [ ] Check all links and resources

### Communication
- [ ] Share Codex CLI setup instructions with participants (1 week before)
- [ ] Send reminder with links and preparation steps (2-3 days before)
- [ ] Prepare backup materials (in case of technical issues)
- [ ] Create slide deck or presentation materials
- [ ] Test demo examples

### Backup & Contingency
- [ ] Prepare offline/cached versions of resources
- [ ] Create fallback tasks if API/services unavailable
- [ ] Document alternative approaches
- [ ] Prepare troubleshooting scripts

---

## Post-Workshop (Optional)

- [ ] Collect feedback from participants
- [ ] Update materials based on feedback
- [ ] Share recording/materials
- [ ] Document lessons learned
- [ ] Archive to GitHub for future reference
