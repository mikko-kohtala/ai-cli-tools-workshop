# Prompts

Before prompting, setup done with: https://github.com/mikko-kohtala/nextjs-convex-template

## 001 - claude code - plan mode

ultrathink

This repository will be a repo for "AI CLI Tools Workshop". I will have a around 25min presentation, and then we a going to have 1 hour workshop where people will complete workshop tasks. Times are estimates.

URL will be: https://ai-cli-tools-workshop.vercel.app

Lets start by cleaning up CLAUDE.md. I will be using lots of Claude Code and Codex CLI, so lets keep CLAUDE.md brief and it should give short information about the repo and what we are going to do.

There will be TODO.md, which will track our progress. Can you add placeholders for the different things we need to do.

- Build the app platform. Page for presentation, and pages for different tasks.
- We will need to do clean presentation about the AI CLI Tools
- We need around 4 tasks which users are tasked to do with Codex CLI.

Our main focus is on Codex CLI, because that is available for our organization.

“Codex CLI is a coding agent that you can run locally from your terminal and that can read, modify, and run code on your machine, in the chosen directory. Build by OpenAI.“

Here is the invitation I already sent:

```
Join us to explore the world of AI Command Line tools — how to get started, use them effectively, and bring a little AI vibe to your developer workflow. This session is open to everyone interested in the topic.

The workshop will have two parts: a presentation introducing the landscape of AI CLI tools and hands-on exercises you can start working on right after.

Our main focus will be on OpenAI’s Codex CLI, which is available through our existing OpenAI ChatGPT licensing. There are also several other AI CLI tools you can try if you have access — such as Claude Code, Gemini CLI, Amp Code, or Opencode. It’s recommended to set up Codex CLI in advance of the workshop. Detailed setup instructions will be shared soon.You can also get started here: https://developers.openai.com/codex/cli

When: 28.10.2025, 14:00–15:30
Where: Teams, Tampere office, and most likely the Helsinki office as well
Slack: #ai-guild channel

Both the presentation and workshop materials will be published closer to the event.

💡 Note: Guild participation counts as billable hours by default (unless agreed otherwise with your Delivery Lead). If not, please book your time under "Competence Development / Guilds".

⚠️ Reminder: Use AI tools responsibly, especially in project work. Please first review the Knowit AI and data policies available in SharePoint.
```

## 002 - claude code - plan mode

You have access to /Users/mikkoh/code/mikko/react-19-workshop which is similarly structured workshop. We will be using same tooling: next.js, tailwind with shadcn
components, sidebar and so on. We will be keeping the simple and clean ui styles.

## 003 - claude code

execute

## 004 - claude code

Can you create to my next.js, placeholders for:

- / - homepage
- /presentation
- /tasks
- /tasks/1 (pages, work page and solution page)

This is to get things started.

Make it so that right side of the application has sidebar with the application structure. This is pretty similar as in react-19-workshop

## 005 - claude code

Can you install all of the needed shadcn components with "pnpm dlx shadcn@latest add tooltip" for example.

## 006 - claude code

/reset

## 007 - codex

> I wanted to get Claude Code docs in markdown format for reference. https://docs.claude.com/sitemap.xml

Can you create a script which removes all of the other lines, but no those starting with "https://docs.claude.com/en"

Can you create a script which saves markdown content from the urls listed in claude-urls.txt save them to claude-code folder

## 008 - claude.ai web and chatgpt.com - deep research

I'm planning to host "AI CLI Tools Workshop". In this workshop I need to introduce people to the AI CLI tooling and how to work with them effectively.

Can you help me to create presentation about the subject.

```
# AI CLI Tools Workshop

Workshop exploring AI Command Line tools, with primary focus on OpenAI's Codex CLI.
Built with Next.js 15 for presentation and interactive workshop tasks.

## Workshop Structure

- **Presentation** (`/presentation`) - 25min overview of AI CLI tools landscape
- **Workshop Tasks** (`/tasks/[1-4]`) - 1 hour hands-on exercises with Codex CLI

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TailwindCSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Simple and clean design patterns (sidebar navigation, card layouts)
- **Deployment**: Vercel

## Project Focus

Main focus is on **Codex CLI** (OpenAI's coding agent that runs locally from terminal).
Participants can also try other AI CLI tools if they have access: Claude Code, Gemini CLI, Amp Code, or Opencode.
```

> output for codex was: docs/chatgpt-plan.md
> output for claude was: docs/claude-plan.md
