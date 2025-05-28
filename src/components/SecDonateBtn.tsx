'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from './ui/Typography';

const StyledButton = styled.button`
  background: transparent;
  cursor: pointer;
  color: rgba(31, 31, 31, 1);
  border-radius: 999px;
  gap: 10px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 5px solid rgba(226, 109, 90, 1);
  padding: 8px 25px;
`;

const StyledArrow = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: rgba(226, 109, 90, 1);
  padding: 7.73px;
`;

type Props = {
  text1: string;
  text2: string;
};

export default function SecondDonateBtn({ text1, text2 }: Props) {
  return (
    <StyledButton>
      <Typography variant="xsBodytext">
        {text1.toUpperCase()} <span>{text2.toUpperCase()}</span>
      </Typography>
      <StyledArrow>
        <Image
          src="/assets/icons/secDonateArrow.svg"
          width={18.55}
          height={18.55}
          alt="arrow"
          objectFit="cover"
        />
      </StyledArrow>
    </StyledButton>
  );
}
