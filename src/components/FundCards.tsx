'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FundCard from './FundCard';
import { getDictionary } from '@/get-dictionary';

type CardPosition = 'active' | 'left' | 'right' | 'far-left' | 'far-right';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  gap: 10px;
  max-width: 1290px;
  margin: auto;
  margin-top: -100px;

  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    position: relative;
    height: 208px;
  }
`;

const CardWrapper = styled.div<{
  $isActive: boolean;
  $position: CardPosition;
}>`
  flex: 1;

  @media (max-width: 1080px) {
    flex: 0 0 auto;
    position: absolute;
    opacity: 1;
    z-index: ${({ $isActive, $position }) => {
      if ($isActive) return 10;
      if ($position === 'left' || $position === 'right') return 5;
      return 1;
    }};
    top: 50%;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    transform-origin: center center;
    transform: ${({ $position }) => {
      const base = 'translateY(-50%) ';
      if ($position === 'active') return base + 'translateX(0) scale(1) translateZ(0)';
      if ($position === 'left') return base + 'translateX(-210px) scale(0.88) translateZ(-100px)';
      if ($position === 'right') return base + 'translateX(210px) scale(0.88) translateZ(-100px)';
      if ($position === 'far-left')
        return base + 'translateX(-420px) scale(0.74) translateZ(-200px)';
      return base + 'translateX(420px) scale(0.74) translateZ(-200px)';
    }};
  }
`;

export default function FundCards({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['fundCards'];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const cards = [
    {
      title: dictionary.title,
      description: dictionary.description,
      imgSrc: 'assets/images/helpingFund.svg',
      backgroundColor: 'rgba(59, 80, 163, 1)',
    },
    {
      title: dictionary.title,
      description: dictionary.description,
      imgSrc: 'assets/images/helpingFund.svg',
      backgroundColor: 'rgba(43, 182, 115, 1)',
    },
    {
      title: dictionary.title,
      description: dictionary.description,
      imgSrc: 'assets/images/helpingFund.svg',
      backgroundColor: 'rgba(226, 109, 90, 1)',
    },
  ];

  const getNormalizedIndex = (index: number) => {
    const total = cards.length;
    return ((index % total) + total) % total;
  };

  const getCardPosition = (index: number): CardPosition => {
    const total = cards.length;
    const normalizedActive = getNormalizedIndex(activeIndex);
    const normalizedIndex = getNormalizedIndex(index);
    let diff = normalizedIndex - normalizedActive;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return 'active';
    if (diff === 1 || diff === -total + 1) return 'right';
    if (diff === -1 || diff === total - 1) return 'left';
    return diff > 1 ? 'far-right' : 'far-left';
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
    const distance = startX - e.touches[0].clientX;

    if (Math.abs(distance) > 50) {
      setActiveIndex((prev) =>
        distance > 0 ? getNormalizedIndex(prev + 1) : getNormalizedIndex(prev - 1)
      );
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => setIsTouching(false);

  return (
    <StyledContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {cards.map((card, index) => (
        <CardWrapper
          key={index}
          $isActive={getCardPosition(index) === 'active'}
          $position={getCardPosition(index)}
          onClick={() => handleCardClick(index)}
        >
          <FundCard
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            backgroundColor={card.backgroundColor}
          />
        </CardWrapper>
      ))}
    </StyledContainer>
  );
}
