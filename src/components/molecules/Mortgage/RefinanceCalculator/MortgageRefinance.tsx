import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./MortgageRefinance.module.scss";
import { Input } from "@/src/components/atoms/Input";
import CloseCircularIcon from "@/src/assets/svg/CloseCircularIcon";
import DownArrow from "@/src/assets/svg/DownArrow";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import RadioButton from "@/src/components/atoms/RadioButton/RadioButton";
import SaquareCheckbox from "@/src/components/atoms/Checkbox/Checkbox";
import SingleCalculatorButton from "@/src/components/atoms/SingleCalculatorButton/SingleCalculatorButton";
const cx = createModuleStyleExtractor(styles);

const MortgageRefinance = () => {
  const [isTerm, setIsTerm] = useState(false);
  const Terms = ["5 year", "10 year", "15 year", "20 year"];
  const [isNewLoanTerm, setIsNewLoanTerm] = useState(false);
  const [isYear, setIsYear] = useState(false);
  const Years = ["2017", "2018", "2019", "2020", "2021", "2022"];
  const [isMonth, setIsMonth] = useState(false);
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

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
    <div className={cx("refinance")}>
      <div className={cx("refinance_heading")}>
        <h1>Refinance Calculator</h1>
        <p>
          Is it the right time to refinance? Try our calculator to see if
          refinancing will save you money and to better understand when to
          refinance your home.
        </p>
      </div>
      <div className={cx("refinance_container")}>
        <div className={cx("refinance_container_left")}>
          <h2>Current Loan</h2>
          <div className={cx("refinance_container_left_inside")}>
            <div className={cx("form-input")}>
              <label>Home Location</label>
              <div className={cx("group-input")}>
                <Input
                  type="text"
                  placeholder="Los Angeles, CA"
                  value=""
                  className="input-v2"
                />
                <span>
                  <CloseCircularIcon />
                </span>
              </div>
            </div>

            <div className={cx("form-input")}>
              <label>Original Amount</label>
              <Input
                type="text"
                placeholder="$   200,000"
                value=""
                className="add-post-form"
              />
            </div>

            <div className={cx("two-col-grid")}>
              <div className={cx("form-input")}>
                <label>Term</label>

                <div
                  className={cx("dropdown")}
                  onClick={() => setIsTerm(!isTerm)}
                >
                  <Input
                    type="text"
                    placeholder="Type to search"
                    value=""
                    className="dropdown-search"
                  />
                  <span>
                    <DownArrow />
                  </span>
                  {isTerm && <DropDown dropdown={Terms} />}
                </div>
              </div>
              <div className={cx("form-input")}>
                <label>Interest Rate</label>
                <div className={cx("form-input_inside")}>
                  <p>4750 %</p>
                </div>
              </div>
            </div>
            <div className={cx("two-col-grid")}>
              <div className={cx("form-input")}>
                <label>Month Loan Begin</label>

                <div
                  className={cx("dropdown")}
                  onClick={() => setIsMonth(!isMonth)}
                >
                  <p>Select Option</p>
                  <span>
                    <DownArrow />
                  </span>
                  {isMonth && <DropDown dropdown={Months} />}
                </div>
              </div>
              <div className={cx("form-input")}>
                <label>Year Loan Begin</label>

                <div
                  className={cx("dropdown")}
                  onClick={() => setIsYear(!isYear)}
                >
                  <Input
                    type="text"
                    placeholder="Type to search"
                    value=""
                    className="dropdown-search"
                  />
                  <span>
                    <DownArrow />
                  </span>
                  {isYear && <DropDown dropdown={Years} />}
                </div>
              </div>
            </div>
            <div className={cx("form-input")}>
              <label>Balance</label>
              <Input
                type="text"
                placeholder="$ 182,196"
                value=""
                className="add-post-form"
              />
            </div>
          </div>
          <div className={cx("refinance_container_left_inside")}>
            <div className={cx("left-container-heading")}>
              <h2>New Loan</h2>
              <div className={cx("left-container-heading_inside")}>
                <div className={cx("left-container-heading_inside_top")}>
                  <p>Amount</p>
                  <p>$ 182,196</p>
                </div>
                <span>Current loan balance plus cash-out.</span>
              </div>
            </div>
            <div className={cx("form-input")}>
              <label>
                Cash Out
                <span>Optional</span>
              </label>
              <Input
                type="text"
                placeholder="$   0"
                value=""
                className="add-post-form"
              />
              <h3>The amount of additional money you want to take out.</h3>
            </div>
            <div className={cx("two-col-grid")}>
              <div className={cx("form-input")}>
                <label>Term</label>

                <div
                  className={cx("dropdown")}
                  onClick={() => setIsNewLoanTerm(!isNewLoanTerm)}
                >
                  <Input
                    type="text"
                    placeholder="Type to search"
                    value=""
                    className="dropdown-search"
                  />
                  <span>
                    <DownArrow />
                  </span>
                  {isNewLoanTerm && <DropDown dropdown={Terms} />}
                </div>
              </div>
              <div className={cx("form-input")}>
                <label>Interest Rate</label>
                <div className={cx("form-input_inside")}>
                  <p>4750 %</p>
                </div>
              </div>
            </div>

            <div className={cx("refinance-cost")}>
              <label>Refiance Costs</label>
              <div className={cx("refinance-cost_radio")}>
                <div className={cx("refinance-cost_radio_inside")}>
                  <RadioButton className="mortgage-refinance" />
                  <label>Refiance Costs</label>
                </div>
                <div className={cx("refinance-cost_radio_inside")}>
                  <RadioButton className="mortgage-refinance" />
                  <label>Points</label>
                </div>
              </div>
              <Input
                type="text"
                placeholder="$   3,654"
                value=""
                className="add-post-form"
              />
              <p>Estimated closing costs.</p>
              <div className={cx("refinance-cost_check-box")}>
                <SaquareCheckbox />
                <label>Roll free into new loan</label>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("refinance_container_right")}>
          <div className={cx("refinance_container_right_inside")}>
            <h2>Calculators</h2>

            {calculatorButtons.map((data, index) => (
              <SingleCalculatorButton data={data} key={`index_${index}`} />
            ))}
          </div>
          <div className={cx("refinance_container_right_inside")}>
            <h2>Veterans</h2>

            {veteranButtons.map((data, index) => (
              <SingleCalculatorButton data={data} key={`index_${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageRefinance;
