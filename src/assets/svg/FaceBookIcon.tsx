import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      fill="none"
      viewBox="0 0 33 32"
    >
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M.656 16.09c0 7.954 5.778 14.569 13.334 15.91V20.444h-4V16h4v-3.556c0-4 2.577-6.221 6.222-6.221 1.155 0 2.4.177 3.555.354v4.09h-2.044c-1.956 0-2.4.977-2.4 2.222V16h4.267l-.711 4.444h-3.556V32c7.556-1.341 13.333-7.955 13.333-15.91 0-8.85-7.2-16.09-16-16.09s-16 7.24-16 16.09z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
