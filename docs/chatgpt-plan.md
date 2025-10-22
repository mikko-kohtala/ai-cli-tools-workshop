# AI CLI Tools — Working Effectively

_A practical, vendor-neutral presentation deck in one Markdown file._

---

## Agenda

- Intro to AI CLI tooling
- Best practices
- Real-world scenarios
- Common pitfalls (and fixes)
- Comparison & choosing criteria
- Key takeaways

---

## What is an AI CLI?

- Terminal-first assistant that can read/write your repo and run commands in a scoped working directory.
- Operates via a **plan–act–observe** loop (often called **ReAct**): propose steps, execute, observe, iterate.
- Two modes of use:

  - **Interactive**: chat-like session with approvals.
  - **Non-interactive**: single-shot or scripted commands for CI/CD.

- Extensible via **tool adapters** (e.g., local scripts, API clients, documentation servers) so the model doesn’t rely solely on pasted context.

---

## Why many tools feel the same

- Shared primitives: file system access, shell execution, diffing, test running, context/session memory.
- Common safety controls: approval gates for edits/shell/network; scoped to current directory.
- Similar UX patterns: propose plan → show diffs → ask for confirmation → run tests → summarize changes.
- Differentiation usually comes from **plugins**, **policy controls**, **IDE/CI integration**, and **enterprise features**.

---

## Mental model for using AI CLIs

- **Goal → Constraints → Evidence.**

  - **Goal:** specific outcome (“Add `/health` endpoint with test”).
  - **Constraints:** exact files/dirs, coding standards, performance budgets.
  - **Evidence:** passing tests, lint/format, PR summary, changelog entry.

- Treat the agent like a capable pair programmer: small steps, verify often, keep artifacts.

---

## Best practices — Scoping the work

- Work in a **feature branch** with a clean working tree.
- Name **exact files/paths** to touch; avoid “search everywhere” unless necessary.
- Prefer a series of **tiny, verifiable steps** over a single sweeping refactor.

---

## Best practices — Invariants & tests

- State **non-negotiables**: public APIs, types, performance thresholds, security rules.
- Require tests before or during changes; have the agent propose/modify tests.
- Ask for a **PR-style summary** with rationale, risks, and review notes.

---

## Best practices — Approvals & safety

- Start **read-only**, then allow edits; grant shell/network access explicitly.
- Keep **secrets** out of prompts/logs; pass via environment or tool adapters.
- Save transcripts and diffs; they’re useful for audits and retros.

---

## Best practices — Reproducibility & CI

- Capture the **exact commands** executed (logs/scripts).
- Use **non-interactive runs** for repeatable tasks (lint fixups, codegen, doc sync).
- Pin CLI/model versions where possible; keep artifacts to make runs traceable.

---

## Best practices — Cost & latency hygiene

- Break work into small loops to avoid long, expensive sessions.
- Reuse sessions when helpful, but **reset** if context drifts.
- Use the **smallest capable model** for routine maintenance; escalate only when necessary.

---

## Real-world scenario — CI failure triage

- Provide failing logs and the relevant code paths.
- Ask for a minimal, test-backed fix plus a short PR description.
- Convert the fix routine into a **non-interactive** job for future auto-healing.

---

## Real-world scenario — Framework/library upgrade

- Define a **migration checklist** (codemods, config changes, deprecations).
- Constrain edits to specific packages/modules; run tests after each batch.
- Produce a **CHANGELOG** section with clear breaking-change notes.

---

## Real-world scenario — Large-scale refactor

- Lock down invariants (public API unchanged, perf budgets respected).
- Iterate feature-by-feature with small, reviewable commits.
- Combine **static checks + codemods**; let the CLI orchestrate sequencing.

---

## Real-world scenario — API client migration

- Point the agent at **structured docs/specs** via a tool adapter rather than pasting.
- Map endpoints to callsites; generate shims; add **contract tests**.
- Roll out behind a **feature flag**; keep a rollback plan.

---

## Common pitfalls (and how to avoid them)

- **Vague goals →** drifting edits.
  _Fix:_ demand a plan and a checklist before changes.
- **Over-broad permissions →** risky shells/diffs.
  _Fix:_ tighten scopes; approve per capability.
- **No tests →** regressions.
  _Fix:_ create/modify tests first; gate merges on passing checks.
- **Giant prompts/sessions →** slow, costly, inconsistent.
  _Fix:_ scope precisely; list files; run short loops.
- **Non-determinism →** hard to reproduce.
  _Fix:_ pin versions; record commands; store artifacts.

---

## Security & compliance gotchas

- Don’t paste **credentials/PII**; wire them via environment or dedicated tools.
- Prefer **zero-retention**/privacy-preserving modes when handling sensitive data.
- Review **telemetry defaults** and license terms; align with org policy.

---

## Comparison — What actually differs between tools

- **Policy & approvals:** granularity of read/edit/shell/network gates; audit logging depth.
- **Plugin/tooling model:** availability of standardized adapters (e.g., model context protocols), ease of adding custom tools.
- **IDE & CI integration:** how seamlessly interactive and scripted modes coexist.
- **Model flexibility:** vendor-locked vs model-agnostic; ability to switch models per task.
- **Ergonomics:** diff quality, plan explanations, test orchestration, error triage UX.
- **Enterprise readiness:** SSO, permissions, data-handling guarantees, on-prem options.
- **Community & ecosystem:** docs, examples, starter templates, community playbooks.

---

## Choosing criteria (use this, not hype)

- **Task fit:** surgical edits vs large migrations vs recurring maintenance.
- **Workflow fit:** terminal-only, IDE-centric, or CI-first organization.
- **Governance:** approvals, audit trails, secret handling, compliance modes.
- **Extensibility:** plugin/tool adapters you can control; easy to add your internal tools.
- **Total cost to operate:** model/runtime costs, session length, success rate, team learning curve.

---

## Prompt skeletons (vendor-neutral)

- **Plan first:**
  _“Propose a step-by-step plan to accomplish **X**. Constrain changes to **these paths**. List tests you’ll add/modify.”_
- **Do with constraints:**
  _“Implement step 1 only. Touch **A/B** files. Maintain **invariants**. Show diff + commands before executing tests.”_
- **Verify & summarize:**
  _“Run tests/lint. If failing, propose minimal fixes. Then produce a PR summary with risks, follow-ups, and manual checks.”_

---

## Team operating guidelines

- Keep a **playbook**: common prompts, approval rules, and rollback procedures.
- Normalize **small diffs** and frequent verification; avoid hero runs.
- Treat AI CLIs as **sharp power tools**: skill accelerators when disciplined; liability when sloppy.

---

## Key takeaways

- Tools converge on the same core loop; your **workflow discipline** is the differentiator.
- **Scope, tests, and approvals** are the triangle that keeps changes safe.
- Build **repeatable pipelines**: record commands, script non-interactive runs, keep artifacts.
