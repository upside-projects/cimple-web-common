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
        <S.Radio
          type="radio"
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          value={value}
        />
        {label}
      </Label>
    </S.Holder>
  );
};

export default Radio;
