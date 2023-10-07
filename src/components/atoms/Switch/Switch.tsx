import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./Switch.module.scss";
const cx = createModuleStyleExtractor(styles);

const Switch = () => {
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  return (
    <div
      className={cx([isSwitch ? "active" : "switch"])}
      onClick={() => setIsSwitch(!isSwitch)}
    >
      <div className={cx([isSwitch ? "active_inside" : "switch_inside"])}></div>
    </div>
  );
};

export default Switch;
