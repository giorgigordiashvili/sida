import React from 'react';
import styled from 'styled-components';

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 60px;
  padding: 20px 0;
`;

const StyledPageButton = styled.button<{ isActive?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isActive ? '#FF6B6B' : '#E5E5E5')};
  background-color: ${(props) => (props.isActive ? 'transparent' : '#F8F8F8')};
  color: ${(props) => (props.isActive ? '#FF6B6B' : '#666666')};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #ff6b6b;
    color: #ff6b6b;
    transform: translateY(-2px);
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
