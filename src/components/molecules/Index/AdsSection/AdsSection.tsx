import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./AdsSection.module.scss";
const cx = createModuleStyleExtractor(styles);

const AdsSection = () => {
  return (
    <div className={cx("ads-section")}>
      <div className={cx("ads-section_inside")}>
        <p>Find Home with Us</p>
        <h1>Find the right house over 40,000 Property Optios</h1>
        <div className={cx("ads-section_inside_button")}>
          <Button modifier={ButtonModifier.PRIMARY}>Find Now</Button>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
