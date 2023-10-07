import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PasswordInput.module.scss";
import { Input } from "@/src/components/atoms/Input";
const cx = createModuleStyleExtractor(styles);
export interface IPasswordInterface {
  type?: "text" | "number" | "date" | "password" | "email" | "time";
  placeholder?: string;
}

const PasswordInput: FC<IPasswordInterface> = ({ type, placeholder }) => {
  return (
    <div className={cx("password-input")}>
      <div className={cx("password-input_inside")}>
        <Input type={type} value="" placeholder="Please Enter" />
      </div>
    </div>
  );
};

export default PasswordInput;
