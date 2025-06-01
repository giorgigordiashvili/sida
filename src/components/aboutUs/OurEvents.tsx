'use client';
import { getDictionary } from '@/get-dictionary';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typography from '../ui/Typography';
import EventsCard from './EventsCard';

// ---- TypeScript Fix: Define prop types ----
type CardPosition = 'active' | 'left' | 'right' | 'far-left' | 'far-right';

interface CardWrapperProps {
  $isActive: boolean;
  $position: CardPosition;
  $totalCards: number;
}

const StyledSection = styled.section`
  padding: 120px 16px 0 16px;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitles = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  & > :nth-child(1) {
    color: rgba(226, 109, 90, 1);
  }
`;

const StyledCards = styled.div`
  display: flex;
  max-width: 1290px;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
  padding-top: 60px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
    width: 100%;
    max-width: 100%;
    margin: auto;
    position: relative;
    perspective: 1000px;
    height: 400px;
    overflow: hidden;
    padding-top: 60px;
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
  transform: ${({ $isActive, $position }) => {
    const baseTransform = 'translateY(-50%) ';
    if ($isActive) {
      return baseTransform + 'translateX(0) scale(1) translateZ(0)';
    } else if ($position === 'left') {
      return baseTransform + 'translateX(-200px) scale(0.85) translateZ(-100px) rotateY(15deg)';
    } else if ($position === 'right') {
      return baseTransform + 'translateX(200px) scale(0.85) translateZ(-100px) rotateY(-15deg)';
    }
    return $position === 'far-left'
      ? baseTransform + 'translateX(-400px) scale(0.7) translateZ(-200px) rotateY(25deg)'
      : baseTransform + 'translateX(400px) scale(0.7) translateZ(-200px) rotateY(-25deg)';
  }};
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: ${({ $isActive }) => ($isActive ? 'none' : 'blur(1px)')};

  &:hover {
    transform: ${({ $isActive, $position }) => {
      if ($isActive) return 'translateY(-50%) translateX(0) scale(1.02) translateZ(0)';
      const baseTransform = 'translateY(-50%) ';
      if ($position === 'left') {
        return baseTransform + 'translateX(-200px) scale(0.88) translateZ(-100px) rotateY(15deg)';
      } else if ($position === 'right') {
        return baseTransform + 'translateX(200px) scale(0.88) translateZ(-100px) rotateY(-15deg)';
      }
      return $position === 'far-left'
        ? baseTransform + 'translateX(-400px) scale(0.73) translateZ(-200px) rotateY(25deg)'
        : baseTransform + 'translateX(400px) scale(0.73) translateZ(-200px) rotateY(-25deg)';
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

const Dot = styled.button<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $isActive }) =>
    $isActive ? 'rgba(43, 182, 115, 1)' : 'rgba(43, 182, 115, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(43, 182, 115, 0.7);
    transform: scale(1.1);
  }
`;

export default function OurEvents({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['ourEvents'];
}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);

  // Create cards array for the swiper
  const cards = [
    {
      img: dictionary.cards.firstCard.img,
      title: dictionary.cards.firstCard.title,
      text: dictionary.cards.firstCard.text,
      donateBtn: dictionary.cards.buttonText,
      address: dictionary.cards.firstCard.address,
      schedule: undefined,
    },
    {
      img: dictionary.cards.firstCard.img,
      title: dictionary.cards.firstCard.title,
      text: dictionary.cards.firstCard.text,
      donateBtn: dictionary.cards.buttonText,
      address: dictionary.cards.secondCard.address,
      schedule: dictionary.cards.secondCard.schedule,
    },
    {
      img: dictionary.cards.secondCard.img,
      title: dictionary.cards.secondCard.title,
      text: dictionary.cards.secondCard.text,
      donateBtn: dictionary.cards.buttonText,
      address: dictionary.cards.thirdCard.address,
      schedule: dictionary.cards.thirdCard.schedule,
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getNormalizedIndex = (index: number) => {
    const totalItems = cards.length;
    return ((index % totalItems) + totalItems) % totalItems;
  };

  const getCardPosition = (index: number): CardPosition => {
    const totalItems = cards.length;
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
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth > 1080) return;
    setIsTouching(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching || window.innerWidth > 1080) return;
    const x = e.touches[0].clientX;
    const distance = startX - x;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        setActiveIndex((prev) => getNormalizedIndex(prev + 1));
      } else {
        setActiveIndex((prev) => getNormalizedIndex(prev - 1));
      }
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && window.innerWidth <= 1080) {
        setActiveIndex((prev) => prev);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledSection>
      <StyledTitles>
        <Typography variant="sBodytext">{dictionary.title}</Typography>
        <Typography variant="h2">{dictionary.text}</Typography>
      </StyledTitles>

      {/* Desktop Cards */}
      <StyledCards>
        <EventsCard
          img={dictionary.cards.firstCard.img}
          title={dictionary.cards.firstCard.title}
          text={dictionary.cards.firstCard.text}
          donateBtn={dictionary.cards.buttonText}
          address={dictionary.cards.firstCard.address}
        />
        <EventsCard
          img={dictionary.cards.firstCard.img}
          title={dictionary.cards.firstCard.title}
          text={dictionary.cards.firstCard.text}
          donateBtn={dictionary.cards.buttonText}
          address={dictionary.cards.secondCard.address}
          schedule={dictionary.cards.secondCard.schedule}
        />
        <EventsCard
          img={dictionary.cards.secondCard.img}
          title={dictionary.cards.secondCard.title}
          text={dictionary.cards.secondCard.text}
          donateBtn={dictionary.cards.buttonText}
          address={dictionary.cards.thirdCard.address}
          schedule={dictionary.cards.thirdCard.schedule}
        />
      </StyledCards>

      {/* Mobile Carousel */}
      <CarouselContainer>
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          {isClient && (
            <SliderTrack>
              {cards.map((card, index) => {
                const position = getCardPosition(index);
                const isActive = position === 'active';

                return (
                  <CardWrapper
                    key={index}
                    $isActive={isActive}
                    $position={position}
                    $totalCards={cards.length}
                    onClick={() => handleCardClick(index)}
                  >
                    <EventsCard
                      img={card.img}
                      title={card.title}
                      text={card.text}
                      donateBtn={card.donateBtn}
                      address={card.address}
                      schedule={card.schedule}
                    />
                  </CardWrapper>
                );
              })}
            </SliderTrack>
          )}

          <NavigationDots>
            {cards.map((_, index) => (
              <Dot
                key={index}
                $isActive={index === activeIndex}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </NavigationDots>
        </div>
      </CarouselContainer>
    </StyledSection>
  );
}
