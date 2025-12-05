import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { colorClasses } from "../../_data/curriculum-data";

interface SlideContainerProps {
  children: ReactNode;
  slideNumber: number;
  color?: string;
  className?: string;
}

export function SlideContainer({ children, slideNumber, color = "indigo", className = "" }: SlideContainerProps) {
  const colors = colorClasses[color] || colorClasses.indigo;

  return (
    <Card className={`relative border-l-4 ${colors.border} ${className}`}>
      <div
        className={`absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full ${colors.bg} font-semibold text-sm ${colors.text}`}
      >
        {slideNumber}
      </div>
      {children}
    </Card>
  );
}
