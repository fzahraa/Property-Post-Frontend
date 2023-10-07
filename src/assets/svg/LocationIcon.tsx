import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="22"
      fill="none"
      viewBox="0 0 18 22"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12a3 3 0 100-6 3 3 0 000 6z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 1a8 8 0 00-8 8c0 1.892.402 3.13 1.5 4.5L9 21l6.5-7.5C16.598 12.13 17 10.892 17 9a8 8 0 00-8-8v0z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
