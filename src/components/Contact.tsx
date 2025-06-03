'use client';
import styled from 'styled-components';
import InputWithIcon from './Input/InputWithIcon';
import TextAreaWithIcon from './Input/TextAreaWithIcon';
import Typography from '@/components/ui/Typography';
import { getDictionary } from '@/get-dictionary';
import ContactInfoSection from './ContactInfoSection';

const StyledSection = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 0;
  background-color: #f9f9f7;

  @media (max-width: 1350px) {
    padding: 0 30px;
  }

  @media (max-width: 1080px) {
    padding: 30px 16px;
  }
`;

const StyledContainer = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #fff;
  gap: 20px;
  box-shadow: 0px 0px 60px 0px #0000000d;

  @media (max-width: 1080px) {
    padding: 30px 20px;
  }
`;

const RowTwo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const FullWidthItem = styled.div`
  width: 100%;
`;

const SubTitle = styled.p`
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: #e26d5a;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export default function ContactForm({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['mail'];
}) {
  return (
    <StyledSection>
      <StyledContainer>
        <SubTitle>{dictionary.contactUs}</SubTitle>
        <Typography variant="h2">
          Empowering Communities <br /> through Donations
        </Typography>
        <RowTwo>
          <InputWithIcon
            label={dictionary.emailLabel}
            placeholder={dictionary.emailPlaceholder}
            iconSrc="/assets/icons/email.svg"
            width="100%"
          />
          <InputWithIcon
            label={dictionary.phoneLabel}
            placeholder={dictionary.phonePlaceholder}
            iconSrc="/assets/icons/PhoneI.svg"
            width="100%"
          />
        </RowTwo>
        <FullWidthItem>
          <InputWithIcon
            label={dictionary.addressLabel}
            placeholder={dictionary.addressPlaceholder}
            iconSrc="/assets/icons/iconadd.svg"
            width="100%"
          />
        </FullWidthItem>
        <FullWidthItem>
          <TextAreaWithIcon
            label={dictionary.messageLabel}
            placeholder={dictionary.messagePlaceholder}
            iconSrc="/assets/icons/iconedit.svg"
            width="100%"
            height="200px"
          />
        </FullWidthItem>
      </StyledContainer>
      <ContactInfoSection />
    </StyledSection>
  );
}
