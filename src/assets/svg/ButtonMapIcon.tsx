import React, { FC } from "react";
export interface IMapIcon {
  color?: string;
}

const ButtonMapIcon: FC<IMapIcon> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 25"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 1c-2.387 0-4.676.92-6.364 2.56A8.614 8.614 0 001 9.74v.637c.364 4.789 4.457 8.64 9 13.623 4.743-5.201 9-9.141 9-14.26a8.614 8.614 0 00-2.636-6.18A9.138 9.138 0 0010 1zm0 4.541c.857 0 1.694.247 2.406.71a4.233 4.233 0 011.595 1.887c.328.769.413 1.615.245 2.43a4.169 4.169 0 01-1.186 2.153 4.372 4.372 0 01-2.219 1.15 4.45 4.45 0 01-2.502-.242 4.305 4.305 0 01-1.942-1.551A4.119 4.119 0 015.67 9.74a4.144 4.144 0 011.27-2.97A4.396 4.396 0 0110 5.542z"
      ></path>
    </svg>
  );
};

export default ButtonMapIcon;
