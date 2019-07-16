import React from "react"
import PropTypes from "prop-types"

import { Text } from "../../index"
import * as S from "./styled"

const BigProduct = ({ name, src, price }) => {
  return (
    <S.Holder>
      <S.ProductThumb src={src} />
      <S.Flex>
        <S.Column>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </S.Column>
        <S.Tag type="stationary">Stationary</S.Tag>
      </S.Flex>
    </S.Holder>
  )
}

export default BigProduct

BigProduct.defaultProps = {
  name: "Unamed product",
  src: "",
  price: "N/A"
}

BigProduct.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.string
}
