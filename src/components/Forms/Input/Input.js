import React from "react"
import PropTypes from "prop-types"

import Label from "../Label/Label"

import * as S from "./styled"

const Input = ({
  className,
  containerProps,
  disabled,
  error,
  helper,
  href,
  label,
  link,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
  ...props
}) => {
  return (
    <S.Holder className={className} {...containerProps}>
      <Label>
        <S.Flex>
          <S.LabelTitle>{label}</S.LabelTitle>
          {link && <S.Uppercase>{link}</S.Uppercase>}
        </S.Flex>
        <S.Input
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          error={error}
          disabled={disabled}
          {...props}
        />
      </Label>
    </S.Holder>
  )
}

export default Input

Input.defaultProps = {
  className: "",
  error: "",
  disabled: false,
  containerProps: {},
  link: "",
  helper: "",
  href: ""
}

Input.propTypes = {
  className: PropTypes.string,
  containerProps: PropTypes.shape({}),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  helper: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
