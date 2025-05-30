'use client';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 409px;
  padding: 23px 164px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  outline: none;
  height: 80px;
  font-size: 24px;
  @media (max-width: 1080px) {
    padding: 11px 20px;
    height: 42px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const InputMoney: React.FC<{
  placeholder: string;
  value: number | null;
  onChange: (val: number | null) => void;
}> = ({ placeholder, value, onChange }) => {
  return (
    <Wrapper>
      <Input
        type="number"
        inputMode="numeric"
        placeholder={placeholder}
        value={value ?? ''}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val ? parseFloat(val) : null);
        }}
      />
    </Wrapper>
  );
};

export default InputMoney;
