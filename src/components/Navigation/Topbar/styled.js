import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1.25rem 2rem;
  width: 100vw;

  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.lighter};
`;
