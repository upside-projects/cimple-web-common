import React from "react"
import PropTypes from "prop-types"

import Thumbnail from "../../Thumbnail/Thumbnail"
import { UppercaseL } from "../../Typography/Typography"

import * as S from "./styled"

const SmallProduct = ({ id, name, src }) => {
  return (
    <S.Holder>
      <Thumbnail src={src} />
      <S.Wrapper>
        <S.Text>{name}</S.Text>
        <UppercaseL color="greyMedium">SKU: {id}</UppercaseL>
      </S.Wrapper>
    </S.Holder>
  )
}

export default SmallProduct

SmallProduct.defaultProps = {
  id: "SKU not available",
  name: "Unnamed product",
  src: "No image"
}

SmallProduct.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string
}
