// import { FC } from "react";
// import { createModuleStyleExtractor } from "../../../utils/css";
// import styles from "./DropDown.module.scss";
// const cx = createModuleStyleExtractor(styles);
// export interface IDropDown {
//   dropdown: string[];
//   className?: string;
// }

// const DropDown: FC<IDropDown> = (props) => {
//   const { dropdown, className } = props;

//   const scroll = dropdown.length > 5;
//   return (
//     <div className={cx([className, scroll ? "scroll" : "dropdown"])}>
//       <ul>
//         {dropdown.map((item, index) => (
//           <li key={`index-${index}`}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DropDown;

import { FC, useState } from "react";
import { createModuleStyleExtractor } from "../../../utils/css";
import styles from "./DropDown.module.scss";
const cx = createModuleStyleExtractor(styles);
export interface IDropDown {
  dropdown: any[];
  className?: string;
  setLabel?: (item: any) => void;
  onChange?: (value: string, name?: string) => void;
}

const DropDown: FC<IDropDown> = (props) => {
  const { dropdown, className, setLabel, onChange } = props;

  const scroll = dropdown.length > 5;

  const handleItemClick = (item: string) => {
    if (setLabel) {
      setLabel(item);
    }

    if (onChange) {
      onChange(item);
    }
  };
  return (
    <div className={cx([className, scroll ? "scroll" : "dropdown"])}>
      <ul>
        {dropdown.map((item, index) => (
          <li key={`index-${index}`} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
