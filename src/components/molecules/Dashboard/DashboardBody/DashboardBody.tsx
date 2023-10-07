import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./DashboardBody.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import DashboardContent from "../DashboardContent/DashboardContent";
const cx = createModuleStyleExtractor(styles);

const DashboardBody = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={cx("dashboard-body")}>
      <div
        className={cx([
          ...(isActive
            ? ["sidebar-after", "sidebar-after-background"]
            : ["sidebar", "sidebar-before"]),
        ])}
        onClick={() => setIsActive(false)}
      >
        <Sidebar />
      </div>
      <div className={cx("dashboard-content")}>
        <DashboardContent setIsActive={setIsActive} isActive={isActive} />
      </div>
    </div>
  );
};

export default DashboardBody;
