import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PreApprovedWindow.module.scss";
import { useLayout } from "../../hooks/useLayout";
const cx = createModuleStyleExtractor(styles);
import { preApproved } from "../../Context/applyoutContext";
import PreApprovedTab from "./PreApprovedTab/PreApprovedTab";
import PreApprovedQuestions from "./PreApprovedQuestion/PreApprovedQuestion";

const PreApprovedWindow = () => {
  const headerTabs: {
    name: string;
    tabId: preApproved;
  }[] = [
    { name: "Home Purchase", tabId: "homePurchase" },
    { name: "Refinance", tabId: "refinance" },
    { name: "Home Equity", tabId: "homeEquity" },
  ];
  const {
    currentApproved,
    setCurrentApproved,
    currentSwitchTab,
    setCurrentSwitchTab,
  } = useLayout();

  return (
    <div className={cx("PreApproved")}>
      {currentSwitchTab === "tabs" && (
        <div className={cx("PreApproved_tabs")}>
          <div className={cx("PreApproved_tabs_header")}>
            <ul>
              {headerTabs.map((tab, index) => (
                <li
                  key={`index_${index}`}
                  onClick={() => setCurrentApproved(tab.tabId)}
                  className={cx([
                    currentApproved === tab.tabId ? "header-tab-active" : "",
                  ])}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("PreApproved_tabs_content")}>
            {currentApproved === "homePurchase" && (
              <PreApprovedTab
                title="Get Pre-Approved"
                subTitle="Connect with a lender who can help you with pre-approval."
                setIstab={setCurrentSwitchTab}
              />
            )}
            {currentApproved === "refinance" && (
              <PreApprovedTab
                title="Refinance Your Home"
                subTitle="Connect with a lender who can help you with pre-approval."
                setIstab={setCurrentSwitchTab}
              />
            )}
            {currentApproved === "homeEquity" && (
              <PreApprovedTab
                title="Find Home Equity Offers"
                subTitle="Connect with a lender who can help you with pre-approval."
                setIstab={setCurrentSwitchTab}
              />
            )}
          </div>
        </div>
      )}
      {currentSwitchTab === "questions" && <PreApprovedQuestions />}
    </div>
  );
};

export default PreApprovedWindow;
