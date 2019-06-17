import styled, { css } from "styled-components";

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.greyscale.dark};
  transition: ${({ theme }) => theme.transition.cubic()};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;

  ${p =>
    p.withIcon &&
    css`
      svg {
        margin-left: 8px;
      }
    `}

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 0;
    left: 0;
    bottom: -4px;
    background-color: ${({ theme }) => theme.colors.brand.default};
    transition: ${({ theme }) => theme.transition.cubic()};

    ${p =>
      p.withIcon &&
      css`
        bottom: -6px;
      `}
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`;
