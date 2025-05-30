'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from './ui/Typography';

type Props = {
  helpText: string;
  phoneNumber: string;
};

const DonateContact = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Help({ helpText, phoneNumber }: Props) {
  return (
    <DonateContact>
      <Image src="/assets/images/hero/phone.svg" alt="Phone" width={46} height={46} />
      <StyledContact>
        <Typography variant="sBodytext">{helpText}</Typography>
        <Typography variant="mBodytext">{phoneNumber}</Typography>
      </StyledContact>
    </DonateContact>
  );
}
