import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./InputQuestion.module.scss";
import { Input } from "@/src/components/atoms/Input";
import { IQuestion } from "@/src/context/types";
const cx = createModuleStyleExtractor(styles);

const InputQuestion: FC<{ data: IQuestion }> = ({ data }) => {
  const { title, inputlabel, footerLabel } = data;
  return (
    <div className={cx("input-question")}>
      <h1>{title}</h1>
      <div className={cx("input-question_inputs")}>
        {inputlabel?.map((item, index) => (
          <div className={cx("form-input")} key={`index${index}`}>
            <label>{item.name}</label>
            <Input
              type="text"
              placeholder={item.placeholder}
              value=""
              className="add-post-form"
            />
          </div>
        ))}
      </div>
      <div className={cx("input-question_footer")}>
        <p>{footerLabel}</p>
      </div>
    </div>
  );
};

export default InputQuestion;
