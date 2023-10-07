import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="23"
      fill="none"
      viewBox="0 0 7 23"
    >
      <path
        fill="#000"
        d="M.113 20.658v-.638c.014-.051.038-.098.047-.15.206-1.34 1.322-2.4 2.63-2.489 1.462-.103 2.7.731 3.103 2.09.052.179.089.366.136.55v.637c-.014.042-.038.08-.042.126a2.95 2.95 0 01-2.311 2.447c-.094.019-.188.047-.281.07h-.638c-.042-.014-.084-.037-.127-.042a2.932 2.932 0 01-2.428-2.268c-.028-.118-.06-.226-.089-.333zM6.03 2.639v.638c-.014.051-.038.098-.042.15-.211 1.35-1.332 2.404-2.653 2.489-1.458.093-2.691-.75-3.09-2.114-.051-.174-.089-.352-.13-.525v-.638c.013-.042.037-.08.046-.122C.385 1.298 1.093.502 2.274.122 2.43.07 2.593.042 2.752 0h.638c.042.014.084.037.126.042C4.74.244 5.663 1.106 5.945 2.311l.084.328zm0 8.69v.638c-.014.052-.038.099-.047.15-.21 1.345-1.373 2.428-2.686 2.485-1.476.065-2.728-.825-3.08-2.199-.037-.145-.07-.29-.103-.436v-.637c.014-.052.038-.099.047-.15.206-1.346 1.374-2.428 2.686-2.49 1.477-.07 2.728.826 3.08 2.2.037.15.07.294.103.44z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);