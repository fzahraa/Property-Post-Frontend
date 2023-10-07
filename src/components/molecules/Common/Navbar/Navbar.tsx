import { useLayout } from "@/src/components/hooks/useLayout";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import DownArrow from "@/src/assets/svg/DownArrow";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./Navbar.module.scss";
import { IMenuType } from "@/src/context/types";
const cx = createModuleStyleExtractor(styles);
export interface INavbar {
  active?: boolean;
  setActive: (flag: boolean) => void;
}

const Navbar: FC<INavbar> = ({ active, setActive }) => {
  const Menu: IMenuType[] = [
    {
      id: 1,
      name: "Buy",
      to: "/",
      titleOne: "Homes for Sale",
      tabId: "buy",
      listOne: [
        { label: "Homes for Sale", to: "", tabId: "buy" },
        { label: "New Home Construction", to: "", tabId: "buy" },
        { label: "Foreclosure Homes", to: "", tabId: "buy" },
      ],
      titleTwo: "Homes Values",
      listTwo: [
        { label: "Housing Market", to: "", tabId: "buy" },
        { label: "Recently Sold Homes", to: "", tabId: "buy" },
        { label: "Property Records", to: "", tabId: "buy" },
      ],
      titleThree: "Homes Values",
      listThree: [
        { label: "Home Buying Checklist", to: "", tabId: "buy" },
        {
          label:
            "Home Buyers Reveal: ‘ What I Wish I Had Known Before Buying My First Home",
          to: "",
          tabId: "buy",
        },
        {
          label: "First-Time Home Buyer Resource Center",
          to: "",
          tabId: "buy",
        },
        { label: "More Home Buying Insights", to: "", tabId: "buy" },
        { label: "Success Stories", to: "", tabId: "buy" },
      ],
    },
    {
      id: 2,
      name: "Sell",
      tabId: "sell",
      to: "",
      titleOne: "Home Selling Tools",
      listOne: [
        {
          label: "Find the right selling option for you",
          to: "",
          tabId: "sell",
        },
        { label: "Compare top agents with UpNest", to: "", tabId: "sell" },
        { label: "See what your home is worth", to: "", tabId: "sell" },
      ],
      titleTwo: "Homes Values",
      listTwo: [
        { label: "Complete Guide to Selling Your Home", to: "", tabId: "sell" },
        { label: "Should I sel my home now?", to: "", tabId: "sell" },
        { label: "How much is my home worth?", to: "", tabId: "sell" },
        { label: "How should I sell my home?", to: "", tabId: "sell" },
        { label: "How to select an agent", to: "", tabId: "sell" },
        { label: "How to Prepare your home for sale", to: "", tabId: "sell" },
        { label: "See more home selling Insights", to: "", tabId: "sell" },
      ],
      titleThree: "Recently Sold",
      listThree: [{ label: "Recently sold homes", to: "", tabId: "sell" }],
    },
    {
      id: 3,
      name: "Rent",
      to: "",
      tabId: "rent",
    },
    {
      id: 4,
      name: "Mortgage",
      to: "",
      tabId: "mortgage",
      titleOne: "Mortgage Rates",
      listOne: [
        {
          label: "Get Pre-Approved",
          to: "/mortgage/pre-approved",
          tabId: "mortgage",
        },
        { label: "Mortgage Rates", to: "/mortgage/rates", tabId: "mortgage" },
      ],
      titleTwo: "Calculators",
      listTwo: [
        {
          label: "Mortgage Calculator",
          to: "mortgage/mortgage-calculator",
          tabId: "mortgage",
        },
        {
          label: "Refinance Calculator",
          to: "/mortgage/refinance-calculator",
          tabId: "mortgage",
        },
        {
          label: "Rent Vs Buy",
          to: "/mortgage/rent-or-buy-calculator",
          tabId: "mortgage",
        },
      ],
      titleThree: "Financial Advice",
      listThree: [
        { label: "Mortgage Guide", to: "/mortgage/guide", tabId: "mortgage" },
      ],
    },
    {
      id: 5,
      name: "Contact Us",
      to: "",
      tabId: "contact",
    },
  ];

  const { currentMenuTab, setCurrentMenuTab } = useLayout();
  const route = useRouter();
  const [mobileDropdown, setMobileDropDown] = useState(false);

  return (
    <div
      className={cx([
        ...(active
          ? ["navbar-container-after", "navbar"]
          : ["navbar", "navbar-container-before"]),
      ])}
    >
      <ul>
        {Menu.map((item, index) => (
          <>
            <li
              key={`index_${index}`}
              className={cx([
                currentMenuTab === item.tabId ? "active" : "list",
              ])}
            >
              <p
                onClick={() => {
                  route.push(`/${item.to}`);
                  setCurrentMenuTab(item.tabId);
                  setActive(false);
                }}
              >
                {item.name}
              </p>
              {item.titleOne && item.titleTwo && item.listThree && (
                <span
                  className={cx([
                    mobileDropdown
                      ? "active-mobile-dropdown"
                      : "mobile-dropdown",
                  ])}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileDropDown(!mobileDropdown);
                  }}
                >
                  <DownArrow />
                </span>
              )}
            </li>
            {item.titleOne && item.listOne && (
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
                            setActive(false);
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
                            setActive(false);
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
                            setActive(false);
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
              // <NavbarDropdown item={item} mobileDropdown={mobileDropdown} />
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
