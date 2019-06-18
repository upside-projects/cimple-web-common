import styled from "styled-components"

export const ArrowLink = styled.a`
  color: ${({ theme }) => theme.colors.greyscale.dark};
  transition: ${({ theme }) => theme.transition.cubic()};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.default};
  }
`

export const Wrapper = styled.div`
  position: relative;

  &:hover {
    svg {
      position: absolute;
      top: 6px;
      right: -20px;
    }
  }

  svg {
    stroke: currentColor;
    margin-left: 8px;
  }
`
