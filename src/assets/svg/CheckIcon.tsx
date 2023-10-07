import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="11"
      fill="none"
      viewBox="0 0 13 11"
    >
      <path
        fill="#C5202F"
        d="M6 10.521a.25.25 0 01-.184-.08L.866 5.087a.25.25 0 01.184-.42h2.382a.25.25 0 01.189.086l1.654 1.903c.179-.382.525-1.018 1.132-1.794.898-1.146 2.568-2.832 5.425-4.354a.25.25 0 01.271.418c-.01.009-1.112.876-2.38 2.465-1.167 1.462-2.718 3.853-3.48 6.94a.25.25 0 01-.244.19z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
