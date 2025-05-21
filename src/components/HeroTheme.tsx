'use client';
import styled from 'styled-components';
import Typography from './ui/Typography';
import Image from 'next/image';

interface HeroThemeProps {
  dictionary: {
    name: string;
    home: string;
  };
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

export default function HeroTheme({ dictionary, image }: HeroThemeProps) {
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
    </StyledSection>
  );
}
