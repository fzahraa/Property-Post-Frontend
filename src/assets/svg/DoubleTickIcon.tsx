import React, { FC } from "react";
export interface IDoubleClick {
  color: string;
}

const DoubleTickIcon: FC<IDoubleClick> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="14"
      fill="none"
      viewBox="0 0 24 14"
    >
      <path
        fill={color}
        d="M17.59 1.41L16.18 0 9.84 6.34l1.41 1.41 6.34-6.34zM21.83 0L11.25 10.58 7.07 6.41 5.66 7.82l5.59 5.59 12-12L21.83 0zM0 7.82l5.59 5.59L7 12 1.42 6.41 0 7.82z"
      ></path>
    </svg>
  );
};

export default React.memo(DoubleTickIcon);
