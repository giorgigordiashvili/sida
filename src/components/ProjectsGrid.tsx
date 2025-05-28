'use client';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 1290px;
  width: 100%;
  margin: auto;
  margin-top: 120px;

  @media (max-width: 1080px) {
    margin-top: 60px;
  }
`;

const StyledFirstRow = styled.div`
  display: grid;
  grid-template-columns: min(740px, 58.73%) min(520px, 41.27%);
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StyledSecondRow = styled.div`
  display: grid;
  grid-template-columns: min(520px, 41.27%) min(740px, 58.73%);
  gap: 30px;
  max-width: 1290px;
  margin: 30px auto 0;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StyledBottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  max-width: 1290px;
  margin: 30px auto 0;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StyledCard = styled.div`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
  height: 381px;

  @media (max-width: 1080px) {
    width: 100%;
    height: 180px;
  }
`;

const StyledBottomCard = styled.div`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
  height: 381px;

  @media (max-width: 1080px) {
    width: 100%;
    height: 180px;
  }
`;

export default function ProjectsGrid() {
  return (
    <StyledContent>
      <StyledFirstRow>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
      </StyledFirstRow>
      <StyledSecondRow>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
      </StyledSecondRow>
      <StyledBottomRow>
        <StyledBottomCard></StyledBottomCard>
        <StyledBottomCard></StyledBottomCard>
        <StyledBottomCard></StyledBottomCard>
      </StyledBottomRow>
    </StyledContent>
  );
}
