import { useLayout } from "@/src/components/hooks/useLayout";
import { createModuleStyleExtractor } from "../../../../utils/css";
import PropertyTypes from "../../Common/PropertyTypes/PropertyTypes";
import styles from "./PopularProperties.module.scss";
const cx = createModuleStyleExtractor(styles);

const PopularProperties = () => {
  const { properties } = useLayout();
  const popularProperties = properties.filter(
    (property) => property.listingType === "General"
  );
  return (
    <div className={cx("propular")}>
      <PropertyTypes
        heading="Popular Properties"
        property={popularProperties}
      />
    </div>
  );
};

export default PopularProperties;
