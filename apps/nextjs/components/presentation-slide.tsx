"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export function PresentationSlide({ children, className, title, subtitle, image, imageAlt }: PresentationSlideProps) {
  return (
    <div className={cn("flex h-full w-full flex-col", className)}>
      <div className="flex flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {title && <h1 className="mb-4 font-bold text-3xl text-foreground sm:mb-6 sm:text-4xl lg:text-5xl">{title}</h1>}
        {subtitle && (
          <h2 className="mb-6 font-semibold text-muted-foreground text-xl sm:mb-8 sm:text-2xl">{subtitle}</h2>
        )}
        {image && (
          <div className="mb-6 flex justify-center sm:mb-8">
            <Image
              alt={imageAlt || ""}
              className="max-h-64 max-w-full rounded-lg object-contain shadow-lg sm:max-h-80 lg:max-h-96"
              src={image}
              width={800}
              height={600}
            />
          </div>
        )}
        <div className="prose prose-base sm:prose-lg max-w-none text-foreground">{children}</div>
      </div>
    </div>
  );
}
