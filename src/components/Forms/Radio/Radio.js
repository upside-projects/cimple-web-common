import React from "react";

import Label from "../Label/Label";

import * as S from "./styled";

const Radio = ({ label }) => {
  return (
    <S.Holder>
      <S.Radio type="radio" />
      <Label>{label}</Label>
    </S.Holder>
  );
};

export default Radio;
