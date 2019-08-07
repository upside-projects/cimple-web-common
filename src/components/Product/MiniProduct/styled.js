import styled from "styled-components"

import * as UI from "../../Typography/Typography"

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 500px) {
    div:first-of-type {
      display: none;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  @media only screen and (max-width: 500px) {
    margin-left: 0rem;
  }
`

export const Text = styled(UI.Text)`
  margin-bottom: 0.2rem;
`
export const TextQty = styled(UI.Text)`
  margin-right: 0.5rem;
`

export const TextName = styled(UI.Text)`
  margin-right: 1rem;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`
