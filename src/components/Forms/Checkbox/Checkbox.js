import React from "react";

import Label from "../Label/Label";
import * as S from "./styled";

const Checkbox = ({ label }) => {
  return (
    <S.Holder>
      <Label inline>
        <S.Checkbox type="checkbox" />
        {label}
      </Label>
    </S.Holder>
  );
};

export default Checkbox;
