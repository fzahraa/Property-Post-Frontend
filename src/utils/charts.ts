import { ChartOptions } from "chart.js";

export const getChartOptions = (key: string): ChartOptions => {
  if (key === "admin.influencers.bar.chart") {
    return {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
            //@ts-ignore
            drawBorder: false,
          },
        },
        y: {
          grid: {
            //@ts-ignore
            drawBorder: false,
            borderDash: [5, 5],
          },
        },
      },

      plugins: {
        legend: {
          display: false,
          position: "bottom",
          fullSize: true,
          labels: {
            // usePointStyle: true,
            padding: 20,
            boxHeight: 10,
            boxWidth: 10,
            pointStyle: "circle",
            font: {
              family: "Helvetica Now Display",
              weight: "400",
              style: "normal",
            },
          },
        },
      },
    };
  }
  // if (key === "admin.dashboard.sales") {
  //   return {
  //     responsive: true,
  //     maintainAspectRatio: false,
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },

  //     interaction: {
  //       intersect: false,
  //       mode: "index",
  //     },
  //     scales: {
  //       y: {
  //         grid: {
  //           drawBorder: true,
  //           display: true,
  //           drawOnChartArea: true,
  //           drawTicks: false,
  //           borderDash: [5, 5],
  //         },
  //         ticks: {
  //           display: true,
  //           padding: 10,
  //           color: "rgba(10, 0, 36, 0.5);",
  //           font: {
  //             size: 11,
  //             family: "Helvetica Now Display",
  //             style: "normal",
  //             weight: "300",
  //             lineHeight: 2,
  //           },
  //         },
  //       },
  //       x: {
  //         grid: {
  //           drawBorder: false,
  //           display: false,
  //           drawOnChartArea: false,
  //           drawTicks: false,
  //           borderDash: [5, 5],
  //         },
  //         ticks: {
  //           display: true,
  //           color: "#b2b9bf",
  //           padding: 20,
  //           font: {
  //             size: 11,
  //             family: "Helvetica Now Display",
  //             style: "normal",
  //             lineHeight: 2,
  //           },
  //         },
  //       },
  //     },
  //   };
  // }

  return {};
};

export const getChartDataSetProperties = (
  key: string,
  attributes: any = {}
) => {
  // if (key === "visit.analytics.chart") {
  //   return {
  //     label: "Websites",
  //     tension: 0.4,
  //     pointRadius: 3,
  //     borderColor: "rgba(0, 108, 103, 1)",
  //     borderWidth: 2,

  //     borderJoinStyle: "round",
  //     fill: true,
  //     pointBorderWidth: 0,
  //     pointBackgroundColor: "rgba(0, 108, 103, 1)",
  //     pointBorderColor: "#fff",
  //     pointStyle: "circle",
  //     pointRotation: 20,
  //     pointHoverBackgroundColor: "rgba(0, 108, 103, 1)",
  //     pointHoverBorderColor: "#fff",
  //     pointHoverRadius: 8,
  //     pointHoverBorderWidth: 3,
  //   };
  // }
  return {};
};
