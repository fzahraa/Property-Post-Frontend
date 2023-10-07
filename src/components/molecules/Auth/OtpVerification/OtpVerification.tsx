import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./OtpVerification.module.scss";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cx = createModuleStyleExtractor(styles);

const OtpVerification = (props:any) => {
  const route = useRouter();
  const [formValues, setFormValues] = useState({
    otp: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      otp: data.get("otp"),
      email: route.query.email
    };
    try {
      const response = await fetch("http://localhost:3000/user/validateOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(actualData),
      });
      const responseData = await response.json();

      if (response.ok) {
        route.push("/auth/reset-password");
        toast.success(responseData.message);
      } else {
        toast.error("OTP is InValid");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={cx("otp-verification")}>
        <div className={cx("otp-verification_container")}>
          <h1>Enter OTP Code</h1>
          <form onSubmit={handleSubmit}>
            <div className={cx("otp-verification_container_input")}>
              <label>OTP</label>
              <input
                type="text"
                name="otp"
                value={formValues.otp}
                onChange={handleChange}
                placeholder="Enter OTP Code"
                className={cx("auth-form")}
              />
            </div>
            <div className={cx("otp-verification_container_button")}>
              <Button modifier={ButtonModifier.PRIMARY} type="submit">
                Confirm
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
