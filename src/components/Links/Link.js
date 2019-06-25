/* eslint-disable import/no-named-default */
import React from "react"
import PropTypes from "prop-types"
import { default as NextLink } from "next/link"

const Link = ({ internalType, to, children, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to)
  const external = /^http/.test(to)

  if (internal) {
    console.error(internalType)
    switch (internalType) {
      case "next":
        return (
          <NextLink href={to} {...rest}>
            {children}
          </NextLink>
        )
      default:
        throw new Error("Internal Link Type not supported")
    }
  }

  if (external) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={to}>
        {children}
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={to}>
      {children}
    </a>
  )
}

export default Link

Link.defaultProps = { internalType: "next" }

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  internalType: PropTypes.oneOf(["next"]) // 'next', 'reach', 'gatsby', ...
}
