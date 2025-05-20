'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Typography from './ui/Typography';
import Links from '../../public/assets/icons/Links';

type Props = {
  name: string;
  job: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedIn?: string;
  noMedia?: boolean;
};

const StyledCard = styled.div<{ $noMedia?: boolean }>`
  max-width: 300px;
  width: 100%;
  height: 403px;
  border-radius: 20px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;

  @media (max-width: 1080px) {
    width: ${(props) => (props.$noMedia ? '300px' : '174px')};
    height: ${(props) => (props.$noMedia ? '403px' : '221px')};
    gap: ${(props) => (props.$noMedia ? '' : '10px')};
    border-radius: ${(props) => (props.$noMedia ? '20px' : '12.63px')};
    padding: ${(props) => (props.$noMedia ? '20px' : '10px')};
  }
`;

const StyledImage = styled.div<{ $noMedia?: boolean }>`
  max-width: 260px;
  width: 100%;
  height: 260px;
  border-radius: 10px;
  @media (max-width: 1080px) {
    width: ${(props) => (props.$noMedia ? '260px' : '154px')};
    height: ${(props) => (props.$noMedia ? '260px' : '154px')};
    border-radius: ${(props) => (props.$noMedia ? '10px' : '12.63px')};
    margin-bottom: ${(props) => (props.$noMedia ? '20px' : '10px')};
    img {
      width: ${(props) => (props.$noMedia ? '260px' : '154px')};
      height: ${(props) => (props.$noMedia ? '260px' : '154px')};
      border-radius: ${(props) => (props.$noMedia ? '10px' : '12.63px')};
    }
  }
`;

const StyledInfo = styled.div<{ $noMedia?: boolean }>`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div p:nth-child(2) {
    color: rgba(77, 77, 77, 1);
  }

  @media (max-width: 1080px) {
    margin-top: ${(props) => (props.$noMedia ? '20px' : '10.11px')};

    ${(props) =>
      !props.$noMedia &&
      `
      div p:nth-child(1) {
        font-size: 13px;
        line-height: 100%;
      }

      div p:nth-child(2) {
        font-size: 10px;
        line-height: 100%;
        margin-top: 5px;
      }
    `}
  }
`;

const StyledLinkImage = styled.div<{ $isActive: boolean; $noMedia?: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(43, 182, 115, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? 'rgba(43, 182, 115, 1)' : 'transparent')};
  transition: background-color 0.3s ease;

  @media (max-width: 1080px) {
    width: ${(props) => (props.$noMedia ? '40px' : '24px')};
    height: ${(props) => (props.$noMedia ? '40px' : '24px')};
    border-radius: ${(props) => (props.$noMedia ? '5px' : '3.13px')};
  }
`;

const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledLinks = styled.div<{ $isVisible: boolean; $noMedia?: boolean }>`
  background-color: rgba(43, 182, 115, 1);
  width: 35px;
  padding: ${(props) => (props.$isVisible ? '15px 0' : '0')};
  height: ${(props) => (props.$isVisible ? '' : '0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.$isVisible ? '17px' : '0')};
  position: absolute;
  bottom: 100%;
  border-radius: 10px;
  transform-origin: bottom center;
  transform: ${(props) => (props.$isVisible ? 'scaleY(1)' : 'scaleY(0)')};
  overflow: hidden;
  margin-bottom: 5px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @media (max-width: 1080px) {
    width: ${(props) => (props.$noMedia ? '35px' : '22px')};
  }
`;

export default function MemberCard(props: Props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const socialIcons = [
    { src: '/assets/icons/facebook.svg', width: 9, height: 15, alt: 'facebook' },
    { src: '/assets/icons/instagram.svg', width: 13, height: 15, alt: 'instagram' },
    { src: '/assets/icons/twitter.svg', width: 13, height: 12, alt: 'twitter' },
  ];

  return (
    <StyledCard $noMedia={props.noMedia}>
      <StyledImage $noMedia={props.noMedia}>
        <Image src={'/assets/images/pfp.svg'} alt={'Profile picture'} width={260} height={260} />
      </StyledImage>
      <StyledInfo $noMedia={props.noMedia}>
        <div>
          <Typography variant="lBodytext">{props.name}</Typography>
          <Typography variant="mBodytext">{props.job}</Typography>
        </div>
        <StyledDropdown>
          <StyledLinks $isVisible={isDropdownVisible} $noMedia={props.noMedia}>
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                style={{
                  opacity: isDropdownVisible ? 1 : 0,
                  transform: `translateY(${isDropdownVisible ? 0 : 20}px)`,
                  transition: `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`,
                }}
              >
                <Image src={icon.src} width={icon.width} height={icon.height} alt={icon.alt} />
              </div>
            ))}
          </StyledLinks>
          <StyledLinkImage
            $isActive={isDropdownVisible}
            $noMedia={props.noMedia}
            onClick={toggleDropdown}
          >
            <Links color={isDropdownVisible ? 'white' : '#2BB673'} />
          </StyledLinkImage>
        </StyledDropdown>
      </StyledInfo>
    </StyledCard>
  );
}
