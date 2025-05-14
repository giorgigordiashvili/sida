'use client';
import React, { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard';
import { getDictionary } from '@/get-dictionary';
import Typography from './ui/Typography';
import styled from 'styled-components';

// ---- TypeScript Fix: Define prop types ----
type CardPosition = 'active' | 'left' | 'right' | 'far-left' | 'far-right';

interface CardWrapperProps {
  isActive: boolean;
  position: CardPosition;
  totalCards: number;
}

// ---- Styled Components ----
const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1290px;
  width: 100%;
  margin: auto;
  margin-top: 120px;
  padding: 0 20px;

  @media (max-width: 1080px) {
    margin-top: 30px;
    padding: 0;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 60px;

  @media (max-width: 1080px) {
    align-items: flex-start;
    margin-bottom: 0;
    :first-child {
      display: none;
    }

    :last-child {
      font-size: 28px;
      padding: 0 64px;
      margin: auto;
      text-align: center;
      margin-top: 30px;
      margin-bottom: 0;
    }
  }

  & > :first-child {
    color: rgba(226, 109, 90, 1);
  }

  & > :last-child {
    color: rgba(31, 31, 31, 1);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 30px;

  @media (max-width: 1080px) {
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
    position: relative;
    perspective: 1000px;
    height: 300px;
    margin: 30px 0;
  }
`;

const SliderTrack = styled.div<{ offset?: number }>`
  display: flex;
  width: 100%;
  transition: transform 0.4s ease;
  gap: 20px;

  @media (max-width: 1080px) {
    transform: ${({ offset }) => `translateX(${offset || 0}px)`};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
`;

const CardWrapper = styled.div<CardWrapperProps>`
  flex: 1;
  transition: all 0.4s ease;

  @media (max-width: 1080px) {
    flex: 0 0 auto;
    position: absolute;
    opacity: ${({ isActive, position }) => {
      if (isActive) return 1;
      if (position === 'left' || position === 'right') return 0.7;
      return 0.4;
    }};
    z-index: ${({ isActive, position }) => {
      if (isActive) return 10;
      if (position === 'left' || position === 'right') return 5;
      return 1;
    }};
    cursor: pointer;
    top: 50%;
    transform-origin: center center;
    transform: ${({ isActive, position }) => {
      const baseTransform = 'translateY(-50%) ';
      if (isActive) {
        return baseTransform + 'translateX(0) scale(1) translateZ(0)';
      } else if (position === 'left') {
        return baseTransform + 'translateX(-250px) scale(0.85) translateZ(-100px)';
      } else if (position === 'right') {
        return baseTransform + 'translateX(250px) scale(0.85) translateZ(-100px)';
      }
      return position === 'far-left'
        ? baseTransform + 'translateX(-500px) scale(0.7) translateZ(-200px)'
        : baseTransform + 'translateX(500px) scale(0.7) translateZ(-200px)';
    }};
  }
`;

// ---- Main Component ----
export default function NewsArticles({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['newsCard'];
}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const newsItems = dictionary.cards.map((card, index) => ({
    id: index + 1,
    title: card.title,
    text: card.text,
    readMore: dictionary.readMore,
    admin: dictionary.admin,
    comment: dictionary.comments,
  }));

  const getNormalizedIndex = (index: number) => {
    const totalItems = newsItems.length;
    return ((index % totalItems) + totalItems) % totalItems;
  };

  const getCardPosition = (index: number): CardPosition => {
    const totalItems = newsItems.length;
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
      <StyledTitle>
        <Typography variant="sBodytext">{dictionary.news || 'Our News'}</Typography>
        <Typography variant="h2">{dictionary.recent || 'Recent Articles'}</Typography>
      </StyledTitle>

      <StyledContainer
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isClient && window.innerWidth > 1080 ? (
          newsItems.map((item) => (
            <CardWrapper
              key={item.id}
              isActive={false}
              position="active"
              totalCards={newsItems.length}
            >
              <NewsCard
                title={item.title}
                text={item.text}
                readMore={item.readMore}
                admin={item.admin}
                comment={item.comment}
              />
            </CardWrapper>
          ))
        ) : (
          <SliderTrack>
            {newsItems.map((item, index) => {
              const position = getCardPosition(index);
              const isActive = position === 'active';

              return (
                <CardWrapper
                  key={item.id}
                  isActive={isActive}
                  position={position}
                  totalCards={newsItems.length}
                  onClick={() => handleCardClick(index)}
                >
                  <NewsCard
                    title={item.title}
                    text={item.text}
                    readMore={item.readMore}
                    admin={item.admin}
                    comment={item.comment}
                  />
                </CardWrapper>
              );
            })}
          </SliderTrack>
        )}
      </StyledContainer>
    </StyledSection>
  );
}
