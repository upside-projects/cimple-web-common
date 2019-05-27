import { injectGlobal } from "styled-components";

import reset from "./reset";

const defaultStyles = () => injectGlobal`
  ${reset}
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
`;

export default defaultStyles();
