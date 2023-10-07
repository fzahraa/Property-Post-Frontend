import React, { FC, useEffect } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SidebarMenuItem.module.scss";
import { tabs } from "../../Context/applyoutContext";
import { useLayout } from "../../hooks/useLayout";
const cx = createModuleStyleExtractor(styles);
export interface IMenuItem {
  icon?: React.ReactNode;
  name: string;
  tabId: tabs;
  dropdownIcon?: React.ReactNode;
  myListing?: {
    name: string;
    tabId: tabs;
  }[];
  businessDropdown?: {
    name: string;
    tabId: tabs;
  }[];
}

const SidebarMenuItem: FC<{ card: IMenuItem }> = ({ card }) => {
  const { icon, name, tabId, dropdownIcon, myListing, businessDropdown } = card;

  const { setCurrentTab, currentTab, setCurrentListing, setCurrentSubListing } =
    useLayout();

  const newClass = !myListing && currentTab === tabId ? "active" : "menu-item";

  return (
    <div className={cx([newClass])} onClick={() => setCurrentTab(tabId)}>
      <ul>
        <li>
          <span>{icon}</span>
          <p>{name}</p>

          <div className={cx("down-arrow")}>
            <span>{dropdownIcon}</span>
          </div>
        </li>
      </ul>
      {["listing", ...(myListing?.map((d) => d.tabId) || [])].includes(
        currentTab
      ) && (
        <div className={cx(["dropdown"])}>
          <div className={cx("dropdown_lists")}>
            {myListing?.map((item, index) => (
              <div
                className={cx([
                  currentTab === item.tabId
                    ? "active-dropdown"
                    : "dropdown_lists_list",
                ])}
                key={`index_${index}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentTab(item.tabId);
                  setCurrentListing("feature");
                  setCurrentSubListing("sublisting");
                }}
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {["business", ...(businessDropdown?.map((d) => d.tabId) || [])].includes(
        currentTab
      ) && (
        <div className={cx(["dropdown"])}>
          <div className={cx("dropdown_lists")}>
            {businessDropdown?.map((item, index) => (
              <div
                className={cx([
                  currentTab === item.tabId
                    ? "active-dropdown"
                    : "dropdown_lists_list",
                ])}
                key={`index_${index}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentTab(item.tabId);
                  setCurrentListing("feature");
                }}
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenuItem;
