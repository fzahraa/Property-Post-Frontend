import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SocialButton.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface ISocialButton {
  logo?: React.ReactNode;
  text: string;
}

const SocialButton: React.FC<ISocialButton> = ({ logo, text }) => {
  return (
    <div className={cx("social-button")}>
      {logo}
      <span>{text}</span>
    </div>
  );
};

export default SocialButton;
