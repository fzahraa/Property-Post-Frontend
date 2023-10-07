import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="11"
      fill="none"
      viewBox="0 0 6 11"
    >
      <path
        fill="#fff"
        d="M6 1.386L2.292 5.544 6 9.702l-1.142 1.277L0 5.544 4.858.108 6 1.386z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
