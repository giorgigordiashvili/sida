'use client';
import React from 'react';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import CausesCard from './CausesCard';

const StyledSection = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 0;
  @media (max-width: 1080px) {
    padding: 30px 0;
  }
`;

const StyledContainer = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: auto;
  padding: 0 15px;

  @media (max-width: 1080px) {
    padding: 0;
    width: 100%;
    overflow: hidden;
  }
`;
const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    gap: 30px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MobileCardsContainer = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;

export default function Causes({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['causes'];
}) {
  return (
    <StyledSection>
      <StyledContainer>
        {/* Desktop Cards */}
        <StyledCards>
          <CausesCard dictionary={dictionary.cardContent} color="purple" />
          <CausesCard dictionary={dictionary.cardContent} color="green" />
          <CausesCard dictionary={dictionary.cardContent} color="orange" />
          <CausesCard dictionary={dictionary.cardContent} color="purple" />
          <CausesCard dictionary={dictionary.cardContent} color="green" />
          <CausesCard dictionary={dictionary.cardContent} color="orange" />
        </StyledCards>

        {/* Mobile Cards */}
        <MobileCardsContainer>
          <CausesCard dictionary={dictionary.cardContent} color="purple" />
          <CausesCard dictionary={dictionary.cardContent} color="green" />
          <CausesCard dictionary={dictionary.cardContent} color="orange" />
          <CausesCard dictionary={dictionary.cardContent} color="purple" />
          <CausesCard dictionary={dictionary.cardContent} color="green" />
          <CausesCard dictionary={dictionary.cardContent} color="orange" />
        </MobileCardsContainer>
      </StyledContainer>
    </StyledSection>
  );
}
