'use client';
import React, { useState } from 'react';
import { getDictionary } from '@/get-dictionary';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Typography from '../ui/Typography';
import Help from '../Help';
import CustomButton from '../CustomButton';
import SecondDonateBtn from '../SecDonateBtn';
import Card from './Card';

type TabKey = 'first' | 'second' | 'third';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 120px 16px 0;

  @media (max-width: 1080px) {
    padding: 30px 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 1290px;
  width: 100%;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 30px;
  }
`;

const StyledLeft = styled.div`
  position: relative;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledRight = styled.div`
  max-width: 578px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > p:first-of-type {
    color: rgba(226, 109, 90, 1);
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & > p:first-of-type {
      display: none;
    }

    h2 {
      text-align: center;
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 1080px) {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 74px;
  }
`;

const ButtonWrapper = styled.div<{ $isActive: boolean; $position: number }>`
  flex: 0 0 auto;
  transition: all 0.4s ease;

  @media (max-width: 1080px) {
    position: absolute;
    top: 68%;
    left: 50%;
    transform-origin: center center;
    transform: ${({ $isActive, $position }) => {
      const base = 'translate(-50%, -50%) ';
      if ($isActive) return base + 'translateZ(0) scale(1)';
      if ($position === -1) return base + 'translateX(-185px) translateZ(-100px) scale(0.85)';
      if ($position === 1) return base + 'translateX(185px) translateZ(-100px) scale(0.85)';
      if ($position < -1) return base + 'translateX(-350px) translateZ(-200px) scale(0.7)';
      return base + 'translateX(300px) translateZ(-200px) scale(0.7)';
    }};
    z-index: ${({ $isActive }) => ($isActive ? 10 : 5)};
    cursor: pointer;
  }
`;

const StyledTabContent = styled.div`
  margin: 20px 0;
  animation: ${fadeIn} 0.4s ease;

  @media (max-width: 1080px) {
    max-width: 308px;
    width: 100%;
    text-align: center;
  }
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 0;
  }
`;

const StyledCardContainer = styled.div`
  position: absolute;
  bottom: 47px;
`;

export default function AboutUs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['pageAboutUs'];
}) {
  const [activeTab, setActiveTab] = useState<TabKey>('first');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const tabs: TabKey[] = ['first', 'second', 'third'];

  const getPosition = (index: number) => {
    const activeIdx = tabs.indexOf(activeTab);
    let diff = index - activeIdx;
    if (diff > tabs.length / 2) diff -= tabs.length;
    if (diff < -tabs.length / 2) diff += tabs.length;
    return diff;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth > 1080) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || window.innerWidth > 1080) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStartX - currentX;
    if (Math.abs(diff) > 50) {
      const currentIdx = tabs.indexOf(activeTab);
      let newIdx = diff > 0 ? currentIdx + 1 : currentIdx - 1;
      newIdx = (newIdx + tabs.length) % tabs.length;
      setActiveTab(tabs[newIdx]);
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <StyledSection>
      <Container>
        <StyledLeft>
          <Image
            src="/assets/images/aboutUs/doubleCard.png"
            width={600}
            height={604}
            alt="images"
          />
          <StyledCardContainer>
            <Card
              imageSrc={dictionary.card.img}
              text={dictionary.card.text}
              number={dictionary.card.number}
            />
          </StyledCardContainer>
        </StyledLeft>

        <StyledRight>
          <Typography variant="sBodytext">{dictionary.aboutUs}</Typography>
          <Typography variant="h2">{dictionary.title}</Typography>

          <StyledButtons
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {tabs.map((tab, i) => {
              const isActive = activeTab === tab;
              const pos = getPosition(i);
              return (
                <ButtonWrapper
                  key={tab}
                  $isActive={isActive}
                  $position={pos}
                  onClick={() => setActiveTab(tab)}
                >
                  <CustomButton text={dictionary.textButtons[tab].button} isActive={isActive} />
                </ButtonWrapper>
              );
            })}
          </StyledButtons>

          <StyledTabContent key={activeTab}>
            <Typography variant="sBodytext">{dictionary.textButtons[activeTab].text}</Typography>
          </StyledTabContent>

          <StyledNav>
            <SecondDonateBtn text1={dictionary.donateNow.text1} />
            <Help helpText={dictionary.help} phoneNumber={dictionary.number} />
          </StyledNav>
        </StyledRight>
      </Container>
    </StyledSection>
  );
}
