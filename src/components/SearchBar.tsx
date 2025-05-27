'use client';

import styled from 'styled-components';
import Typography from './ui/Typography';

// Define the prop types
type SearchBarProps = {
  dictionary: {
    title: string;
  };
};

const StyledSearchBar = styled.div`
  display: flex;
`;
export default function SearchBar({ dictionary }: SearchBarProps) {
  return (
    <StyledSearchBar>
      <Typography variant="h2">{dictionary.title}</Typography>
    </StyledSearchBar>
  );
}
