import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PreApprovedTab.module.scss";
import ExportedImage from "next-image-export-optimizer";
const cx = createModuleStyleExtractor(styles);
import { HomepurchaseTab } from "@/src/components/Context/applyoutContext";
export interface IPreApprovedTab {
  title: string;
  subTitle: string;
  setIstab: (flag: HomepurchaseTab) => void;
}

const PreApprovedTab: FC<IPreApprovedTab> = ({ title, subTitle, setIstab }) => {
  const preApprovedButtons = [
    {
      label: "Single Family",
      icon: "/images/singleHome.png",
    },
    {
      label: "Town Home",
      icon: "/images/townHome.png",
    },
    {
      label: "Condominium",
      icon: "/images/condominiumHome.png",
    },
    {
      label: "Multi - Family",
      icon: "/images/multiFamily.png",
    },
    {
      label: "Mobile / Manufacture",
      icon: "/images/motorHome.png",
    },
    {
      label: "New Construct",
      icon: "/images/newConstruct.png",
    },
  ];
  return (
    <div className={cx("home")}>
      <div className={cx("home_heading")}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <div className={cx("home_container")}>
        <h3>What type of home are you looking for?</h3>
        <div className={cx("home_container_inside")}>
          {preApprovedButtons.map((button, index) => (
            <div
              className={cx("home_container_inside_button")}
              onClick={() => setIstab("questions")}
              key={`index_${index}`}
            >
              <ExportedImage
                src={button.icon}
                alt="singleHome"
                width={46}
                height={46}
              />
              <h2>{button.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreApprovedTab;
