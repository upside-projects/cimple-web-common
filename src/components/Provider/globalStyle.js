import { createGlobalStyle } from "styled-components";

import reset from "./reset";
import typography from "./typography";

const GlobalStyle = createGlobalStyle`
  ${reset}

  ${typography}

  html {
    font-size: 16px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    font-size: inherit;
  }

  body, input, button, select {
   font-family: 'HKGrotesk', sans-serif;
   font-size: 16px;
 }
`;

export default GlobalStyle;
