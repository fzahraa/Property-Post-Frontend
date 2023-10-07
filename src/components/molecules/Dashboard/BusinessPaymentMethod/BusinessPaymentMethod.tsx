import React, { useEffect, useRef, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./BusinessPaymentMethod.module.scss";
const cx = createModuleStyleExtractor(styles);
import DownArrow from "@/src/assets/svg/DownArrow";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import DeleteIcon from "@/src/assets/svg/DeleteIcon";
import EditIconLabel from "@/src/assets/svg/EditIconLabel";

export interface IPayments {
  type: string;
  number: string;
  company: string;
  date: string;
}
const BusinessPaymentMethod = () => {
  const [isLoanType, setIsLoanType] = useState<boolean>(false);
  const loanType = ["All", "Posted", "Pending", "Cancel"];
  const Payments: IPayments[] = [
    {
      type: "Credit Card",
      number: "4321 7654 9876 0987",
      company: "Master Card",
      date: "12/12/22",
    },
    {
      type: "Credit Card",
      number: "4321 7654 9876 0987",
      company: "Master Card",
      date: "12/12/22",
    },
    {
      type: "Debit Card",
      number: "4321 7654 9876 0987",
      company: "Visa Card",
      date: "12/12/22",
    },
  ];

  return (
    <>
      <div className={cx("buisness-payment")}>
        <div className={cx("buisness-payment_heading")}>
          <h1>Payments Method</h1>
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
        <table className={cx("buisness-payment_table")}>
          <tr className={cx("buisness-payment_table_heading")}>
            <th className={cx("buisness-payment_table_heading_type")}>
              <p>Type</p>
            </th>
            <th className={cx("buisness-payment_table_heading_number")}>
              <p>Number</p>
            </th>
            <th className={cx("buisness-payment_table_heading_company")}>
              <p>Company</p>
            </th>
            <th className={cx("buisness-payment_table_heading_payment")}>
              <p>Payment Date</p>
            </th>

            <th className={cx("buisness-payment_table_heading_action")}>
              <p>Actions</p>
            </th>
          </tr>
          {Payments.map((payment, index) => (
            <tr
              className={cx("buisness-payment_table_detail")}
              key={`index_${index}`}
            >
              <th className={cx("buisness-payment_table_detail_type")}>
                <span>{payment.type}</span>
              </th>

              <th className={cx("buisness-payment_table_detail_number")}>
                <span>{payment.number}</span>
              </th>
              <th className={cx("buisness-payment_table_detail_company")}>
                <span>{payment.company}</span>
              </th>
              <th className={cx("buisness-payment_table_detail_date")}>
                <span>{payment.date}</span>
              </th>
              <th className={cx("buisness-payment_table_detail_action")}>
                <span>
                  <DeleteIcon />
                </span>
                <span>
                  <EditIconLabel />
                </span>
              </th>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default BusinessPaymentMethod;
