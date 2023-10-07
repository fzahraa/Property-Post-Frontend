import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="19"
      fill="none"
      viewBox="0 0 24 19"
    >
      <path
        stroke="#37358F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 7.5h22m-20-6h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-12a2 2 0 012-2z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
