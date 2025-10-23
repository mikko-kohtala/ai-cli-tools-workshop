import { Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function IntroSection() {
  return (
    <section className="mb-16 flex min-h-[50vh] flex-col justify-center" id="intro">
      <div className="space-y-6 text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-purple-600">
          <Terminal className="h-10 w-10 text-white" />
        </div>
        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-5xl text-transparent md:text-6xl">
          Codex CLI Tool
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground text-xl md:text-2xl">
          Empowering collaborative coding assistance from your terminal
        </p>
        <div className="flex items-center justify-center gap-2 pt-8 text-muted-foreground text-sm">
          <span>October 28, 2025</span>
          <span>•</span>
          <span>14:00–15:30</span>
        </div>
        <div className="mx-auto max-w-2xl pt-6 text-left">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed">
                Welcome to this comprehensive workshop on <strong>Codex CLI</strong>, OpenAI's revolutionary coding
                agent that brings the power of GPT-5 directly to your terminal. In this session, you'll learn how to
                leverage AI-powered development tools to accelerate your workflow, automate repetitive tasks, and build
                better software faster—all while maintaining full control and security.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
