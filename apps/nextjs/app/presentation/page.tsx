import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const agendaSegments = [
  {
    title: "Orientation & Goals",
    duration: "5 min",
    description:
      "Set expectations for the session, introduce the workshop flow, and highlight how Codex CLI supports collaborative development teams.",
  },
  {
    title: "Codex CLI Foundations",
    duration: "6 min",
    description:
      "Cover the core capabilities of the GPT-5-based agent, the local-first philosophy, and how the CLI harness mediates every interaction.",
  },
  {
    title: "Sandboxing & Approvals",
    duration: "5 min",
    description:
      "Explain how sandbox policies keep workspaces safe, and show how approval modes influence the commands an agent can run.",
  },
  {
    title: "Running Effective Sessions",
    duration: "5 min",
    description:
      "Demonstrate real-world workflows, including planning, implementation, and summarizing results with actionable follow-ups.",
  },
  {
    title: "Q&A + Transition",
    duration: "4 min",
    description:
      "Answer common questions, point to further resources, and guide participants into the hands-on workshop tasks.",
  },
];

const sandboxPolicies = [
  {
    value: "never",
    label: "Policy: never",
    summary:
      "Agents must operate entirely within the sandbox. They cannot request escalations, so they rely on existing permissions and tooling.",
    notes: [
      "Ideal for recorded demos or internal walkthroughs where determinism matters more than flexibility.",
      "Encourage participants to anticipate blocked commands and prepare alternative strategies.",
    ],
    command: "npm run lint",
    expectation:
      "If the command writes outside the workspace (e.g., global cache), the agent reports the limitation instead of asking for elevation.",
  },
  {
    value: "on-request",
    label: "Policy: on-request",
    summary:
      "Agents can explicitly request escalations. Humans remain in full control because they must approve or deny each elevation.",
    notes: [
      "Great for confident teams who want flexibility during live problem solving.",
      'Train participants to supply concise justifications ("Need to install dependencies" instead of "please".).',
    ],
    command: "npm install @storybook/react --save-dev",
    expectation:
      "The agent shares the exact command, a one-sentence reason, and waits for approval before modifying dependencies.",
  },
  {
    value: "on-failure",
    label: "Policy: on-failure",
    summary:
      "Commands run in the sandbox first. If a restriction is hit, the agent can retry with escalation and a fresh justification.",
    notes: [
      "Balances speed with safety—useful for repositories with strict CI rules.",
      "Emphasize that the agent should only retry after carefully reading the error and confirming escalation is truly required.",
    ],
    command: "npm run build",
    expectation:
      "If build fails due to sandbox restrictions (e.g., writing to /tmp), the agent surfaces the error and asks whether it may re-run with elevated permissions.",
  },
  {
    value: "untrusted",
    label: "Policy: untrusted",
    summary:
      "Almost every command requires a human sign-off. This is the safest option when agents work on sensitive production code.",
    notes: [
      "Use for first-time contributors or external vendors joining your repository review sessions.",
      "Remind participants to ask precise questions; fewer round-trips mean faster approvals.",
    ],
    command: "cat ~/.npmrc",
    expectation:
      "Since the command touches outside the workspace, the agent must ask permission before running it, even if the intent is just curiosity.",
  },
];

const imagePlaceholders = [
  {
    title: "CLI Workflow Diagram",
    description: "Add a high-level architecture or process graphic to introduce the tool.",
  },
  {
    title: "Sandbox Flow",
    description: "Visualize sandbox modes and how approvals escalate across policies.",
  },
  {
    title: "Demo Screenshot",
    description: "Show a Codex CLI session summarizing changes and suggested next actions.",
  },
];

export default function PresentationPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Presentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>
        <div className="flex flex-1 flex-col gap-16 overflow-y-auto p-8">
          <section className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="font-semibold text-muted-foreground text-xs uppercase tracking-[0.2em]">Presentation</p>
                <h1 className="font-bold text-4xl tracking-tight lg:text-5xl">
                  AI CLI Tools Workshop — Codex CLI Deep Dive
                </h1>
                <p className="text-lg text-muted-foreground">
                  A 25-minute guided walkthrough that demystifies the Codex CLI harness, illustrates real-world agent
                  workflows, and prepares attendees for the hands-on tasks that follow.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="p-5 pb-2">
                    <CardDescription>Event Date</CardDescription>
                    <CardTitle className="text-2xl">October 28, 2025</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-2 text-muted-foreground text-sm">
                    Week 44 • Helsinki Timezone
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-5 pb-2">
                    <CardDescription>Session Time</CardDescription>
                    <CardTitle className="text-2xl">14:00–15:30</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-2 text-muted-foreground text-sm">
                    25 min briefing + 60 min guided lab + 5 min wrap-up
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-5 pb-2">
                    <CardDescription>Focus</CardDescription>
                    <CardTitle className="text-2xl">Codex CLI</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-2 text-muted-foreground text-sm">
                    Learn how GPT-5-based agents collaborate from your terminal
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-5 pb-2">
                    <CardDescription>Deployment</CardDescription>
                    <CardTitle className="text-xl">ai-cli-tools-workshop.vercel.app</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-2 text-muted-foreground text-sm">
                    Demo-ready site for presenters and participants
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/tasks">Open Workshop Tasks</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/docs/codex-cli">Codex CLI Docs</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                aria-hidden="true"
                className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-muted-foreground/30 border-dashed bg-muted/40 p-6 text-center"
                style={{ minHeight: "260px" }}
              >
                <div className="mx-auto max-w-sm space-y-3">
                  <p className="font-semibold text-muted-foreground">Hero Image Placeholder</p>
                  <p className="text-muted-foreground/80 text-sm">
                    Drop a cover graphic, speaker photo, or brand illustration. Recommended ratio 16:9.
                  </p>
                </div>
              </div>
              <Card className="border border-muted-foreground/30 border-dashed bg-background/60">
                <CardHeader className="p-5 pb-2">
                  <CardDescription>Presenter Notes</CardDescription>
                  <CardTitle className="text-xl">Key Outcomes</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-2 text-muted-foreground text-sm">
                  Highlight Codex CLI fundamentals, reinforce sandbox and approval models, and create a smooth segue
                  into the hands-on lab.
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-semibold text-3xl tracking-tight">Agenda</h2>
              <span className="text-muted-foreground text-sm">25 minutes • 5 thematic segments</span>
            </div>
            <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {agendaSegments.map((segment, index) => (
                <li className="rounded-xl border bg-card/70 p-5 shadow-sm" key={segment.title}>
                  <p className="mb-1 font-semibold text-muted-foreground text-sm">Segment {index + 1}</p>
                  <h3 className="font-semibold text-lg">{segment.title}</h3>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">{segment.duration}</p>
                  <p className="mt-3 text-muted-foreground text-sm">{segment.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-3xl tracking-tight">Codex CLI at a Glance</h2>
            <p className="text-base text-muted-foreground">
              Codex CLI places a GPT-5-based coding agent directly in your terminal. It translates natural language
              requests into actionable steps, runs shell commands with clear audit trails, and generates code changes
              that respect the constraints of your repository. Because every response remains plain text, you can rely
              on the CLI itself to format highlights—ideal for live demos or recorded walkthroughs.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why Teams Adopt It</CardTitle>
                  <CardDescription>Velocity without sacrificing control</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    Developers can explore codebases, generate patches, and validate changes in seconds. Commands run
                    locally, which keeps secrets safe and respects existing tooling. When paired with policies like{" "}
                    <code>never</code> or <code>on-request</code>, engineering leads retain full oversight.
                  </p>
                  <p>
                    The CLI encourages thoughtful collaboration: agents explain reasoning, summarize diffs, and suggest
                    next steps rather than silently editing files.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How the Harness Helps</CardTitle>
                  <CardDescription>Structure keeps sessions reliable</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    The CLI harness wraps each conversation with a consistent environment context: current working
                    directory, sandbox mode, network policy, and approval strategy. Agents read this upfront and tailor
                    their approach accordingly.
                  </p>
                  <p>
                    When combined with the Codex CLI instructions, this creates reproducible demos—perfect for a
                    presenter guiding a room of developers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-3xl tracking-tight">Harness Architecture in Detail</h2>
            <p className="text-base text-muted-foreground">
              The harness is more than a thin wrapper around the API. It is the guardrail system that keeps workflows
              predictable. Understanding its pieces helps you explain why the CLI behaves the way it does during live
              sessions.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">CLI Frontend</CardTitle>
                  <CardDescription>Where presenters and agents meet</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    Provides structured prompts, inline diff views, and carefully formatted agent responses. The CLI
                    handles styling, so presenters focus on narration rather than markdown tweaks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Sandbox Layer</CardTitle>
                  <CardDescription>Applies filesystem & network rules</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    Policies like <code>workspace-write</code> or <code>danger-full-access</code> ensure every command
                    honors the session contract. If a command would exceed permissions, the agent adapts and reports the
                    limitation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Agent Runtime</CardTitle>
                  <CardDescription>Instructions, templates, and tooling</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    Ships the shared instructions (like always setting <code>workdir</code>) plus reusable behaviors
                    such as planning. These conventions guarantee consistent output across presenters and teams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-semibold text-3xl tracking-tight">Sandboxing & Approval Modes</h2>
              <span className="text-muted-foreground text-sm">Interactive examples for live narration</span>
            </div>
            <p className="text-base text-muted-foreground">
              Policy awareness keeps demos safe. Switching between the tabs below gives you ready-made scenarios to walk
              through with the audience. Each tab pairs a sample prompt with the expected agent behavior so participants
              see how guardrails influence the experience.
            </p>
            <Tabs className="w-full" defaultValue="never">
              <TabsList aria-label="Sandbox policy examples">
                {sandboxPolicies.map((policy) => (
                  <TabsTrigger key={policy.value} value={policy.value}>
                    {policy.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {sandboxPolicies.map((policy) => (
                <TabsContent key={policy.value} value={policy.value}>
                  <div className="space-y-3">
                    <p className="font-semibold text-base">{policy.summary}</p>
                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground text-sm">
                      {policy.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                    <div className="rounded-lg border bg-muted/40 p-4">
                      <p className="font-semibold text-muted-foreground text-sm uppercase tracking-wide">Demo Prompt</p>
                      <p className="mt-1 text-sm">
                        Ask the agent to run <code>{policy.command}</code>. Then narrate what happens if permissions are
                        insufficient.
                      </p>
                      <p className="mt-2 text-muted-foreground text-sm">{policy.expectation}</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-3xl tracking-tight">Running Effective Sessions</h2>
            <p className="text-base text-muted-foreground">
              Treat an agent session as a loop: clarify the task, draft a short plan, execute steps, and summarize the
              outcome. The examples below provide ready-to-use scripts you can adapt during the presentation.
            </p>
            <Tabs className="w-full" defaultValue="refactor">
              <TabsList aria-label="Workflow examples">
                <TabsTrigger value="refactor">Refactor Module</TabsTrigger>
                <TabsTrigger value="investigate">Investigate Bug</TabsTrigger>
                <TabsTrigger value="docs">Document Feature</TabsTrigger>
              </TabsList>
              <TabsContent value="refactor">
                <div className="space-y-3 text-muted-foreground text-sm">
                  <p className="font-medium text-foreground">Scenario</p>
                  <p>
                    Update a logging utility to emit structured JSON. Ask the agent to plan first, then watch how it
                    touches only the relevant files and suggests a follow-up test command.
                  </p>
                  <p className="font-medium text-foreground">Narration Tips</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Highlight that plans require at least two steps and must be updated after meaningful progress.
                    </li>
                    <li>Show how diffs include line numbers so reviewers can jump straight into code.</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="investigate">
                <div className="space-y-3 text-muted-foreground text-sm">
                  <p className="font-medium text-foreground">Scenario</p>
                  <p>
                    A test intermittently fails in CI. Ask the agent to gather failure logs, inspect related components,
                    and propose a fix. Narrate how it uses read-only exploration before editing anything.
                  </p>
                  <p className="font-medium text-foreground">Narration Tips</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Call out how the agent summarizes findings before making recommendations.</li>
                    <li>
                      Mention the expectation that tests or lint commands are suggested, even if the agent cannot run
                      them due to sandbox limits.
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="docs">
                <div className="space-y-3 text-muted-foreground text-sm">
                  <p className="font-medium text-foreground">Scenario</p>
                  <p>
                    Request an update to onboarding documentation. The agent gathers project context with{" "}
                    <code>rg</code>, drafts the content, and uses <code>apply_patch</code> to edit the markdown file
                    while keeping ASCII formatting.
                  </p>
                  <p className="font-medium text-foreground">Narration Tips</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Show how commands like <code>rg</code> respect the instruction to set <code>workdir</code>.
                    </li>
                    <li>
                      Emphasize the agent’s final summary: change rationale, file references, and suggested next steps.
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-3xl tracking-tight">Communication Guidelines</h2>
            <p className="text-base text-muted-foreground">
              Presenters model the tone we expect from agents: concise, factual, and easy to scan. Reinforce these
              habits so participants keep them in mind during the workshop.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Formatting Practices</CardTitle>
                  <CardDescription>Leverage the CLI’s styling powers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground text-sm">
                  <p>
                    Use inline <code>backticks</code> for commands and fenced code blocks for longer snippets.
                  </p>
                  <p>Keep headings short; the CLI adds styling automatically.</p>
                  <p>Summarize command outputs instead of pasting every line of a log.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Collaboration Mindset</CardTitle>
                  <CardDescription>Trust but verify</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground text-sm">
                  <p>State assumptions, flag open questions, and offer non-blocking follow-ups.</p>
                  <p>
                    Reference files with clickable paths like <code>app/presentation/page.tsx:210</code>.
                  </p>
                  <p>Invite participants to suggest next steps or share alternative approaches.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-semibold text-3xl tracking-tight">Visual Assets</h2>
              <span className="text-muted-foreground text-sm">Swap placeholders once creatives are ready</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {imagePlaceholders.map((image) => (
                <div
                  className="flex flex-col justify-between gap-4 rounded-2xl border border-muted-foreground/30 border-dashed bg-muted/40 p-6 text-muted-foreground"
                  key={image.title}
                  style={{ minHeight: "220px" }}
                >
                  <div className="space-y-2">
                    <p className="font-semibold text-base">{image.title}</p>
                    <p className="text-muted-foreground/80 text-sm">{image.description}</p>
                  </div>
                  <p className="rounded-md border border-muted-foreground/20 bg-background/70 px-3 py-1 text-center text-xs uppercase tracking-wide">
                    Drop image (16:9 recommended)
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <Card className="border-primary/40 bg-primary/5">
              <CardHeader>
                <CardTitle>Transition to Workshop Tasks</CardTitle>
                <CardDescription>Bridge the presentation and lab with a clear call-to-action.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>
                  Reinforce that participants will immediately apply concepts in the Codex CLI sandbox. Encourage them
                  to open the tasks page, review the instructions, and keep the CLI handy for live coding.
                </p>
                <Button asChild variant="outline">
                  <Link href="/tasks/1">Preview Task 1</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Presenter Checklist</CardTitle>
                <CardDescription>Confirm these items before going live.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6 text-sm">
                  <li>Run through the narrative once with timing to hit 25 minutes.</li>
                  <li>Stage any demo repositories and reset them between takes.</li>
                  <li>Verify Codex CLI installation and sandbox permissions.</li>
                  <li>Keep docs and workshop tasks open in separate browser tabs.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}
