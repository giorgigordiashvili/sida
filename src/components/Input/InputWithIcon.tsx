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
  width: ${(props) => props.width || '500px'};
  max-width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 13px ${(props) => (props.$hasIcon ? '20px' : '20px')} 13px 20px;
  border-radius: 20px;
  border: 2px solid #e3e3e3;
  outline: none;
  height: 60px;
`;

const Icon = styled.img`
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
`;

type Props = {
  label: React.ReactNode;
  placeholder: string;
  iconSrc?: string;
  width?: string;
  height?: string;
  typographyVariant?: 'h4' | 'label';
  typographyStyle?: React.CSSProperties;
};

const InputWithIcon: React.FC<Props> = ({
  label,
  placeholder,
  iconSrc,
  width,
  height,
  typographyVariant = 'h4',
  typographyStyle,
}) => {
  return (
    <Wrapper width={width} height={height}>
      <Typography variant={typographyVariant} style={typographyStyle}>
        {label}
      </Typography>
      <InputWrapper>
        <Input placeholder={placeholder} $hasIcon={!!iconSrc} />
        {iconSrc && <Icon src={iconSrc} alt="icon" />}
      </InputWrapper>
    </Wrapper>
  );
};

export default InputWithIcon;
