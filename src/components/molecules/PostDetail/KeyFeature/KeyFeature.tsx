import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./KeyFeature.module.scss";
import BedIcon from "@/src/assets/svg/BedIcon";
import BathIcon from "@/src/assets/svg/BathIcon";
import AreaIcon from "@/src/assets/svg/AreaIcon";
import BuildIcon from "@/src/assets/svg/BuildIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import PhoneIcon from "@/src/assets/svg/PhoneIcon";
import { ISingleCard } from "@/src/context/types";
const cx = createModuleStyleExtractor(styles);
export interface IPostDetailFeature {
  property?: ISingleCard;
}

const KeyFeature: FC<IPostDetailFeature> = ({ property }) => {
  const Features = [
    property?.type,
    property?.statusType,
    property?.installmentAvailable
      ? "Intallment Available"
      : "Installment Not Available",
    property?.propertyType,
    property?.features[0].featureName,
  ];
  return (
    <div className={cx("key-feature")}>
      <div className={cx("key-feature_heading")}>
        <h1>Key Features</h1>
      </div>
      <div className={cx("key-feature_feautre-list")}>
        {Features.map((feature, index) => (
          <span key={`index_${index}`}>{feature}</span>
        ))}
      </div>
      <div className={cx("key-feature_detail")}>
        <div className={cx("key-feature_detail_rent")}>
          <h3>Rent: </h3>
          <p>
            $ 50,000/<span>Month</span>
          </p>
        </div>
      </div>
      <div className={cx("key-feature_detail-list")}>
        <div className={cx("key-feature_detail-list_item")}>
          <span>
            <BedIcon />
          </span>
          <p>{property?.numberOfBedrooms} Bed</p>
        </div>
        <div className={cx("key-feature_detail-list_item")}>
          <span>
            <BathIcon />
          </span>
          <p>2 Bath</p>
        </div>
        <div className={cx("key-feature_detail-list_item")}>
          <span>
            <AreaIcon />
          </span>
          <p>{property?.area} Sq ft</p>
        </div>
        <div className={cx("key-feature_detail-list_item")}>
          <span>
            <BuildIcon />
          </span>
          <p>2020 Year Built</p>
        </div>
      </div>
      <div className={cx("key-feature_button")}>
        <Button modifier={ButtonModifier.PRIMARY}>
          <PhoneIcon />
          Get Estimate
        </Button>
        <Button modifier={ButtonModifier.TERIARY}>Get Estimate</Button>
      </div>
    </div>
  );
};

export default KeyFeature;
