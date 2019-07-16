import React from "react"
import PropTypes from "prop-types"

import { Text, HeadingS } from "../index"

import * as S from "./styled"

const EmptyState = ({ errorDescription, errorMessage, searchTerm }) => {
  return (
    <S.EmptyHolder>
      <HeadingS>
        {errorMessage}{" "}
        {searchTerm && (
          <HeadingS as="span" color="greyMedium">
            &#34;{searchTerm}&#34;
          </HeadingS>
        )}
        .
      </HeadingS>
      <Text>{errorDescription}</Text>
    </S.EmptyHolder>
  )
}

export default EmptyState

EmptyState.defaultProps = {
  errorMessage: "No search results found",
  errorDescription: "Try searching for other items.",
  searchTerm: ""
}

EmptyState.propTypes = {
  errorDescription: PropTypes.string,
  errorMessage: PropTypes.string,
  searchTerm: PropTypes.string
}
