'use client';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Typography from './ui/Typography';

const StyledCard = styled.div`
  width: 410px;
  height: 159px;
  border-radius: 20px;
  background-color: rgba(249, 249, 247, 1);
  display: flex;
  align-items: center;
  gap: 40px;
  padding-left: 20px;

  @media (max-width: 1080px) {
    width: 272px;
    height: 98px;
    gap: 20px;
  }
`;

const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 1080px) {
    gap: 0;

    :nth-child(1) {
      font-size: 28px;
    }
    :nth-child(2) {
      font-size: 18px;
    }
  }

  :nth-child(1) {
    color: rgba(43, 182, 115, 1);
    font-family: Jost;
  }

  :nth-child(2) {
    color: rgba(31, 31, 31, 1);
    font-family: Jost;
  }
`;

type Props = {
  image: string;
  title: string;
  text: string;
};

export default function StatsCard(props: Props) {
  return (
    <StyledCard>
      <Image src={props.image} height={80} width={80} alt="hand" />
      <StyledTexts>
        <Typography variant="h2">{props.title}</Typography>
        <Typography variant="lBodytext">{props.text}</Typography>
      </StyledTexts>
    </StyledCard>
  );
}
