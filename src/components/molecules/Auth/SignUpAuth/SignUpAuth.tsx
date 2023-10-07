import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./SignUpAuth.module.scss";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import SaquareCheckbox from "@/src/components/atoms/Checkbox/Checkbox";
const cx = createModuleStyleExtractor(styles);

const SignUpAuth = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
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

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const password = data.get("password")?.toString().trim();

    if (!name) {
      toast.error("Name cannot be empty");
      return;
    }
    if (!email) {
      toast.error("Email cannot be empty");
      return;
    }

    if (!password) {
      toast.error("Password cannot be empty");
      return;
    }

    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };

    try {
      const response = await fetch("http://localhost:3000/user/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(actualData),
      });

      const responseData = await response.json();
      if (actualData.password !== actualData.confirmPassword) {
        toast.error(responseData.message);
        return;
      }

      if (!response.ok) {
        toast.error(responseData.message);
        return;
      } else {
        toast.success("SignUp Successfully");
        router.push("/auth/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={cx("sign-up")}>
        <div className={cx("sign-up_container")}>
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className={cx("sign-up_container_input")}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Name"
                className={cx("auth-form")}
              />
            </div>
            <div className={cx("sign-up_container_input")}>
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
            <div className={cx("sign-up_container_input")}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
                className={cx("auth-form")}
              />
            </div>
            <div className={cx("sign-up_container_input")}>
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={cx("auth-form")}
              />
            </div>
            <div className={cx("sign-up_container_checkbox")}>
              <SaquareCheckbox />
              <p>I have read and agree to the Terms of Service</p>
            </div>
            <div className={cx("sign-up_container_button")}>
              <Button type="submit" modifier={ButtonModifier.PRIMARY}>
                Sign up
              </Button>
            </div>
          </form>
        </div>
        <div className={cx("sign-up_footer")}>
          <p>
            Already have an account
            <span onClick={() => router.push("/auth/login")}>Signin now</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpAuth;
