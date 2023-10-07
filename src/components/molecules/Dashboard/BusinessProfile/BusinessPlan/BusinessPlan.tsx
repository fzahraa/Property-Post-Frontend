import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./BusinessPlan.module.scss";
import PlanCardItem from "@/src/components/atoms/PlanCardItem/PlanCardItem";
import PlanAndPrice from "../../../Common/PlanAndPrice/PlanAndPrice";
const cx = createModuleStyleExtractor(styles);

const BusinessPlan = () => {
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
      state: false,
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
      state: true,
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
      state: false,
    },
  ];
  return (
    <div>
      <PlanAndPrice
        flag={true}
        title="Ads Price & Plans"
        subTitle="Select Plan that Suit you Most"
      />
    </div>
  );
};

export default BusinessPlan;
