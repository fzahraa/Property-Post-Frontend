import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./AllProperties.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
import SingleCardItem from "@/src/components/atoms/SingleCardItem/SingleCardItem";
import Pagination from "@/src/components/atoms/Pagination/Pagination";
import ExportedImage from "next-image-export-optimizer";
import PropertyButton from "@/src/components/atoms/PropertyButton/PropertyButton";
import Property from "./Property";
const cx = createModuleStyleExtractor(styles);

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { Property },
  };
};

const AllProperties = () => {
  const { properties } = useLayout();
  const feature = true;

  const { currentPropertyButton } = useLayout();

  return (
    <div className={cx("all-properties")}>
      {currentPropertyButton === "map" && (
        <div className={cx("all-properties_map")}>
          <ExportedImage
            src="/images/map.png"
            alt="Large Image"
            width={1440}
            height={100}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      )}
      <div className={cx("all-properties_text")}>
        <h1>All Properties</h1>

        <div className={cx("all-properties_text_button")}>
          <PropertyButton />
        </div>
      </div>
      <div className={cx("all-properties_list")}>
        {properties.map((card, index) => (
          <SingleCardItem
            card={card}
            key={`index_${index}`}
            flag={feature}
            buttonFlag={true}
          />
        ))}
      </div>
      <div className={cx("all-properties_pagination")}>
        <Pagination />
      </div>
    </div>
  );
};

export default AllProperties;
