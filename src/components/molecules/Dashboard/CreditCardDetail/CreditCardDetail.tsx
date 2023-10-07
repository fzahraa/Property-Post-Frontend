import React, { FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./CreditCardDetail.module.scss";
import Modal from "@/src/components/atoms/Modal/Modal";
const cx = createModuleStyleExtractor(styles);
import CloseCircularIcon from "@/src/assets/svg/CloseCircularIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import MasterCardIcon from "@/src/assets/svg/MasterCardIcon";
import VisaCardIcon from "@/src/assets/svg/VisaCardIcon";
import CardDetailItem from "@/src/components/atoms/CardDetailItem/CardDetailItem";
import { useLayout } from "@/src/components/hooks/useLayout";

const CreditCardDetail = () => {
  const cardsDetail = [
    {
      icon: <MasterCardIcon />,
    },
    {
      icon: <VisaCardIcon />,
    },
  ];
  const { setCurrentPayment, setCurrentFeatured } = useLayout();
  return (
    <div className={cx("payment-modal")}>
      <Modal classname={"payment-modal"}>
        <div className={cx("payment-modal_inside")}>
          <div className={cx("payment-modal_inside_heading")}>
            <h2>Credit Card Details</h2>
            <span>
              <CloseCircularIcon />
            </span>
          </div>
          <div className={cx("payment-modal_inside_container")}>
            {cardsDetail.map((card, index) => (
              <CardDetailItem icon={card.icon} key={`index_${index}`} />
            ))}
            <h4>Add New Card</h4>
            <div className={cx("payment-modal_inside_container_buttons")}>
              <div
                className={cx("payment-modal_inside_container_buttons_button")}
              >
                <Button
                  modifier={ButtonModifier.TERIARY}
                  onClick={() => setCurrentFeatured("paymentPlan")}
                >
                  Previous
                </Button>
              </div>
              <div
                className={cx("payment-modal_inside_container_buttons_button")}
              >
                <Button
                  modifier={ButtonModifier.PRIMARY}
                  onClick={() => setCurrentPayment("save")}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreditCardDetail;
