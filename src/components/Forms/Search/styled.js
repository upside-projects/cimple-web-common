import styled from "styled-components"
import { base } from "../Input/styled"

export const Input = styled.input`
  ${base}
`

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;

  position: relative;

  svg {
    position: absolute;
    top: 14px;
    right: 20px;
  }

  @media only screen and (max-width: 780px) {
    max-width: none;
    min-width: 288px;
  }

  @media only screen and (max-width: 375px) {
    min-width: 288px;
  }
`
