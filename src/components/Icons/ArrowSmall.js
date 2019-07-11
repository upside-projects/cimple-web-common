import React from "react"

const ArrowSmall = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="8"
      viewBox="0 0 9 8"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-8 -8)">
        <rect width="24" height="24" fill="#D8D8D8" opacity="0" />
        <path stroke="currentColor" d="M8,12 L16,12" />
        <polyline stroke="currentColor" points="12 16 16 12 12 8" />
      </g>
    </svg>
  )
}

export default ArrowSmall
