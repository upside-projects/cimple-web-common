import React from "react"
import PropTypes from "prop-types"

import Label from "../Label/Label"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import Link from "../../Links/Link"
import { Uppercase } from "../../Typography/Typography"

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
          <Uppercase>{label}</Uppercase>
          {link && (
            <Link href={href}>
              <S.Uppercase>{link}</S.Uppercase>
            </Link>
          )}
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
      <ErrorMessage error={error}>{error}</ErrorMessage>
    </S.Holder>
  )
}

export default Input

Input.defaultProps = {
  containerProps: {}
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  containerProps: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  error: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  full: PropTypes.bool.isRequired,
  helper: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
