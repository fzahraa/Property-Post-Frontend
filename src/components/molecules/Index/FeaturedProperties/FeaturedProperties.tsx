import { useLayout } from "@/src/components/hooks/useLayout";
import { createModuleStyleExtractor } from "../../../../utils/css";
import PropertyTypes from "../../Common/PropertyTypes/PropertyTypes";
import styles from "./FeaturedProperties.module.scss";
const cx = createModuleStyleExtractor(styles);

const FeaturedProperties = () => {
  const { properties } = useLayout();
  const featuredProperties = properties.filter(
    (property) => property.listingType === "Featured"
  );

  return (
    <div className={cx("featured")}>
      <PropertyTypes
        heading="Featured Properties"
        property={featuredProperties}
      />
    </div>
  );
};

export default FeaturedProperties;
