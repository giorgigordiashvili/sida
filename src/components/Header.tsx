'use client';
import React from 'react';
import DonateButton from './DonateButton';
import HeaderLink from './HeaderLink';
import Image from 'next/image';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    height: 63px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  max-width: 1290px;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 1080px) {
    padding: 0 16px;
    height: 63px;
    align-items: center;
    gap: 33.96px;
  }
`;

const StyledLogo = styled.div`
  position: relative;
  width: 143.4px;
  height: 53.63px;
  display: flex;

  @media (max-width: 1080px) {
    width: 64.86px;
    height: 22px;
  }
`;

const StyledContent = styled.div`
  display: flex;
  gap: 68px;
  align-items: center;
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 25px;
`;

const StyledNavigation = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 1080px) {
    gap: 33.96px;
  }
`;

export default function Header({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header'];
}) {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo>
          <Image src="/assets/images/sidaLogo.svg" alt="logo" width={143.4} height={53.63} />
        </StyledLogo>
        <StyledContent>
          <StyledLinks>
            <HeaderLink title={dictionary.home} href="/" />
            <HeaderLink title={dictionary.aboutUs} href="/" />
            <HeaderLink title={dictionary.services} href="/" />
            <HeaderLink title={dictionary.projects} href="/" />
            <HeaderLink title={dictionary.blog} href="/" />
            <HeaderLink title={dictionary.page} href="/" />
            <HeaderLink title={dictionary.contact} href="/" />
          </StyledLinks>
          <StyledNavigation>
            <Image
              src="/assets/icons/user.svg"
              width={18}
              height={20}
              alt="user"
              style={{ cursor: 'pointer' }}
            />
            <Image
              src="/assets/icons/menuIcon.svg"
              width={23.1}
              height={16.5}
              alt="loop"
              style={{ cursor: 'pointer' }}
            />
            <Image
              src="/assets/icons/loop.svg"
              width={20}
              height={20}
              alt="loop"
              style={{ cursor: 'pointer' }}
            />
            <DonateButton />
          </StyledNavigation>
        </StyledContent>
      </StyledContainer>
    </StyledHeader>
  );
}
