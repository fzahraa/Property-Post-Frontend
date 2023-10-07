import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./InputLabelField.module.scss";
import { Input } from "../Input/Input";
const cx = createModuleStyleExtractor(styles);
export interface IIputLabel {
  label?: string;
  type?: "text" | "number" | "date" | "password" | "email" | "time";
  className?: string;
}

const InputLabelField: FC<IIputLabel> = ({
  label,
  type = "text",
  className,
}) => {
  return (
    <div className={cx([className, "input-label"])}>
      <Input type={type} placeholder="Please enter" value="" className="input-v2" />
      <div className={cx("input-label_inside")}>
        <span>{label}</span>
      </div>
    </div>
  );
};

export default InputLabelField;
