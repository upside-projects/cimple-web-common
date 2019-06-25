import styled from "styled-components"

import * as UI from "../../Typography/Typography"

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1rem;
`

export const Text = styled(UI.Text)`
  margin-bottom: 0.2rem;
`
