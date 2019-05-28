import { createGlobalStyle } from "styled-components";

import reset from "./reset";
const fontface = require("../Typography/fonts/index.css");

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontface}

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
 }
`;

export default GlobalStyle;
