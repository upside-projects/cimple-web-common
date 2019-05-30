import styled from "styled-components";

export const Anchor = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.default};
    transition: ${({ theme }) => theme.transition.ease()};
  }
`;
