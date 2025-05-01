'use client';
import React from 'react';
import { getDictionary } from '@/get-dictionary';
import Image from 'next/image';
import DonateButton from './DonateButton';
import Link from 'next/link';
import styled from 'styled-components';
import Phone from '../../public/assets/icons/Phone';
import Mail from '../../public/assets/icons/Mail';

const StyledButtonWrapper = styled.div`
  max-width: fit-content;
`;

const StyledFooter = styled.footer`
  background-image: url('/assets/images/footerBackground.png');
  width: 100%;
  height: 655px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 120px;

  @media (max-width: 1080px) {
    height: 386px;
    margin-top: 60px;
  }
`;

const StyledContainer = styled.div`
  padding: 80px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  height: 100%;

  @media (max-width: 1080px) {
    padding: 0;
    gap: 0;
    justify-content: start;
  }
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 61.49px;
  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledLeftLine = styled.div`
  height: 1px;
  max-width: 520px;
  background-color: rgba(43, 182, 115, 1);
  width: 100%;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledRightLine = styled.div`
  height: 1px;
  max-width: 520px;
  width: 100%;
  background-color: rgba(43, 182, 115, 1);

  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    max-width: none;
  }
`;

const StyledLogo = styled(Image)`
  width: auto;
  height: 40px;
  cursor: pointer;

  @media (max-width: 1080px) {
    width: 100px;
    height: 40px;
    margin-top: 20px;
  }
`;

const StyledCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    border-bottom: 1px solid rgba(43, 182, 115, 1);
    width: calc(100% - 32px);
    margin: 0 auto;
  }
`;

const StyledDonate = styled.div`
  max-width: 520px;
  width: 100%;
  gap: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    display: none;
  }

  h1 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 0;
    color: rgba(255, 255, 255, 1);
  }
`;

const StyledDonateText = styled.p`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: rgba(114, 114, 114, 1);
  max-width: 410px;
  width: 100%;
`;

const StyledServicesLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 76px;
  width: fit-content;
  padding-left: 30px;

  @media (max-width: 1080px) {
    order: 2;
    padding: 0;
    gap: 36px;
    justify-content: space-between;
    margin-top: 10px;
    max-width: 328px;
    width: 100.1%;
  }
`;

const StyledServices = styled.div`
  h2 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    padding-bottom: 30px;
    color: rgba(255, 255, 255, 1);

    @media (max-width: 1080px) {
      padding-bottom: 10px;
      font-family: Jost;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: center;
      vertical-align: middle;
      text-transform: capitalize;
      text-align: center;
      width: 108px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    opacity: 0.8;
    padding: 0;

    @media (max-width: 1080px) {
      gap: 5px;
      padding: 0;
      text-align: center;
      padding-bottom: 10px;
    }
  }

  ul li {
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    color: rgba(255, 255, 255, 1);
    list-style-type: none;
  }

  @media (max-width: 1080px) {
    ul li {
      font-family: Work Sans;
      font-weight: 300;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0%;
      vertical-align: middle;
    }
  }
`;

const StyledContact = styled.div`
  margin-left: 137px;

  @media (max-width: 1080px) {
    margin-left: 0;
    text-align: center;
  }

  h2 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    padding-bottom: 30px;
    color: rgba(255, 255, 255, 1);

    @media (max-width: 1080px) {
      display: none;
    }
  }
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1080px) {
    order: 2;
    padding-top: 10px;
    gap: 10px;
  }
`;

const StyledPhoneMail = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  gap: 5px;

  &:first-child {
    order: 1;
  }

  p {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    vertical-align: middle;
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 1080px) {
    justify-content: center;
    p {
      font-family: Jost;
      font-weight: 600;
      font-size: 10px;
      line-height: 14.11px;
      letter-spacing: 0%;
      vertical-align: middle;
    }
  }
`;

const StyledSocialMedia = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 1080px) {
    gap: 5px;
    margin-top: 10px;
    justify-content: center;
  }
`;

const StyledMedia = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid rgba(43, 182, 115, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    width: 24px;
    height: 24px;
    border-radius: 5px;

    img {
      width: auto;
      height: 13px;
    }
  }
`;

const StyledBottom = styled.div`
  max-width: 1290px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  padding-bottom: 30px;
  align-self: center;

  @media (max-width: 1080px) {
    padding: 0;
    border: 0;
    flex-direction: column;
    margin: auto;
  }
`;

const StyledFooterLinks = styled.div`
  display: flex;
  gap: 20px;
  opacity: 0.8;

  @media (max-width: 1080px) {
    gap: 10px;
  }
`;

const StyledFooterLink = styled(Link)`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  vertical-align: middle;
  @media (max-width: 1080px) {
    font-family: Work Sans;
    font-weight: 400;
    font-size: 10px;
    line-height: 16.25px;
    letter-spacing: 0%;
    vertical-align: middle;
  }
`;

const StyledBottomText = styled.div`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  opacity: 0.7;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 1080px) {
    font-family: Work Sans;
    font-weight: 400;
    font-size: 10px;
    line-height: 16.25px;
    letter-spacing: 0%;
    vertical-align: middle;
    order: 1;
  }
`;

const StyledLine = styled.div`
  display: none;
  @media (max-width: 1080px) {
    display: flex;
    width: 1px;
    height: 100%;
    background-color: rgba(43, 182, 115, 1);
  }
`;

export default function Footer({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['footer'];
}) {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledTop>
          <StyledLeftLine />
          <StyledLogo src="/assets/images/footerLogo.svg" alt="logo" width={0} height={0} />
          <StyledRightLine />
        </StyledTop>

        <StyledCenter>
          <StyledDonate>
            <h1>{dictionary.donateTitle}</h1>
            <StyledDonateText>{dictionary.donateDescription}</StyledDonateText>
            <StyledButtonWrapper>
              <DonateButton />
            </StyledButtonWrapper>
          </StyledDonate>

          <StyledServicesLinks>
            <StyledServices>
              <h2>{dictionary.servicesTitle}</h2>
              <ul>
                <li>{dictionary.service1}</li>
                <li>{dictionary.service2}</li>
                <li>{dictionary.service3}</li>
                <li>{dictionary.service4}</li>
              </ul>
            </StyledServices>
            <StyledLine />
            <StyledServices>
              <h2>{dictionary.linksTitle}</h2>
              <ul>
                <li>{dictionary.link1}</li>
                <li>{dictionary.link2}</li>
                <li>{dictionary.link3}</li>
                <li>{dictionary.link4}</li>
              </ul>
            </StyledServices>
          </StyledServicesLinks>

          <StyledContact>
            <h2>{dictionary.contactTitle}</h2>
            <StyledContactInfo>
              <StyledPhoneMail>
                <Phone />
                <p>{dictionary.phone}</p>
              </StyledPhoneMail>
              <StyledPhoneMail>
                <Mail />
                <p>{dictionary.email}</p>
              </StyledPhoneMail>
            </StyledContactInfo>
            <StyledSocialMedia>
              <StyledMedia>
                <Image src="/assets/icons/facebook.svg" width={10} height={16} alt="facebook" />
              </StyledMedia>
              <StyledMedia>
                <Image src="/assets/icons/twitter.svg" width={16} height={16} alt="twitter" />
              </StyledMedia>
              <StyledMedia>
                <Image src="/assets/icons/instagram.svg" width={14} height={16} alt="instagram" />
              </StyledMedia>
              <StyledMedia>
                <Image src="/assets/icons/pinterest.svg" width={11} height={14} alt="pinterest" />
              </StyledMedia>
            </StyledSocialMedia>
          </StyledContact>
        </StyledCenter>

        <StyledBottom>
          <StyledBottomText>{dictionary.copyright}</StyledBottomText>
          <StyledFooterLinks>
            <StyledFooterLink href="#">{dictionary.privacyPolicy}</StyledFooterLink>
            <StyledFooterLink href="#">{dictionary.termsOfService}</StyledFooterLink>
            <StyledFooterLink href="#">{dictionary.cookiesSettings}</StyledFooterLink>
          </StyledFooterLinks>
        </StyledBottom>
      </StyledContainer>
    </StyledFooter>
  );
}
