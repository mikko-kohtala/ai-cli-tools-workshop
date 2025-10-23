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
  if (!isOpen) {
    return null;
  }

  return (
    <div className="sticky top-0 hidden h-screen w-64 overflow-auto border-l bg-muted/10 lg:block">
      <div className="p-6">
        <h3 className="mb-4 font-semibold text-muted-foreground text-sm uppercase tracking-wider">Contents</h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                activeSection === section.id
                  ? "bg-primary font-medium text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              type="button"
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
