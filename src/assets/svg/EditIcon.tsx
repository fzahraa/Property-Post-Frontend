import { FC } from "react";

export interface IEditIcon {
  color: string;
}

const EditIcon: FC<IEditIcon> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M1.322 24a1.317 1.317 0 01-.97-.43 1.302 1.302 0 01-.347-1.006l.323-3.549L15.233 4.112 19.89 8.77 4.99 23.672l-3.548.323a1.23 1.23 0 01-.12.005zM20.821 7.838L16.164 3.18 18.957.386a1.318 1.318 0 011.864 0l2.793 2.794a1.318 1.318 0 010 1.864l-2.792 2.793-.001.001z"
      ></path>
    </svg>
  );
};

export default EditIcon;
