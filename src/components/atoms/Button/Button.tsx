import React, { FC, MouseEvent, ReactNode } from "react";
import { createModuleStyleExtractor } from "../../../utils/css";
import styles from "./Button.module.scss";
const cx = createModuleStyleExtractor(styles);

export enum ButtonModifier {
  PRIMARY = "a-button--primary",
  SECONDARY = "a-button--secondary",
  TERIARY = "a-button--tertiary",
  TRANSPARENT = "a-button--transparent",
  TRANSPARENTSECONDARY = "a-button--transparent-secondary",
  TRANSPARENTTERIARY = "a-button--transparent-tertiary",
  PRIMARYV2 = "a-button--primary-v2",
  PRIMARYIntro = "a-button--primary-intro",
}

export interface IButtonProps {
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
  modifier?: ButtonModifier;
  type?: "submit" | "button" | "reset";
  buttonRef?: React.RefObject<HTMLButtonElement>;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  modifier,
  type,
  buttonRef,
  disabled = false,
  children,
}) => (
  <button
    ref={buttonRef}
    disabled={disabled}
    className={cx(
      ["a-button"],
      modifier
        ? {
            [modifier]: true,
          }
        : {}
    )}
    type={type || "button"}
    onClick={onClick}
  >
    {children}
  </button>
);
