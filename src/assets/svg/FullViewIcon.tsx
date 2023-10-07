import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
    >
      <g filter="url(#filter0_d_179_253)">
        <path
          fill="#fff"
          d="M10.25 5A2.25 2.25 0 008 7.25v5.25a1.5 1.5 0 01-3 0V7.25A5.252 5.252 0 0110.25 2h5.25a1.5 1.5 0 010 3h-5.25zM29 3.5A1.5 1.5 0 0130.5 2h5.25A5.252 5.252 0 0141 7.25v5.25a1.5 1.5 0 11-3 0V7.25A2.25 2.25 0 0035.75 5H30.5A1.5 1.5 0 0129 3.5zM6.5 26A1.5 1.5 0 018 27.5v5.25A2.25 2.25 0 0010.25 35h5.25a1.5 1.5 0 110 3h-5.25A5.25 5.25 0 015 32.75V27.5A1.5 1.5 0 016.5 26zm33 0a1.5 1.5 0 011.5 1.5v5.25A5.25 5.25 0 0135.75 38H30.5a1.5 1.5 0 110-3h5.25A2.25 2.25 0 0038 32.75V27.5a1.5 1.5 0 011.5-1.5z"
        ></path>
        <path
          stroke="#fff"
          d="M9.013 6.013A1.75 1.75 0 0110.25 5.5h5.25a2 2 0 000-4h-5.25A5.752 5.752 0 004.5 7.25v5.25a2 2 0 004 0V7.25c0-.464.184-.91.513-1.237zm27.974 0l.354-.354-.354.354c.329.328.513.773.513 1.237v5.25a2 2 0 004 0V7.25a5.752 5.752 0 00-5.75-5.75H30.5a2 2 0 000 4h5.25c.464 0 .91.184 1.237.513zm0 27.974l.354.354-.354-.354a1.75 1.75 0 01-1.237.513H30.5a2 2 0 000 4h5.25a5.75 5.75 0 005.75-5.75V27.5a2 2 0 00-4 0v5.25c0 .464-.184.91-.513 1.237zM7.914 26.086A2 2 0 004.5 27.5v5.25a5.75 5.75 0 005.75 5.75h5.25a2 2 0 000-4h-5.25a1.75 1.75 0 01-1.75-1.75V27.5a2 2 0 00-.586-1.414z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_179_253"
          width="46"
          height="46"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="3"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_179_253"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_179_253"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default React.memo(Icon);
