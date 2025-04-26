'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  background-color: rgba(242 240 236);
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

const StyledText = styled.div`
  font-family: DM Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: rgba(52, 52, 52, 1);
`;

const StyledTitle = styled.h1`
  font-size: 100px;
  line-height: 90px;
  text-align: left;
  font-weight: 700;
  color: rgba(52, 52, 52, 1);
  font-family: Josefin Sans;
`;

const MainContainer = styled.div`
  background-color: rgba(242 240 236);
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
          <StyledTitle>{dictionary.title}</StyledTitle>
          <StyledText>{dictionary.description}</StyledText>
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
