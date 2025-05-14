'use client';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import HeaderLink from './HeaderLink';

const MobileMenuContainer = styled.div`
  position: absolute;
  top: 63px;
  width: 112px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-15px) scale(0.95);
  transform-origin: top center;
  transition:
    opacity 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    visibility 0s linear 0.3s;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: white;
    z-index: -1;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.05);
  }

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
    transition:
      opacity 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55),
      transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
      visibility 0s linear 0s;
  }
`;

const MobileMenuLink = styled.div<{ index: number }>`
  padding: 10px 16px;
  text-align: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateY(-15px) rotateX(-25deg);
  transform-origin: top center;
  transition:
    opacity 0.25s ease,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom, rgba(43, 182, 115, 1), rgba(43, 182, 115, 1));
    transform: scaleY(0);
    transition: transform 0.3s ease;
    transform-origin: top;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  &:last-child {
    border-bottom: none;
  }

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: inherit;
    font-family: Work Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    letter-spacing: 0%;
    transition:
      transform 0.2s ease,
      color 0.2s ease;

    &:hover {
      transform: translateX(3px);
      color: #3498db;
    }
  }

  ${({ index }) => `
    transition-delay: ${0.08 + index * 0.06}s;
  `}

  .open & {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
`;

interface MobileMenuProps {
  isOpen: boolean;
  menuIconRef: React.RefObject<HTMLDivElement | null>;
  dictionary: {
    home: string;
    aboutUs: string;
    services: string;
    projects: string;
    blog: string;
    page: string;
    contact: string;
  };
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuIconRef, dictionary }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Position menu under the icon
  useEffect(() => {
    function positionMenu() {
      if (menuIconRef.current && menuRef.current) {
        const rect = menuIconRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const menuWidth = 112; // Fixed width as specified

        // Position the menu centered under the icon
        menuRef.current.style.left = `${centerX - menuWidth / 2}px`;
      }
    }

    if (isOpen) {
      positionMenu();
      window.addEventListener('resize', positionMenu);
    }

    return () => {
      window.removeEventListener('resize', positionMenu);
    };
  }, [isOpen, menuIconRef]);

  const menuLinks = [
    { key: 'home', title: dictionary.home, href: '/' },
    { key: 'aboutUs', title: dictionary.aboutUs, href: '/about' },
    { key: 'services', title: dictionary.services, href: '/services' },
    { key: 'projects', title: dictionary.projects, href: '/projects' },
    { key: 'blog', title: dictionary.blog, href: '/blog' },
    { key: 'page', title: dictionary.page, href: '/page' },
    { key: 'contact', title: dictionary.contact, href: '/contact' },
  ];

  return (
    <MobileMenuContainer className={isOpen ? 'open' : ''} ref={menuRef}>
      {menuLinks.map((link, index) => (
        <MobileMenuLink key={link.key} index={index}>
          <HeaderLink title={link.title} href={link.href} />
        </MobileMenuLink>
      ))}
    </MobileMenuContainer>
  );
};

export default MobileMenu;
