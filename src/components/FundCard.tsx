'use client';
import styled from 'styled-components';
import Typography from './ui/Typography';
import Image from 'next/image';

interface FundCardProps {
  title: string;
  description: string;
  imgSrc: string;
  backgroundColor: string;
}

const StyledCard = styled.div<{ $backgroundColor: string }>`
  width: 410px;
  height: 236px;
  border-radius: 20px;
  padding: 30px;
  color: #fff;
  position: relative;
  overflow: hidden;
  background: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1080px) {
    width: 204px;
    height: 208px;
    padding: 16.52px 23.51px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 240px;

  @media (max-width: 1080px) {
    width: 100%;
    order: 1;
    gap: 10px;
    width: fit-content;
    margin: auto;

    & > :nth-child(2) {
      display: none;
    }
    & > :nth-child(1) {
      line-height: 100%;
      text-align: center;
    }
  }
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;

  @media (max-width: 1080px) {
    width: 77px;
    height: 77px;
    order: 2;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;

  @media (max-width: 1080px) {
    text-align: center;
  }
`;

const StyledReadMore = styled.div`
  display: none;
  @media (max-width: 1080px) {
    display: flex;
    order: 3;
    justify-content: center;
    gap: 5px;
    display: flex;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
    }
  }
`;

export default function FundCard({ title, description, imgSrc, backgroundColor }: FundCardProps) {
  return (
    <StyledCard $backgroundColor={backgroundColor}>
      {imgSrc && <StyledImage src={imgSrc} alt={title} />}
      <ContentWrapper>
        <StyledBio>
          <Typography variant="lBodytext">{title}</Typography>
          <Typography variant="sBodytext">{description}</Typography>
        </StyledBio>
      </ContentWrapper>
      <StyledReadMore>
        <Typography variant="sBodytext">READ MORE</Typography>
        <Image src="/assets/icons/arrowRight.svg" width={14} height={15} alt="arrow" />
      </StyledReadMore>
    </StyledCard>
  );
}
