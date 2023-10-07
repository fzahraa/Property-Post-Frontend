import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./LoginAuth.module.scss";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = createModuleStyleExtractor(styles);

const LoginAuth = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
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

    const email = data.get("email")?.toString().trim();
    const password = data.get("password")?.toString().trim();

    if (!email) {
      toast.error("Email cannot be empty");
      return;
    }

    if (!password) {
      toast.error("Password cannot be empty");
      return;
    }

    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(actualData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        toast.error("Invalid email or password");
        return;
      } else {
        toast.success(responseData.message);
      }

      localStorage.setItem("token", responseData.access_token);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={cx("sign-in")}>
        <div className={cx("sign-in_container")}>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <div className={cx("sign-in_container_input")}>
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
            <div className={cx("sign-in_container_input")}>
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
            <div className={cx("sign-in_container_forgot-password")}>
              <p onClick={() => router.push("/auth/forgot-password")}>
                Forgot passwod?
              </p>
            </div>
            <div className={cx("sign-in_container_button")}>
              <Button modifier={ButtonModifier.PRIMARY} type="submit">
                Sign in
              </Button>
            </div>
          </form>
        </div>
        <div className={cx("sign-in_footer")}>
          <p>
          Doesn&apos;t have an account?{" "}
            <span onClick={() => router.push("/auth/register")}>
              Signup Now
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginAuth;
