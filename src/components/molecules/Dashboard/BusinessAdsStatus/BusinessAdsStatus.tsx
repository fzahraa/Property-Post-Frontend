import React, { useEffect, useRef, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./BusinessAdsStatus.module.scss";
const cx = createModuleStyleExtractor(styles);
import DownArrow from "@/src/assets/svg/DownArrow";
import DropDown from "@/src/components/atoms/DropDown/DropDown";

export interface IPayments {
  title: string;
  date: string;
  amount: string;
  status: string;
}

const BusinessAdsStatus = () => {
  const [isLoanType, setIsLoanType] = useState<boolean>(false);
  const loanType = ["All", "Posted", "Pending", "Cancel"];
  const Payments: IPayments[] = [
    {
      title: "One Story House",

      date: "12/12/22",
      amount: "100",
      status: "Posted",
    },
    {
      title: "One Story House",

      date: "12/12/22",
      amount: "100",
      status: "Pending",
    },
    {
      title: "One Story House",

      date: "12/12/22",
      amount: "100",
      status: "Cancel",
    },
  ];

  return (
    <div className={cx("buisness")}>
      <div className={cx("buisness-payment")}>
        <div className={cx("buisness-payment_heading")}>
          <h1>Ad’s Status</h1>
          <div className={cx("buisness-payment_heading_fillter")}>
            <h4>Fillter By</h4>
            <div
              className={cx("dropdown-v2")}
              onClick={() => setIsLoanType(!isLoanType)}
            >
              <p>All</p>
              <span>
                <DownArrow />
              </span>
              {isLoanType && (
                <DropDown dropdown={loanType} className="payment-fillter" />
              )}
            </div>
          </div>
        </div>
        {/* <div className={cx("buisness-payment_table")}>
          <div className={cx("buisness-payment_table_heading")}>
            <div className={cx("buisness-payment_table_heading_title")}>
              <p>Title</p>
            </div>
            <div className={cx("buisness-payment_table_heading_status")}>
              <p>Status</p>
            </div>
            <div className={cx("buisness-payment_table_heading_payment")}>
              <p>Payment Date</p>
            </div>
            <div className={cx("buisness-payment_table_heading_amount")}>
              <p>Amount</p>
            </div>
          </div>
          {Payments.map((payment, index) => (
            <div
              className={cx("buisness-payment_table_detail")}
              key={`index_${index}`}
            >
              <div className={cx("buisness-payment_table_detail_title")}>
                <span>{payment.title}</span>
              </div>
              <div className={cx("buisness-payment_table_detail_status")}>
                <p className={cx([`status-detail-${payment.status}`])}>
                  {payment.status}
                </p>
              </div>
              <div className={cx("buisness-payment_table_detail_payment")}>
                <span>{payment.date}</span>
              </div>
              <div className={cx("buisness-payment_table_detail_amount")}>
                <span>${payment.amount}</span>
              </div>
            </div>
          ))}
        </div> */}

        <table className={cx("buisness-payment_table")}>
          <tr className={cx("buisness-payment_table_heading")}>
            <th className={cx("buisness-payment_table_heading_title")}>
              <p>Title</p>
            </th>
            <th className={cx("buisness-payment_table_heading_status")}>
              <p>Status</p>
            </th>
            <th className={cx("buisness-payment_table_heading_payment")}>
              <p>Payment Date</p>
            </th>
            <th className={cx("buisness-payment_table_heading_amount")}>
              <p>Amount</p>
            </th>
          </tr>
          {Payments.map((payment, index) => (
            <tr
              className={cx("buisness-payment_table_detail")}
              key={`index_${index}`}
            >
              <td className={cx("buisness-payment_table_detail_title")}>
                <span>{payment.title}</span>
              </td>
              <td className={cx("buisness-payment_table_detail_status")}>
                <p className={cx([`status-detail-${payment.status}`])}>
                  {payment.status}
                </p>
              </td>
              <td className={cx("buisness-payment_table_detail_payment")}>
                <span>{payment.date}</span>
              </td>
              <td className={cx("buisness-payment_table_detail_amount")}>
                <span>${payment.amount}</span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BusinessAdsStatus;
