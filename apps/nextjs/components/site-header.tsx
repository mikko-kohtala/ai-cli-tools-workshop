"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating trigger that shows when scrolled */}
      <div
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${
          isScrolled ? "translate-y-0 opacity-100" : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <SidebarTrigger className="border bg-background/80 shadow-lg backdrop-blur-sm hover:bg-accent" />
      </div>

      <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger
            className={`-ml-1 transition-opacity duration-300 ${isScrolled ? "pointer-events-none opacity-0" : "opacity-100"}`}
          />
          <Separator className="mx-2 data-[orientation=vertical]:h-4" orientation="vertical" />
          <h1 className="font-medium text-base">AI CLI Tools Workshop</h1>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
