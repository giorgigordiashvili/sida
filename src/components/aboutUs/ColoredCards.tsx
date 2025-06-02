'use client';
import { getDictionary } from '@/get-dictionary';
import React, { useState } from 'react';
import styled from 'styled-components';
import ColoredCard from '../ColoredCard';

const StyledSection = styled.div`
  padding: 0 16px;
  padding-top: 120px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const StyledWrapper = styled.div`
  max-width: 1290px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  gap: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 400px;
  }
`;

const FirstCardWrapper = styled.div`
  @media (max-width: 768px) {
    position: relative;
    z-index: 1;
    cursor: pointer;
  }
`;

interface SecondCardWrapperProps {
  isExpanded: boolean;
}

const SecondCardWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<SecondCardWrapperProps>`
  @media (max-width: 768px) {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
    z-index: 2;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: ${(props) =>
      props.isExpanded ? 'translateY(55%) scale(1.02)' : 'translateY(0) scale(1)'};
    opacity: 1;
    filter: ${(props) =>
      props.isExpanded
        ? 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))'
        : 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))'};
    pointer-events: auto;

    &::before {
      content: '';
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: ${(props) => (props.isExpanded ? '30px' : '0px')};
      height: ${(props) => (props.isExpanded ? '30px' : '0px')};
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.1) 70%,
        transparent 100%
      );
      border-radius: 50%;
      transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
      backdrop-filter: blur(10px);
    }

    &::after {
      content: '';
      position: absolute;
      inset: -10px;
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 25%,
        transparent 75%,
        rgba(255, 255, 255, 0.05) 100%
      );
      border-radius: inherit;
      opacity: ${(props) => (props.isExpanded ? '1' : '0')};
      transition: opacity 0.6s ease 0.4s;
      pointer-events: none;
      z-index: -1;
    }
  }
`;

export default function HelpCards({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['coloredCard'];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFirstCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledSection>
      <StyledWrapper>
        <FirstCardWrapper onClick={handleFirstCardClick}>
          <ColoredCard
            color={dictionary.firstCard.color}
            title={dictionary.firstCard.title}
            text={dictionary.firstCard.text}
            buttonText={dictionary.firstCard.buttonText}
          />
        </FirstCardWrapper>
        <SecondCardWrapper isExpanded={isExpanded}>
          <ColoredCard
            color={dictionary.secondCard.color}
            title={dictionary.secondCard.title}
            text={dictionary.secondCard.text}
            buttonText={dictionary.secondCard.buttonText}
          />
        </SecondCardWrapper>
      </StyledWrapper>
    </StyledSection>
  );
}
