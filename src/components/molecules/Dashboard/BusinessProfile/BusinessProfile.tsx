import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./BusinessProfile.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
import BusinessProfileForm from "./BusinessProfileForm/BusinessProfileForm";
import BusinessPlan from "./BusinessPlan/BusinessPlan";
import BusinessPayment from "./BusinessPayment/BusinessPayment";
const cx = createModuleStyleExtractor(styles);

const BusinessProfile = () => {
  const { currentBusiness } = useLayout();
  return (
    <div>
      {currentBusiness === "form" && <BusinessProfileForm />}
      {currentBusiness === "plan" && <BusinessPlan />}
    </div>
  );
};

export default BusinessProfile;
