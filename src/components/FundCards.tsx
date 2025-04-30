'use client';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';
import Typography from './ui/Typography';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1290px;
  margin: auto;
`;

const StyledCard = styled.div`
  margin-top: -130px;
  width: 410px;
  height: 236px;
  border-radius: 20px;
  padding: 30px;
  color: #fff;
  position: relative;
  overflow: hidden;

  &:nth-child(1) {
    background: rgba(59, 80, 163, 1);
  }

  &:nth-child(2) {
    background: rgba(43, 182, 115, 1);
  }

  &:nth-child(3) {
    background: rgba(226, 109, 90, 1);
  }
`;

const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 240px;
  justify-self: right;
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
          <Typography variant="lBodytext">{dictionary.title}</Typography>
          <Typography variant="sBodytext">{dictionary.description}</Typography>
        </StyledBio>
      </StyledCard>
      <StyledCard>
        <StyledBio>
          <Typography variant="lBodytext">{dictionary.title}</Typography>
          <Typography variant="sBodytext">{dictionary.description}</Typography>
        </StyledBio>
      </StyledCard>
      <StyledCard>
        <StyledBio>
          <Typography variant="lBodytext">{dictionary.title}</Typography>
          <Typography variant="sBodytext">{dictionary.description}</Typography>
        </StyledBio>
      </StyledCard>
    </StyledContainer>
  );
}
