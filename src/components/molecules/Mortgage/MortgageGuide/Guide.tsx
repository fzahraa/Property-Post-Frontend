import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./Guide.module.scss";
const cx = createModuleStyleExtractor(styles);

const GuideHome = () => {
  return (
    <div className={cx("guide")}>
      <div className={cx("guide_inside")}>
        <h1>The Stress-Free Guide to Getting a Mortgage</h1>
        <p>Everything you need to know about paying for your next home</p>
      </div>
    </div>
  );
};

export default GuideHome;
