import React from "react";
import { ThemeProvider } from "styled-components";

import "./defaultStyles";
import theme from "./theme";

const Provider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
