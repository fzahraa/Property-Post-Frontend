import React, { FC, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./CardDetailItem.module.scss";
const cx = createModuleStyleExtractor(styles);
import RadioButton from "@/src/components/atoms/RadioButton/RadioButton";
import EditIcon from "@/src/assets/svg/EditIcon";
export interface ICardDetailItem {
  icon: React.ReactNode;
}

const CardDetailItem: FC<ICardDetailItem> = ({ icon }) => {
  const [isMaster, setIsMaster] = useState(false);

  const handleClick = () => {
    setIsMaster(!isMaster);
  };

  const IconColor = isMaster ? "#fff" : "#000";

  return (
    <div className={cx([isMaster ? "active-card" : "card-container"])}>
      <div className={cx("card-container_header")}>
        <h3>Credit Card</h3>
        <span onClick={handleClick}>
          <RadioButton className="credit-card" />
        </span>
      </div>
      <div className={cx("card-container_footer")}>
        <div className={cx("card-container_footer_inside")}>
          <span>{icon}</span>
          <p>Credit *******0959</p>
        </div>
        <span>
          <EditIcon color={IconColor} />
        </span>
      </div>
    </div>
  );
};

export default CardDetailItem;
