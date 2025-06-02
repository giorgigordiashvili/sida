import { useState, useEffect, useCallback } from 'react';

export type CardPosition = 'active' | 'left' | 'right' | 'far-left' | 'far-right';

export interface UseCarouselProps {
  totalItems: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  enableTouch?: boolean;
  touchThreshold?: number;
}

export interface UseCarouselReturn {
  activeIndex: number;
  isClient: boolean;
  touchHandlers: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: () => void;
  };
  navigation: {
    goToNext: () => void;
    goToPrev: () => void;
    goToSlide: (index: number) => void;
  };
  helpers: {
    getNormalizedIndex: (index: number) => number;
    getCardPosition: (index: number) => CardPosition;
  };
}

export const useCarousel = ({
  totalItems,
  autoPlay = false,
  autoPlayInterval = 3000,
  enableTouch = true,
  touchThreshold = 50,
}: UseCarouselProps): UseCarouselReturn => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Normalize index to handle circular navigation
  const getNormalizedIndex = useCallback(
    (index: number) => {
      return ((index % totalItems) + totalItems) % totalItems;
    },
    [totalItems]
  );

  // Calculate card position relative to active card
  const getCardPosition = useCallback(
    (index: number): CardPosition => {
      const normalizedActiveIndex = getNormalizedIndex(activeIndex);
      const normalizedIndex = getNormalizedIndex(index);

      let diff = normalizedIndex - normalizedActiveIndex;
      if (diff > totalItems / 2) diff -= totalItems;
      if (diff < -totalItems / 2) diff += totalItems;

      if (diff === 0) return 'active';
      if (diff === 1 || diff === -totalItems + 1) return 'right';
      if (diff === -1 || diff === totalItems - 1) return 'left';
      if (diff > 1) return 'far-right';
      return 'far-left';
    },
    [activeIndex, totalItems, getNormalizedIndex]
  );

  // Navigation functions
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => getNormalizedIndex(prev + 1));
  }, [getNormalizedIndex]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => getNormalizedIndex(prev - 1));
  }, [getNormalizedIndex]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isClient) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isClient, goToNext]);

  // Touch handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enableTouch) return;
      setIsTouching(true);
      setStartX(e.touches[0].clientX);
    },
    [enableTouch]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isTouching || !enableTouch) return;

      const x = e.touches[0].clientX;
      const distance = startX - x;

      if (Math.abs(distance) > touchThreshold) {
        if (distance > 0) {
          goToNext();
        } else {
          goToPrev();
        }
        setIsTouching(false);
      }
    },
    [isTouching, enableTouch, startX, touchThreshold, goToNext, goToPrev]
  );

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);
  }, []);

  return {
    activeIndex,
    isClient,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
    navigation: {
      goToNext,
      goToPrev,
      goToSlide,
    },
    helpers: {
      getNormalizedIndex,
      getCardPosition,
    },
  };
};
