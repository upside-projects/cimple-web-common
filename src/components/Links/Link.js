/* eslint-disable import/no-named-default */
import React from "react"
import PropTypes from "prop-types"
import { default as NextLink } from "next/link"

const Link = ({ to, children }) => {
  const internal = /^\/(?!\/)/.test(to)
  const external = /^http/.test(to)

  if (internal) {
    return <NextLink href={to}>{children}</NextLink>
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

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
