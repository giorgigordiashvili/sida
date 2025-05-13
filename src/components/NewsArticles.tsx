'use client';
import React, { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard';
import { getDictionary } from '@/get-dictionary';
import Typography from './ui/Typography';
import styled from 'styled-components';

// Main container styles
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

// Title section styles
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

// Card container with desktop and mobile styles
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

// Slider track for mobile view - modified for 3D effect
const SliderTrack = styled.div<{ offset: number }>`
  display: flex;
  width: 100%;
  transition: transform 0.4s ease;
  gap: 20px;

  @media (max-width: 1080px) {
    transform: ${({ offset }) => `translateX(${offset}px)`};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible; /* Ensure transformed cards don't get cut off */
  }
`;

// Individual card wrapper with enhanced 3D effect
const CardWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isActive', 'position', 'totalCards'].includes(prop),
})`
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
    top: 50%; /* Position vertically in the middle */
    transform-origin: center center; /* Set transform origin to center */
    transform: ${({ isActive, position }) => {
      // First apply the vertical centering
      const baseTransform = 'translateY(-50%) ';

      // Then add the horizontal positioning and scaling with medium-sized gaps
      if (isActive) {
        return baseTransform + 'translateX(0) scale(1) translateZ(0)';
      } else if (position === 'left') {
        return baseTransform + 'translateX(-250px) scale(0.85) translateZ(-100px)'; // Medium gap
      } else if (position === 'right') {
        return baseTransform + 'translateX(250px) scale(0.85) translateZ(-100px)'; // Medium gap
      }
      return position === 'far-left'
        ? baseTransform + 'translateX(-500px) scale(0.7) translateZ(-200px)' // Medium gap
        : baseTransform + 'translateX(500px) scale(0.7) translateZ(-200px)'; // Medium gap
    }};
  }
`;

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

  // Detect client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Map dictionary.cards to newsItems
  const newsItems = dictionary.cards.map((card, index) => ({
    id: index + 1,
    title: card.title,
    text: card.text,
    readMore: dictionary.readMore,
    admin: dictionary.admin,
    comment: dictionary.comments,
  }));

  // Get the normalized index for infinite scrolling (handles overflow)
  const getNormalizedIndex = (index) => {
    const totalItems = newsItems.length;
    return ((index % totalItems) + totalItems) % totalItems;
  };

  // Determine card position relative to active card (for 3D effect)
  const getCardPosition = (index) => {
    const totalItems = newsItems.length;
    const normalizedActiveIndex = getNormalizedIndex(activeIndex);
    const normalizedIndex = getNormalizedIndex(index);

    // Calculate difference considering wrap-around
    let diff = normalizedIndex - normalizedActiveIndex;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    if (diff === 0) return 'active';
    if (diff === 1 || diff === -totalItems + 1) return 'right';
    if (diff === -1 || diff === totalItems - 1) return 'left';
    if (diff > 1) return 'far-right';
    return 'far-left';
  };

  // Handle card click to change active card
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  // Touch handlers for mobile scrolling
  const handleTouchStart = (e) => {
    if (window.innerWidth > 1080) return;
    setIsTouching(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching || window.innerWidth > 1080) return;
    const x = e.touches[0].clientX;
    const distance = startX - x;

    // Detect significant movement
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        // Swipe left - go to next
        setActiveIndex((prev) => getNormalizedIndex(prev + 1));
      } else {
        // Swipe right - go to previous
        setActiveIndex((prev) => getNormalizedIndex(prev - 1));
      }
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  // Resize handler
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
          // Desktop view remains unchanged
          newsItems.map((item) => (
            <CardWrapper key={item.id}>
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
          // Mobile view with 3D carousel effect
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
