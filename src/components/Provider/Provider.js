import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./defaultStyles";
import theme from "./theme";

const Provider = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Provider;
