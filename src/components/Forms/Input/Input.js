import React from "react";

import Label from "../Label/Label";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Link from "../Link/Link";
import { Uppercase } from "../../Typography/";

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
      <Label>
        <S.Flex>
          <Uppercase>{label}</Uppercase>
          {link && (
            <Link href={href}>
              <Uppercase>{link}</Uppercase>
            </Link>
          )}
        </S.Flex>
        <S.Input
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          error={error}
        />
      </Label>
      <ErrorMessage error={error}>{error}</ErrorMessage>
    </S.Holder>
  );
};

export default Input;
