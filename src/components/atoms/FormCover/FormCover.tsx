import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./FormCover.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface IFormCover {
  children: React.ReactNode;
}

const FormCover: React.FC<IFormCover> = ({ children }) => {
  return <div className={cx("form-cover")}>{children}</div>;
};

export default FormCover;
