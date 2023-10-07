import CloseCircularIcon from "@/src/assets/svg/CloseCircularIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import FormCheckbox from "@/src/components/atoms/FormCheckbox/FormCheckbox";
import { Input } from "@/src/components/atoms/Input";
import Modal from "@/src/components/atoms/Modal/Modal";
import React, { FC, RefObject } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PaymentModal.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
const cx = createModuleStyleExtractor(styles);
export interface IPaymentModal {
  handleToggleModal: () => void;
  clickRef: RefObject<HTMLDivElement> | {};
  setIsPayment: (flag: boolean) => void;
  label: string;
}

const PaymentModal: FC<IPaymentModal> = ({
  handleToggleModal,
  clickRef,
  setIsPayment,
  label,
}) => {
  const { setCurrentFeatured } = useLayout();
  return (
    <div className={cx("payment-modal")}>
      <Modal
        onClose={handleToggleModal}
        //@ts-ignore
        ref={clickRef}
        classname={"payment-modal"}
      >
        <div className={cx("payment-modal_inside")}>
          <div className={cx("payment-modal_inside_heading")}>
            <h2>{label}</h2>
            <span onClick={() => setIsPayment(false)}>
              <CloseCircularIcon />
            </span>
          </div>
          <div className={cx("payment-modal_inside_container")}>
            <div className={cx("form-input")}>
              <label>Name on Card</label>
              <Input
                type="text"
                placeholder="e.g  Farhan Khan"
                value=""
                className="add-post-form"
              />
            </div>
            <div className={cx("form-input")}>
              <label>Card Number</label>
              <Input
                type="text"
                placeholder="e.g 1234 5678 9087 6543"
                value=""
                className="add-post-form"
              />
            </div>
            <div className={cx("payment-modal_inside_container_grid")}>
              <div className={cx("form-input")}>
                <label>Expiry Date</label>
                <Input
                  type="date"
                  placeholder="e.g 1234 5678 9087 6543"
                  value=""
                  className="add-post-form"
                />
              </div>
              <div className={cx("form-input")}>
                <label>CVV</label>
                <Input
                  type="text"
                  placeholder="e.g 123"
                  value=""
                  className="add-post-form"
                />
              </div>
            </div>
            {/* <div className={cx("payment-modal_inside_container_checkbox")}>
               <FormCheckbox label="Save Card for future use" /> 
              <FormCheckbox
    label="Save Card for future use"
    checked={}
    onChange={}
  />
            </div>  */}
            <div className={cx("payment-modal_inside_container_button")}>
              <Button
                modifier={ButtonModifier.PRIMARY}
                onClick={() => setCurrentFeatured("submit")}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentModal;
