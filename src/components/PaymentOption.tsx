'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 30px;
`;

const Option = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Jost';
  font-size: 18px;
  font-weight: 700;
  color: #1f1f1f;
  cursor: pointer;

  input {
    appearance: none;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 0.93px solid ${({ selected }) => (selected ? '#E26D5A' : '#E3E3E3')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  input::before {
    content: '';
    width: 18px;
    height: 18px;
    background-color: ${({ selected }) => (selected ? '#E26D5A' : 'transparent')};
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }
`;

const PaymentOption: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Visa');

  return (
    <PaymentWrapper>
      <Option selected={selectedOption === 'Visa'}>
        <input
          type="radio"
          name="payment"
          checked={selectedOption === 'Visa'}
          onChange={() => setSelectedOption('Visa')}
        />
        Visa
      </Option>
      <Option selected={selectedOption === 'Paypal'}>
        <input
          type="radio"
          name="payment"
          checked={selectedOption === 'Paypal'}
          onChange={() => setSelectedOption('Paypal')}
        />
        Paypal
      </Option>
    </PaymentWrapper>
  );
};

export default PaymentOption;
