import SectionHeading from "@/src/components/atoms/SectionHeading/SectionHeading";
import SingleCardItem from "@/src/components/atoms/SingleCardItem/SingleCardItem";
import { ISingleCard } from "@/src/context/types";
import { FC } from "react";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./PropertyTypes.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface IPropertyType {
  heading: string;
  property: ISingleCard[];
}

const PropertyTypes: FC<IPropertyType> = (props) => {
  const { heading, property } = props;

  const feature = false;

  return (
    <div className={cx("properties")}>
      <SectionHeading heading={heading} />
      <div className={cx("properties_container")}>
        {property.slice(0, 3).map((card, index) => (
          <SingleCardItem
            card={card}
            key={`index_${index}`}
            flag={feature}
            label={true}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyTypes;
