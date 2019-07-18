import React from "react"

import * as S from "./styled"

const Quantity = ({ currentValue, maxValue }) => {
  const [quant, setQuant] = React.useState(currentValue)
  const minValue = 1

  const increaseVal = () => {
    console.log(quant)

    if (quant < maxValue) {
      return setQuant(quant + 1)
    }
  }

  const decreaseVal = () => {
    console.log(currentValue)

    if (quant !== minValue) {
      return setQuant(quant - 1)
    }
  }

  return (
    <S.QuantityHolder>
      <div onClick={quant => decreaseVal()}>-</div>
      <S.Value>{quant}</S.Value>
      <div onClick={quant => increaseVal()}>+</div>
    </S.QuantityHolder>
  )
}

export default Quantity
