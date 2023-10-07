import React, { FC } from "react";
import { IDashboardColor } from "@/src/context/types";

export const DashboardAddIcon: FC<IDashboardColor> = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color}
        d="M11.304 1.304a1.304 1.304 0 10-2.608 0v7.392H1.304a1.304 1.304 0 100 2.608h7.392v7.392a1.304 1.304 0 002.608 0v-7.392h7.392a1.304 1.304 0 100-2.608h-7.392V1.304z"
      ></path>
    </svg>
  );
};

export default React.memo(DashboardAddIcon);
