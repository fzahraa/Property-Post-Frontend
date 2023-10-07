import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PropertyButton.module.scss";
import { useLayout } from "../../hooks/useLayout";
import ListIcon from "@/src/assets/svg/ListIcon";
import ButtonMapIcon from "@/src/assets/svg/ButtonMapIcon";
const cx = createModuleStyleExtractor(styles);

const PropertyButton = () => {
  const { currentPropertyButton, setCurrentPropertyButton } = useLayout();

  const MapColor = currentPropertyButton === "map" ? "#ffffff" : "#000000";
  const ListColor = currentPropertyButton === "list" ? "#ffffff" : "#000000";
  return (
    <div className={cx("all-properties_text_inside")}>
      <div
        className={cx([
          currentPropertyButton === "list"
            ? "left-active"
            : "all-properties_text_inside_left",
        ])}
        onClick={() => setCurrentPropertyButton("list")}
      >
        <span>
          <ListIcon color={ListColor} />
        </span>
        <p>List</p>
      </div>
      <div
        className={cx([
          currentPropertyButton === "map"
            ? "right-active"
            : "all-properties_text_inside_right",
        ])}
        onClick={() => setCurrentPropertyButton("map")}
      >
        <span>
          <ButtonMapIcon color={MapColor} />
        </span>
        <p>Map</p>
      </div>
    </div>
  );
};

export default PropertyButton;
