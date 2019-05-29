import React from "react";

import Label from "../Label/Label";
import * as S from "./styled";

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <S.Holder>
      <Label inline>
        <S.Check checked={checked} />
        <S.Checkbox
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <S.Label>{label}</S.Label>
      </Label>
    </S.Holder>
  );
};

export default Checkbox;
