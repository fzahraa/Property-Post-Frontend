import React, { FC } from "react";
export interface IRightIcon {
  color: string;
}

const RightIcon: FC<IRightIcon> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="10"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        fill={color}
        d="M0 8.825L3.708 5 0 1.175 1.142 0 6 5l-4.858 5L0 8.825z"
      ></path>
    </svg>
  );
};

export default React.memo(RightIcon);
