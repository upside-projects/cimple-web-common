import React from "react";

import Label from "../Label/Label";
import Helper from "../Helper/Helper";

import * as S from "./styled";

const Input = ({
  error,
  helper,
  label,
  name,
  onChange,
  placeholder,
  value
}) => {
  return (
    <>
      <Label>
        {label}
        <S.Input
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          error={error}
        />
        <Helper error={error}>{error}</Helper>
      </Label>
    </>
  );
};

export default Input;
