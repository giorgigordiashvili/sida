import React from 'react';
import styled from 'styled-components';
import { useCarousel, CardPosition } from './UseCarousel';

// Styled Components
interface CardWrapperProps {
  $isActive: boolean;
  $position: CardPosition;
  $totalCards: number;
  $cardSize: 'small' | 'medium' | 'large';
  $customSpacing?: { left: number; right: number; farLeft: number; farRight: number };
}

const DesktopContainer = styled.div<{ $breakpoint: string }>`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ $breakpoint }) => $breakpoint}) {
    display: none;
  }
`;

const MobileCarouselContainer = styled.div<{ $height: string; $breakpoint: string }>`
  display: none;

  @media (max-width: ${({ $breakpoint }) => $breakpoint}) {
    display: block;
    width: 100%;
    max-width: 100%;
    margin: auto;
    position: relative;
    perspective: 1000px;
    height: ${({ $height }) => $height};
    overflow: hidden;
  }
`;

const SliderTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const CardWrapper = styled.div<CardWrapperProps>`
  position: absolute;
  opacity: ${({ $isActive, $position }) => {
    if ($isActive) return 1;
    if ($position === 'left' || $position === 'right') return 0.7;
    return 0.4;
  }};
  z-index: ${({ $isActive, $position }) => {
    if ($isActive) return 10;
    if ($position === 'left' || $position === 'right') return 5;
    return 1;
  }};
  cursor: pointer;
  top: 50%;
  transform-origin: center center;
  transform: ${({ $isActive, $position, $cardSize, $customSpacing }) => {
    const baseTransform = 'translateY(-50%) ';

    // Dynamic spacing based on card size or custom spacing
    const spacing =
      $customSpacing ||
      {
        small: { left: 150, right: 150, farLeft: 300, farRight: 300 },
        medium: { left: 200, right: 200, farLeft: 400, farRight: 400 },
        large: { left: 250, right: 250, farLeft: 500, farRight: 500 },
      }[$cardSize];

    if ($isActive) {
      return baseTransform + 'translateX(0) scale(1) translateZ(0)';
    } else if ($position === 'left') {
      return (
        baseTransform +
        `translateX(-${spacing.left}px) scale(0.85) translateZ(-100px) rotateY(15deg)`
      );
    } else if ($position === 'right') {
      return (
        baseTransform +
        `translateX(${spacing.right}px) scale(0.85) translateZ(-100px) rotateY(-15deg)`
      );
    }
    return $position === 'far-left'
      ? baseTransform +
          `translateX(-${spacing.farLeft}px) scale(0.7) translateZ(-200px) rotateY(25deg)`
      : baseTransform +
          `translateX(${spacing.farRight}px) scale(0.7) translateZ(-200px) rotateY(-25deg)`;
  }};
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: ${({ $isActive }) => ($isActive ? 'none' : 'blur(1px)')};

  &:hover {
    transform: ${({ $isActive, $position, $cardSize, $customSpacing }) => {
      if ($isActive) return 'translateY(-50%) translateX(0) scale(1.02) translateZ(0)';

      const baseTransform = 'translateY(-50%) ';
      const spacing =
        $customSpacing ||
        {
          small: { left: 150, right: 150, farLeft: 300, farRight: 300 },
          medium: { left: 200, right: 200, farLeft: 400, farRight: 400 },
          large: { left: 250, right: 250, farLeft: 500, farRight: 500 },
        }[$cardSize];

      if ($position === 'left') {
        return (
          baseTransform +
          `translateX(-${spacing.left}px) scale(0.88) translateZ(-100px) rotateY(15deg)`
        );
      } else if ($position === 'right') {
        return (
          baseTransform +
          `translateX(${spacing.right}px) scale(0.88) translateZ(-100px) rotateY(-15deg)`
        );
      }
      return $position === 'far-left'
        ? baseTransform +
            `translateX(-${spacing.farLeft}px) scale(0.73) translateZ(-200px) rotateY(25deg)`
        : baseTransform +
            `translateX(${spacing.farRight}px) scale(0.73) translateZ(-200px) rotateY(-25deg)`;
    }};
  }
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.button<{ $isActive: boolean; $color?: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $isActive, $color = 'rgba(43, 182, 115, 1)' }) =>
    $isActive ? $color : $color.replace('1)', '0.3)')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $color = 'rgba(43, 182, 115, 1)' }) => $color.replace('1)', '0.7)')};
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${({ $color = 'rgba(43, 182, 115, 1)' }) => $color};
    outline-offset: 2px;
  }
`;

// Main Component
export interface ResponsiveCarouselProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  breakpoint?: string;
  mobileHeight?: string;
  showDots?: boolean;
  dotColor?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  enableTouch?: boolean;
  className?: string;
  'aria-label'?: string;
  cardSize?: 'small' | 'medium' | 'large'; // New prop
  customSpacing?: { left: number; right: number; farLeft: number; farRight: number }; // Alternative custom spacing
}

export function ResponsiveCarousel<T>({
  items,
  renderCard,
  breakpoint = '1080px',
  mobileHeight = '400px',
  showDots = true,
  dotColor,
  autoPlay = false,
  autoPlayInterval = 3000,
  enableTouch = true,
  className,
  'aria-label': ariaLabel = 'Image carousel',
  cardSize = 'medium', // Default to medium
  customSpacing, // Custom spacing override
}: ResponsiveCarouselProps<T>) {
  const carousel = useCarousel({
    totalItems: items.length,
    autoPlay,
    autoPlayInterval,
    enableTouch,
  });

  if (!items.length) return null;

  return (
    <>
      {/* Desktop Layout */}
      <DesktopContainer $breakpoint={breakpoint} className={className}>
        {items.map((item, index) => (
          <div key={index}>{renderCard(item, index)}</div>
        ))}
      </DesktopContainer>

      {/* Mobile Carousel */}
      <MobileCarouselContainer
        $height={mobileHeight}
        $breakpoint={breakpoint}
        className={className}
        role="region"
        aria-label={ariaLabel}
      >
        <div
          {...carousel.touchHandlers}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          {carousel.isClient && (
            <SliderTrack>
              {items.map((item, index) => {
                const position = carousel.helpers.getCardPosition(index);
                const isActive = position === 'active';

                return (
                  <CardWrapper
                    key={index}
                    $isActive={isActive}
                    $position={position}
                    $totalCards={items.length}
                    $cardSize={cardSize}
                    $customSpacing={customSpacing}
                    onClick={() => carousel.navigation.goToSlide(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        carousel.navigation.goToSlide(index);
                      }
                    }}
                    tabIndex={isActive ? 0 : -1}
                    role="button"
                    aria-label={`Go to slide ${index + 1} of ${items.length}`}
                  >
                    {renderCard(item, index)}
                  </CardWrapper>
                );
              })}
            </SliderTrack>
          )}

          {showDots && (
            <NavigationDots role="tablist" aria-label="Carousel navigation">
              {items.map((_, index) => (
                <Dot
                  key={index}
                  $isActive={index === carousel.activeIndex}
                  $color={dotColor}
                  onClick={() => carousel.navigation.goToSlide(index)}
                  role="tab"
                  aria-selected={index === carousel.activeIndex}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </NavigationDots>
          )}
        </div>
      </MobileCarouselContainer>
    </>
  );
}
