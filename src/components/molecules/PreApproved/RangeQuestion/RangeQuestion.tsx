import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./RangeQuestion.module.scss";
import { IQuestion } from "@/src/context/types";
const cx = createModuleStyleExtractor(styles);

const RangeQuestion: FC<{ data: IQuestion }> = ({ data }) => {
  const { title, rangLabel, rangeOne, rangeTwo, subTitle, footerLabel } = data;

  const marks = [
    {
      value: 0,
      label: `${rangeOne}`,
    },
    {
      value: 100,
      label: `${rangeTwo}`,
    },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }

  console.log("value is :" + rangeOne + "title is:" + title);
  return (
    <div className={cx("range-question")}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>

      <div className={cx("range-question_container")} id="ranges">
        <p>{rangLabel}</p>
        <Slider
          aria-label="Restricted values"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          className={cx("range-question-bar")}
          marks={marks}
          sx={{
            width: "100%",
            color: "#C5202F",
            marginBottom: "30px",
            gap: "30px",
          }}
        />
      </div>
      <div className={cx("range-question_footer")}>
        <p>{footerLabel}</p>
      </div>
    </div>
  );
};

export default RangeQuestion;
