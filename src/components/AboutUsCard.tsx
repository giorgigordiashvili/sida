import React from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';
import Image from 'next/image';

interface AboutUsCardProps {
  text: string;
  author: string;
  role: string;
  avatar?: string;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean; // Add isMobile prop
}

const TestimonialCard = styled.div<{ $isActive: boolean }>`
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 35px;
  box-shadow: rgba(0, 0, 0, 0.05);
  transition: all 0.6s ease;
  width: 540px;
  height: 434px;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.$isActive ? 1 : 0.7)};
  transform: scale(${(props) => (props.$isActive ? 1 : 0.8)});
  flex-shrink: 0;
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};

  ${(props) =>
    props.$isActive &&
    `
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    z-index: 10;
  `}

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 1080px) {
    width: 224px;
    height: 146px;
    padding: 15px;
    margin: 0 10px;
    cursor: default;
  }
`;

const QuoteIcon = styled.div`
  font-size: 48px;
  color: rgba(226, 109, 90, 0.3);
  line-height: 1;

  @media (max-width: 1080px) {
    font-size: 24px;

    img {
      width: 29px !important;
      height: 24px !important;
    }
  }
`;

const TestimonialText = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  @media (max-width: 1080px) {
    margin: 5px 0;

    p {
      font-family: 'Work Sans', sans-serif !important;
      font-weight: 400 !important;
      font-size: 13px !important;
      line-height: 100% !important;
      letter-spacing: 0% !important;
      text-align: center !important;
    }
  }
`;

const MobileText = styled.div`
  @media (max-width: 1080px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: normal;
  }
`;

const SeeMoreText = styled.span`
  font-weight: 700;
  margin-left: 4px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1080px) {
    gap: 5px;
  }
`;

const AuthorAvatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  width: 70px;
  height: 70px;

  @media (max-width: 1080px) {
    width: 32px;
    height: 32px;

    img {
      width: 32px !important;
      height: 32px !important;
    }
  }
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  :nth-child(1) {
    color: rgba(31, 31, 31, 1);
    font-weight: 700;
  }

  :nth-child(2) {
    color: rgba(77, 77, 77, 1);
    font-weight: 400;
  }

  @media (max-width: 1080px) {
    gap: 2px;

    p:first-child {
      font-family: 'Work Sans', sans-serif !important;
      font-weight: 600 !important;
      font-size: 13px !important;
      line-height: 100% !important;
      letter-spacing: 0% !important;
    }

    p:last-child {
      font-family: 'Work Sans', sans-serif !important;
      font-weight: 400 !important;
      font-size: 10px !important;
      line-height: 100% !important;
      letter-spacing: 0% !important;
    }
  }
`;

const AboutUsCard: React.FC<AboutUsCardProps> = ({
  text,
  author,
  role,
  isActive,
  onClick,
  avatar,
  isMobile,
}) => {
  const getTruncatedText = () => {
    const words = text.split(' ');
    if (words.length <= 14) return text;
    return words.slice(0, 14).join(' ');
  };

  return (
    <TestimonialCard $isActive={isActive} onClick={onClick}>
      <QuoteIcon>
        <Image src="/assets/icons/quoteIcon.svg" alt="Quote Icon" width={58} height={48} />
      </QuoteIcon>
      <TestimonialText>
        <MobileText>
          <Typography variant="xlBodytext">
            {isMobile && text.split(' ').length > 14 ? (
              <>
                {getTruncatedText()}... <SeeMoreText>See More</SeeMoreText>
              </>
            ) : (
              text
            )}
          </Typography>
        </MobileText>
      </TestimonialText>
      <AuthorInfo>
        <AuthorAvatar>
          {avatar ? (
            <Image src={avatar} alt={`${author}'s avatar`} width={70} height={70} />
          ) : (
            <Image src="/assets/images/pfp.svg" alt="Author Icon" width={70} height={70} />
          )}
        </AuthorAvatar>
        <AuthorDetails>
          <Typography variant="mBodytext">{author}</Typography>
          <Typography variant="xsBodytext">{role}</Typography>
        </AuthorDetails>
      </AuthorInfo>
    </TestimonialCard>
  );
};

export default AboutUsCard;
