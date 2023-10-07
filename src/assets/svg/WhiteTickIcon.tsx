import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="7"
      fill="none"
      viewBox="0 0 10 7"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M8.333 1L3.75 5.583 1.667 3.5"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
