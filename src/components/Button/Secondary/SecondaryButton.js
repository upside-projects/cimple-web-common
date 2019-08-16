import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const SecondaryButton = ({
  className,
  children,
  disabled,
  isLoading,
  full,
  onClick,
  ...props
}) => {
  return (
    <S.Button
      full={full}
      isLoading={isLoading}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </S.Button>
  )
}

export default SecondaryButton

SecondaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func
}

SecondaryButton.defaultProps = {
  className: "",
  isLoading: false,
  full: false,
  disabled: false,
  onClick: () => {}
}
