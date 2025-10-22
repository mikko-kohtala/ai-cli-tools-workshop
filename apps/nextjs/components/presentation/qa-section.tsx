import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QASection() {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <div className="mb-6 text-6xl">❓</div>
        <h2 className="mb-6 font-bold text-3xl">Questions & Discussion</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Let's discuss how AI CLI tools can improve your development workflow
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What workflows can we automate next?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Explore opportunities to automate routine development tasks and improve team productivity with AI
              assistance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How should we tune policies for our organization?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Discuss sandbox modes and approval policies that work best for your team's security and development needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Which repositories benefit most from agent-assisted development?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Identify the types of projects and codebases where AI CLI tools provide the most value and impact.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How do we measure success and ROI?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Establish metrics and KPIs to track the effectiveness of AI-assisted development in your organization.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
