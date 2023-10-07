import React, { FC, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SelectQuestion.module.scss";
import { IQuestion } from "@/src/context/types";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
const cx = createModuleStyleExtractor(styles);

const SelectQuestion: FC<{ data: IQuestion }> = ({ data }) => {
  const {
    title,
    buttonLabel,
    buttonFlag,
    footerLabel,
    subTitle,
    creditScoreFlag,
    buttonSubLabel,
    buttonSubLabel2,
    lastTitle,
    buttonText,
  } = data;

  const [isSelect, setIsSelect] = useState(null);

  const handleItemClick = (label: any) => {
    setIsSelect(label);
  };

  const getListItemStyles = (label: any) => {
    if (label === isSelect) {
      return {
        border: "1px solid #c5202f",
      };
    }
    return {};
  };
  return (
    <div className={cx("select")}>
      <h2>{lastTitle}</h2>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      {creditScoreFlag && (
        <div className={cx("credit-score")}>
          <div className={cx("credit-score_inside")}>
            <div className={cx("credit-score_inside_button")}>
              <Button modifier={ButtonModifier.PRIMARY}>{buttonText}</Button>
            </div>
            <p>{buttonSubLabel}</p>
          </div>
          <p>{buttonSubLabel2}</p>
        </div>
      )}
      <div
        className={cx([
          buttonFlag ? "select_container-active" : "select_container",
        ])}
      >
        {buttonLabel?.map((label, index) => (
          <div
            className={cx(["button"])}
            onClick={() => handleItemClick(label)}
            style={getListItemStyles(label)}
            key={`index_${index}`}
          >
            <p>{label}</p>
          </div>
        ))}
      </div>
      <div className={cx("select_footer")}>
        <p>{footerLabel}</p>
      </div>
    </div>
  );
};

export default SelectQuestion;
