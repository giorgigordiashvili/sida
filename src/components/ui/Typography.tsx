'use client';
import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: 700;
  font-size: 100px;
  line-height: 90px;
  letter-spacing: 0%;
  margin: 0px;
  font-feature-settings: 'case';
  @media (max-width: 1080px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const H2 = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  margin: 0px;
  @media (max-width: 1080px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const XLBodytext = styled.p`
  font-weight: 400;
  font-size: 26px;
  line-height: 35.01px;
  margin: 0px;
`;

const LBodytext = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  margin: 0px;
`;

const MBodytext = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0px;
`;

const SBodytext = styled.p`
  font-size: 16px;
  line-height: 34px;
  margin: 0px;
  @media (max-width: 1080px) {
    font-size: 15px;
  }
`;

const XSBodytext = styled.p`
  font-size: 14px;
  line-height: 34px;
  margin: 0px;
`;

type TypographyProps = {
  variant: 'h1' | 'h2' | `xlBodytext` | 'lBodytext' | 'mBodytext' | 'sBodytext' | 'xsBodytext';
  children: React.ReactNode;
  className?: string;
};

function Typography({ variant, children, className }: TypographyProps) {
  switch (variant) {
    case 'h1':
      return <H1 className={className}>{children}</H1>;
    case 'h2':
      return <H2 className={className}>{children}</H2>;
    case 'lBodytext':
      return <LBodytext className={className}>{children}</LBodytext>;
    case 'mBodytext':
      return <MBodytext className={className}>{children}</MBodytext>;
    case 'sBodytext':
      return <SBodytext className={className}>{children}</SBodytext>;
    case 'xsBodytext':
      return <XSBodytext className={className}>{children}</XSBodytext>;
    case 'xlBodytext':
      return <XLBodytext className={className}>{children}</XLBodytext>;

    default:
      return null;
  }
}

export { H1, H2 };
export default Typography;
