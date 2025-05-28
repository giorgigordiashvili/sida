'use client';
import styled from 'styled-components';
import Typography from './ui/Typography';

type Props = {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
};

const StyledButton = styled.button<{ isActive?: boolean }>`
  background-color: transparent;
  border: 5px solid rgba(43, 182, 115, 1);
  width: 180px;
  height: 54px;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(30, 127, 80, 1);
    border-color: rgba(30, 127, 80, 1);
    color: white;
  }

  ${(props) =>
    props.isActive &&
    `
        background-color: rgba(43, 182, 115, 1);
        border-color: rgba(43, 182, 115, 1);
        color: white;
        
        &:hover {
        background-color: rgba(43, 182, 115, 1);
        border-color: rgba(43, 182, 115, 1);
        }
        
        @media (max-width: 1080px) {
          transform: translateY(-20px);
        }

      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    `}
`;

export default function CustomButton({ text, onClick, isActive }: Props) {
  return (
    <StyledButton onClick={onClick} isActive={isActive}>
      <Typography variant="sBodytext">{text}</Typography>
    </StyledButton>
  );
}
