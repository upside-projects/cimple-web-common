import styled from "styled-components";

export const Anchor = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
    transition: ${({ theme }) => theme.transition.ease()};
  }
`;
