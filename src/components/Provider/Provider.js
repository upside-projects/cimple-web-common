import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "styled-components"

import GlobalStyle from "./globalStyle"
import theme from "./theme"

const Provider = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  )
}

export default Provider

Provider.propTypes = {
  children: PropTypes.node.isRequired
}
