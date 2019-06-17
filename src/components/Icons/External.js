import React from "react"

const External = ({ currentColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <polyline stroke={currentColor} points="12 10 12 13 4 13 4 5 7 5" />
        <path stroke={currentColor} d="M13,4 L8,9" />
        <polyline
          stroke={currentColor}
          strokeLinecap="square"
          points="10 4 13 4 13 7"
        />
      </g>
    </svg>
  )
}

export default External
