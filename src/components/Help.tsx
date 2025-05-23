'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from './ui/Typography';

const DonateContact = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Help({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['aboutUs'];
}) {
  return (
    <DonateContact>
      <Image src="/assets/images/hero/phone.svg" alt="Phone" width={46} height={46} />
      <StyledContact>
        <Typography variant="sBodytext">{dictionary.help}</Typography>
        <Typography variant="mBodytext">{dictionary.number}</Typography>
      </StyledContact>
    </DonateContact>
  );
}
