'use client';
import React from 'react';
import DonateButton from './DonateButton';
import HeaderLink from './HeaderLink/HeaderLink';
import Image from 'next/image';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  display: flex;
  max-width: 1290px;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const StyledLogo = styled.div`
  position: relative;
  width: 143.4px;
  height: 53.63px;
  display: flex;
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
