import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="24"
      fill="none"
      viewBox="0 0 14 24"
    >
      <path
        fill="#3D6AD6"
        d="M4.134 13.55H1.153c-.47 0-.637-.17-.637-.641V9.27c0-.466.177-.644.64-.644h2.978V5.984c.001-1.193.214-2.334.82-3.379.62-1.07 1.522-1.802 2.678-2.225C8.373.109 9.142 0 9.928 0c.983-.001 1.967 0 2.95.001.423 0 .61.188.612.613.002 1.141.002 2.282 0 3.423 0 .43-.18.603-.613.608-.806.008-1.613.003-2.418.035-.813 0-1.241.398-1.241 1.24-.02.89-.008 1.781-.008 2.704h3.472c.492 0 .66.169.66.663l-.001 3.62c0 .486-.159.642-.653.642H9.2v9.764c0 .52-.164.686-.677.686H4.766c-.454 0-.631-.176-.631-.63v-9.82z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
