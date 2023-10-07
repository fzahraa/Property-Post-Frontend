import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./DashboardFeature.module.scss";
import SingleCardItem from "@/src/components/atoms/SingleCardItem/SingleCardItem";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { useLayout } from "@/src/components/hooks/useLayout";
const cx = createModuleStyleExtractor(styles);

const DashboardFeature = () => {
  const { setCurrentListing, properties } = useLayout();
  const featuredProperties = properties.filter(
    (property) => property.listingType === "Featured"
  );

  return (
    <div className={cx("features")}>
      <div className={cx("features_heading")}>
        <h1>Featured Listings</h1>
        <span>View All Listings</span>
        <div className={cx("features_heading_button")}>
          <Button
            modifier={ButtonModifier.PRIMARY}
            onClick={() => setCurrentListing("new")}
          >
            Add Featured Property
          </Button>
        </div>
      </div>
      <div className={cx("features_inside")}>
        {featuredProperties.map((property, index) => (
          <SingleCardItem
            card={property}
            key={`index_${index}`}
            flag={true}
            options={true}
            label={false}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardFeature;
