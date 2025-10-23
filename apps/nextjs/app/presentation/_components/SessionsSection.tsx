import { ArrowRight, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sessionGuidelines = [
  {
    title: "Clarify tasks; restate goals when needed",
    description:
      "Be explicit about what you want. Instead of 'fix the bug', say 'fix the bug where users can't log in with email addresses containing plus signs'",
    example:
      "Good: 'Add error handling to the API client that retries failed requests up to 3 times'\nVague: 'Make the API better'",
  },
  {
    title: "Draft plans (2+ steps) for non-trivial work and keep them updated",
    description:
      "For complex tasks, ask Codex to create a plan first. Review it, suggest changes, then execute. This prevents misunderstandings.",
    example:
      "You: 'Create a plan for adding dark mode support'\nCodex: [shows 5-step plan]\nYou: 'Skip step 3, we already have the theme context'\nCodex: 'Updated plan: ...'",
  },
  {
    title: "Summarize changes with file references and command suggestions",
    description:
      "After Codex makes changes, ask for a summary. This helps you understand what happened and makes it easier to review.",
    example:
      "You: 'What files did you change?'\nCodex: 'Modified src/api/client.ts (added retry logic) and tests/api.test.ts (added retry tests)'",
  },
  {
    title: "Offer next steps like tests or commits without overstepping",
    description:
      "Codex can suggest what to do next, but you're always in control. It might suggest running tests or committing changes, but won't do it without permission.",
    example: "Codex: 'Changes complete. Would you like me to: 1) Run the tests 2) Show a diff 3) Create a git commit?'",
  },
];

const goodPractices = [
  {
    title: "Be specific about requirements",
    description:
      "\"Add a button to export the table as CSV. Include all columns except 'internal_id'. Use the file-saver library.\"",
  },
  {
    title: "Provide context",
    description:
      '"This app uses React Query for data fetching. Please follow the same pattern you see in UserList.tsx"',
  },
  {
    title: "Break down large tasks",
    description: '"First, create the database migration. Then we\'ll update the API, and finally the frontend."',
  },
];

const badPractices = [
  {
    title: "Vague requests",
    description: '"Make the app better" or "Fix everything"',
  },
  {
    title: "Assuming knowledge",
    description: '"Use the usual pattern" (what\'s usual?)',
  },
  {
    title: "Too many tasks at once",
    description: '"Add auth, set up CI/CD, refactor the database, and fix all TypeScript errors"',
  },
];

export function SessionsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="sessions">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
          <Users className="h-5 w-5 text-teal-600" />
        </div>
        <h2 className="font-bold text-4xl">Building Effective Sessions</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Getting the most out of Codex CLI requires effective communication. Think of it as pair programming with
              an AI colleague— the clearer you are about your goals, the better the results. Here are proven strategies
              for productive development sessions.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 bg-teal-50">
        <CardContent className="p-8">
          <ul className="space-y-4">
            {sessionGuidelines.map((item) => (
              <li className="flex items-start gap-3" key={`comm-${item.title}`}>
                <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600" />
                <div className="flex-1">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="mt-1 text-muted-foreground text-sm">{item.description}</p>
                  <pre className="mt-2 rounded border bg-white p-3 text-xs">{item.example}</pre>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Tabs defaultValue="dos">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dos">✅ Do This</TabsTrigger>
          <TabsTrigger value="donts">❌ Avoid This</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="dos">
          <div className="space-y-4">
            {goodPractices.map((practice) => (
              <Card key={`good-${practice.title}`}>
                <CardContent className="p-4">
                  <p className="mb-2 font-semibold">✅ {practice.title}</p>
                  <p className="text-muted-foreground text-sm">{practice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent className="mt-4" value="donts">
          <div className="space-y-4">
            {badPractices.map((practice) => (
              <Card key={`bad-${practice.title}`}>
                <CardContent className="p-4">
                  <p className="mb-2 font-semibold">❌ {practice.title}</p>
                  <p className="text-muted-foreground text-sm">{practice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
