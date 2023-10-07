import { createModuleStyleExtractor } from "@/src/utils/css";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./SectionHeading.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface ISectionHeading {
  heading: string;
}

const SectionHeading: FC<ISectionHeading> = (props) => {
  const { heading } = props;
  const route = useRouter();
  return (
    <div className={cx("section-heading")}>
      <h1>{heading}</h1>
      <span onClick={() => route.push("/properties")}>See All</span>
    </div>
  );
};

export default SectionHeading;
