import React from "react";

import Label from "../Label";
import * as S from "./styled";

const Input = ({ label, name, onChange, placeholder, value }) => {
  return (
    <Label>
      {label}
      <S.Input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </Label>
  );
};

export default Input;
