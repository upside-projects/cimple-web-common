import styled from 'styled-components';

export const MatchingSuggestions = styled.div`
  width: 100%;
  padding: 6rem 2rem;
`;

export const MatchingSuggested = styled.div`
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  padding: 1rem;
`;

export const MatchingRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  &:first-of-type {
    margin-bottom: 1rem;
  }
`;
