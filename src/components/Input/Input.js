import React from "react";

import * as S from "./styled";

const Input = ({ name, onChange, placeholder, value }) => {
  return (
    <S.Input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
