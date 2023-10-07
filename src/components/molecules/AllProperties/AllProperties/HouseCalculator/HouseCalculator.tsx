import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./HouseCalculator.module.scss";
import InputLabelField from "@/src/components/atoms/InputLabelField/InputLabelField";
import DropdownLabelField from "@/src/components/atoms/DropdownLabelField/DropdownLabelField";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
const cx = createModuleStyleExtractor(styles);

const HouseCalculator = () => {
  const [move, setMove] = useState<boolean>(false);
  const [packing, setPacking] = useState<boolean>(false);
  return (
    <div className={cx("calculator")}>
      <h1>Moving House Calculator</h1>
      <div className={cx("calculator_input")}>
        <InputLabelField label="Move From" />
        <InputLabelField label="Move To" />
      </div>
      <div className={cx("calculator_dropdown")}>
        <div
          className={cx("calculator_dropdown_size-of-move")}
          onClick={() => setMove(!move)}
        >
          <DropdownLabelField Function={move} label="Size of Move" />
        </div>
        <div
          className={cx("calculator_dropdown_packing")}
          onClick={() => setPacking(!packing)}
        >
          <DropdownLabelField Function={packing} label="Packing" />
        </div>
      </div>
      <div className={cx("calculator_button")}>
        <Button modifier={ButtonModifier.PRIMARY}>Get Estimate</Button>
      </div>
    </div>
  );
};

export default HouseCalculator;
