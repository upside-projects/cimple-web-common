import styled from "styled-components"

import Arrow from "../../Icons/Arrow"

export const ArrowIcon = styled(Arrow)``

export const ArrowLink = styled.a`
  display: inline-flex;
  align-items: center;
  position: relative;

  color: ${({ theme }) => theme.colors.greyscale.dark};
  transition: ${({ theme }) => theme.transition.cubic()};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.default};
  }
`

export const Wrapper = styled.div``
