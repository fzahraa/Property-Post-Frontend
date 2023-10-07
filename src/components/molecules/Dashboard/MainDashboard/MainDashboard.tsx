import dynamic from "next/dynamic";
const DonutChart = dynamic(() => import("../DonutChart/DonutChart"), {
  ssr: false,
  loading: () => <>Loading...</>,
});
import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./MainDashboard.module.scss";
import { Data } from "c3";
import { bar_items } from ".";
import DashboardSingleItem from "@/src/components/atoms/DashboardSingleItem/DashboardSingleItem";
import { ChartBox } from "../ChartBox/ChartBox";
import { ISelectOption } from "../../../types/selects";
import CampaignViewBarChart from "../CampaignViewBarChart/CampaignViewBarChart";
const cx = createModuleStyleExtractor(styles);

const MainDashboard = () => {
  const Cards = [
    {
      img: "/images/listing.png",
      name: "Total Listing",
      activeNumber: "20",
    },
    {
      img: "/images/active-list.png",
      name: "Active Listing",
      activeNumber: "20",
    },
    {
      img: "/images/feature.png",
      name: "Featured Ads",
      activeNumber: "20",
    },
    {
      img: "/images/money.png",
      name: "Total Spend",
      activeNumber: "$20k",
    },
    {
      img: "/images/rent.png",
      name: "Properties for Rent",
      activeNumber: "20",
    },
    {
      img: "/images/sale.png",
      name: "Properties for Sale",
      activeNumber: "20",
    },
  ];
  const [campaignSelectValue, setCampaignSelectValue] = useState("week");

  const campaignSelectHandler = (e: ISelectOption | null) => {
    if (e) {
      setCampaignSelectValue(e.value);
    }
  };
  const [data, setData] = useState<Data>(bar_items);

  return (
    <div className={cx("main-dashboard")}>
      <div className={cx("main-dashboard_inside")}>
        <div className={cx("main-dashboard_inside_left")}>
          {Cards.map((card, index) => (
            <DashboardSingleItem card={card} key={`index_${index}`} />
          ))}
        </div>
        <div className={cx("main-dashboard_inside_right")}>
          <DonutChart
            chartKey="traffice_source_chart"
            heading="Sales Analystics"
            bindto="traffice-source-chart"
            totalLabel="Total"
            data={data}
            donutBox={true}
            totalValue={"100%"}
          />
        </div>
      </div>
      <div className={cx("main-dashboard_bar-chart")}>
        <ChartBox
          heading="Total engagement"
          className="dashboard-influencer-chart"
          selectHandler={campaignSelectHandler}
        >
          <CampaignViewBarChart selectedOption={campaignSelectValue} />
        </ChartBox>
      </div>
    </div>
  );
};

export default MainDashboard;
