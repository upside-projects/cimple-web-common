import styled from "styled-components"

import * as UI from "../../index"

export const Holder = styled.div``

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductThumb = styled.div`
  background-image: url(${p => p.src});
  background-size: cover;
  height: 20rem;
  width: 100%;

  margin-bottom: 1.5rem;
`

export const Tag = styled(UI.Tag)`
  display: inline-block;
`
