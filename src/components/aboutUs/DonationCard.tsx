'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '../ui/Typography';
import SecondDonateBtn from '../SecDonateBtn';

type Props = {
  img: string;
  title: string;
  text: string;
  raised: string;
  raisedNum: number;
  goal: string;
  goalNum: number;
  donateBtn: string;
};

const StyledContainer = styled.div`
  width: fit-content;
  padding: 20px 20px 30px 20px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);

  @media (max-width: 1080px) {
    padding: 10px 10px 20px 10px;
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.15);
  }
`;
const StyledImageWrapper = styled.div`
  border-radius: 20px;
  max-width: 370px;
  width: 100%;
  max-height: 250px;
  img {
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
    max-height: 250px;
  }

  @media (max-width: 1080px) {
    border-radius: 20px;
    max-width: 160px;
    width: 100%;
    max-height: 130px;
    img {
      border-radius: 20px;
      width: 100%;
      object-fit: cover;
      max-height: 130px;
    }
  }
`;
const StyledContentWrapper = styled.div`
  max-width: 370px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  align-items: center;
  gap: 15px;
  text-align: center;

  & > :nth-child(2) {
    color: rgba(77, 77, 77, 1);
  }

  @media (max-width: 1080px) {
    max-width: 160px;
    padding: 10px 0 0 0;
    gap: 10px;

    & > :nth-child(2) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const StyledStatistic = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: start;
  padding: 0 10px;
`;

const StyledProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(221, 221, 221, 1);
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 1080px) {
    height: 4px;
    overflow: hidden;
    width: 140px;
  }
`;

const StyledProgress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: rgba(43, 182, 115, 1);
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const StyledButton = styled.div`
  padding-top: 15px;

  @media (max-width: 1080px) {
    padding-top: 0px;
    width: 100%;
  }
`;

export default function DonationCard(props: Props) {
  const progress = Math.min((props.raisedNum / props.goalNum) * 100, 100);

  return (
    <StyledContainer>
      <StyledImageWrapper>
        <Image src={props.img} width={370} height={250} alt="image" />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <Typography variant="lBodytext">{props.title}</Typography>
        <Typography variant="sBodytext">{props.text}</Typography>

        <StyledStatistic>
          <div>
            <div>
              <Typography variant="sBodytext">{props.raised}</Typography>
            </div>
            <Typography variant="sBodytext">{props.raisedNum.toLocaleString()}$</Typography>
          </div>
          <div>
            <div>
              <Typography variant="sBodytext">{props.goal}</Typography>
            </div>
            <Typography variant="sBodytext">{props.goalNum.toLocaleString()}$</Typography>
          </div>
        </StyledStatistic>

        <StyledProgressBar>
          <StyledProgress progress={progress} />
        </StyledProgressBar>
        <StyledButton>
          <SecondDonateBtn text1={props.donateBtn} />
        </StyledButton>
      </StyledContentWrapper>
    </StyledContainer>
  );
}
