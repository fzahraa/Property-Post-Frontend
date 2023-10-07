import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./ChartBox.module.scss";
import Select from "react-select";
import { ISelectOption } from "@/src/components/types/selects";

const cx = createModuleStyleExtractor(styles);

interface IChartBoxProps {
  heading: string;
  children: React.ReactNode;
  className?: string;
  labels?: { label: string; color: string; rounded?: boolean }[];
  dropdown?: boolean;
  options?: { value: string; label: string }[];
  boxShadow?: boolean;
  boxWrapperClass?: string;
  currentChartValue?: string;
  labelWidth?: string;
  labelHeight?: string;
  selectHandler?: (e: ISelectOption | null) => void;
}

export const ChartBox: FC<IChartBoxProps> = ({
  heading,
  children,
  className,
  labels,
  dropdown = true,
  options,
  boxShadow = true,
  boxWrapperClass,
  currentChartValue,
  labelWidth = "14px",
  labelHeight = "12px",
  selectHandler,
}) => {
  const dropdownOptions = options ?? [
    { value: "week", label: "Weekly" },
    { value: "month", label: "Monthly" },
  ];

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    container: (provided: any, state: any) => ({
      ...provided,
      width: "140px",
      // paddingTop: "10px",
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: "none",
    }),
    control: (provided: any) => ({
      ...provided,
    }),
  };

  return (
    <div
      className={cx(["box-container", boxWrapperClass ?? ""])}
      style={{
        boxShadow: boxShadow
          ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          : "none",
      }}
    >
      <div className={cx("box-container__header")}>
        <div className={cx("box-container__header-title")}>
          <span></span>
        </div>

        {labels && (
          <div className={cx("box-container__labels")}>
            {labels.map(({ label, color, rounded }, index) => (
              <div className={cx("item")} key={index}>
                <div className={cx("label-title")}> {label}</div>
                <div
                  className={cx("label-box")}
                  style={{
                    backgroundColor: `${color}`,
                    borderRadius: rounded ? "50%" : "0px",
                    width: labelWidth,
                    height: labelHeight,
                  }}
                ></div>
              </div>
            ))}
          </div>
        )}

        {dropdown && (
          <div className={cx("box-container__header-dropdown")}>
            <Select
              instanceId={"date"}
              onChange={(e) => selectHandler && selectHandler(e)}
              options={dropdownOptions}
              styles={customStyles}
            />
          </div>
        )}
      </div>
      <div className={cx(["box-container__middle"])}>
        {currentChartValue && (
          <span className={cx("value")}>{currentChartValue}</span>
        )}
      </div>
      <div className={cx(["box-container__content", className ?? ""])}>
        {children}
      </div>
    </div>
  );
};
