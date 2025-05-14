'use client';
import React from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';

const StyledButton = styled.button`
  width: 191px;
  height: 60px;
  top: 20px;
  left: 42px;
  border-radius: 50px;
  border: 5px solid rgba(226, 109, 90, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(31, 31, 31, 1);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease;
  background-color: transparent;

  &:hover {
    border-color: rgba(214, 90, 71, 1);
  }

  &:active {
    border-color: rgba(193, 76, 59, 1);
  }
`;

type Props = {
  dictionary: string;
};

export default function DiscoverBtn({ dictionary }: Props) {
  return (
    <StyledButton>
      <Typography variant="xsBodytext">{dictionary}</Typography>
    </StyledButton>
  );
}
