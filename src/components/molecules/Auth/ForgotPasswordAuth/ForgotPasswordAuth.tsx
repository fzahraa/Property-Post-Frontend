import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./ForgotPasswordAuth.module.scss";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cx = createModuleStyleExtractor(styles);

const ForgotPasswordAuth = () => {
  const route = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
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

    try {
      const response = await fetch("http://localhost:3000/user/sendOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const responseData = await response.json();

      if (response.ok) {
        route.push({
          pathname: '/auth/otp-verification',
          query: { email: formValues.email }
      })
        toast.success("OTP send sucessfully");
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={cx("reset-password")}>
        <div className={cx("reset-password_container")}>
          <h1>Reset your Password </h1>
          <form onSubmit={handleSubmit}>
            <div className={cx("reset-password_container_input")}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
                className={cx("auth-form")}
              />
            </div>
            <div className={cx("reset-password_container_button")}>
              <Button modifier={ButtonModifier.PRIMARY} type="submit">
                Send OTP
              </Button>
            </div>
          </form>

          <div className={cx("reset-password_container_footer")}>
            <p>Doesn’t have an account?</p>
            <span onClick={() => route.push("/auth/register")}>
              Sign up now
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordAuth;
