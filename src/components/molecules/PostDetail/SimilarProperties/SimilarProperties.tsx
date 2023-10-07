import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SimilarProperties.module.scss";
import PropertyButton from "@/src/components/atoms/PropertyButton/PropertyButton";
import SingleCardItem from "@/src/components/atoms/SingleCardItem/SingleCardItem";
import Pagination from "@/src/components/atoms/Pagination/Pagination";
import { useLayout } from "@/src/components/hooks/useLayout";
const cx = createModuleStyleExtractor(styles);

const SimilarProperties = () => {
  const { properties } = useLayout();
  const feature = true;
  return (
    <div className={cx("similar-properties")}>
      <div className={cx("similar-properties_text")}>
        <h1>Similar Properties</h1>

        <div className={cx("similar-properties_text_button")}>
          <PropertyButton />
        </div>
      </div>
      <div className={cx("similar-properties_list")}>
        {properties.slice(0, 9).map((card, index) => (
          <SingleCardItem card={card} key={`index_${index}`} flag={feature} />
        ))}
      </div>
      <div className={cx("similar-properties_pagination")}>
        <Pagination />
      </div>
    </div>
  );
};

export default SimilarProperties;
