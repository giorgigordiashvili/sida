'use client';
import styled from 'styled-components';
import Typography from './ui/Typography';

import DonateButton from './DonateButton';
import { getDictionary } from '@/get-dictionary';

const StyledContainer = styled.div`
  background-color: rgba(31, 31, 31, 1);
  max-width: 1290px;
  width: 100%;
  height: 520px;
  border-radius: 37px;
  margin: auto;
  margin-top: 119px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50.25px;
  justify-content: center;

  h2 {
    font-family: Jost;
    text-align: center;
    width: 714px;
    height: 119.75px;
    color: rgba(255, 255, 255, 1);
  }
`;

export default function JoinUs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['joinUs'];
}) {
  return (
    <StyledContainer>
      <Typography variant="h2">{dictionary.text}</Typography>
      <DonateButton />
    </StyledContainer>
  );
}
