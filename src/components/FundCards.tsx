'use client';
import styled from 'styled-components';
import FundCard from './FundCard';
import { getDictionary } from '@/get-dictionary';
import { useCarousel, CardPosition } from './reusableCarousel/UseCarousel';

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

  // Use your carousel hook
  const carousel = useCarousel({
    totalItems: cards.length,
    autoPlay: false, // Set to true if you want auto-play
    autoPlayInterval: 3000,
    enableTouch: true,
    touchThreshold: 50,
  });

  // Only render on client side
  if (!carousel.isClient) return null;

  return (
    <StyledContainer {...carousel.touchHandlers}>
      {cards.map((card, index) => {
        const position = carousel.helpers.getCardPosition(index);
        const isActive = position === 'active';

        return (
          <CardWrapper
            key={index}
            $isActive={isActive}
            $position={position}
            onClick={() => carousel.navigation.goToSlide(index)}
          >
            <FundCard
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              backgroundColor={card.backgroundColor}
            />
          </CardWrapper>
        );
      })}
    </StyledContainer>
  );
}
