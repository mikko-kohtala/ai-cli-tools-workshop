"use client";

import { useCallback, useEffect, useState } from "react";
import { PresentationNavigation } from "./presentation-navigation";
import { PresentationSlide } from "./presentation-slide";

export interface Slide {
  id: string;
  title?: string;
  subtitle?: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

interface PresentationProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function Presentation({ slides, autoPlay = false, autoPlayInterval = 5000 }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const goToSlide = useCallback(
    (slideIndex: number) => {
      setCurrentSlide(Math.max(0, Math.min(slideIndex, slides.length - 1)));
    },
    [slides.length]
  );

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  }, [slides.length]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && currentSlide < slides.length - 1) {
      const timer = setTimeout(() => {
        goToNext();
      }, autoPlayInterval);
      return () => clearTimeout(timer);
    }
    if (isPlaying && currentSlide === slides.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentSlide, slides.length, autoPlayInterval, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case " ":
          event.preventDefault();
          togglePlay();
          break;
        case "Home":
          goToSlide(0);
          break;
        case "End":
          goToSlide(slides.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length, goToNext, goToPrevious, goToSlide, togglePlay]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="flex-1 overflow-hidden">
        <PresentationSlide
          image={currentSlideData.image}
          imageAlt={currentSlideData.imageAlt}
          subtitle={currentSlideData.subtitle}
          title={currentSlideData.title}
        >
          {currentSlideData.content}
        </PresentationSlide>
      </div>

      <PresentationNavigation
        currentSlide={currentSlide}
        isPlaying={isPlaying}
        onGoToSlide={goToSlide}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onTogglePlay={togglePlay}
        totalSlides={slides.length}
      />
    </div>
  );
}
