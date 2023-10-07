import React, { FC } from "react";
import { IDashboardColor } from "@/src/context/types";

export const ListingIcon: FC<IDashboardColor> = (props) => {
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
        d="M0 1.421C0 1.044.132.683.366.416.601.15.918 0 1.25 0h12.5c.332 0 .65.15.884.416.234.267.366.628.366 1.005 0 .377-.132.738-.366 1.005a1.179 1.179 0 01-.884.416H1.25c-.332 0-.65-.15-.884-.416A1.525 1.525 0 010 1.42zM0 16.58c0-.377.132-.738.366-1.005.235-.266.552-.416.884-.416h10.833c.332 0 .65.15.884.416.235.267.366.628.366 1.005 0 .377-.131.738-.366 1.005a1.179 1.179 0 01-.884.416H1.25c-.332 0-.65-.15-.884-.416A1.526 1.526 0 010 16.579zm1.25-9c-.332 0-.65.15-.884.416A1.525 1.525 0 000 9c0 .377.132.738.366 1.005.235.266.552.416.884.416h17.5c.331 0 .65-.15.884-.416C19.868 9.738 20 9.377 20 9c0-.377-.132-.738-.366-1.005a1.179 1.179 0 00-.884-.416H1.25z"
      ></path>
    </svg>
  );
};

export default ListingIcon;
