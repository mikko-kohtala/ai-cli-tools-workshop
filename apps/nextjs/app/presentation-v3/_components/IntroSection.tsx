import { Terminal } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

export function IntroSection() {
  return (
    <section className="mb-16 flex min-h-[50vh] flex-col justify-center" id="intro">
      <div className="space-y-6 text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800 dark:bg-gray-700">
          <Terminal className="h-10 w-10 text-gray-100" />
        </div>
        <h1 className="font-bold text-5xl text-gray-800 md:text-6xl dark:text-gray-300">
          AI CLI Tools
        </h1>

        {/* <div className="mx-auto max-w-2xl pt-6 text-left">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed">
                Welcome to this comprehensive workshop on{" "}
                <strong>Codex CLI</strong>, OpenAI's revolutionary coding agent
                that brings the power of GPT-5 directly to your terminal. In
                this session, you'll learn how to leverage AI-powered
                development tools to accelerate your workflow, automate
                repetitive tasks, and build better software faster—all while
                maintaining full control and security.
              </p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
