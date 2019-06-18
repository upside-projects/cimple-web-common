import React from "react"

const Cart = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-5 -3.985)">
        <rect width="24" height="24" fill="#D8D8D8" opacity="0" />
        <path
          stroke="#151E29"
          d="M14,7 C14,5.8954305 13.1045695,5 12,5 C10.8954305,5 10,5.8954305 10,7 L10,8 L14,8 L14,7 Z"
        />
        <polygon stroke="#151E29" points="6 8 6 19 18 19 18 8" />
        <circle
          cx="17"
          cy="8"
          r="3.5"
          fill="#F87E7E"
          stroke="#FFF"
          opacity="0"
        />
      </g>
    </svg>
  )
}

export default Cart
