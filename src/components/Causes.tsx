'use client';
import React from 'react';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Typography from './ui/Typography';
import CausesCard from './CausesCard';
import DiscoverBtn from './DiscoverBtn';

const StyledSection = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 0;
  background-color: rgba(255, 243, 240, 1);
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    :nth-child(1) {
      color: rgba(226, 109, 90, 1);
    }

    :nth-child(2) {
      color: rgba(31, 31, 31, 1);
    }
  }
`;

const StyledContainer = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: auto;
`;

const StyledCards = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
`;

export default function Causes({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['causes'];
}) {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>
          <div>
            <Typography variant="sBodytext">{dictionary.featured}</Typography>
            <Typography variant="h2">{dictionary.Popular}</Typography>
          </div>
          <DiscoverBtn dictionary={dictionary.btn} />
        </StyledTitle>
        <StyledCards>
          <CausesCard dictionary={dictionary.cardContent} color="purple" />
          <CausesCard dictionary={dictionary.cardContent} color="green" />
          <CausesCard dictionary={dictionary.cardContent} color="orange" />
        </StyledCards>
      </StyledContainer>
    </StyledSection>
  );
}
