import React from "react"
import PropTypes from "prop-types"

import { Text } from "../../Typography/Typography"
import * as S from "./styled"

const BigProduct = ({ name, src, price, category }) => {
  return (
    <S.Holder>
      <S.ProductThumb src={src} />
      <S.Flex>
        <S.Column>
          <Text>{name}</Text>
          <Text color="greyMedium">{price}</Text>
        </S.Column>
        <S.Tag type={category}>{category}</S.Tag>
      </S.Flex>
    </S.Holder>
  )
}

export default BigProduct

BigProduct.defaultProps = {
  category: "N/A",
  name: "Unamed product",
  src: "",
  price: "N/A"
}

BigProduct.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.string
}
