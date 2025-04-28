'use client';
import styled from 'styled-components';

interface Props {
  variant: 'discover' | 'view';
}

const StyledButton = styled.button`
  border: 5px solid rgba(226, 109, 90, 1);
  border-radius: 99px;
  background: transparent;
  color: rgba(31, 31, 31, 1);
  padding: 8px 25px;
  display: flex;
  text-transform: uppercase;
  font-family: DM Sans;
  font-weight: 700;
  font-size: 14px;
  line-height: 34px;
  letter-spacing: 1.4px;
  cursor: pointer;
`;

const TransparentButton = ({ variant }: Props) => {
  const buttonText = variant === 'discover' ? 'Discover more' : 'View more';
  return <StyledButton>{buttonText}</StyledButton>;
};

export default TransparentButton;
