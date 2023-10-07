import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./MortgageRates.module.scss";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import DownArrow from "@/src/assets/svg/DownArrow";
import { Input } from "@/src/components/atoms/Input";
import CloseCircularIcon from "@/src/assets/svg/CloseCircularIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import FormCheckbox from "@/src/components/atoms/FormCheckbox/FormCheckbox";
import { useLayout } from "@/src/components/hooks/useLayout";
import { mortgageRatesTab } from "@/src/components/Context/applyoutContext";
import SingleRateTabItem, {
  ISingleRateItem,
} from "@/src/components/atoms/SingleRateTabItem/SingleRateTabItem";
const cx = createModuleStyleExtractor(styles);
export interface IRateTabs {
  title: string;
  tabId: mortgageRatesTab;
}

export type loanType = "purchase" | "refinance";

const MortgageRates = () => {
  const [isLoanType, setIsLoanType] = useState<loanType>("purchase");
  const [isLoanTerm, setIsLoanTerm] = useState(false);
  const loanTerm = [
    "15 year Fixed",
    "20 year Fixed",
    "25 year Fixed",
    "30 year Fixed",
  ];
  const [isCredit, setIsCredit] = useState(false);
  const creditScore = [
    "15 year Fixed",
    "20 year Fixed",
    "25 year Fixed",
    "30 year Fixed",
  ];
  const { currentRateTab, setCurrentRateTab } = useLayout();

  const tabs: IRateTabs[] = [
    { title: "APR", tabId: "apr" },
    { title: "Monthly Payment", tabId: "monthly" },
    { title: "Rate", tabId: "rate" },
    { title: "Fees", tabId: "fee" },
  ];

  const SingleTabItem: ISingleRateItem[] = [
    {
      image: "/images/loanLock.png",
      imageLabel: "NMLS #237507",
      rates: [
        {
          label: "APR",
          title: "5.745%",
        },
        {
          label: "Payment",
          title: "$1843",
        },
        {
          label: "Rate",
          title: "5.625 %",
        },
      ],
      sponsored: "Sponsored",
    },
    {
      image: "/images/embrace.png",
      imageLabel: "NMLS #2184",
      rates: [
        {
          label: "APR",
          title: "5.956%",
        },
        {
          label: "Payment",
          title: "$1843",
        },
        {
          label: "Rate",
          title: "5.625 %",
        },
      ],
    },
    {
      image: "/images/ameri.png",
      imageLabel: "NMLS #2184",
      rates: [
        {
          label: "APR",
          title: "5.745%",
        },
        {
          label: "Payment",
          title: "$1843",
        },
        {
          label: "Rate",
          title: "5.875 %",
        },
      ],
    },
    {
      image: "/images/eligibility.png",
      imageLabel: "NMLS #2184",
      list: [
        "Check eligibility with dozens of top lenders",
        "Discover your home loan options",
        "Match with VA, USDA, FHA & conventional lenders",
        "See if you qualify for low—or no—down payment!",
      ],
    },
    {
      image: "/images/eligibility.png",
      imageLabel: "NMLS #2184",
      list: [
        "Check eligibility with dozens of top lenders",
        "Discover your home loan options",
        "Match with VA, USDA, FHA & conventional lenders",
        "See if you qualify for low—or no—down payment!",
      ],
    },
  ];
  return (
    <div className={cx("rates")}>
      <div className={cx("rates_heading")}>
        <h1>Mortage Rates</h1>
        <p>Get personalized rate quotes based on your home loan criteria.</p>
      </div>

      <div className={cx("main-container")}>
        <div className={cx("fillter-container")}>
          <div className={cx("rates_fillter")}>
            <div className={cx("fillter-cover")}>
              <label>Loan Type</label>
              <div className={cx("button-fillter")}>
                <div
                  className={cx([
                    isLoanType === "purchase"
                      ? "active-left"
                      : "button-fillter_left",
                  ])}
                  onClick={() => setIsLoanType("purchase")}
                >
                  <p>Purchase</p>
                </div>
                <div
                  className={cx([
                    isLoanType === "refinance"
                      ? "active-right"
                      : "button-fillter_right",
                  ])}
                  onClick={() => setIsLoanType("refinance")}
                >
                  <p>Refinance</p>
                </div>
              </div>
            </div>
            <div className={cx("fillter-cover")}>
              <label>Loan Term</label>
              <div
                className={cx("dropdown")}
                onClick={() => setIsLoanTerm(!isLoanTerm)}
              >
                <p>20 year Fixed</p>
                <span>
                  <DownArrow />
                </span>
                {isLoanTerm && <DropDown dropdown={loanTerm} />}
              </div>
            </div>
            <div className={cx("fillter-cover")}>
              <label>Location</label>
              <div className={cx("fillter-cover_input")}>
                <Input
                  type="text"
                  placeholder="Los Angeles"
                  value=""
                  className="input-v2"
                />
                <span>
                  <CloseCircularIcon />
                </span>
              </div>
            </div>
            <div className={cx("fillter-cover")}>
              <label>Purchase Price</label>
              <Input
                type="text"
                placeholder="$ 400,000"
                value=""
                className="mortgage-fillter"
              />
            </div>
            <div className={cx("fillter-cover")}>
              <label>Down Payment</label>
              <div className={cx("fillter-cover_inside")}>
                <div className={cx("fillter-cover_inside_left")}>
                  <Input
                    type="text"
                    placeholder="$ 80,000"
                    value=""
                    className="mortgage-fillter-percentage"
                  />
                </div>
                <div className={cx("fillter-cover_inside_right")}>
                  <Input
                    type="text"
                    placeholder="20  %"
                    value=""
                    className="mortgage-fillter-percentage"
                  />
                </div>
              </div>
            </div>
            <div className={cx("fillter-cover")}>
              <label>Credit Score</label>
              <div
                className={cx("dropdown")}
                onClick={() => setIsCredit(!isCredit)}
              >
                <p>740 +</p>
                <span>
                  <DownArrow />
                </span>
                {isCredit && <DropDown dropdown={creditScore} />}
              </div>
            </div>
          </div>
          <div className={cx("fillter-container_button")}>
            <Button modifier={ButtonModifier.PRIMARY}>Update Lenders</Button>
          </div>
        </div>
        {/* <div className={cx("main-container_footer")}>
          <FormCheckbox label="I or my spouse has served in the U.S. Military" />
          <span>Show More Options</span>
        </div> */}
      </div>

      <div className={cx("rates_tab")}>
        <div className={cx("rates_tab_header")}>
          <h3>Sort By</h3>
          <div className={cx("rates_tab_header_tabs")}>
            {tabs.map((tab, index) => (
              <p
                key={`index_${index}`}
                className={cx([
                  currentRateTab === tab.tabId ? "active-tab" : "",
                ])}
                onClick={() => setCurrentRateTab(tab.tabId)}
              >
                {tab.title}
              </p>
            ))}
          </div>
        </div>
        <div className={cx("rates_tab_veteran")}>
          <p>Veterans:</p>
          <span>Get Pre-Approved for a $0 Down VA Home Loan</span>
        </div>
        <div className={cx("rates_tab_content")}>
          {SingleTabItem.map((data, index) => (
            <SingleRateTabItem data={data} key={`index${index}`} />
          ))}
        </div>
        <div className={cx("rates_tab_footer")}>
          <p>
            Data provided by icanbuy. Payments do not include amounts for taxes
            and insurance premiums.
            <span> View more information on rates and product details.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageRates;
