import React, { FC, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PlanCardItem.module.scss";
import { Button, ButtonModifier } from "../Button";
import DoubleTickIcon from "@/src/assets/svg/DoubleTickIcon";
const cx = createModuleStyleExtractor(styles);

export interface IBusinessPlan {
  heading: string;
  label: string;
  price: string;
  duration: string;
  points: string[];
}

const PlanCardItem: FC<{ plan: IBusinessPlan }> = ({ plan }) => {
  const { heading, label, price, duration, points } = plan;

  const [state, setState] = useState(false);

  const color = state ? "#fff" : "#000";

  return (
    <div className={cx([state ? "active" : "plan-item"])}>
      <h2>{heading}</h2>
      <h3>{label}</h3>
      <h1>
        $ {price}/<span>{duration}</span>
      </h1>
      <div className={cx("plan-item_button")}>
        <Button
          modifier={state ? ButtonModifier.TRANSPARENT : ButtonModifier.PRIMARY}
          onClick={() => setState(!state)}
        >
          Select Plan
        </Button>
      </div>
      {points.map((point, index) => (
        <div className={cx("plan-item_inside")} key={`index_${index}`}>
          <span>
            <DoubleTickIcon color={color} />
          </span>
          <p>{point}</p>
        </div>
      ))}
    </div>
  );
};

export default PlanCardItem;
