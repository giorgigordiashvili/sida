'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Typography from './ui/Typography';

const StyledCard = styled.div`
  width: 410px;
  height: 584px;
  border-radius: 20px;
  border: 1px solid rgba(249, 249, 247, 1);
`;

const StyledContent = styled.div``;

const StyledLinks = styled.div``;

export default function NewsCard() {
  return (
    <StyledCard>
      <Image src="/assets/images/pfp.svg" width={370} height={240} alt="pfp" />
      <StyledContent>
        <StyledLinks></StyledLinks>
        <Typography variant="lBodytext">asd</Typography>
      </StyledContent>
    </StyledCard>
  );
}
