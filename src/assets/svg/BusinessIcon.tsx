import React, { FC } from "react";
import { IDashboardColor } from "@/src/context/types";

export const BuisnessIcon: FC<IDashboardColor> = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        fill={color}
        d="M18 4h-4V2l-2-2H8L6 2v2H2C.9 4 0 4.9 0 6v5c0 .75.4 1.38 1 1.73V16c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V6c0-1.1-.9-2-2-2zM8 2h4v2H8V2zM2 6h16v5h-5V8H7v3H2V6zm9 6H9v-2h2v2zm6 4H3v-3h4v1h6v-1h4v3z"
      ></path>
    </svg>
  );
};

export default BuisnessIcon;
