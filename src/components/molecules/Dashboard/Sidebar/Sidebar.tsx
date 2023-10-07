import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./Sidebar.module.scss";
import DashboardIcon from "@/src/assets/svg/DashboardIcon";
import ListingIcon from "@/src/assets/svg/ListingIcon";
import DashboardAddIcon from "@/src/assets/svg/DashboardAddIcon";
import ProfileIcon from "@/src/assets/svg/ProfileIcon";
import BuisnessIcon from "@/src/assets/svg/BusinessIcon";
import LogoutIcon from "@/src/assets/svg/LogoutIcon";
import DashboardDownArrow from "@/src/assets/svg/DashboardDownArrow";
import SidebarMenuItem, {
  IMenuItem,
} from "@/src/components/atoms/SidebarMenuItem/SidebarMenuItem";
import { useLayout } from "@/src/components/hooks/useLayout";
import { useRouter } from "next/router";
const cx = createModuleStyleExtractor(styles);

const Sidebar = () => {
  const route = useRouter();
  const { currentTab } = useLayout();
  const dashboard = currentTab === "dashboard" ? "#FCFCFC" : "#000000";
  const listing = currentTab === "listing" ? "#FCFCFC" : "#000000";
  const property = currentTab === "addProperty" ? "#FCFCFC" : "#000000";
  const profile = currentTab === "profile" ? "#FCFCFC" : "#000000";
  const buisness = currentTab === "business" ? "#FCFCFC" : "#000000";
  const dropdown = currentTab === "listing" ? "#FCFCFC" : "#000000";
  const businessDropdown = currentTab === "business" ? "#FCFCFC" : "#000000";

  const Cards: IMenuItem[] = [
    {
      icon: <DashboardIcon color={dashboard} />,
      name: "Dashboard",
      tabId: "dashboard",
    },
    {
      icon: <ListingIcon color={listing} />,
      name: "My Listings",
      tabId: "subListingContent",
      dropdownIcon: <DashboardDownArrow color={dropdown} />,
      myListing: [
        {
          name: "Listings",
          tabId: "subListingContent",
        },
        {
          name: "Featured Ads",
          tabId: "features",
        },
      ],
    },
    {
      icon: <DashboardAddIcon color={property} />,
      name: "Add Property",
      tabId: "addProperty",
    },
    {
      icon: <ProfileIcon color={profile} />,
      name: "My Profile",
      tabId: "profile",
    },
    {
      icon: <BuisnessIcon color={buisness} />,
      name: "Business Profile",
      tabId: "business",
      dropdownIcon: <DashboardDownArrow color={businessDropdown} />,
      businessDropdown: [
        {
          name: "Ads Status",
          tabId: "adsStatus",
        },
        {
          name: "Payment Status",
          tabId: "paymentStatus",
        },
        {
          name: "Payment Method",
          tabId: "paymentMethod",
        },
      ],
    },
  ];

  const handleSubmit = () => {
    localStorage.removeItem("token");
    route.push("/auth/login");
  };
  return (
    <div className={cx(["sidebar"])}>
      <div className={cx("sidebar_container")}>
        <div className={cx("sidebar_container_top")}>
          {Cards.map((card, index) => (
            <SidebarMenuItem card={card} key={`index_${index}`} />
          ))}
        </div>
        <div
          className={cx(["sidebar_container_bottom"])}
          onClick={handleSubmit}
        >
          <span>
            <LogoutIcon />
          </span>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
