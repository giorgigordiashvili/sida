'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  max-width: 1290px;
  width: 100%;
  margin: 60px auto 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  flex-wrap: nowrap;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 850px;
  aspect-ratio: 850 / 480;
  border-radius: 20px;
  overflow: hidden;
  min-width: 328px;
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1080px) {
    align-items: center;
  }
`;

const InfoBox = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 60px 0px #0000000d;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 410px;
  height: 140px;

  @media (max-width: 700px) {
    width: 328px;
    height: 98px;
    padding: 18px 20px;
    gap: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.6px solid #e3e3e3;

  img.icon {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 1080px) {
    width: 62px;
    height: 62px;

    img.icon {
      width: 20px;
      height: 20px;
    }
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: 600;
    font-size: 16px;
  }

  span:last-child {
    font-weight: 400;
    font-size: 14px;
    color: #666;
  }

  @media (max-width: 700px) {
    span:first-child {
      font-size: 14px;
    }

    span:last-child {
      font-size: 12px;
    }
  }
`;

export default function ContactInfoSection() {
  return (
    <Section>
      <MapContainer>
        <Image
          src="/assets/images/map.svg"
          alt="Map location"
          fill
          sizes="(max-width: 700px) 100vw, 850px"
          style={{ objectFit: 'cover' }}
        />
      </MapContainer>

      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image
              src="/assets/icons/iconadd.svg"
              alt="Address"
              width={34}
              height={34}
              className="icon"
            />
          </IconWrapper>

          <InfoText>
            <span>Address</span>
            <span>2972 Westheimer Rd. Santa</span>
          </InfoText>
        </InfoBox>

        <InfoBox>
          <IconWrapper>
            <Image
              src="/assets/icons/email.svg"
              alt="email"
              width={34}
              height={34}
              className="icon"
            />
          </IconWrapper>

          <InfoText>
            <span>Email Address</span>
            <span>nevaeh.sons@example.com</span>
          </InfoText>
        </InfoBox>

        <InfoBox>
          <IconWrapper>
            <Image
              src="/assets/icons/PhoneI.svg"
              alt="Phone"
              width={34}
              height={34}
              className="icon"
            />
          </IconWrapper>

          <InfoText>
            <span>Phone number</span>
            <span>(704) 555-0127</span>
          </InfoText>
        </InfoBox>
      </InfoContainer>
    </Section>
  );
}
