import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./GuideBlogItem.module.scss";
import ExportedImage from "next-image-export-optimizer";
const cx = createModuleStyleExtractor(styles);
export interface IGuideBlog {
  image: string;
  title: string;
  subTitle: string;
  label: string;
}

const GuideBlogItem: FC<{ data: IGuideBlog }> = ({ data }) => {
  const { image, title, subTitle, label } = data;
  return (
    <div className={cx("blog-item")}>
      <ExportedImage
        src={image}
        alt="Blog Image"
        width={668}
        height={444}
        layout="responsive"
        objectFit="contain"
        className={cx("blog-image")}
      />
      <div className={cx("blog-item_detail")}>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        <span>{label}</span>
      </div>
    </div>
  );
};

export default GuideBlogItem;
