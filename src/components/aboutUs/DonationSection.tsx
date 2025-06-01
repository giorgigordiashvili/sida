'use client';
import { getDictionary } from '@/get-dictionary';
import React from 'react';
import styled from 'styled-components';
import { ResponsiveCarousel } from '../reusableCarousel/ResponsiveCarousel';
import DonationCard from './DonationCard';

const StyledSection = styled.section`
  display: flex;
  margin-top: -410px;
  padding: 0 16px;

  @media (max-width: 1080px) {
    margin-top: -206px;
    padding: 0;
  }
`;

const CardsContainer = styled.div`
  margin: auto;
  max-width: 1290px;
  width: 100%;
`;

interface DonationCardData {
  img: string;
  title: string;
  text: string;
  raisedText: string;
  raisedNumber: number;
  goalText: string;
  goalNumber: number;
}

interface DonationSectionProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['donationSection'];
}

export default function DonateSection({ dictionary }: DonationSectionProps) {
  const renderDonationCard = (card: DonationCardData, index: number) => (
    <DonationCard
      key={index}
      img={card.img}
      title={card.title}
      text={card.text}
      raised={card.raisedText}
      raisedNum={card.raisedNumber}
      goal={card.goalText}
      goalNum={card.goalNumber}
      donateBtn={dictionary.donateButton}
    />
  );

  return (
    <StyledSection>
      <CardsContainer>
        <ResponsiveCarousel
          items={dictionary.cards}
          renderCard={renderDonationCard}
          breakpoint="1080px"
          mobileHeight="400px"
          showDots={true}
          dotColor="rgba(43, 182, 115, 1)"
          cardSize="medium"
          aria-label="Donation campaigns carousel"
        />
      </CardsContainer>
    </StyledSection>
  );
}
