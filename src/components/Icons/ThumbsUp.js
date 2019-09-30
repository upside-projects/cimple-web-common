import React from 'react';

const ThumbsUp = ({ ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <g fill="#FFF" fillRule="evenodd" stroke="currentColor" strokeWidth="1.6" transform="translate(1 1)">
        <path d="M9.6,5.6 L9.6,2.4 C9.6,1.0745166 8.5254834,0 7.2,0 L4,7.2 L4,16.0001037 L13.024,16.0001037 C13.8218294,16.0090195 14.5043689,15.4288609 14.624,14.64 L15.728,7.44 C15.7984448,6.97588426 15.6615177,6.50424704 15.3534868,6.15001147 C15.0454559,5.7957759 14.5974014,5.59468428 14.128,5.6 L9.6,5.6 Z" />
        <polygon points="4 16 1.6 16 0 16 0 14.4 0 8.8 0 7.2 1.6 7.2 4 7.2" />
      </g>
    </svg>
  );
};

export default ThumbsUp;
