"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (id: string) => void;
  isOpen: boolean;
}

export function TableOfContents({ sections, activeSection, onSectionClick, isOpen }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`sticky top-0 hidden h-screen overflow-auto border-l transition-all duration-300 lg:block ${
        isCollapsed ? "w-12" : "w-64"
      }`}
    >
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          {!isCollapsed && (
            <h3 className="font-semibold text-foreground/60 text-sm uppercase tracking-wider">Curriculum</h3>
          )}
          <button
            aria-label={isCollapsed ? "Expand table of contents" : "Collapse table of contents"}
            className="ml-auto rounded-md p-1 transition-colors hover:bg-muted"
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
          >
            {isCollapsed ? <IconChevronLeft className="size-4" /> : <IconChevronRight className="size-4" />}
          </button>
        </div>
        {!isCollapsed && (
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-muted/50 font-medium text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                type="button"
              >
                {section.title}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
