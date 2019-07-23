import styled from "styled-components"

import * as UI from "../../index"

export const ProductThumb = styled.div`
  background-color: ${({ theme }) => theme.colors.greyscale.lighter};
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center center;
  height: 20rem;
  width: 100%;
  opacity: 1;

  margin-bottom: 1.5rem;

  transition: ${({ theme }) => theme.transition.cubic()};

  @media only screen and (max-width: 768px) {
    height: 10rem;
    width: 100%;
  }
`

export const Holder = styled.div`
  cursor: pointer;
  width: 100%;

  &:hover {
    ${ProductThumb} {
      opacity: 0.6;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 10rem;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tag = styled(UI.Tag)`
  display: table;
`
