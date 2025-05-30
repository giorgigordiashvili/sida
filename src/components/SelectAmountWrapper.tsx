'use client';
import React from 'react';
import SelectAmount from './SelectAmount';

const SelectAmountWrapper = ({
  selected,
  onChange,
}: {
  selected: number | null;
  onChange: (value: number) => void;
}) => {
  return <SelectAmount selected={selected} onChange={onChange} />;
};

export default SelectAmountWrapper;
