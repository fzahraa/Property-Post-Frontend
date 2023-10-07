import React, { useState } from "react";
import CheckIcon from "../../../assets/svg/CheckIcon";
import { createModuleStyleExtractor } from "../../../utils/css";

import styles from "./Checkbox.module.scss";
const cx = createModuleStyleExtractor(styles);

const SaquareCheckbox = () => {
  const [check, setCheck] = useState(false);

  const CheckHandler = () => {
    setCheck(!check);
  };
  const bgClass = check ? "o-saquare-checkbox__container-after" : "";
  return (
    <div className={cx("o-saquare-checkbox")}>
      <div
        className={cx(["o-saquare-checkbox__container", bgClass])}
        onClick={CheckHandler}
      >
        {check && <CheckIcon />}
      </div>
    </div>
  );
};

export default SaquareCheckbox;
