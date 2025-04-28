'use client';
import styled from 'styled-components';
import Image from 'next/image';

const StyledButton = styled.button`
  background: rgba(43, 182, 115, 1);
  border: none;
  color: #fff;
  border-radius: 99px;
  padding: 13px 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  text-transform: uppercase;
  font-family: DM Sans;
  font-weight: 700;
  font-size: 14px;
  line-height: 34px;
  letter-spacing: 1.4px;
  cursor: pointer;
`;

const StyledArrow = styled.div`
  position: relative;
  width: 14px;
  height: 16px;
  background: transparent;
`;

const DonateButton = () => {
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
      Donate now
    </StyledButton>
  );
};

export default DonateButton;
