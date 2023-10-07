import React, { FC } from "react";
import { IDashboardColor } from "@/src/context/types";

export const DashboardIcon: FC<IDashboardColor> = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      fill="none"
      viewBox="0 0 22 20"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 3a2 2 0 012-2h6v18H3a2 2 0 01-2-2V3zm12-2h6a2 2 0 012 2v5h-8V1zm0 11h8v5a2 2 0 01-2 2h-6v-7z"
      ></path>
    </svg>
  );
};

export default DashboardIcon;
