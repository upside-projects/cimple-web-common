import React from "react";

import DoubleChevron from "../Icons/DoubleChevron";
import { Uppercase } from "../Typography/Typography";

import * as S from "./styled";

const Sort = ({ children }) => {
  return (
    <S.Holder>
      <Uppercase color="grey">{children}</Uppercase>
      <DoubleChevron />
    </S.Holder>
  );
};

export default Sort;
