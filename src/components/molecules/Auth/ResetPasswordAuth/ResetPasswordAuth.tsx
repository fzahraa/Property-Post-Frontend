import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./ResetPasswordAuth.module.scss";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cx = createModuleStyleExtractor(styles);

const ResetPasswordAuth = () => {
  const route = useRouter();

  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
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
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/user/updatePassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(actualData),
        }
      );
      const responseData = await response.json();
      console.log("response is: " + responseData.message);

      if (response.ok) {
        route.push("/");
        toast.success(responseData.message);
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
              <label>New Password</label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
                className={cx("auth-form")}
              />
            </div>
            <div className={cx("reset-password_container_input")}>
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={cx("auth-form")}
              />
            </div>
            <div className={cx("reset-password_container_button")}>
              <Button
                modifier={ButtonModifier.PRIMARY}
                type="submit"
                // onClick={() => route.push("/")}
              >
                Confirm
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordAuth;
