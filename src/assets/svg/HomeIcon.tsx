import React, { FC } from "react";
export interface IHomeIcon {
  color: string;
}

const HomeIcon: FC<IHomeIcon> = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color}
        d="M10.713.296a1 1 0 00-1.42 0L.296 9.293a1 1 0 00.71 1.71h1V18A2 2 0 004.004 20H16a2 2 0 002-2v-6.997h1a1 1 0 00.925-1.384 1.001 1.001 0 00-.216-.326L10.713.296zM4.005 18V8.413l5.998-5.998L16 8.413v9.588H4.005z"
      ></path>
    </svg>
  );
};

export default React.memo(HomeIcon);
