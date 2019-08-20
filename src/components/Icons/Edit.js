import React from "react"

const Edit = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-5 -6)">
        <rect width="24" height="24" fill="#D8D8D8" opacity="0" />
        <path stroke="currentColor" d="M17.6,19 L5,19" />
        <polygon
          stroke="currentColor"
          points="7.2 0 10 2.8 3 9.8 .2 9.8 .2 7"
          transform="translate(6 6)"
        />
      </g>
    </svg>
  )
}

export default Edit
