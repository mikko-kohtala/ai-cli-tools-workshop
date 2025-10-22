import { AppSidebar } from "@/components/app-sidebar";
import { AgendaSection } from "@/components/presentation/agenda-section";
import { ArchitectureSection } from "@/components/presentation/architecture-section";
import { EffectiveSessionsSection } from "@/components/presentation/effective-sessions-section";
import { KeyConceptsSection } from "@/components/presentation/key-concepts-section";
import { OverviewSection } from "@/components/presentation/overview-section";
import { ProTipsSection } from "@/components/presentation/pro-tips-section";
import { QASection } from "@/components/presentation/qa-section";
import { SandboxingSection } from "@/components/presentation/sandboxing-section";
// Import presentation components
import { TitleSection } from "@/components/presentation/title-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function PresentationPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Presentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>

        <div className="flex-1 overflow-auto">
          <div className="container mx-auto max-w-4xl space-y-12 p-8">
            {/* Title Section */}
            <TitleSection />

            <Separator />

            {/* Agenda Section */}
            <AgendaSection />

            <Separator />

            {/* Codex CLI Overview */}
            <OverviewSection />

            <Separator />

            {/* Key Concepts */}
            <KeyConceptsSection />

            <Separator />

            {/* Architecture Deep Dive */}
            <ArchitectureSection />

            <Separator />

            {/* Working with Sandboxing */}
            <SandboxingSection />

            <Separator />

            {/* Building Effective Sessions */}
            <EffectiveSessionsSection />

            <Separator />

            {/* Pro Tips */}
            <ProTipsSection />

            <Separator />

            {/* Q&A Section */}
            <QASection />

            {/* Footer */}
            <footer className="border-t py-8 text-center">
              <p className="text-muted-foreground">AI CLI Tools Workshop • October 28, 2025 • 14:00–15:30</p>
              <p className="mt-2 text-muted-foreground text-sm">Interactive Workshop & Presentation</p>
            </footer>
          </div>
        </div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}
