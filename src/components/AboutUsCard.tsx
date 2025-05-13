import React from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';

// Props interface for the component
interface AboutUsCardProps {
  text: string;
  author: string;
  role: string;
  isActive: boolean;
  onClick: () => void;
}

const TestimonialCard = styled.div<{ $isActive: boolean }>`
  background-color: white;
  border-radius: 10px;
  padding: 30px 35px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  width: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.$isActive ? 1 : 0.7)};
  transform: scale(${(props) => (props.$isActive ? 1 : 0.8)});
  flex-shrink: 0;
  margin: 0 20px;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    `
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    z-index: 10;
  `}

  &:hover {
    opacity: 0.9;
  }
`;

const QuoteIcon = styled.div`
  font-size: 48px;
  color: rgba(226, 109, 90, 0.3);
  line-height: 1;
  margin-bottom: 16px;
`;

const TestimonialText = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 24px;
  flex-grow: 1;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  margin-right: 16px;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutUsCard: React.FC<AboutUsCardProps> = ({ text, author, role, isActive, onClick }) => {
  return (
    <TestimonialCard $isActive={isActive} onClick={onClick}>
      <QuoteIcon>❝</QuoteIcon>
      <TestimonialText>{text}</TestimonialText>
      <AuthorInfo>
        <AuthorAvatar />
        <AuthorDetails>
          <Typography variant="bodyBold">{author}</Typography>
          <Typography variant="sBodytext">{role}</Typography>
        </AuthorDetails>
      </AuthorInfo>
    </TestimonialCard>
  );
};

export default AboutUsCard;
