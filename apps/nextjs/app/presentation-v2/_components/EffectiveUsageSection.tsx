/** biome-ignore-all lint/suspicious/noArrayIndexKey: shadcn */
import { ArrowRight, FileCode, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const communicationPrinciples = [
  {
    title: "Be specific and provide context",
    description:
      "Clear, detailed requests produce better results. Include relevant constraints, requirements, and examples.",
    good: "\"Add a button to export the table as CSV. Include all columns except 'internal_id'. Use the file-saver library and follow the pattern in UserList.tsx\"",
    bad: '"Add export functionality"',
  },
  {
    title: "Break down complex tasks",
    description:
      "Large tasks work better when decomposed into steps. This helps the tool understand priorities and dependencies.",
    good: '"First, create the database migration. Then we\'ll update the API endpoint, and finally add the frontend form."',
    bad: '"Add authentication, set up CI/CD, refactor the database, and fix all TypeScript errors"',
  },
  {
    title: "Ask for plans before execution",
    description: "For non-trivial work, request a plan first. Review it, suggest changes, then approve execution.",
    good: '"Create a plan for adding dark mode support" → Review plan → "Proceed with steps 1-3, skip step 4"',
    bad: 'Just saying "add dark mode" without reviewing the approach first',
  },
  {
    title: "Reference your project's patterns",
    description: "Help the tool match your existing code style and architecture by pointing to examples.",
    good: '"This app uses React Query for data fetching. Please follow the same pattern you see in UserList.tsx"',
    bad: '"Use the usual pattern" (what is "usual"?)',
  },
];

const sessionBestPractices = [
  {
    icon: Users,
    title: "Start with context",
    description:
      "Begin sessions by orienting the tool to your current task. Mention what you're working on, what's already done, and what needs to happen.",
  },
  {
    icon: FileCode,
    title: "Review changes systematically",
    description:
      "After modifications, ask for a summary of what changed. Use your tool's diff view or git diff to verify changes before committing.",
  },
  {
    icon: ArrowRight,
    title: "Chain related tasks logically",
    description:
      "Complete one task, verify it works, then move to the next. This makes it easier to catch issues early and maintain quality.",
  },
  {
    icon: Zap,
    title: "Iterate and refine",
    description:
      "If results aren't perfect, provide feedback and ask for adjustments. Treat it like pair programming—collaborate to reach the best solution.",
  },
];

const proTips = [
  {
    category: "Prompting",
    tips: [
      "Include file paths when referring to specific code: 'Update the validation logic in src/utils/validation.ts'",
      "Use concrete examples: 'Add error handling like we have in api/users.ts' rather than 'add proper error handling'",
      "Specify testing requirements: 'Make sure to add unit tests' or 'Follow TDD—write tests first'",
    ],
  },
  {
    category: "Workflow",
    tips: [
      "Use git to create checkpoints before major changes: commit working code before asking for refactoring",
      "Keep your working directory clean: AI tools work best when they can focus on relevant files",
      "Ask the tool to explain its reasoning if results are unexpected: 'Why did you choose that approach?'",
    ],
  },
  {
    category: "Security",
    tips: [
      "Review changes in files you didn't expect to be modified—this might indicate misunderstanding",
      "Be cautious with operations that affect production: databases, deployments, API keys",
      "Don't commit sensitive data: ask the tool to use environment variables or config files",
    ],
  },
];

const communicationPatterns = [
  {
    pattern: "Request → Plan → Review → Execute",
    description: "For complex tasks, always review the plan before execution",
    example:
      'You: "Add caching to the API"\nAI: [presents plan]\nYou: "Use Redis instead of in-memory"\nAI: [executes]',
  },
  {
    pattern: "Implement → Test → Iterate",
    description: "Build incrementally, test each piece, refine as needed",
    example: 'You: "Add the feature"\n[test]\nYou: "Edge case: handle empty arrays"\n[test]\nYou: "Looks good, commit"',
  },
  {
    pattern: "Question → Explore → Decide → Act",
    description: "Use the tool to research options before committing to an approach",
    example:
      'You: "What are the best practices for form validation in React?"\nAI: [explains options]\nYou: "Let\'s use react-hook-form"',
  },
];

const commonMistakes = [
  {
    mistake: "Vague requirements",
    why: "Leads to solutions that don't match your needs",
    fix: "Be explicit about inputs, outputs, edge cases, and constraints",
  },
  {
    mistake: "Assuming context",
    why: "The AI doesn't know your project history or unspoken conventions",
    fix: "Provide relevant background, reference existing patterns, explain constraints",
  },
  {
    mistake: "Not reviewing changes",
    why: "AI can make mistakes or misunderstand requirements",
    fix: "Always review diffs, run tests, and verify behavior before committing",
  },
  {
    mistake: "Rushing to execution",
    why: "Skipping the planning phase can lead to rework",
    fix: "Request a plan for complex tasks, review it, adjust as needed",
  },
];

export function EffectiveUsageSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="effective-usage">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
          <Users className="h-5 w-5 text-teal-600 dark:text-teal-400" />
        </div>
        <h2 className="font-bold text-4xl">Effective Usage</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Getting great results from AI CLI tools requires effective communication and good workflow habits. Think
              of it as pair programming with an AI colleague—the clearer you are about your goals, constraints, and
              context, the better the results. These practices apply across all AI CLI tools.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Communication Principles</h3>
        <div className="space-y-4">
          {communicationPrinciples.map((principle) => (
            <Card key={`principle-${principle.title}`}>
              <CardHeader>
                <CardTitle className="text-lg">{principle.title}</CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded border-l-4 border-l-green-500 bg-green-50 p-3 text-sm dark:bg-green-950/30">
                    <p className="mb-1 font-semibold text-green-700 dark:text-green-400">✅ Good:</p>
                    <p className="text-foreground/80">{principle.good}</p>
                  </div>
                  <div className="rounded border-l-4 border-l-red-500 bg-red-50 p-3 text-sm dark:bg-red-950/30">
                    <p className="mb-1 font-semibold text-red-700 dark:text-red-400">❌ Avoid:</p>
                    <p className="text-foreground/80">{principle.bad}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Session Best Practices</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {sessionBestPractices.map((practice) => (
            <Card key={`practice-${practice.title}`}>
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                  <practice.icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-base">{practice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm">{practice.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Tabs className="mb-12" defaultValue="tips">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tips">Pro Tips</TabsTrigger>
          <TabsTrigger value="patterns">Common Patterns</TabsTrigger>
          <TabsTrigger value="mistakes">Avoid These Mistakes</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="tips">
          <div className="space-y-6">
            {proTips.map((section) => (
              <Card key={`tips-${section.category}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.tips.map((tip, idx) => (
                      <li className="flex items-start gap-2 text-sm" key={`tip-${idx}`}>
                        <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                        <span className="text-foreground/80">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent className="mt-4" value="patterns">
          <div className="space-y-4">
            {communicationPatterns.map((item, idx) => (
              <div key={`pattern-${idx}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">{item.pattern}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="overflow-x-auto whitespace-pre-wrap rounded bg-slate-50 p-3 text-sm dark:bg-slate-900/30">
                      <code>{item.example}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent className="mt-4" value="mistakes">
          <div className="space-y-4">
            {commonMistakes.map((item) => (
              <Card key={`mistake-${item.mistake}`}>
                <CardHeader>
                  <CardTitle className="text-base text-red-600 dark:text-red-400">❌ {item.mistake}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Why it's problematic:</strong> {item.why}
                  </p>
                  <p className="text-green-700 dark:text-green-400">
                    <strong>✅ Instead:</strong> {item.fix}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Zap className="mt-1 h-6 w-6 flex-shrink-0 text-teal-600 dark:text-teal-400" />
            <div>
              <p className="mb-2 font-semibold text-lg">The Golden Rule</p>
              <p className="text-foreground/80">
                Treat your AI CLI tool like a skilled but junior developer: provide clear instructions, review their
                work, give constructive feedback, and don't assume they know your unspoken context. With good
                communication, these tools become powerful productivity multipliers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
