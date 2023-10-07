import React, { FC, RefObject, useEffect, useState } from "react";
import { createModuleStyleExtractor } from "../../../utils/css";
import { noop } from "../../../utils/noop";
import styles from "./Input.module.scss";
const cx = createModuleStyleExtractor(styles);

export interface IInputProps {
  type?: "text" | "number" | "date" | "password" | "email" | "time";
  value: any;
  placeholder: string;
  onChange?: (value: string, name: string) => void;
  noBorder?: boolean;
  className?: string;
  name?: string;
  ref?: RefObject<HTMLInputElement>;
  disabled?: boolean;
  id?: string;
}

export const Input: FC<IInputProps> = ({
  type,
  value,
  id,
  placeholder = "",
  disabled = false,
  onChange = noop,
  noBorder = false,
  ref,
  className = "",
  name,
}) => {
  const [state, setState] = useState<string>(`${value}`);

  // useEffect(() => {
  //   if ((value && value.trim() === "") || value === "") {
  //     setState(value); // input cleared
  //   }
  // }, [value]);

  return (
    <input
      ref={ref}
      id={id}
      name={name}
      disabled={disabled}
      className={cx([className, "a-input"], {
        "a-input--disabled": disabled,
        "a-input--no-border": noBorder,
      })}
      type={type}
      value={state}
      placeholder={placeholder}
      onChange={
        disabled
          ? noop
          : (ev) => {
              setState(ev.target.value);
              onChange(ev.target.value, ev.target.name);
            }
      }
    />
  );
};
