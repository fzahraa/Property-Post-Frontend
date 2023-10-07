import React, { useRef, useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PaymentMethod.module.scss";
import PaymentModal from "../BusinessProfile/PaymentModal/PaymentModal";
import { useLayout } from "@/src/components/hooks/useLayout";
import { useOnClickOutside } from "@/src/components/hooks/UseClickOutside";
import CreditCardDetail from "../CreditCardDetail/CreditCardDetail";
const cx = createModuleStyleExtractor(styles);

export type payment = "setCard" | "save";

const PaymentMethod = () => {
  const [isPayment, setIsPayment] = useState(false);

  const content = useLayout();

  const handleToggleModal = () => {
    content.setShow(!content.show);
  };

  const clickRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(clickRef, () => {
    isPayment && setIsPayment(false);
  });

  const { currentPayment } = useLayout();
  return (
    <div>
      {currentPayment === "setCard" && <CreditCardDetail />}
      {currentPayment === "save" && (
        <PaymentModal
          handleToggleModal={handleToggleModal}
          clickRef={clickRef}
          setIsPayment={setIsPayment}
          label="Add Card Details"
        />
      )}
    </div>
  );
};

export default PaymentMethod;
