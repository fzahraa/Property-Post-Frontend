import React, { FC, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PlanAndPrice.module.scss";
import PlanCardItem from "@/src/components/atoms/PlanCardItem/PlanCardItem";
const cx = createModuleStyleExtractor(styles);
export interface IPlanAndPrice {
  title?: string;
  subTitle?: string;
  flag: boolean;
}

const PlanAndPrice: FC<IPlanAndPrice> = ({ title, subTitle, flag }) => {
  const [state, setState] = useState(false);

  const businessPlans = [
    {
      heading: "Personal",
      label: "Perfect Plan for Starters",
      price: "24",
      duration: "week",
      points: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      // state: state,
      // setState: setState,
    },
    {
      heading: "Professional",
      label: "Perfect Plan for Professional",
      price: "50",
      duration: "2 week",
      points: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      // state: state,
      // setState: setState,
    },
    {
      heading: "Enterprise",
      label: "Perfect Plan for Enterprise",
      price: "100",
      duration: "Month",
      points: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      // state: state,
      // setState: setState,
    },
  ];
  return (
    <div className={cx([flag ? "business-plan-v2" : "business-plan"])}>
      {flag && (
        <div className={cx("business-plan_heading")}>
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
        </div>
      )}

      <div className={cx("business-plan_inside")}>
        {businessPlans.map((plan, index) => (
          <PlanCardItem plan={plan} key={`index_${index}`} />
        ))}
      </div>
    </div>
  );
};

export default PlanAndPrice;
