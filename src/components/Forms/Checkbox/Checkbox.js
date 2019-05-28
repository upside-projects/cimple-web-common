import React from "react";

import Label from "../Label/Label";
import * as S from "./styled";

const Checkbox = ({ label }) => {
  return (
    <S.Holder>
      <S.Checkbox type="checkbox" />
      <Label>{label}</Label>
    </S.Holder>
  );
};

export default Checkbox;
