import React, { FC, useEffect, useLayoutEffect, useCallback } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./DonutChart.module.scss";
import "c3/c3.css";
import c3, { ChartConfiguration } from "c3";
import * as d3 from "d3";
import { ISvgBox, mutateDonut } from "@/src/utils/donut";
const cx = createModuleStyleExtractor(styles);
interface IDonutChartProps extends ChartConfiguration {
  heading?: string;
  chartClassname?: string;
  totalLabel?: string;
  donutBox?: boolean;
  totalValue?: string;
  params?: ISvgBox;
  chartKey: string;
  containerClass?: string;
  barWidth?: number;
}
export const DonutChart: FC<IDonutChartProps> = ({
  heading,
  chartClassname,
  totalLabel,
  totalValue,
  bindto,
  data,
  onrendered,
  legend,
  donut,
  title,
  chartKey,
  containerClass,
  barWidth,
}) => {
  
  // Define getConstraints using useCallback
  const getConstraints = useCallback(() => {
    if (chartKey === "traffice_source_chart") {
      return {
        box: {
          y: 16,
          x: 13,
        },
        heading: {
          y: 35,
          x: 30,
        },
      };
    }

    return {};
  }, [chartKey]);

  useLayoutEffect(() => {
    try {
      c3.generate({
        title,
        onrendered: onrendered,
        bindto: `#${bindto}`,
        legend: legend,

        data: data,
        donut: {
          width: barWidth || 40,
          label: {
            show: false,
          },
          ...donut,
        },
      });

      var label = d3.select(`#${bindto} text.c3-chart-arcs-title`);
      label.html("");
      const d = new mutateDonut(`${bindto}`);
      const setting = getConstraints();
      const withSvg = d.addBox({
        constraints: setting.box,
      });
      const wrapper = d.createHeadingWrapper(withSvg, setting?.heading || {});
      totalLabel && d.addBoxHeading("Total", wrapper);
      totalValue && d.addTotalCount(totalValue, wrapper);
    } catch (error) {}
    //// eslint-disable-next-line
  }, [
    heading,
    chartClassname,
    totalLabel,
    totalValue,
    bindto,
    data,
    onrendered,
    legend,
    donut,
    title,
    chartKey,
    containerClass,
    barWidth,
    getConstraints,
  ]);
  return (
    <>
      <div className={cx(["o-donut-chart-container", containerClass ?? ""])}>
        {heading && (
          <div className={cx("heading")}>
            <span>{heading}</span>
          </div>
        )}
        <div className={cx(chartClassname ?? "")} id={`${bindto}`}></div>
      </div>
    </>
  );
};

export default DonutChart;
