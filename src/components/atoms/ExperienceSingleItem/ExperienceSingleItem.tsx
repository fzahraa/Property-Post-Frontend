import { createModuleStyleExtractor } from "@/src/utils/css";
import { FC } from "react";
import styles from "./ExperienceSingleItem.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface IExperienceItem {
  title: string;
  label: string;
}

const ExperienceSingleItem: FC<{ card: IExperienceItem }> = ({ card }) => {
  const { title, label } = card;
  return (
    <div className={cx("expericnce-item")}>
      <div className={cx("expericnce-item_inside")}>
        <p>{label}</p>
      </div>
      <span>{title}</span>
    </div>
  );
};

export default ExperienceSingleItem;
