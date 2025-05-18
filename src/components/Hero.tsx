'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from './ui/Typography';
import { useState, useEffect } from 'react';

const Container = styled.div`
  padding: 73px 10px 189px 10px;
  color: rgba(52, 52, 52, 1);
  max-width: 1290px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1080px) {
    max-width: 800px;
    padding: 30px 0 120px 16px;
    width: 100%;
    overflow: hidden;
  }
`;

const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 571px;
  width: 100%;
  gap: 27px;

  @media (max-width: 1080px) {
    gap: 15px;
    min-width: 213px;

    & > :nth-child(1) {
      font-family: Jost;
      font-weight: 700;
      font-size: 42px;
      line-height: 100%;
      letter-spacing: 0%;
      text-transform: capitalize;
    }

    :nth-child(2) {
      p {
        line-height: 100%;
      }
    }
  }
`;

const MainContainer = styled.div`
  background-color: rgba(255, 243, 240);
`;

const StyledImageBox = styled.div`
  position: relative;
  width: 571px;
  height: 571px;
  background: transparent;

  img {
    max-width: 571px;
    object-fit: cover;
  }

  @media (max-width: 1080px) {
    width: 198px;
    height: 198px;

    img {
      width: 198px;
      height: 198px;
    }
  }
`;

const DescriptionWrapper = styled.div`
  @media (max-width: 1080px) {
    position: relative;
  }
`;

const SeeMore = styled.span`
  @media (max-width: 1080px) {
    display: block;
    margin-top: 5px;
    background: rgba(255, 243, 240);
    cursor: pointer;
    padding-left: 5px;
  }
`;

export default function Hero({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['hero'];
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const truncateWords = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ');
    }
    return text;
  };

  const displayText = isMobile ? truncateWords(dictionary.description, 10) : dictionary.description;

  return (
    <MainContainer>
      <Container>
        <StyledBio>
          <Typography variant="h1">{dictionary.title}</Typography>
          <DescriptionWrapper>
            <Typography variant="sBodytext">{displayText}</Typography>
            {isMobile && <SeeMore>...See More</SeeMore>}
          </DescriptionWrapper>
        </StyledBio>
        <StyledImageBox>
          <Image src="/assets/images/hero/imageCircle.png" width={571} height={571} alt="circle" />
        </StyledImageBox>
      </Container>
    </MainContainer>
  );
}
