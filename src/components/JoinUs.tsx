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

  @media (max-width: 1080px) {
    width: fit-content;
    height: fit-content;
    gap: 20px;
    padding: 30px;
    margin-top: 30px;
    h2 {
      font-size: 20px;
      text-align: center;
      width: fit-content;
      height: fit-content;
    }
  }
`;

const StyledDiv = styled.div`
  padding: 0 10px;
  @media (max-width: 1080px) {
    padding: 0 35px;
  }
`;

export default function JoinUs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['joinUs'];
}) {
  return (
    <StyledDiv>
      <StyledContainer>
        <Typography variant="h2">{dictionary.text}</Typography>
        <DonateButton text1={dictionary.donateNow.text1} text2={dictionary.donateNow.text2} />
      </StyledContainer>
    </StyledDiv>
  );
}
