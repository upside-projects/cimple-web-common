import React from "react"
import PropTypes from "prop-types"

import { Text, HeadingS } from "../index"

import * as S from "./styled"

const EmptyState = ({ errorDescription, errorMessage, asset }) => {
  return (
    <S.EmptyHolder>
      {asset && <S.Asset src={asset} />}
      <HeadingS>{errorMessage}</HeadingS>
      <Text>{errorDescription}</Text>
    </S.EmptyHolder>
  )
}

export default EmptyState

EmptyState.defaultProps = {
  asset: "",
  errorMessage: "There is nothing here.",
  errorDescription: "Try searching for other items or categories."
}

EmptyState.propTypes = {
  asset: PropTypes.string,
  errorDescription: PropTypes.string,
  errorMessage: PropTypes.string
}
