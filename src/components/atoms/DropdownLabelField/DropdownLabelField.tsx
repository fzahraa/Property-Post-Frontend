import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./DropdownLabelField.module.scss";
import DropDown from "../DropDown/DropDown";
import PaginationLeftIcon from "@/src/assets/svg/PaginationLeftIcon";
const cx = createModuleStyleExtractor(styles);
export interface IIputLabel {
  label?: string;
  Function: boolean;
}

const DropdownLabelField: FC<IIputLabel> = ({ label, Function }) => {
  const dropdowns = ["kdsjfl", "kdsjfl", "kdsjfl", "kdsjfl"];
  return (
    <div className={cx("dropdown-label")}>
      {Function && <DropDown dropdown={dropdowns} />}
      <span></span>
      <span>
        <PaginationLeftIcon />
      </span>
      <div className={cx("dropdown-label_inside")}>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default DropdownLabelField;
