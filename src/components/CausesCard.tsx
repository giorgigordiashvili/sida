'use client';

import React from 'react';
import { getDictionary } from '@/get-dictionary';
import Image from 'next/image';
import Typography from './ui/Typography';
import styled from 'styled-components';

const StyledCard = styled.div`
  max-width: 410px;
  width: 100%;
  border-radius: 20px;
  background: var(--soft-gray-background, rgba(249, 249, 247, 1));
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);

  img {
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const StyledContent = styled.div`
  padding: 30px 40px 50px 40px;
`;

const StyledText = styled.div`
  :nth-child(1) {
    color: rgba(31, 31, 31, 1);
    font-family: Jost;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0%;
  }
  :nth-child(2) {
    color: rgba(77, 77, 77, 1);
    margin-top: 10px;
  }
`;

const StyledEarning = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 5px;
    :nth-child(1) {
      color: rgba(77, 77, 77, 1);
    }
    :nth-child(2) {
      color: rgba(31, 31, 31, 1);
    }
  }
`;

const StyledPercentage = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: visible;
  position: relative;
`;

const ProgressBar = styled.div<{ width: string }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color || 'rgba(43, 182, 115, 1)'};
  border-radius: 3px;

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    right: 0;
    border: 3px solid ${(props) => props.color || 'rgba(43, 182, 115, 1)'};
    top: -5px;
  }
`;

const getLineColor = (color: 'purple' | 'green' | 'orange') => {
  if (color === 'purple') return 'rgba(59, 80, 163, 1)';
  if (color === 'green') return 'rgba(43, 182, 115, 1)';
  if (color === 'orange') return 'rgba(226, 109, 90, 1)';
  return 'rgba(0, 0, 0, 1)';
};

const formatNumber = (num: number | string): string => {
  return Number(num).toLocaleString('en-US');
};

type Props = {
  color: 'purple' | 'green' | 'orange';
  dictionary: Awaited<ReturnType<typeof getDictionary>>['causes']['cardContent'];
};

export default function CausesCard({ color, dictionary }: Props) {
  const progressColor = getLineColor(color);
  const progressPercentage = `${(Number(dictionary.raised) / Number(dictionary.goal)) * 100}%`;

  return (
    <StyledCard>
      <Image src="/assets/images/pfp.svg" width={410} height={258} alt="image" />
      <StyledContent>
        <StyledText>
          <Typography variant="lBodytext">{dictionary.title}</Typography>
          <Typography variant="sBodytext">{dictionary.text}</Typography>
        </StyledText>
        <StyledEarning>
          <div>
            <Typography variant="sBodytext">{dictionary.raisedText}</Typography>
            <Typography variant="sBodytext">${formatNumber(dictionary.raised)}</Typography>
          </div>
          <div>
            <Typography variant="sBodytext">{dictionary.goalText}</Typography>
            <Typography variant="sBodytext">${formatNumber(dictionary.goal)}</Typography>
          </div>
        </StyledEarning>
        <StyledPercentage>
          <ProgressBar width={progressPercentage} color={progressColor} />
        </StyledPercentage>
      </StyledContent>
    </StyledCard>
  );
}
