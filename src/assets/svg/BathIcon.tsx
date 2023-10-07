import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      fill="none"
      viewBox="0 0 20 19"
    >
      <path
        fill="#000"
        d="M19 7H5V4c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S3 1.794 3 4v3H1a1 1 0 00-1 1v2c0 2.606 1.674 4.823 4 5.65V19h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65V8a1 1 0 00-1-1zm-1 3c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V9h16v1z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
