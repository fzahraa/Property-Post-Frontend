import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="14"
      fill="none"
      viewBox="0 0 20 14"
    >
      <path
        fill="#fff"
        d="M18.571 0H1.43c-.38 0-.743.147-1.01.41A1.386 1.386 0 000 1.4v11.2c0 .371.15.727.418.99.268.262.632.41 1.01.41h17.143c.38 0 .743-.148 1.01-.41.268-.263.419-.619.419-.99V1.4c0-.371-.15-.727-.418-.99a1.444 1.444 0 00-1.01-.41zM17 1.4l-7 4.746L3 1.4h14zM1.429 12.6V2.037l8.164 5.537a.724.724 0 00.814 0l8.164-5.537V12.6H1.43z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
