import React from "react";

import Label from "../Label/Label";
import Helper from "../Helper/Helper";
import Link from "../Link/Link";

import * as S from "./styled";

const Input = ({
  error,
  helper,
  href,
  label,
  link,
  name,
  onChange,
  placeholder,
  value
}) => {
  console.log(link);
  return (
    <S.Holder>
      <S.Flex>
        <Label>{label}</Label>
        {link && <Link href={href} link={link} />}
      </S.Flex>
      <S.Input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        error={error}
      />
      <Helper error={error}>{error}</Helper>
    </S.Holder>
  );
};

export default Input;
