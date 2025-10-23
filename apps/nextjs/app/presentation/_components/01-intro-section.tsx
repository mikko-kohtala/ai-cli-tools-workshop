import { Terminal } from "lucide-react";
import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

export function IntroSection() {
  return (
    <section className="mb-16 flex min-h-[50vh] flex-col justify-center" id="intro">
      <div className="space-y-6 text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800 dark:bg-gray-700">
          <Terminal className="h-10 w-10 text-gray-100" />
        </div>
        <h1 className="font-bold text-5xl text-gray-800 md:text-6xl dark:text-gray-300">AI CLI Tools</h1>

        <div className="mx-auto max-w-4xl pt-6">
          <Image
            alt="Claude Code CLI"
            className="rounded-lg shadow-lg"
            height={600}
            src="/images/claude-code-01.png"
            width={800}
          />
        </div>

        <div className="mx-auto max-w-3xl pt-12">
          <blockquote className="border-gray-800 border-l-4 bg-gray-50 p-6 text-gray-700 italic dark:border-gray-400 dark:bg-slate-900 dark:text-gray-300">
            <p className="mb-4 text-lg leading-relaxed">
              "You want people using AI well. You don't want high velocity. You want sustainable value creation with
              maintained comprehension. You don't want AI-dependent employees. You want AI-augmented experts."
            </p>
            <p className="font-normal text-base text-gray-600 dark:text-gray-400">- Chetan Conikee</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
