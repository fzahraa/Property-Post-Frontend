import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./DashboardSingleItem.module.scss";
import ExportedImage from "next-image-export-optimizer";
const cx = createModuleStyleExtractor(styles);
export interface IDashboardItem {
  name: string;
  activeNumber: string;
  img: string;
}

const DashboardSingleItem: FC<{ card: IDashboardItem }> = ({ card }) => {
  const { name, activeNumber, img } = card;
  return (
    <div className={cx("single-item")}>
      <div className={cx("single-item_inside")}>
        <ExportedImage src={img} alt="Large Image" width={40} height={40} />
        <span>{activeNumber}</span>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default DashboardSingleItem;
