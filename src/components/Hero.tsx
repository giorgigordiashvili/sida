'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from './ui/Typography';

const Container = styled.div`
  padding: 73px 0 189px 0;
  color: rgba(52, 52, 52, 1);
  max-width: 1290px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 124px;
`;

const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  width: 571px;
  gap: 27px;
`;

const MainContainer = styled.div`
  background-color: rgba(255 243 240);
`;

const StyledImageBox = styled.div`
  position: relative;
  width: 571px;
  height: 571px;
  background: transparent;
`;

export default function Hero({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['hero'];
}) {
  return (
    <MainContainer>
      <Container>
        <StyledBio>
          <Typography variant="h1">{dictionary.title}</Typography>
          <Typography variant="sBodytext">{dictionary.description}</Typography>
        </StyledBio>
        <StyledImageBox>
          <Image
            src="/assets/images/hero/imageCircle.png"
            width={571}
            height={571}
            alt="circle"
            objectFit="cover"
          />
        </StyledImageBox>
      </Container>
    </MainContainer>
  );
}
