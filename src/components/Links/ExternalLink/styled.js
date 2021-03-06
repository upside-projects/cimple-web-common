import styled from "styled-components"

export const ArrowLink = styled.a`
  color: ${({ theme }) => theme.colors.greyscale.dark};
  transition: ${({ theme }) => theme.transition.cubic()};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.default};
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    stroke: currentColor;
    fill: currentColor;
    margin-left: 8px;
  }
`
