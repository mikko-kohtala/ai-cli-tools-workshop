# AI CLI Tools Workshop

Empowering collaborative coding assistance from your terminal

---

## Agenda

- Why Codex CLI matters
- How the CLI harness works
- Working with sandboxing and approvals
- Building effective workflows
- Pro tips and next steps

---

## Codex CLI at a Glance

- Terminal-first interface for GPT-5-based coding agents
- Bridges natural language requests with local tooling
- Hyper-focused on developer velocity and reproducibility
- Respects project constraints while automating routine tasks

---

## Key Concepts

- **Environment Context**: Every session starts with cwd, sandbox, network, and approval settings
- **Plan & Execute**: Agents build lightweight plans before touching code-heavy tasks
- **Tooling Contracts**: Shell, plan, and view_image tools with strict usage guidelines
- **Outputs**: Plain-text responses styled by the CLI; no raw command dumps

---

## Harness Architecture

- **CLI Frontend** wraps prompts, agent replies, and inline diffs
- **Sandbox Layer** enforces filesystem/network policies (read-only, workspace-write, danger)
- **Approval Flow** controls escalations (never, on-request, on-failure, untrusted)
- **Agent Runtime** delivers instructions, templates, and formatting for reliable output

---

## Working with Sandboxing

- Know the active `sandbox_mode` before running commands
- Default to workspace-safe operations; request escalation only if policy allows
- Treat read-only environments as exploratory unless user explicitly asks for changes
- Keep destructive commands off-limits unless user mandates them

---

## Approval Policies in Practice

- **never**: No escalation requests; work around limitations
- **on-request**: Ask for permission via `with_escalated_permissions`
- **on-failure**: Retry only after a sandbox failure justifies it
- **untrusted**: Most commands require user confirmation first

---

## Building Effective Sessions

- Clarify tasks; restate goals when needed
- Draft plans (2+ steps) for non-trivial work and keep them updated
- Summarize changes with file references and command suggestions
- Offer next steps like tests or commits without overstepping

---

## Communication Guidelines

- Be concise, friendly, and structured for quick scanning
- Reference files with clickable paths and precise line numbers
- Avoid raw command outputs; summarize key findings instead
- Use code fences for snippets and inline backticks for literals

---

## Pro Tips for Power Users

- Prefer `rg` for fast searches; specify `workdir` on every shell call
- Use ASCII and add comments only when clarity demands it
- Monitor for unexpected file changes and pause if they appear
- Remember: the CLI styles text—keep formatting minimal but intentional

---

## Demo Flow Idea

- Scope: "Refactor logging module for structured output"
- Plan: Analyze files → draft approach → implement changes → run tests
- Execution: Leverage `shell` for diffs/tests, summarize results with references
- Wrap-up: Provide context, highlight risks, suggest verification steps

---

## Next Steps

- Install and run Codex CLI locally; explore sandbox configurations
- Script common commands (lint/test) for quick reuse in sessions
- Share feedback with the Codex team to refine agent workflows
- Integrate CLI usage into onboarding guides and team playbooks

---

## Q & A

- What workflows can we automate next?
- How should we tune policies for our organization?
- Which repositories benefit most from agent-assisted development?
