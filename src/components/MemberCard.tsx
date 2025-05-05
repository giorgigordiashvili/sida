'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Typography from './ui/Typography';

type Props = {
  name: string;
  job: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedIn?: string;
};

const StyledCard = styled.div`
  width: 300px;
  height: 403px;
  border-radius: 20px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
`;

const StyledImage = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 10px;
`;

const StyledInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLinkImage = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(43, 182, 115, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledLinks = styled.div<{ $isVisible: boolean }>`
  background-color: rgba(43, 182, 115, 1);
  width: 35px;
  padding: ${(props) => (props.$isVisible ? '15px 0' : '0')};
  height: ${(props) => (props.$isVisible ? '138px' : '0')};
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
    { src: '/assets/icons/pinterest.svg', width: 9, height: 15, alt: 'pinterest' },
  ];

  return (
    <StyledCard>
      <StyledImage>
        <Image src={'/assets/images/pfp.svg'} alt={'Profile picture'} width={260} height={260} />
      </StyledImage>
      <StyledInfo>
        <div>
          <Typography variant="lBodytext">{props.name}</Typography>
          <Typography variant="mBodytext">{props.job}</Typography>
        </div>
        <StyledDropdown>
          <StyledLinks $isVisible={isDropdownVisible}>
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
          <StyledLinkImage onClick={toggleDropdown}>
            <Image src="/assets/icons/links.svg" width={14} height={15} alt="links" />
          </StyledLinkImage>
        </StyledDropdown>
      </StyledInfo>
    </StyledCard>
  );
}
