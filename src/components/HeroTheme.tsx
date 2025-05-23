'use client';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';
import Typography from './ui/Typography';
import Image from 'next/image';

interface PageThemeProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['volunteer'];
  image: string;
}

const StyledSection = styled.section<{ image: string }>`
  height: 556px;
  background-image: url(${(props) => props.image});
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  width: 100%;
  position: relative;
  background-size: cover;

  @media (max-width: 1080px) {
    height: 144px;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  :first-child {
    color: rgba(255, 255, 255, 1);
  }

  div {
    display: flex;
    align-items: center;
    gap: 19px;

    p {
      color: rgba(255, 255, 255, 1);
    }
  }

  @media (max-width: 1080px) {
    :first-child {
      font-size: 28px;
    }

    div p {
      font-size: 16px;
    }
  }
`;

const StyledBigHeart = styled.div`
  position: absolute;
  right: 180px;
  bottom: 89px;

  @media (max-width: 1080px) {
    right: 21px;
    rotate: 8.45deg;

    bottom: 19px;

    img {
      width: 55.7px;
      height: 47.3px;
    }
  }
`;
const StyledSmallHeart = styled.div`
  position: absolute;
  left: 274px;
  top: 239px;

  @media (max-width: 1080px) {
    left: 20px;
    rotate: 8.45deg;

    top: 30px;

    img {
      width: 24px;
      height: 21px;
    }
  }
`;

export default function PageTheme({ dictionary, image }: PageThemeProps) {
  return (
    <StyledSection image={image}>
      <StyledContent>
        <Typography variant="h2">{dictionary.name}</Typography>
        <div>
          <Typography variant="sBodytext">{dictionary.home}</Typography>
          <Image src="/assets/icons/greenArrowRight.svg" width={8} height={16} alt="arrow" />
          <Typography variant="sBodytext">{dictionary.name}</Typography>
        </div>
      </StyledContent>
      <StyledBigHeart>
        <Image src="/assets/images/bigHeart.png" width={163} height={140} alt="heart" />
      </StyledBigHeart>
      <StyledSmallHeart>
        <Image src="/assets/images/smallHeart.png" width={83} height={73} alt="heart" />
      </StyledSmallHeart>
    </StyledSection>
  );
}
