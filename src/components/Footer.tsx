'use client';
import React from 'react';
import { getDictionary } from '@/get-dictionary';
import Image from 'next/image';
import DonateButton from './DonateButton';
import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-image: url('/assets/images/footerBackground.png');
  width: 100%;
  height: 655px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledContainer = styled.div`
  padding: 80px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 61.49px;
`;

const StyledLeftLine = styled.div`
  height: 1px;
  max-width: 520px;
  background-color: rgba(43, 182, 115, 1);
  width: 100%;
`;

const StyledRightLine = styled.div`
  height: 1px;
  max-width: 520px;
  width: 100%;
  background-color: rgba(43, 182, 115, 1);
`;

const StyledLogo = styled(Image)`
  width: auto;
  height: 40px;
  cursor: pointer;
`;

const StyledCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDonate = styled.div`
  max-width: 520px;
  width: 100%;
  gap: 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 0;
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
`;

const StyledServices = styled.div`
  h2 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    padding-bottom: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    opacity: 0.8;
  }

  ul li {
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
  }
`;

const StyledContact = styled.div`
  margin-left: 137px;

  h2 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    padding-bottom: 30px;
  }
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledPhoneMail = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    vertical-align: middle;
  }
`;

const StyledSocialMedia = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
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
`;

const StyledFooterLinks = styled.div`
  display: flex;
  gap: 20px;
  opacity: 0.8;
`;

const StyledFooterLink = styled(Link)`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  vertical-align: middle;
`;

const StyledBottomText = styled.div`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  opacity: 0.7;
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
          <StyledLogo src="/assets/images/sidaLogo.svg" alt="logo" width={0} height={0} />
          <StyledRightLine />
        </StyledTop>

        <StyledCenter>
          <StyledDonate>
            <h1>{dictionary.donateTitle}</h1>
            <StyledDonateText>{dictionary.donateDescription}</StyledDonateText>
            <DonateButton />
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
                <Image src="/assets/icons/phone.svg" width={16} height={16} alt="phone" />
                <p>{dictionary.phone}</p>
              </StyledPhoneMail>
              <StyledPhoneMail>
                <Image src="/assets/icons/mail.svg" width={18.77} height={12.85} alt="mail" />
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
