'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Typography from './ui/Typography';

const StyledCard = styled.div`
  max-width: 410px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(249, 249, 247, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
`;

const StyledImage = styled.div`
  img {
    object-fit: cover;
    border-radius: 20px;
  }
`;

const StyledContent = styled.div`
  padding: 20px;
`;

const StyledLinks = styled.div`
  color: rgba(77, 77, 77, 1);
  display: flex;
  gap: 32px;
  font-family: Work Sans;

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
`;

const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  :nth-child(2) {
    color: rgba(77, 77, 77, 1);
  }
`;
const StyledReadMore = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  margin-top: 40px;
`;

type Props = {
  title: string;
  text: string;
  readMore: string;
  admin: string;
  comment: string;
};

export default function NewsCard(props: Props) {
  return (
    <StyledCard>
      <StyledImage>
        <Image src="/assets/images/pfp.svg" width={370} height={240} alt="pfp" />
      </StyledImage>
      <StyledContent>
        <StyledLinks>
          <Typography variant="sBodytext">
            <Image src="/assets/icons/admin.svg" width={14} height={16} alt={'admin'} />
            {props.admin}
          </Typography>
          <Typography variant="sBodytext">
            <Image src="/assets/icons/comments.svg" width={20} height={16} alt={'admin'} />
            {props.comment}
          </Typography>
        </StyledLinks>
        <StyledTexts>
          <Typography variant="lBodytext">{props.title}</Typography>
          <Typography variant="sBodytext">{props.text}</Typography>
        </StyledTexts>
        <StyledReadMore>
          <Typography variant="xsBodytext">{props.readMore}</Typography>
          <Image src="/assets/icons/readMoreArrow.svg" width={14} height={16} alt="arrow right" />
        </StyledReadMore>
      </StyledContent>
    </StyledCard>
  );
}
