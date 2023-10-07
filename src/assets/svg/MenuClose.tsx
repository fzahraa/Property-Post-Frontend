import React from "react";

interface IIcon {
  onClick?: () => void;
}
export function MenuClose({ onClick }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-384 -66)">
          <g transform="translate(0 48)">
            <g transform="translate(384 18)">
              <path d="M0 0L24 0 24 24 0 24z"></path>
              <path
                fill="#000"
                fillRule="nonzero"
                d="M5.146 4a1.14 1.14 0 00-.795 1.958l6.036 6.037-6.036 6.037a1.14 1.14 0 101.612 1.612L12 13.608l6.037 6.036a1.14 1.14 0 101.612-1.612l-6.036-6.037 6.036-6.037a1.14 1.14 0 10-1.612-1.612L12 10.382 8.982 7.364 5.963 4.346A1.14 1.14 0 005.146 4z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
