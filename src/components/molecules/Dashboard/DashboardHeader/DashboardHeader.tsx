import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./DashboardHeader.module.scss";
import MainLogo from "@/src/assets/svg/MainLogo";
import NotificationIcon from "@/src/assets/svg/NotificationIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import AddIcon from "@/src/assets/svg/AddIcon";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import HeaderProfile from "../../Common/HeaderProfile/HeaderProfile";
const cx = createModuleStyleExtractor(styles);

const DashboardHeader = () => {
  const route = useRouter();

  const profileSelectDropdown = ["Home", "Logout"];
  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <div className={cx("header")}>
      <div className={cx("header_inside")}>
        <span onClick={() => route.push("/")}>
          <MainLogo />
        </span>
        <div className={cx("header_inside_right")}>
          <div className={cx("header_inside_right_container")}>
            <div className={cx("header_inside_right_container_button")}>
              <Button
                modifier={ButtonModifier.PRIMARY}
                onClick={() => route.push("/add-post")}
              >
                <AddIcon /> Add Property
              </Button>
            </div>

            <span>
              <NotificationIcon />
            </span>
            <div className={cx("profile-setting")}>
              <div
                className={cx("header_inside_right_container_btn")}
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
                  urlRoute="/"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
