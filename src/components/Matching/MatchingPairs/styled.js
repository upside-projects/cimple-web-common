import styled from 'styled-components';

export const MatchingSuggestions = styled.div`
  width: 100%;
  padding: 6rem 2rem;
`;

export const MatchingGoods = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MatchingSuggested = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  padding: 1rem;

  -webkit-box-shadow: ${({ theme }) => theme.shadow.subtle};
  box-shadow: ${({ theme }) => theme.shadow.subtle};
`;

export const GoodsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:first-of-type {
    margin-bottom: 1rem;
  }
`;

export const MatchingActions = styled.div`
  display: flex;
  flex-direction: row;
`;
