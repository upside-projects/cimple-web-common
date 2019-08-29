import React from "react";

const Ellipsis = ({ ...props }) => {
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
        <g fill="currentColor" transform="translate(11 5)">
          <circle cx="1" cy="7" r="1" />
          <circle cx="1" cy="1" r="1" />
          <circle cx="1" cy="13" r="1" />
        </g>
      </g>
    </svg>
  );
};

export default Ellipsis;
