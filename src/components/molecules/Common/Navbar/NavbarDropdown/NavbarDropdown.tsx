import { useLayout } from "@/src/components/hooks/useLayout";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "../../Navbar/Navbar.module.scss";
const cx = createModuleStyleExtractor(styles);
import { IMenuType } from "@/src/context/types";
export interface INavbarDropdown {
  mobileDropdown: boolean;
  // setMobileDropDown: (flag: boolean) => void;
}

const NavbarDropdown: FC<{
  item: IMenuType;
  mobileDropdown: any;
}> = ({ item, mobileDropdown }) => {
  const { currentMenuTab, setCurrentMenuTab } = useLayout();
  const route = useRouter();
  return (
    <div
      className={cx([
        mobileDropdown ? "mobile-navbar-dropdown" : "navbar-dropdown",
      ])}
    >
      <div className={cx("navbar-dropdown_inside")}>
        <div className={cx("navbar-dropdown_inside_left")}>
          <h3>{item.titleOne}</h3>

          <div className={cx("navbar-dropdown_inside_list")}>
            {item.listOne?.map((list, index) => (
              <p
                onClick={() => {
                  route.push(`/${list.to}`);
                  setCurrentMenuTab(list.tabId);
                  // setActive(false);
                }}
                key={`index_${index}`}
              >
                {list?.label}
              </p>
            ))}
          </div>
        </div>
        <div className={cx("navbar-dropdown_inside_center")}>
          <h3>{item.titleTwo}</h3>

          <div className={cx("navbar-dropdown_inside_list")}>
            {item.listTwo?.map((list, index) => (
              <p
                onClick={() => {
                  route.push(`/${list.to}`);
                  setCurrentMenuTab(list.tabId);
                  // setActive(false);
                }}
                key={`index_${index}`}
              >
                {list.label}
              </p>
            ))}
          </div>
        </div>
        <div className={cx("navbar-dropdown_inside_right")}>
          <h3>{item.titleThree}</h3>

          <div className={cx("navbar-dropdown_inside_list")}>
            {item.listThree?.map((list, index) => (
              <p
                onClick={() => {
                  route.push(`/${list.to}`);
                  setCurrentMenuTab(list.tabId);
                  // setActive(false);
                }}
                key={`index_${index}`}
              >
                {list.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;
