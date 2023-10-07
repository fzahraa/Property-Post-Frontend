import ExperienceSingleItem from "@/src/components/atoms/ExperienceSingleItem/ExperienceSingleItem";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./Experience.module.scss";
const cx = createModuleStyleExtractor(styles);

const Experience = () => {
  const Cards = [
    {
      title: "Ready Property",
      label: "1500+",
    },
    {
      title: "Happy Customer",
      label: "500+",
    },
    {
      title: "Recently Sold",
      label: "1100+",
    },
  ];
  return (
    <div className={cx("experice")}>
      <div className={cx("experice_inside")}>
        {Cards.map((card, index) => (
          <ExperienceSingleItem card={card} key={`index_${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
