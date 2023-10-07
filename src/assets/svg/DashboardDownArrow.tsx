import React, { FC } from "react";
import { IDashboardColor } from "@/src/context/types";

export const DashboardDownArrow: FC<IDashboardColor> = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="10"
      fill="none"
      viewBox="0 0 18 10"
    >
      <path
        fill={color}
        d="M2.115 0L9 6.18 15.885 0 18 1.903 9 10 0 1.903 2.115 0z"
      ></path>
    </svg>
  );
};

export default DashboardDownArrow;
