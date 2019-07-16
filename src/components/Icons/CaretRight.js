import React from "react"

const CaretRight = ({ ...props }) => {
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
        <polyline
          stroke="currentColor"
          points="16 10 12 14 8 10"
          transform="rotate(-90 12 12)"
        />
      </g>
    </svg>
  )
}

export default CaretRight
