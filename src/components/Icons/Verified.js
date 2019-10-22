import React from 'react';

const Verified = ({ ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <rect width="20" height="20" fill="#FFF" rx="10" />
        <polyline stroke="#7E6EE6" points="5.907 7.26 5.907 10.846 15.2 10.139" transform="rotate(-45 10.553 9.053)" />
      </g>
    </svg>
  );
};

export default Verified;
