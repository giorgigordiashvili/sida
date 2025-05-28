'use client';
import React from 'react';
import styled from 'styled-components';

const TotalWrapper = styled.div`
  margin-top: 30px;
`;

const Label = styled.span`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  color: #1f1f1f;
`;

const TotalAmount = styled.span`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #4d4d4d;
`;

const Total: React.FC<{
  amount: number;
  dictionary: {
    totalAmount: string;
  };
}> = ({ amount, dictionary }) => {
  return (
    <TotalWrapper>
      <Label>
        {dictionary.totalAmount}{' '}
        <TotalAmount>${amount.toLocaleString('en-US', { minimumFractionDigits: 3 })}</TotalAmount>
      </Label>
    </TotalWrapper>
  );
};

export default Total;
