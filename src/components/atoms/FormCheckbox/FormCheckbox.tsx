import WhiteTickIcon from "@/src/assets/svg/WhiteTickIcon";
import React from "react";
import { createModuleStyleExtractor } from "../../../utils/css";
import styles from "./FormCheckbox.module.scss";
const cx = createModuleStyleExtractor(styles);

export interface IFromCheckbox {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const FormCheckbox: React.FC<IFromCheckbox> = ({
  label,
  checked,
  onChange,
}) => {
  const bgClass = checked ? "o-saquare-checkbox__container-after" : "";
  return (
    <div className={cx("o-saquare-checkbox")}>
      <div
        className={cx(["o-saquare-checkbox__container", bgClass])}
        onClick={onChange}
      >
        {checked && <WhiteTickIcon />}
      </div>
      <p className={cx([checked ? "active" : ""])}>{label}</p>
    </div>
  );
};

export default FormCheckbox;
