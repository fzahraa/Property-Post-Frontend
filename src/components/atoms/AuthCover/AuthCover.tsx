import React, { FC, ReactNode } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./AuthCover.module.scss";
const cx = createModuleStyleExtractor(styles);
interface ICoverHeader {
  children: ReactNode;
}
export const AuthCover: FC<ICoverHeader> = ({ children }) => {
  return <div className={cx("auth-cover")}>{children}</div>;
};
