import React from "react";

import Label from "../Label/Label";

import * as S from "./styled";

const Radio = ({
  checked,
  disabled,
  label,
  name,
  onChange,
  value,
  children
}) => {
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
  );
};

export default Radio;
