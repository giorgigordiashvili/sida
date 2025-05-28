'use client';
import React from 'react';
import styled from 'styled-components';
import Typography from '../ui/Typography';
import Image from 'next/image';

type CardProps = {
  imageSrc: string;
  text: string;
  number: string;
};

const StyledCard = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  background-color: rgba(226, 109, 90, 1);
  width: fit-content;
  padding: 20px 54px 21px 30px;
  border-radius: 20px;
`;
const StyledImageContainer = styled.div``;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default function Card(props: CardProps) {
  return (
    <StyledCard>
      <StyledImageContainer>
        <Image src={props.imageSrc} width={65} height={65} alt="image" />
      </StyledImageContainer>
      <StyledContent>
        <Typography variant="h2">{props.number}</Typography>
        <Typography variant="sBodytext">{props.text}</Typography>
      </StyledContent>
    </StyledCard>
  );
}
