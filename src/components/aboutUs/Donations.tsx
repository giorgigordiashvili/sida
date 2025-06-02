'use client';
import { getDictionary } from '@/get-dictionary';
import React from 'react';
import styled from 'styled-components';
import Typography from '../ui/Typography';

const StyledSection = styled.section`
  background-color: rgba(31, 31, 31, 1);
  height: 746px;
  width: 100%;
  margin-top: 120px;

  @media (max-width: 1080px) {
    height: 360px;
    margin-top: 30px;
  }
`;

const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 120px;
  width: 439px;
  margin: auto;
  text-align: center;

  p {
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }

  h2 {
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 1080px) {
    padding-top: 30px;
    width: fit-content;
  }
`;

export default function Donations({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['donations'];
}) {
  return (
    <StyledSection>
      <StyledTexts>
        <Typography variant="sBodytext">{dictionary.title}</Typography>
        <Typography variant="h2">{dictionary.text}</Typography>
      </StyledTexts>
    </StyledSection>
  );
}
