import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
        d="M10 6.667v6.666M6.667 10h6.666m5 0a8.333 8.333 0 11-16.666 0 8.333 8.333 0 0116.666 0z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
