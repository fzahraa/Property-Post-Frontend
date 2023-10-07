import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./BuyOrRent.module.scss";
import { Input } from "@/src/components/atoms/Input";
import Switch from "@/src/components/atoms/Switch/Switch";
import SingleCalculatorButton from "@/src/components/atoms/SingleCalculatorButton/SingleCalculatorButton";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
const cx = createModuleStyleExtractor(styles);

const BuyOrRent = () => {
  const calculatorButtons = [
    {
      image: "/images/mortgageCalculator.png",
      title: "Mortgage Calculator",
      subTitle: "Calculate your monthly mortgage payment.",
    },
    {
      image: "/images/AffordabilityCalculator.png",
      title: "Affordability Calculator",
      subTitle: "Calculate the price of home you can afford.",
    },
    {
      image: "/images/RentCalculator.png",
      title: "Rent or Buy Calculator",
      subTitle: "Estimste when it makes sense to buy or rent.",
    },
  ];

  const veteranButtons = [
    {
      image: "/images/vateranLoan.png",
      title: "Veteran Home Loan Centre",
      subTitle: "Estimste when it makes sense to buy or rent.",
    },
  ];
  return (
    <div className={cx("buy-rent")}>
      <div className={cx("buy-rent_heading")}>
        <h1>Rent or buy calculator</h1>
        <p>
          Is it the right time to buy? Try our rent or buy calculator to
          determine if buying or renting a home makes more financial sense.
        </p>
      </div>
      <div className={cx("buy-rent_inside")}>
        <div className={cx("buy-rent_inside_left")}>
          <div className={cx("form-input")}>
            <label>Desired Location</label>
            <Input
              type="text"
              placeholder="Los Angeles, CA"
              value=""
              className="add-post-form"
            />
            <p>
              Current loan balance plus cash-out.Home location helps accurately
              estimate today’s interest rate, tax rate, home insurance cost, and
              the average home price.
            </p>
          </div>
          <h3>Veteran Status</h3>
          <div className={cx("form-switch")}>
            <div className={cx("form-switch_inside")}>
              <p>I or my spouse served in the U.S. Military</p>
              <span>Veterans may qualify for 0% down payment</span>
            </div>
            <Switch />
          </div>
          <h2>Buying</h2>
          <div className={cx("form-input")}>
            <label>Down Payment</label>
            <Input
              type="text"
              placeholder="$   200,000"
              value=""
              className="add-post-form"
            />
          </div>
          <h2>Renting</h2>
          <div className={cx("form-input")}>
            <label>Desired Monthly Rent</label>
            <Input
              type="text"
              placeholder="$ 1,599,000"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Monthly Renters Insurance</label>
            <Input
              type="text"
              placeholder="$   200,000"
              value=""
              className="add-post-form"
            />
          </div>
          <h4>Show Advanced Option</h4>
          <div className={cx("buy-rent_inside_left_button")}>
            <Button modifier={ButtonModifier.PRIMARY}>Calculate</Button>
          </div>
        </div>
        <div className={cx("buy-rent_inside_right")}>
          <div className={cx("buy-rent_inside_right_inside")}>
            <h2>Calculators</h2>
            <div className={cx("buy-rent_inside_right_inside_container")}>
              {calculatorButtons.map((data, index) => (
                <SingleCalculatorButton data={data} key={`index_${index}`} />
              ))}
            </div>
          </div>
          <div className={cx("buy-rent_inside_right_inside")}>
            <h2>Veterans</h2>
            <div className={cx("buy-rent_inside_right_inside_container")}>
              {veteranButtons.map((data, index) => (
                <SingleCalculatorButton data={data} key={`index_${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOrRent;
