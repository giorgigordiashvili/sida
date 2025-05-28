'use client';

import React from 'react';
import styled from 'styled-components';

const AmountWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
`;

const AmountButton = styled.button<{ selected: boolean }>`
  padding: 23px 4px;
  border-radius: 20px;
  font-size: 20px;
  font-family: 'Jost';
  font-weight: 700;
  border: ${({ selected }) => (selected ? '2px solid #E26D5A' : 'none')};
  background: ${({ selected }) => (selected ? '#fff' : '#F4F4F4')};
  color: ${({ selected }) => (selected ? '#1F1F1F' : '#4D4D4D')};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 80px;
  height: 80px;

  &:hover {
    border: 2px solid #e26d5a;
  }
`;

interface SelectAmountProps {
  selected: number | null;
  onChange: (value: number) => void;
}

const amounts = [5000, 3000, 1000];

const SelectAmount: React.FC<SelectAmountProps> = ({ selected, onChange }) => {
  return (
    <AmountWrapper>
      {amounts.map((amount) => (
        <AmountButton key={amount} selected={selected === amount} onClick={() => onChange(amount)}>
          ${amount.toLocaleString()}
        </AmountButton>
      ))}
    </AmountWrapper>
  );
};

export default SelectAmount;
