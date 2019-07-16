import styled from "styled-components"

import * as UI from "../../index"

export const Holder = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 20rem;
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

export const ProductThumb = styled.div`
  background-image: url(${p => p.src});
  background-size: cover;
  height: 20rem;
  width: 100%;

  margin-bottom: 1.5rem;
`

export const Tag = styled(UI.Tag)`
  display: table;
`
