import React from 'react';
import styled from 'styled-components';

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  margin-top: 30px;
  @media (max-width: 1080px) {
    gap: 20px;
  }
`;

const StyledPageButton = styled.button<{ isActive?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isActive ? '#FF6B6B' : 'rgba(227, 227, 227, 1)')};
  background-color: ${(props) => (props.isActive ? 'transparent' : '#F8F8F8')};
  color: ${(props) => (props.isActive ? '#FF6B6B' : 'rgba(31, 31, 31, 1)')};
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1080px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
  &:hover {
    border-color: rgba(226, 109, 90, 1);
    color: #000;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      transform: none;
    }
  }
`;

const StyledArrowButton = styled(StyledPageButton)`
  font-size: 24px;
  font-weight: 400;
`;

interface PageSwitcherProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PageSwitcher: React.FC<PageSwitcherProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Always show pages 1, 2, 3
    for (let i = 1; i <= 3; i++) {
      pages.push(
        <StyledPageButton key={i} isActive={i === currentPage} onClick={() => onPageChange(i)}>
          {i}
        </StyledPageButton>
      );
    }

    return pages;
  };

  const showLeftArrow = currentPage > 1;
  const showRightArrow = currentPage < 3;

  return (
    <StyledPaginationContainer>
      {showLeftArrow && (
        <StyledArrowButton onClick={handlePrevious} disabled={currentPage === 1}>
          ‹
        </StyledArrowButton>
      )}

      {renderPageNumbers()}

      {showRightArrow && (
        <StyledArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
          ›
        </StyledArrowButton>
      )}
    </StyledPaginationContainer>
  );
};

export default PageSwitcher;
