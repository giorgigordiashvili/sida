'use client';
import React from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';
import OutlineBtn from './OutlineBtn';

type Props = {
  color: string;
  title: string;
  text: string;
  buttonText: string;
};

const StyledCard = styled.div<{ color: string }>`
  max-width: 630px;
  width: 100%;
  padding: 55px 60px;
  border-radius: 20px;
  height: 376px;
  background-color: ${(props) => {
    if (props.color === 'green') {
      return 'rgba(43, 182, 115, 1)';
    }
    return 'rgba(226, 109, 90, 1)';
  }};
  box-shadow: ${(props) => {
    if (props.color === 'green') {
      return '0px -10px 16px 0px rgba(0, 0, 0, 0.3)';
    }
    return '0';
  }};

  & > :nth-child(1) {
    font-size: 24px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    line-height: 34px;
  }

  & > :nth-child(2) {
    color: rgba(255, 255, 255, 1);
    padding-top: 20px;
    line-height: 34px;
  }

  & > :nth-child(3) {
    margin-top: 50px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px 16px;
    height: 254px;

    & > :nth-child(1) {
      font-size: 16px;
      line-height: 100%;
      text-transform: capitalize;
    }

    & > :nth-child(2) {
      font-size: 14px;
      line-height: 24px;
      text-transform: capitalize;
    }

    & > :nth-child(3) {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    max-width: 328px;
  }
`;

export default function ColoredCard(props: Props) {
  return (
    <StyledCard color={props.color}>
      <Typography variant="lBodytext">{props.title}</Typography>
      <Typography variant="mBodytext">{props.text}</Typography>
      <OutlineBtn text={props.buttonText} />
    </StyledCard>
  );
}
