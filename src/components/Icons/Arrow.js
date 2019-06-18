import React from "react"

const Arrow = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="8"
      viewBox="0 0 9 8"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-8 -8)">
        <rect width="24" height="24" fill="none" opacity="0" />
        <path stroke="#151E29" d="M8,12 L16,12" />
        <polyline stroke="#151E29" points="12 16 16 12 12 8" />
      </g>
    </svg>
  )
}

export default Arrow
