import { GraduationCap } from "lucide-react";

export function IntroSection() {
  return (
    <section className="mb-16 flex min-h-[50vh] flex-col justify-center" id="intro">
      <div className="space-y-6 text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800 dark:bg-gray-700">
          <GraduationCap className="h-10 w-10 text-gray-100" />
        </div>
        <h1 className="font-bold text-5xl text-gray-800 md:text-6xl dark:text-gray-300">
          8-Week AI Development Curriculum
        </h1>
        <p className="mx-auto max-w-3xl pt-4 text-gray-600 text-xl dark:text-gray-400">
          A comprehensive, hands-on program designed for software developers, product managers, and designers who want to transform their workflow by integrating AI tools and agentic workflows. This curriculum takes you from foundational concepts through advanced practices, covering every phase of the software development lifecycle—from initial requirements gathering to deployment and operations, with role-specific learning paths.
        </p>
        <div className="mx-auto max-w-3xl pt-6">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Whether you're a junior developer looking to accelerate your learning curve or a senior engineer seeking to
            leverage AI for complex architectural decisions, this curriculum provides structured, practical guidance
            that emphasizes understanding over speed, quality over quantity, and sustainable practices over quick wins.
          </p>
        </div>

        <div className="mx-auto max-w-3xl pt-12">
          <blockquote className="border-gray-800 border-l-4 bg-gray-50 p-6 text-gray-700 italic dark:border-gray-400 dark:bg-slate-900 dark:text-gray-300">
            <p className="mb-4 text-lg leading-relaxed">
              "You want people using AI well. You don't want high velocity. You want sustainable value creation with
              maintained comprehension. You don't want AI-dependent employees. You want AI-augmented experts."
            </p>
            <p className="text-left font-normal text-base text-gray-600 dark:text-gray-400">- Chetan Conikee</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
