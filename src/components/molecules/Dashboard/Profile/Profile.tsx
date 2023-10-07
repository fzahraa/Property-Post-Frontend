import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./Profile.module.scss";
import ExportedImage from "next-image-export-optimizer";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import Switch from "@/src/components/atoms/Switch/Switch";
const cx = createModuleStyleExtractor(styles);

const Profile = () => {
  const Profile = [
    {
      heading: "Name",
      detail: "Zara Gul",
    },
    {
      heading: "Email",
      detail: "zaragul996@gamil.com",
    },
    {
      heading: "Phone",
      detail: "+254712456781",
    },
    {
      heading: "City",
      detail: "Lahore",
    },
    {
      heading: "Country",
      detail: "Pakistan",
    },
  ];

  const Notifications = [
    "SMS Notification",
    "Email Request notifications",
    "Promotion/Email Notifications",
    "Campaign Active",
    "Weekly Report",
  ];
  return (
    <div className={cx("profile")}>
      <div className={cx("profile_inside")}>
        <div className={cx("profile_inside_left")}>
          <h1>Profile Details</h1>
          <div className={cx("profile_inside_left_container")}>
            {Profile.map((item, index) => (
              <div className={cx("profile-detail")} key={`index_${index}`}>
                <h3>{item.heading}:</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("profile_inside_right")}>
          <div className={cx("profile_inside_right_img")}>
            <ExportedImage
              src="/images/userImage.png"
              alt="Large Image"
              width={164}
              height={164}
            />
          </div>

          <div className={cx("profile_inside_right_btn")}>
            <Button modifier={ButtonModifier.TERIARY}>Edit Profile</Button>
            {/* <Button modifier={ButtonModifier.TERIARY}>Change Password</Button> */}
          </div>
        </div>
      </div>
      <div className={cx("profile_notification")}>
        <h1>Notification Prefernces</h1>
        <div className={cx("profile_notification_container")}>
          {Notifications.map((notification, index) => (
            <div className={cx("notification-detail")} key={`index_${index}`}>
              <p>{notification}</p>

              <Switch />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
