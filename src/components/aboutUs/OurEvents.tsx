'use client';
import { getDictionary } from '@/get-dictionary';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ResponsiveCarousel } from '../reusableCarousel/ResponsiveCarousel';
import Typography from '../ui/Typography';
import EventsCard from './EventsCard';

const StyledSection = styled.section`
  padding: 120px 16px 0 16px;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1080px) {
    padding: 30px 0px 0px 0px;
  }
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

  & > :nth-child(2) {
    text-align: center;
  }
`;

const CardsContainer = styled.div`
  max-width: 1290px;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 1080px) {
    margin-top: 15px;
  }
`;

interface EventCardData {
  img: string;
  title: string;
  text: string;
  address: string;
  schedule?: string;
}

interface EventsSectionProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['ourEvents'];
}

export default function OurEvents({ dictionary }: EventsSectionProps) {
  const eventCards: EventCardData[] = useMemo(
    () => [
      {
        img: dictionary.cards.firstCard.img,
        title: dictionary.cards.firstCard.title,
        text: dictionary.cards.firstCard.text,
        address: dictionary.cards.firstCard.address,
      },
      {
        img: dictionary.cards.firstCard.img,
        title: dictionary.cards.firstCard.title,
        text: dictionary.cards.firstCard.text,
        address: dictionary.cards.secondCard.address,
        schedule: dictionary.cards.secondCard.schedule,
      },
      {
        img: dictionary.cards.secondCard.img,
        title: dictionary.cards.secondCard.title,
        text: dictionary.cards.secondCard.text,
        address: dictionary.cards.thirdCard.address,
        schedule: dictionary.cards.thirdCard.schedule,
      },
    ],
    [dictionary]
  );

  const renderEventCard = (card: EventCardData, index: number) => (
    <EventsCard
      key={index}
      img={card.img}
      title={card.title}
      text={card.text}
      donateBtn={dictionary.cards.buttonText}
      address={card.address}
      schedule={card.schedule}
    />
  );

  return (
    <StyledSection>
      <StyledTitles>
        <Typography variant="sBodytext">{dictionary.title}</Typography>
        <Typography variant="h2">{dictionary.text}</Typography>
      </StyledTitles>

      <CardsContainer>
        <ResponsiveCarousel
          items={eventCards}
          renderCard={renderEventCard}
          breakpoint="1080px"
          mobileHeight="400px"
          showDots={true}
          dotColor="rgba(43, 182, 115, 1)"
          cardSize="large"
          aria-label="Upcoming events carousel"
        />
      </CardsContainer>
    </StyledSection>
  );
}
