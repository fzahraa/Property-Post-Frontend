import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./MortgageCalculatorButton.module.scss";
import CalculatorIcon from "@/src/assets/svg/CalculatorIcon";
const cx = createModuleStyleExtractor(styles);

const MortgageCalculatorButton = () => {
  return (
    <div className={cx("mortgage-calculator")}>
      <span>
        <CalculatorIcon />
      </span>
      <p>Mortgage Calculator</p>
    </div>
  );
};

export default MortgageCalculatorButton;
