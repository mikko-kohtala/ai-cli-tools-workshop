"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface PresentationNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (slide: number) => void;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
}

export function PresentationNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  isPlaying = false,
  onTogglePlay,
}: PresentationNavigationProps) {
  const [slideIndicators, setSlideIndicators] = useState<number[]>([]);

  useEffect(() => {
    setSlideIndicators(Array.from({ length: totalSlides }, (_, i) => i));
  }, [totalSlides]);

  return (
    <div className="flex items-center justify-between border-t bg-background/95 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2">
        <Button disabled={currentSlide === 0} onClick={onPrevious} size="sm" variant="outline">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {onTogglePlay && (
          <Button onClick={onTogglePlay} size="sm" variant="outline">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        )}

        <Button disabled={currentSlide === totalSlides - 1} onClick={onNext} size="sm" variant="outline">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">
          {currentSlide + 1} of {totalSlides}
        </span>

        <div className="flex gap-1">
          {slideIndicators.map((index) => (
            <button
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
              }`}
              key={index}
              onClick={() => onGoToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
