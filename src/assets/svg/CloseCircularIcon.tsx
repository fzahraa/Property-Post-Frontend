import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill="#787878"
        d="M22.19 10.35a.287.287 0 00-.285-.285l-2.358.01-3.55 4.232-3.546-4.228-2.36-.011a.284.284 0 00-.286.286c0 .068.025.132.068.186l4.646 5.535-4.646 5.532a.287.287 0 00.218.471l2.36-.01 3.546-4.232 3.547 4.229 2.357.01a.284.284 0 00.286-.285.298.298 0 00-.068-.186l-4.64-5.532 4.647-5.536a.286.286 0 00.064-.186z"
      ></path>
      <path
        fill="#787878"
        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 29.286c-7.336 0-13.286-5.95-13.286-13.286C2.714 8.664 8.664 2.714 16 2.714c7.336 0 13.286 5.95 13.286 13.286 0 7.336-5.95 13.286-13.286 13.286z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
