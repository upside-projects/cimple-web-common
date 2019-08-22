import styled from "styled-components"

import * as UI from "../../Typography/Typography"

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 20rem;

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
  width: 100%;

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

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 1rem;

  max-width: 11rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
