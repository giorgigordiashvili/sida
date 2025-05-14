'use client';
import styled from 'styled-components';
import Image from 'next/image';

const StyledButton = styled.button`
  background: rgba(43, 182, 115, 1);
  cursor: pointer;
  color: rgba(255, 255, 255, 1);

  padding: 15.5px 23.5px;
  border-radius: 20px;
  gap: 10px;
  font-family: Jost;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-transform: capitalize;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 1080px) {
    width: 89px;
    height: 40px;
    border-radius: 20px;
    padding: 10px;
    gap: 4px;
    font-weight: 600;
    font-size: 13px;
    vertical-align: middle;
    text-transform: capitalize;

    span {
      display: none;
    }
  }
`;

const StyledArrow = styled.div`
  position: relative;
  width: 14px;
  height: 16px;

  @media (max-width: 1080px) {
    width: 12px;
    height: 13px;
  }
`;

type Props = {
  text1: string;
  text2: string;
};

export default function DonateButton({ text1, text2 }: Props) {
  return (
    <StyledButton>
      <StyledArrow>
        <Image
          src="/assets/images/hero/arrow.svg"
          width={14}
          height={16}
          alt="arrow"
          objectFit="cover"
        />
      </StyledArrow>
      <div>
        {text1} <span>{text2}</span>
      </div>
    </StyledButton>
  );
}
