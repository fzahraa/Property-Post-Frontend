import ExportedImage from "next-image-export-optimizer";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./Map.module.scss";
const cx = createModuleStyleExtractor(styles);

const Map = () => {
  return (
    <div className={cx("map")}>
      <ExportedImage
        src="/images/map.png"
        alt="Large Image"
        width={1440}
        height={100}
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
};

export default Map;
