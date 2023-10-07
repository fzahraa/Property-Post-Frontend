import { FC, useState } from "react";
import { createModuleStyleExtractor } from "../../../utils/css";
import styles from "./RadioButton.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface IRadioButton {
  state?: boolean;
  FunctionHandler?: () => void;
  className: string;
}

const RadioButton: FC<IRadioButton> = (props) => {
  const { state, FunctionHandler, className } = props;

  const [check, setCheck] = useState(false);

  const CheckHandler = () => {
    setCheck(!check);
  };
  return (
    <>
      <div
        className={cx([check ? className : "radio-button"])}
        onClick={CheckHandler}
      >
        {check && (
          <div className={cx([`${className}__inside`, "button__inside"])}></div>
        )}
      </div>
    </>
  );
};

export default RadioButton;
