'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from './ui/Typography';

const StyledButton = styled.button`
  background: transparent;
  cursor: pointer;
  color: rgba(249, 249, 247, 1);
  border-radius: 999px;
  gap: 10px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 5px solid rgba(249, 249, 247, 1);
  padding: 8px 25px;

  @media (max-width: 1080px) {
    border: 3px solid rgba(249, 249, 247, 1);
    padding: 7px;
  }
`;

type Props = {
  text: string;
};

export default function SecondDonateBtn({ text }: Props) {
  return (
    <StyledButton>
      <Image
        src="/assets/icons/arrowRight.svg"
        width={13}
        height={14}
        alt="arrow"
        objectFit="cover"
      />
      <Typography variant="xsBodytext">{text.toUpperCase()}</Typography>
    </StyledButton>
  );
}
