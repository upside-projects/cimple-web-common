import React from "react"

const Danger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 22 20"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-1)">
        <rect width="24" height="24" fill="#D8D8D8" opacity="0" />
        <polygon
          stroke="#151E29"
          strokeWidth="1.5"
          points="11.944 2 21.389 19 2.5 19"
        />
        <polygon
          fill="#151E29"
          fillRule="nonzero"
          points="11.192 7.5 11.394 12.782 12.587 12.782 12.812 7.5"
        />
        <rect width="2" height="2" x="11" y="14" fill="#151E29" />
      </g>
    </svg>
  )
}

export default Danger
