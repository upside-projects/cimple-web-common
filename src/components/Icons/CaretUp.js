import React from "react"

const CaretUp = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        points="16 10 12 14 8 10"
        transform="rotate(-180 12 12)"
      />
    </svg>
  )
}

export default CaretUp
