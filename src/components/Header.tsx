'use client';
import React, { useState, useRef, useEffect } from 'react';
import DonateButton from './DonateButton';
import HeaderLink from './HeaderLink';
import MobileMenu from './mobileMenu';
import Image from 'next/image';
import styled from 'styled-components';
import { usePathname, useRouter } from 'next/navigation';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import MenuIcon from '../../public/assets/icons/MenuIcon';

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
  cursor: pointer;

  @media (max-width: 1080px) {
    width: 64.86px;
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

  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledNavigation = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 1080px) {
    gap: 18.97px;
    justify-content: space-between;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  position: relative;

  @media (max-width: 1080px) {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scale(1.3);
    background: rgba(0, 0, 0, 0.05);
  }
`;

export default function Header({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header'];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] as Locale;
  const alternateLocale: Locale = currentLocale === 'en' ? 'ge' : 'en';
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  const newPath = `/${alternateLocale}${pathWithoutLocale}`;

  const handleLanguageSwitch = () => {
    router.push(newPath);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuIconRef.current?.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

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
              src={
                currentLocale === 'en'
                  ? '/assets/icons/languageGe.svg'
                  : '/assets/icons/languageUk.svg'
              }
              width={26}
              height={26}
              alt="language switch"
              onClick={handleLanguageSwitch}
              style={{ cursor: 'pointer' }}
            />
            <MobileMenuIcon onClick={toggleMobileMenu} ref={menuIconRef}>
              <MenuIcon isOpen={mobileMenuOpen} />
            </MobileMenuIcon>
            <Image
              src="/assets/icons/loop.svg"
              width={20}
              height={20}
              alt="loop"
              style={{ cursor: 'pointer' }}
            />
            <DonateButton text1={dictionary.donateNow.text1} text2={dictionary.donateNow.text2} />
          </StyledNavigation>
        </StyledContent>
      </StyledContainer>

      <MobileMenu isOpen={mobileMenuOpen} menuIconRef={menuIconRef} dictionary={dictionary} />
    </StyledHeader>
  );
}
