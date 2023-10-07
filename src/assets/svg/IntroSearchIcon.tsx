import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="46"
      fill="none"
      viewBox="0 0 86 69"
    >
      <rect width="86" height="69" fill="#000" rx="34.5"></rect>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="4"
        d="M58.667 50.667l-7.477-7.49m4.143-10.01a14.167 14.167 0 11-28.333 0 14.167 14.167 0 0128.333 0z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
