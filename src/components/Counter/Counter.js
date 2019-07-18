import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import Icons from "../Icons"

const Counter = ({ value, minValue, maxValue, onChange }) => {
  React.useEffect(() => {
    if (value < minValue) {
      onChange(minValue)
    }

    if (value > maxValue) {
      onChange(maxValue)
    }
  }, [])

  const increaseVal = () => {
    if (value < maxValue) {
      onChange(value + 1)
    }
  }

  const decreaseVal = () => {
    if (value > minValue) {
      onChange(value - 1)
    }
  }

  return (
    <S.CounterHolder>
      <S.CounterAction
        type="button"
        onClick={decreaseVal}
        disabled={value === minValue}
      >
        <Icons.Minus />
      </S.CounterAction>
      <S.Value>{value}</S.Value>
      <S.CounterAction
        type="button"
        onClick={increaseVal}
        disabled={value >= maxValue}
      >
        <Icons.Plus />
      </S.CounterAction>
    </S.CounterHolder>
  )
}

Counter.defaultProps = {
  minValue: 0,
  maxValue: Number.MAX_SAFE_INTEGER,
  onChange: () => {}
}

Counter.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number.isRequired
}

export default Counter
