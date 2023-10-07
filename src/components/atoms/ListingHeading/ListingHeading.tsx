import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./ListingHeading.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface IListingHeding {
  title: string;
  subTitle?: string;
  link?: string;
}

const ListingHeading: React.FC<IListingHeding> = ({
  title,
  subTitle,
  link,
}) => {
  return (
    <div className={cx("heading")}>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  );
};

export default ListingHeading;
