import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./AddProperty.module.scss";
const cx = createModuleStyleExtractor(styles);

const AddProperty = () => {
  return (
    <div>
      <div>Add Property</div>
    </div>
  );
};

export default AddProperty;
