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
  address: string;
  donateBtn: string;
  schedule?: string;
};

const StyledContainer = styled.div`
  width: fit-content;
  padding: 20px 20px 30px 20px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 1080px) {
    padding: 10px 10px 20px 10px;
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.15);
  }
`;
const StyledImageWrapper = styled.div<{ blur?: boolean }>`
  border-radius: 20px;
  max-width: 370px;
  width: 100%;
  max-height: 206px;
  overflow: hidden;

  img {
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
    max-height: 206px;
    filter: ${({ blur }) => (blur ? 'blur(3px)' : 'none')};
    transition: filter 0.3s ease;
  }

  @media (max-width: 1080px) {
    max-width: 212px;
    max-height: 142px;

    img {
      max-height: 142px;
    }
  }
`;
const StyledContentWrapper = styled.div`
  max-width: 370px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  gap: 15px;

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

const StyledButton = styled.div`
  padding-top: 15px;

  @media (max-width: 1080px) {
    padding-top: 0px;
    width: 100%;
  }
`;

const StyledLocation = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: rgba(77, 77, 77, 1);

  @media (max-width: 1080px) {
    font-size: 12px;
  }
`;

const StyledSchedule = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  gap: 10px;
  align-items: center;
  color: rgba(31, 31, 31, 1);
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  max-width: 220px;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  padding-left: 15px;
  margin-top: -54px;
  margin-left: 20px;

  @media (max-width: 1080px) {
    max-width: 150px;
    padding-left: 5px;
    margin-left: 5px;
  }
`;

export default function EventCard(props: Props) {
  return (
    <StyledContainer>
      <StyledImageWrapper blur={!!props.schedule}>
        <Image src={props.img} width={370} height={250} alt="image" />
      </StyledImageWrapper>

      {props.schedule && (
        <StyledSchedule>
          <Image src="/assets/icons/clock.svg" width={16} height={16} alt="clock" />
          <Typography variant="xsBodytext">{props.schedule}</Typography>
        </StyledSchedule>
      )}
      <StyledContentWrapper>
        <Typography variant="lBodytext">{props.title}</Typography>
        <Typography variant="sBodytext">{props.text}</Typography>
        <StyledLocation>
          <Image src="/assets/icons/location.svg" width={12} height={16} alt="location" />
          <Typography variant="sBodytext">{props.address}</Typography>
        </StyledLocation>
        <StyledButton>
          <SecondDonateBtn text1={props.donateBtn} />
        </StyledButton>
      </StyledContentWrapper>
    </StyledContainer>
  );
}
