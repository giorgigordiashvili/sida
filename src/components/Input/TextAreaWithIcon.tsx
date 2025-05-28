'use client';
import React from 'react';
import styled from 'styled-components';
import Typography from '@/components/ui/Typography';

type WrapperProps = {
  width?: string;
  height?: string;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextArea = styled.textarea<{ $hasIcon: boolean }>`
  width: 100%;
  height: 130px;
  padding: 13px ${(props) => (props.$hasIcon ? '20px' : '20px')} 13px 20px;
  border-radius: 20px;
  border: 2px solid #e3e3e3;
  outline: none;
  resize: none;
  font-family: inherit;
  font-size: 1rem;
`;

const Icon = styled.img`
  position: absolute;
  right: 22px;
  top: 15px;
  width: 14px;
  height: 14px;
`;
type Props = {
  label: string;
  placeholder: string;
  iconSrc?: string;
  width?: string;
  height?: string;
};

const TextAreaWithIcon: React.FC<Props> = ({ label, placeholder, iconSrc, width, height }) => {
  return (
    <Wrapper width={width} height={height}>
      <Typography variant="h4">{label}</Typography>
      <InputWrapper>
        <TextArea placeholder={placeholder} $hasIcon={!!iconSrc} />
        {iconSrc && <Icon src={iconSrc} alt="icon" />}
      </InputWrapper>
    </Wrapper>
  );
};

export default TextAreaWithIcon;
