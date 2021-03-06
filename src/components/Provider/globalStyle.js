import { createGlobalStyle } from "styled-components"

import reset from "./reset"
import typography from "./typography"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${typography}

  html {
    font-size: 16px;
    box-sizing: border-box;
    font-weight: 400;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    font-size: inherit;
    height: 100%;
  }

  body, input, button, select {
   font-family: 'HKGrotesk', sans-serif;
   font-size: 16px;
   font-weight: 400;
 }

 #__next{
    height: 100%;
 }
`

export default GlobalStyle
