import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./MortgageCalculator.module.scss";
const cx = createModuleStyleExtractor(styles);
import MoreInfo from "@/src/assets/svg/moreInformation";
import DownArrow from "@/src/assets/svg/DownArrow";
import CloseCircularIcon from "@/src/assets/svg/CloseCircularIcon";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Input } from "@/src/components/atoms/Input";
import { CircularIcon } from "@/src/components/atoms/CircularIcon/CircularIcon";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import { useLayout } from "@/src/components/hooks/useLayout";
import MortgagePayment from "../MortgagePayment/MortgagePayment";
import MortgageLoan from "../MortgageLoan/MortgageLoan";

const MortgageCalculator = () => {
  const { currentMortgage, setCurrentMortgage } = useLayout();
  const marks = [
    {
      value: 0,
      label: "$ 1.27 M",
    },
    {
      value: 100,
      label: "$ 1.91 M",
    },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const downPayment = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  function textvalue(value: number) {
    return `${value}°C`;
  }

  const [isLoanType, setIsLoanType] = useState<boolean>(false);
  const loanType = [
    "10 - Years Fixed",
    "20 - Years Fixed",
    "30 - Years Fixed",
    "40 - Years Fixed",
  ];
  return (
    <div className={cx("mortgage")}>
      <h1>Mortgage Calculator</h1>
      <div className={cx("mortgage_inside")}>
        <div className={cx("mortgage_inside_left")}>
          <div className={cx("mortgage_inside_left_heading")}>
            <h3>
              Home Location
              <span>
                <MoreInfo />
              </span>
            </h3>
            <div className={cx("mortgage_inside_left_heading_input")}>
              <Input
                type="text"
                placeholder="90004, Los Angeles"
                value=""
                className="input-v2"
              />
              <span>
                <CloseCircularIcon />
              </span>
            </div>
          </div>
          <div className={cx("mortgage_inside_left_label")}>
            <h3>
              <CircularIcon backgroundColor="#009D9A" />
              Principle & Interest
              <span>
                <MoreInfo />
              </span>
            </h3>
            <p>$8024</p>
          </div>
          <div className={cx("mortgage_inside_left_inputs")}>
            <div className={cx("form-input")}>
              <label>Home Price</label>
              <Input
                type="text"
                placeholder="$ 1,599,000"
                value=""
                className="add-post-form"
              />
              <p>
                Estimated. closing cost (4%) : $63,960{" "}
                <span>
                  <MoreInfo />
                </span>
              </p>
            </div>
            <Box sx={{ width: "100%" }}>
              <Slider
                aria-label="Restricted values"
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                marks={marks}
                sx={{
                  width: "100%",
                  color: "#C5202F",
                }}
              />
            </Box>
          </div>
          <div className={cx("mortgage_inside_left_custom")}>
            <h2>
              Down Payment
              <span>
                <MoreInfo />
              </span>
            </h2>
            <div className={cx("mortgage_inside_left_custom_input")}>
              <div className={cx("mortgage_inside_left_custom_input_left")}>
                <Input
                  type="text"
                  placeholder="$ 1,599,000"
                  value=""
                  className="input-v2"
                />
              </div>
              <div className={cx("mortgage_inside_left_custom_input_right")}>
                <span>20%</span>
              </div>
            </div>
            <div className={cx("percentage-slider")}>
              <Box sx={{ width: "100%" }}>
                <Slider
                  aria-label="Restricted values"
                  getAriaValueText={textvalue}
                  valueLabelDisplay="auto"
                  marks={downPayment}
                  sx={{
                    width: "100%",
                    color: "#C5202F",
                  }}
                />
              </Box>
            </div>
          </div>
          <div className={cx("set-dropdown")}>
            <label>
              Loan Type
              <span>
                <MoreInfo />
              </span>
            </label>
            <div
              className={cx("dropdown")}
              onClick={() => setIsLoanType(!isLoanType)}
            >
              <p>30 - Years Fixed</p>
              <span>
                <DownArrow />
              </span>
              {isLoanType && <DropDown dropdown={loanType} />}
            </div>
          </div>
          <div className={cx("interst-rate")}>
            <label>
              Interest Rate
              <span>
                <MoreInfo />
              </span>
            </label>
            <div className={cx("interst-rate_inside")}>
              <Input
                type="text"
                placeholder="6.640  %"
                value=""
                className="add-post-form"
              />
              <span>View Today’s Rates</span>
            </div>
          </div>
          <div className={cx("mortgage-input")}>
            <label>
              <CircularIcon backgroundColor="#DB7C00" />
              Property Tax
              <span>
                <MoreInfo />
              </span>
            </label>
            <Input
              type="text"
              placeholder="$ 1,666"
              value=""
              className="add-post-form"
            />
            <p>Total tax/year (1.25% of home price): $19,992</p>
          </div>
          <div className={cx("mortgage-input")}>
            <div className={cx("mortgage-input_inside")}>
              <label>
                <CircularIcon backgroundColor="#5C76E8" />
                Home Insurance
                <span>
                  <MoreInfo />
                </span>
              </label>
              <p>Learn More</p>
            </div>

            <Input
              type="text"
              placeholder="$  400"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("mortgage-input")}>
            <label>
              <CircularIcon backgroundColor="#DD7099" />
              HOA Fees
              <span>
                <MoreInfo />
              </span>
            </label>

            <Input
              type="text"
              placeholder="$  0"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("mortgage-input")}>
            <label>
              <CircularIcon backgroundColor="#1356AD" />
              Mortgage Insurance
              <span>
                <MoreInfo />
              </span>
            </label>

            <Input
              type="text"
              placeholder="$  0"
              value=""
              className="add-post-form"
            />
            <p>$0 if download payment is 20%+</p>
          </div>
        </div>
        <div className={cx("mortgage_inside_right")}>
          <div className={cx("mortgage_inside_right_heading")}>
            <div
              className={cx([
                currentMortgage === "payment"
                  ? "active"
                  : "mortgage_inside_right_heading_left",
              ])}
              onClick={() => setCurrentMortgage("payment")}
            >
              <h2>Payment</h2>
            </div>
            <div
              className={cx([
                currentMortgage === "loan"
                  ? "active"
                  : "mortgage_inside_right_heading_right",
              ])}
              onClick={() => setCurrentMortgage("loan")}
            >
              <h2>Loan Amortization</h2>
            </div>
          </div>
          <div className={cx("mortgage_inside_right_content")}>
            {currentMortgage === "payment" && <MortgagePayment />}
            {currentMortgage === "loan" && <MortgageLoan />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
