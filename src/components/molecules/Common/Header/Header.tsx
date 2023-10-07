import AddIcon from "@/src/assets/svg/AddIcon";
import MainLogo from "@/src/assets/svg/MainLogo";
import { MenuClose } from "@/src/assets/svg/MenuClose";
import { MobileMenu } from "@/src/assets/svg/MobileMenu";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createModuleStyleExtractor } from "../../../../utils/css";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import ExportedImage from "next-image-export-optimizer";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
const cx = createModuleStyleExtractor(styles);

const Header = () => {
  const route = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const profileSelectDropdown = ["Dashboard", "Logout"];
  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <div className={cx("header")}>
      <div className={cx("header_container")}>
        <div className={cx("header_container_logo")}>
          <span onClick={() => route.push("/")}>
            <MainLogo />
          </span>
        </div>
        <div className={cx("header_container_navbar")}>
          <Navbar setActive={setIsActive} />
        </div>

        {isLoggedIn ? (
          <div className={cx("profile-setting")}>
            <div
              className={cx("profile_btn")}
              onClick={() => setProfileDropdown(!profileDropdown)}
            >
              <ExportedImage
                src="/images/userImage.png"
                alt="Large Image"
                width={48}
                height={48}
                layout="responsive"
                objectFit="contain"
                className={cx("profile-image")}
              />
              <p>User</p>
            </div>
            {profileDropdown && (
              <HeaderProfile
                profileSelectDropdown={profileSelectDropdown}
                setProfileDropdown={setProfileDropdown}
                clasName="profile-dropdown"
                urlRoute="dashboard"
              />
            )}
          </div>
        ) : (
          <div className={cx("header_container_button")}>
            <Button
              modifier={ButtonModifier.PRIMARY}
              onClick={() => route.push("/auth/login")}
            >
              <AddIcon /> Add Property
            </Button>
          </div>
        )}

        <div className={cx("header_container_mobile-menu")}>
          <nav className={cx("header_container_mobile-menu_navigation")}>
            <div>
              <span onClick={() => setIsActive(!isActive)}>
                {isActive ? <MenuClose /> : <MobileMenu />}
              </span>
            </div>

            <div
              className={cx([
                isActive
                  ? "active-menu"
                  : "header_container_mobile-menu_navigation_menu",
              ])}
            >
              <Navbar active={isActive} setActive={setIsActive} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
