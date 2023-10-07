import React, { FC } from "react";
export interface IListIcon {
  color?: string;
}

const ListIcon: FC<IListIcon> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="14"
      fill="none"
      viewBox="0 0 26 17"
    >
      <path
        fill={color}
        d="M0 17v-1.889h16.714V17H0zm0-9.444h26v1.888H0V7.556zM20.429 0v1.889H0V0h20.429z"
      ></path>
    </svg>
  );
};

export default ListIcon;
