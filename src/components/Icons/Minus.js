import React from "react"

const Minus = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <rect width="24" height="24" fill="#D8D8D8" opacity="0" />
        <path stroke="currentColor" d="M8,12 L16,12" />
      </g>
    </svg>
  )
}

export default Minus
