import React, { useEffect, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./FeatureContent.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
import DashboardFeature from "../DashboardFeature/DashboardFeature";
import AddFeatureProperty from "../AddFeatureProperty/AddFeatureProperty";
import DashboardPostForm from "../DashboardPostForm/DashboardPostForm";
import EditPost from "../EditPost/EditPost";
const cx = createModuleStyleExtractor(styles);

const FeatureContent = () => {
  const { currentListing } = useLayout();

  // useEffect(() => {
  //   window.location.reload();
  // }, [currentListing === "feature"]);

  return (
    <div className={cx("feature-content")}>
      {currentListing === "edit" && (
        <EditPost label="Edit Details" flag={false} />
      )}

      {currentListing === "feature" && <DashboardFeature />}
      {currentListing === "new" && <AddFeatureProperty />}
    </div>
  );
};

export default FeatureContent;
