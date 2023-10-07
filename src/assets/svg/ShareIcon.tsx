import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17"
    >
      <path
        fill="#000"
        d="M11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12c.155.49.155 1.015 0 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.498 2.498 0 0111 2.5z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
