import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import React from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./FindNow.module.scss";
import dynamic from "next/dynamic";
const cx = createModuleStyleExtractor(styles);

const FindNow = () => {
  return (
    <div className={cx("find-now")}>
      <div className={cx("find-now_left")}>
        <p>Find Home with Us</p>
        <h1>Get Your Dream Home With US</h1>
        <div className={cx("find-now_left_button")}>
          <Button modifier={ButtonModifier.PRIMARY}>Find Now</Button>
        </div>
      </div>
      <div className={cx("find-now_right")}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=YVT7fN6hFcY"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default FindNow;
