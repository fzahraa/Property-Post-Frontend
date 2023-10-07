import React, { FC, useEffect, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./DashboardContent.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
import MainDashboard from "../MainDashboard/MainDashboard";
import AddProperty from "../AddProperty/AddProperty";
import Profile from "../Profile/Profile";
import BusinessProfile from "../BusinessProfile/BusinessProfile";
import FeatureContent from "../FeatureContent/FeatureContent";
import BusinessPayment from "../BusinessProfile/BusinessPayment/BusinessPayment";
import BusinessAdsStatus from "../BusinessAdsStatus/BusinessAdsStatus";
import BusinessPaymentMethod from "../BusinessPaymentMethod/BusinessPaymentMethod";
import { MobileMenu } from "@/src/assets/svg/MobileMenu";
import SublistingContent from "../SublistingContent/SublistingContent";
const cx = createModuleStyleExtractor(styles);
export interface IDashboardMenu {
  setIsActive: (flag: boolean) => void;
  isActive: boolean;
} 
const DashboardContent: FC<IDashboardMenu> = ({ setIsActive, isActive }) => {
  const { currentTab } = useLayout();
  const { properties, setProperties} = useLayout();
  useEffect(() => {
     fetch("http://localhost:3000/property/getProperties")
       .then((response) => response.json())
       .then((data) => setProperties(data))
       .catch((error) => console.log(error));
   }, [setProperties]);
   
  return (
    <div className={cx("dashboard-content")}>
      <div className={cx("dashboard-content_btn")}>
        <span onClick={() => setIsActive(!isActive)}>
          {isActive ? "" : <MobileMenu />}
        </span>
      </div>

      {currentTab === "dashboard" && <MainDashboard />}
      {currentTab === "addProperty" && <AddProperty />}
      {currentTab === "profile" && <Profile />}
      {currentTab === "business" && <BusinessProfile />}
      {currentTab === "subListingContent" && <SublistingContent />}
      {currentTab === "features" && <FeatureContent />}
      {currentTab === "paymentStatus" && <BusinessPayment />}
      {currentTab === "adsStatus" && <BusinessAdsStatus />}
      {currentTab === "paymentMethod" && <BusinessPaymentMethod />}
    </div>
  );
};

export default DashboardContent;
