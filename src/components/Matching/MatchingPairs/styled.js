import styled, { css } from 'styled-components';

export const MatchingSuggestions = styled.div`
  width: 100%;
  padding: 6rem 2rem;
`;

export const MatchingSuggested = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;

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

export const MatchingGoods = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-right: 8rem;
`;

export const ButtonVote = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.round};
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light}
  height: 3rem;
  width: 3rem;

  color: ${({ theme }) => theme.colors.brand.default};
  transition: ${({ theme }) => theme.transition.ease()};

  ${p =>
    p.isActive &&
    css`
      color: ${({ theme }) => theme.colors.greyscale.white};
      background-color: ${({ theme }) => theme.colors.brand.default};
      border: 1px solid ${({ theme }) => theme.colors.brand.default};
    `}

  &:hover{
    border: 1px solid ${({ theme }) => theme.colors.greyscale.medium}
   
    ${p =>
      p.isActive &&
      css`
        background-color: ${({ theme }) => theme.colors.brand.dark};
        border: 1px solid ${({ theme }) => theme.colors.brand.dark};
      `}
  }

  &:focus{
    outline: none;
  }

  &:active{
    background-color: ${({ theme }) => theme.colors.brand.dark}
  }
 
`;

export const MatchingActions = styled.div`
  display: flex;

  ${ButtonVote}:first-of-type {
    margin-left: 2rem;
    margin-right: 1rem;
  }
`;
