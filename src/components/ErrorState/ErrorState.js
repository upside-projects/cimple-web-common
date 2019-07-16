import React from "react"
import PropTypes from "prop-types"
import { HeadingS } from "../index"

import * as S from "./styled"

const ErrorState = ({ errorMessage }) => {
  return (
    <S.EmptyHolder>
      <HeadingS>{errorMessage}</HeadingS>
    </S.EmptyHolder>
  )
}

export default ErrorState

ErrorState.defaultProps = {
  errorMessage: "There was a problem processing your request."
}

ErrorState.propTypes = {
  errorMessage: PropTypes.string
}
