import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./AddFeatureProperty.module.scss";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { useLayout } from "@/src/components/hooks/useLayout";
import ProgressBar from "../ProgressBar/ProgressBar";
import PlanAndPrice from "../../Common/PlanAndPrice/PlanAndPrice";
import DashboardPostForm from "../DashboardPostForm/DashboardPostForm";
const cx = createModuleStyleExtractor(styles);
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import SubmitFeatureForm from "../SubmitFeatureForm/SubmitFeatureForm";
import EditPost from "../EditPost/EditPost";

const AddFeatureProperty = () => {
  const { currentFeatured, setCurrentFeatured } = useLayout();

  const handleClickNext = () => {
    const next = {
      detail: "paymentPlan",
      paymentPlan: "paymentMethod",
      paymentMethod: "submit",
      submit: "submit",
    };
    //@ts-ignore
    setCurrentFeatured(next[currentFeatured]);
  };
  const handleClickPrevious = () => {
    const previous = {
      paymentPlan: "detail",
      paymentMethod: "paymentPlan",
      submit: "submit",
    };
    //@ts-ignore
    setCurrentFeatured(previous[currentFeatured]);
  };

  return (
    <>
      <div className={cx(["new-property"])}>
        <div className={cx("new-property_heading")}>
          <h1>
            {currentFeatured === "detail" && "Add Featured property"}
            {currentFeatured === "paymentPlan" && "Ads Price & Plans"}
            {currentFeatured === "paymentMethod" && "Payment Method"}
            {currentFeatured === "submit" && "Congratulations"}
          </h1>
          <ProgressBar />
        </div>
        <div className={cx(["new-property_inside"])}>
          {currentFeatured === "detail" && <DashboardPostForm />}
          {currentFeatured === "paymentPlan" && <PlanAndPrice flag={true} />}
          {currentFeatured === "paymentMethod" && <PaymentMethod />}
          {currentFeatured === "submit" && <SubmitFeatureForm />}
        </div>
        <div className={cx("new-property_buttons")}>
          <div className={cx("new-property_buttons_button")}>
            <Button
              modifier={ButtonModifier.TERIARY}
              onClick={handleClickPrevious}
            >
              Previous
            </Button>
          </div>

          <div className={cx("new-property_buttons_button")}>
            <Button modifier={ButtonModifier.PRIMARY} onClick={handleClickNext}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFeatureProperty;
