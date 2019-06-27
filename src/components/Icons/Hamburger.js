import React from "react"

const Hamburger = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-6 -7)">
        <rect width="24" height="24" fill="#D8D8D8" opacity="0" />
        <polyline stroke="#151E29" points="18 13 12 13 6 13" />
        <polyline stroke="#151E29" points="18 8 12 8 6 8" />
        <polyline stroke="#151E29" points="18 18 12 18 6 18" />
      </g>
    </svg>
  )
}

export default Hamburger
