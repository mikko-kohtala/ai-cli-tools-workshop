import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capstoneSteps = [
  {
    step: 1,
    title: "Team Formation",
    description:
      "Form cross-functional teams with members from different paths. Each team should include at least 2-3 different roles to ensure diverse perspectives and skill sets.",
  },
  {
    step: 2,
    title: "Project Definition",
    description:
      "Define a meaningful project that requires multiple roles. Examples: a new product feature (needs product, design, development), a marketing campaign (needs sales, design, product), or an internal tool (needs operations, development, product).",
  },
  {
    step: 3,
    title: "Planning & Design",
    description:
      "Use AI tools collaboratively to plan the project. Each role contributes their specialized knowledge: product managers define requirements, designers create mockups, developers plan architecture, sales provides customer insights, operations identifies operational requirements.",
  },
  {
    step: 4,
    title: "Implementation",
    description:
      "Execute the project using AI tools throughout. Each team member uses their role-specific AI workflows while collaborating with others. Regular syncs ensure alignment and integration.",
  },
  {
    step: 5,
    title: "Documentation & Presentation",
    description:
      "Document the project using AI assistance: create user docs, technical docs, runbooks, and presentations. Present to the cohort, highlighting how different roles contributed and how AI tools were used throughout.",
  },
];

export function CapstoneSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="capstone">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Trophy className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Week 6: Capstone</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              Week 6 is the capstone week where everything comes together. Cross-functional teams work on real projects
              that require multiple roles, applying all the specialized knowledge from Weeks 2-4 and the collaboration
              skills from Week 5.
            </p>
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              <strong>Capstone goals:</strong> The capstone demonstrates your ability to use AI tools effectively within
              your role while collaborating with team members from other roles. It's a practical demonstration of
              everything you've learned, showing how AI-augmented teams can work together to deliver real value.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              <strong>Success criteria:</strong> A successful capstone project demonstrates effective use of AI tools
              across multiple roles, clear collaboration and communication, and a deliverable that solves a real problem
              or creates real value. The process matters as much as the outcome—show how AI tools accelerated and
              improved your work.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Capstone Process</h3>
        <Card className="bg-indigo-50 dark:bg-indigo-950/30">
          <CardContent className="p-6">
            <div className="space-y-6">
              {capstoneSteps.map((step) => (
                <div className="flex gap-4" key={`step-${step.step}`}>
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 font-semibold text-sm text-white dark:bg-indigo-400">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-base">{step.title}</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Example Capstone Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Product Feature Launch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-medium text-sm">Roles: Product, Design, Development, Operations</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Design and implement a new product feature from concept to deployment. Product managers define
                requirements, designers create mockups, developers build the feature, and operations creates runbooks
                and monitoring.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Marketing Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-medium text-sm">Roles: Sales, Design, Product, Operations</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Create a complete marketing campaign: sales defines messaging and target audience, designers create
                assets, product provides product insights, and operations tracks metrics and optimizes processes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Internal Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-medium text-sm">Roles: Operations, Development, Product, Design</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Build an internal tool to solve an operational problem. Operations defines requirements, product
                prioritizes features, designers create the interface, and developers implement the solution.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Onboarding Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-medium text-sm">Roles: Sales, Design, Product, Operations</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Design and implement a customer onboarding experience. Sales provides customer insights, designers
                create the experience, product defines the flow, and operations creates documentation and support
                materials.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
