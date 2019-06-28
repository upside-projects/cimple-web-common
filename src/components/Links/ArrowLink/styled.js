import styled, { css } from "styled-components"

import Arrow from "../../Icons/Arrow"

export const ArrowIcon = styled(Arrow)`
  color: currentColor;
  margin-left: 8px;
`

export const ArrowLink = styled.a`
  display: inline-flex;
  align-items: center;
  position: relative;

  color: ${({ theme }) => theme.colors.greyscale.dark};
  transition: ${({ theme }) => theme.transition.cubic()};

  ${p =>
    p.withColor &&
    css`
      color: ${({ theme }) => theme.colors.brand.default};
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.brand.default};
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
