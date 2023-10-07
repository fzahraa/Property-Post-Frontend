import React, {useEffect} from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SubListing.module.scss";
import SingleCardItem from "@/src/components/atoms/SingleCardItem/SingleCardItem";
import ListingHeading from "@/src/components/atoms/ListingHeading/ListingHeading";
import { useLayout } from "@/src/components/hooks/useLayout";
import allProperties from "../../AllProperties/AllProperties/Property";
const cx = createModuleStyleExtractor(styles);

const SubListing = () => {
  const { properties} = useLayout();
  const featuredProperties = properties.filter(
    (property) => property.listingType === "General"
  );

  return (
    <div className={cx("sub-listing")}>
      <ListingHeading title="My Recent Listing" subTitle="View All Listing" />
      <div className={cx("sub-listing_inside")}>
        {featuredProperties.map((card, index) => (
          <SingleCardItem
            card={card}
            key={`index_${index}`}
            flag={true}
            options={true}
            label={false}
            buttonFlag={false}
          />
        ))}
      </div>
    </div>
  );
};

export default SubListing;
