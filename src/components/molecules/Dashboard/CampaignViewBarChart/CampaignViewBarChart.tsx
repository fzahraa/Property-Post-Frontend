import React, { FC, memo, useRef } from "react";

import { Chart as ChartJS, ChartOptions } from "chart.js";
import { CategoryScale, Chart } from "chart.js/auto";
Chart.register(CategoryScale);

import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { getChartOptions } from "@/src/utils/charts";
import { weekLabels, monthsLabels } from "@/src/components/helpers/consts";

interface ICampaignViewBarChart {
  selectedOption?: string;
}

const CampaignViewBarChart: FC<ICampaignViewBarChart> = ({
  selectedOption,
}) => {
  const chartRef = useRef<ChartJS<"bar">>(null);

  const options: ChartOptions = getChartOptions("admin.influencers.bar.chart");

  let labels;
  let datasets: ChartData<"bar">["datasets"];

  if (selectedOption === "week") {
    labels = weekLabels;
    datasets = [
      {
        label: "Property",
        data: [30, 200, 100, 420, 150, 250, 100],
        backgroundColor: "#F8C34A",
        borderRadius: 20,
        borderWidth: 1,
        borderSkipped: "bottom",
        maxBarThickness: 9,
        pointStyle: "circle",
        categoryPercentage: 0.5,
      },
    ];
  } else {
    labels = monthsLabels;
    datasets = [
      {
        label: "Property",
        data: [30, 200, 100, 220, 150, 250, 93, 70, 30, 100, 220, 100],
        backgroundColor: "#F8C34A",
        borderRadius: 20,
        borderWidth: 1,
        borderSkipped: "bottom",
        maxBarThickness: 9,
        pointStyle: "circle",
        categoryPercentage: 0.5,
      },
    ];
  }
  const data: ChartData<"bar"> = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <Bar
      ref={chartRef}
      id="campaign-view-bar-chart"
      // options={options}
      data={data}
    />
  );
};

export default memo(CampaignViewBarChart);
