import React from "react"
import PropTypes from "prop-types"

import Thumbnail from "../../Thumbnail/Thumbnail"
import { UppercaseL } from "../../Typography/Typography"

import * as S from "./styled"

const SmallProduct = ({ currency, image, name, sku, price, quantity }) => {
  return (
    <S.Holder>
      <Thumbnail src={image} />
      <S.Wrapper>
        <S.Flex>
          <S.TextQty>{quantity}x</S.TextQty>
          <S.TextName>{name}</S.TextName>
          <S.Text>
            {currency}
            {price}
          </S.Text>
        </S.Flex>
        <UppercaseL color="greyMedium">SKU: {sku}</UppercaseL>
      </S.Wrapper>
    </S.Holder>
  )
}

export default SmallProduct

SmallProduct.defaultProps = {
  currency: "£",
  image:
    "https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png",
  name: "Unnamed product",
  sku: "SKU not available",
  price: "0",
  quantity: 0
}

SmallProduct.propTypes = {
  currency: PropTypes.string,
  image: PropTypes.string,
  sku: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}
