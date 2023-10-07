import React, { forwardRef, useEffect } from "react";
import { createModuleStyleExtractor } from "../../../utils/css";
import styles from "./Modal.module.scss";
const cx = createModuleStyleExtractor(styles);

export interface IModalItem {
  onClose?: () => void;
  children: React.ReactNode;
  classname?: string;
  containerClassname?: string;
}

const Modal = forwardRef<HTMLDivElement, IModalItem>((props, ref) => {
  const { children, classname, containerClassname } = props;

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div
      className={cx([
        "modal-container",
        ...(containerClassname ? [containerClassname] : []),
      ])}
    >
      <div
        ref={ref}
        className={cx([
          "modal-container__content",
          ...(classname ? [classname] : []),
        ])}
      >
        {children}
      </div>
    </div>
  );
});
Modal.displayName = "Modal";
export default Modal;
