import React from "react"

const Cart = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-4 -2.015)">
        <rect width="24" height="24" fill="#D8D8D8" opacity="0" />
        <path
          stroke="currentColor"
          d="M14,5 C14,3.8954305 13.1045695,3 12,3 C10.8954305,3 10,3.8954305 10,5 L10,6 L14,6 L14,5 Z"
        />
        <polygon stroke="#151E29" points="5 6 5 19 19 19 19 6" />
        <circle cx="18" cy="6" r="3.5" fill="#F87E7E" stroke="#FFF" />
      </g>
    </svg>
  )
}

export default Cart
