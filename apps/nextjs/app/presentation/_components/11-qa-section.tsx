/** biome-ignore-all lint/suspicious/noArrayIndexKey: shadcn */
import { ArrowRight, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const discussionTopics = [
  "What workflows can we automate next in our development process?",
  "How should we tune policies and configurations for our organization's needs?",
  "Which repositories and projects would benefit most from agent-assisted development?",
  "What concerns or challenges do you foresee with adopting AI-assisted development?",
];

export function QASection() {
  return (
    <section className="mb-16 scroll-mt-16" id="qa">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <Users className="h-5 w-5 text-slate-600 dark:text-slate-400" />
        </div>
        <h2 className="font-bold text-4xl">Q & A</h2>
      </div>
      <Card className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/30">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div>
              <p className="mb-4 font-semibold text-2xl">Discussion Topics</p>
              <div className="space-y-4 text-foreground/80 text-lg">
                {discussionTopics.map((topic, index) => (
                  <div className="flex items-start gap-3" key={`topic-${index}`}>
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
                      <span className="text-slate-600 text-sm dark:text-slate-300">?</span>
                    </div>
                    <p>{topic}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="pt-4 text-center">
              <p className="font-semibold text-3xl">Thank you!</p>
              <p className="mt-3 text-foreground/80 text-lg">Ready to dive into the workshop tasks?</p>
              <div className="mt-6">
                <a
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                  href="/tasks"
                >
                  Start Workshop Tasks
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
