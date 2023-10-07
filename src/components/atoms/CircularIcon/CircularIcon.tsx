import React, { FC, ReactNode } from "react";
import { createModuleStyleExtractor } from "../../../utils/css";
import styles from "./CircularIcon.module.scss";
const cx = createModuleStyleExtractor(styles);
interface ICircularIcon {
  backgroundColor: string;
}
export function CircularIcon({ backgroundColor }: ICircularIcon) {
  return (
    <div
      style={{ ...(backgroundColor && { backgroundColor }) }}
      className={cx(["icon-circular"])}
    ></div>
  );
}
