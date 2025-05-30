'use client';
import React from 'react';
import styled from 'styled-components';

const TotalWrapper = styled.div`
  margin-top: 30px;
  @media (max-width: 1080px) {
    margin-top: 0px;
  }
`;

const Label = styled.span`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  color: #1f1f1f;
  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const TotalAmount = styled.span`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #4d4d4d;
  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 20px;
  }
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
