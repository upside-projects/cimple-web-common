import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import theme from "./theme";

const Provider = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
};

export default Provider;
