import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./ProgressBar.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
const cx = createModuleStyleExtractor(styles);

const ProgressBar = () => {
  const { currentFeatured } = useLayout();

  return (
    <>
      <div className={cx("progress-bar_number")}>
        <span>
          {currentFeatured === "detail" && 1}
          {currentFeatured === "paymentPlan" && 2}
          {currentFeatured === "paymentMethod" && 3}
          {currentFeatured === "submit" && 4}
        </span>
        /<span>4</span>
      </div>

      <div className={cx("progress-bar")}>
        <div className={cx("progress-bar_inside")}>
          <div
            className={cx([
              currentFeatured === "detail"
                ? "active-inside"
                : "progress-bar_inside1",
            ])}
          ></div>
          <div
            className={cx([
              currentFeatured === "paymentPlan"
                ? "complete-active"
                : "progress-bar_inside1",
            ])}
          ></div>
          <div
            className={cx([
              currentFeatured === "paymentMethod"
                ? "complete-active"
                : "progress-bar_inside1",
            ])}
          ></div>
          <div
            className={cx([
              currentFeatured === "submit"
                ? "complete-active"
                : "progress-bar_inside1",
            ])}
          ></div>
        </div>
        <div className={cx("progress-bar_inside")}>
          <div
            className={cx([
              currentFeatured === "paymentPlan"
                ? "active-inside"
                : "progress-bar_inside1",
            ])}
          ></div>
          <div
            className={cx([
              currentFeatured === "paymentMethod"
                ? "complete-active"
                : "progress-bar_inside1",
            ])}
          ></div>
          <div
            className={cx([
              currentFeatured === "submit"
                ? "complete-active"
                : "progress-bar_inside1",
            ])}
          ></div>
        </div>
        <div className={cx("progress-bar_inside")}>
          <div
            className={cx([
              currentFeatured === "paymentMethod"
                ? "active-inside"
                : "progress-bar_inside1",
            ])}
          ></div>
          <div
            className={cx([
              currentFeatured === "submit"
                ? "complete-active"
                : "progress-bar_inside1",
            ])}
          ></div>
        </div>
        <div className={cx("progress-bar_inside")}>
          <div
            className={cx([
              currentFeatured === "submit"
                ? "complete-active"
                : "progress-bar_inside1",
            ])}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
