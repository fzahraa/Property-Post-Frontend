import FaceBookIcon from "@/src/assets/svg/FaceBookIcon";
import InstaIcon from "@/src/assets/svg/InstaIcon";
import LinkedInIcon from "@/src/assets/svg/LinkedInIcon";
import LocationIcon from "@/src/assets/svg/LocationIcon";
import MailIcon from "@/src/assets/svg/MailIcon";
import PhoneIcon from "@/src/assets/svg/PhoneIcon";
import TwitterIcon from "@/src/assets/svg/TwitterIcon";
import ExportedImage from "next-image-export-optimizer";
import React from "react";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";
const cx = createModuleStyleExtractor(styles);

const Footer = () => {
  const route = useRouter();

  const HeadOffice = [
    {
      logo: <LocationIcon />,
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      logo: <PhoneIcon />,
      label: "+1234567890",
    },
    {
      logo: <MailIcon />,
      label: "farhankhan7k@gmail.com",
    },
  ];
  const SocialIcons = [
    {
      logo: <LinkedInIcon />,
    },
    {
      logo: <FaceBookIcon />,
    },
    {
      logo: <InstaIcon />,
    },
    {
      logo: <TwitterIcon />,
    },
  ];
  const Company = [
    "About Us",
    "Contact Us",
    "About Us",
    "Contact Us",
    "About Us",
    "Contact Us",
  ];
  const Services = [
    "About Us",
    "Contact Us",
    "About Us",
    "Contact Us",
    "About Us",
    "Contact Us",
  ];
  const Information = [
    "About Us",
    "Contact Us",
    "About Us",
    "Contact Us",
    "About Us",
    "Contact Us",
  ];
  return (
    <div className={cx("footer")}>
      <div className={cx("footer_container")}>
        <div className={cx("footer_container_logo")}>
          <span onClick={() => route.push("/")}>
            <ExportedImage
              src="/images/123.svg"
              width={100}
              height={150}
              alt="Property-post"
            />
          </span>
        </div>
        <div className={cx("footer_container_inside")}>
          <div className={cx("footer_container_inside_left")}>
            <div className={cx("footer_container_inside_left_detail")}>
              <h2>Head Office</h2>
              <ul>
                {HeadOffice.map((item, index) => (
                  <li key={`index_${index}`}>
                    <span>{item.logo}</span>
                    <p>{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("footer_container_inside_left_social")}>
              <h2>Follow Us</h2>
              <div className={cx("footer_container_inside_left_social_icons")}>
                {SocialIcons.map((icon, index) => (
                  <span key={`index${index}`}>{icon.logo}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={cx("footer_container_inside_right")}>
            <div className={cx("footer_container_inside_right_company")}>
              <h2>Company</h2>
              <ul>
                {Company.map((value, index) => (
                  <li key={`index_${index}`}>
                    <p>{value}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("footer_container_inside_right_service")}>
              <h2>Services</h2>
              <ul>
                {Company.map((value, index) => (
                  <li key={`index_${index}`}>
                    <p>{value}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("footer_container_inside_right_information")}>
              <h2>Information</h2>
              <ul>
                {Company.map((value, index) => (
                  <li key={`index_${index}`}>
                    <p>{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("footer_copy-right")}>
        <p>© 2022 Property Post. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
