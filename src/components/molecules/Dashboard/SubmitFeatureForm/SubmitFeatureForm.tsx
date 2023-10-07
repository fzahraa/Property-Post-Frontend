import CloseCircularIcon from "@/src/assets/svg/CloseCircularIcon";
import SubmitTickIcon from "@/src/assets/svg/SubmitTickIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import Modal from "@/src/components/atoms/Modal/Modal";
import { useLayout } from "@/src/components/hooks/useLayout";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SubmitFeatureForm.module.scss";
const cx = createModuleStyleExtractor(styles);

const SubmitFeatureForm = () => {
  const { setCurrentTab, setCurrentFeatured, setCurrentPayment } = useLayout();

  return (
    <div className={cx("payment-modal")}>
      <Modal classname={"payment-modal"}>
        <div className={cx("payment-modal_inside")}>
          <div className={cx("payment-modal_inside_heading")}>
            <h2>Congratulations</h2>
            <span>
              <CloseCircularIcon />
            </span>
          </div>
          <div className={cx("payment-modal_inside_container")}>
            <span>
              <SubmitTickIcon />
            </span>
            <p>Your Add is submitted Successfully</p>
            <div className={cx("payment-modal_inside_container_buttons")}>
              <div
                className={cx("payment-modal_inside_container_buttons_button")}
              >
                <Button
                  modifier={ButtonModifier.TERIARY}
                  onClick={() => {
                    setCurrentTab("dashboard"), setCurrentFeatured("detail");
                  }}
                >
                  Go to Dashboard
                </Button>
              </div>
              <div
                className={cx("payment-modal_inside_container_buttons_button")}
              >
                <Button
                  modifier={ButtonModifier.PRIMARY}
                  onClick={() => {
                    setCurrentFeatured("detail"), setCurrentPayment("setCard");
                  }}
                >
                  Post More Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubmitFeatureForm;
