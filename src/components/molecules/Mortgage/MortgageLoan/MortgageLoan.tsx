import React from "react";
import MoreInfo from "@/src/assets/svg/moreInformation";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./MortgageLoan.module.scss";
import { CircularIcon } from "@/src/components/atoms/CircularIcon/CircularIcon";
import Switch from "@/src/components/atoms/Switch/Switch";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
const cx = createModuleStyleExtractor(styles);

const MortgageLoan = () => {
  const PaymentDetail = [
    {
      label: "Principle & Interest",
      color: "#009D9A",
      price: "8,204",
    },
    {
      label: "Property Tax",
      color: "#DB7C00",
      price: "1,666",
    },
    {
      label: "Home Insurance",
      color: "#5C76E8",
      price: "1,666",
      learnMore: "Learn More",
    },
    {
      label: "HOA Fees",
      color: "#DD7099",
      price: "0",
    },
    {
      label: "Mortgage Insurance",
      color: "#1356AD",
      price: "0",
    },
  ];
  return (
    <div className={cx("payments")}>
      <div className={cx("payments_heading")}>
        <h2>
          $ 10,270/<span>month</span>
        </h2>
        <p>30-Year Fixed loan at 6.640%</p>
      </div>
      <div className={cx("payment-detail")}>
        {PaymentDetail.map((item, index) => (
          <div className={cx("payments_inside")} key={`index_${index}`}>
            <div className={cx("payments_inside_left")}>
              <div className={cx("payments_inside_left_container")}>
                <CircularIcon backgroundColor={item.color} />
                <h3>{item.label}</h3>
              </div>
              <span>{item.learnMore}</span>
            </div>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className={cx("payments_footer")}>
        <h3>
          $ 383,760 <p>due at close </p>
          <span>
            <MoreInfo />
          </span>
        </h3>
        <p>20% down payment, 4% closing cost</p>
        <div className={cx("payments_footer_inside")}>
          <h4>
            Apply Veterans Benefits
            <span>
              <MoreInfo />
            </span>
          </h4>
          <Switch />
        </div>
        <div className={cx("payments_footer_container")}>
          <div className={cx("payments_footer_container_button")}>
            <Button modifier={ButtonModifier.PRIMARYV2}>
              Get Pre-Approved
            </Button>
          </div>
          <span>Show listings within my budget</span>
        </div>
        <div className={cx("payments_footer_text")}>
          <p>Dosclosure. This tool is for general estimation purposes.</p>
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
};

export default MortgageLoan;
