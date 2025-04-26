'use client';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1290px;
  margin: auto;
`;

const StyledCard = styled.div`
  margin-top: -130px;
  background: rgba(59, 80, 163, 100);
  width: 410px;
  height: 236px;
  border-radius: 20px;
  color: #333;
  padding: 30px;
  color: #fff;
`;

const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 240px;
  justify-self: right;
`;

const StyledDescription = styled.div`
  font-family: DM Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0%;
`;

const StyledTitle = styled.div`
  font-family: Josefin Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0%;
`;
export default function FundCards({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['fundCards'];
}) {
  return (
    <StyledContainer>
      <StyledCard>
        <StyledBio>
          <StyledTitle>{dictionary.title}</StyledTitle>
          <StyledDescription>{dictionary.description}</StyledDescription>
        </StyledBio>
      </StyledCard>
      <StyledCard>{dictionary.title}</StyledCard>
      <StyledCard>{dictionary.title}</StyledCard>
    </StyledContainer>
  );
}
