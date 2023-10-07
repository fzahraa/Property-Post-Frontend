import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SingleCalculatorButton.module.scss";
import ExportedImage from "next-image-export-optimizer";
const cx = createModuleStyleExtractor(styles);
export interface ICalculatorButton {
  image: string;
  title: string;
  subTitle: string;
}

const SingleCalculatorButton: FC<{ data: ICalculatorButton }> = ({ data }) => {
  const { image, title, subTitle } = data;
  return (
    <div className={cx("calculator-btn")}>
      <ExportedImage
        src={image}
        alt="Calculator button image"
        width={50}
        height={50}
      />
      <div className={cx("calculator-btn_text")}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default SingleCalculatorButton;
