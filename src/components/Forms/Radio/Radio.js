import React from "react"
import PropTypes from "prop-types"

import Label from "../Label/Label"

import * as S from "./styled"

const Radio = ({ checked, disabled, label, name, onChange, value }) => {
  return (
    <S.Holder>
      <Label inline>
        <S.Radio checked={checked} />
        <S.RadioInput
          type="radio"
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          value={value}
        />
        <S.Label>{label}</S.Label>
      </Label>
    </S.Holder>
  )
}

export default Radio

Radio.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
