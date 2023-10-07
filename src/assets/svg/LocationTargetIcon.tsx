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
      <path fill="#C5202F" d="M10 14a4 4 0 100-8 4 4 0 000 8z"></path>
      <path
        fill="#C5202F"
        d="M11 2.069V0H9v2.069A8.01 8.01 0 002.069 9H0v2h2.069A8.008 8.008 0 009 17.931V20h2v-2.069A8.007 8.007 0 0017.931 11H20V9h-2.069A8.008 8.008 0 0011 2.069zM10 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
