import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SingleRateTabItem.module.scss";
import ExportedImage from "next-image-export-optimizer";
import { Button, ButtonModifier } from "../Button";
const cx = createModuleStyleExtractor(styles);
export interface ISingleRateItem {
  image: string;
  imageLabel: string;

  rates?: {
    label: string;
    title: string;
  }[];
  list?: string[];
  sponsored?: string;
}

const SingleRateTabItem: FC<{ data: ISingleRateItem }> = ({ data }) => {
  const { image, imageLabel, rates, sponsored, list } = data;
  return (
    <div className={cx("single-item")}>
      <div className={cx("single-item_container")}>
        <div className={cx("single-item_inside")}>
          <div className={cx("single-item_inside_logo")}>
            <ExportedImage
              src={image}
              alt="Large Image"
              width={140}
              height={43}
            />
            <p>{imageLabel}</p>
          </div>
          {rates && (
            <div className={cx("single-item_inside_values")}>
              {rates?.map((rate, index) => (
                <div
                  className={cx("single-item_inside_values_container")}
                  key={`index_${index}`}
                >
                  <span>{rate.label}</span>
                  <p>
                    {rate.title}
                    {rate.label === "Payment" && <label>/month</label>}
                  </p>
                </div>
              ))}
              <div className={cx("single-item_inside_values_detail")}>
                <p>30-Year Fixed</p>
                <span>
                  Fees <p>$4,213</p>
                </span>
                <span>Includes 0.912 points ($2918)</span>
              </div>
            </div>
          )}
          {list && (
            <div className={cx("rate-list")}>
              {list?.map((list, index) => (
                <ul key={`index_${index}`}>
                  <li>{list}</li>
                </ul>
              ))}
            </div>
          )}
        </div>
        <div className={cx("single-item_container_button")}>
          <Button modifier={ButtonModifier.PRIMARY}>Update Lenders</Button>
        </div>
      </div>
      {sponsored && (
        <div className={cx("single-item_sponsered")}>
          <p>{sponsored}</p>
        </div>
      )}
    </div>
  );
};

export default SingleRateTabItem;
