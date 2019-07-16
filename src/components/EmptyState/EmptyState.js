import React from "react"
import PropTypes from "prop-types"

import { Text, HeadingS } from "../index"

import * as S from "./styled"

const EmptyState = ({ errorDescription, errorMessage, searchTerm }) => {
  return (
    <S.EmptyHolder>
      <HeadingS>
        {errorMessage}{" "}
        <HeadingS as="span" color="greyMedium">
          &#34;{searchTerm}&#34;
        </HeadingS>
        .
      </HeadingS>
      <Text>{errorDescription}</Text>
    </S.EmptyHolder>
  )
}

export default EmptyState

EmptyState.propTypes = {
  errorDescription: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired
}
