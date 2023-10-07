import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./BusinessProfileForm.module.scss";
import { Input } from "@/src/components/atoms/Input";
import DownArrow from "@/src/assets/svg/DownArrow";
import UploadIcon from "@/src/assets/svg/UploadIcon";
import PakistanIcon from "@/src/assets/svg/PakistanIcon";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
const cx = createModuleStyleExtractor(styles);

const BusinessProfileForm = () => {
  const businessType = ["Lahore", "Karachi", "Faisalabad", "Jhang"];
  const [isBusinessType, setIsBusinessType] = useState<boolean>(false);
  const Country = ["Pakistan", "pakistan", "Pakistan", "Pakistan"];
  const [isCountry, setIsCountry] = useState<boolean>(false);

  return (
    <div className={cx("business-form")}>
      <h1>Setup Your Business Profile</h1>
      <div className={cx("business-form_inside")}>
        <div className={cx("business-form_inside_left")}>
          <div className={cx("form-input")}>
            <label>Buiness Type</label>

            <div
              className={cx("dropdown")}
              onClick={() => setIsBusinessType(!isBusinessType)}
            >
              <Input
                type="text"
                placeholder="Which Type of Business you do?"
                value=""
                className="dropdown-search"
              />
              <span>
                <DownArrow />
              </span>
              {isBusinessType && <DropDown dropdown={businessType} />}
            </div>
          </div>
          <div className={cx("form-input")}>
            <label>Legal Business Name</label>
            <Input
              type="text"
              placeholder="Business Name"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Business Email</label>
            <Input
              type="email"
              placeholder="yourname@gmail.com"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Business Domain</label>
            <Input
              type="text"
              placeholder="WWW.XYZ.COM"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Contact Person Name</label>
            <div className={cx("form-input_inside")}>
              <div
                className={cx("dropdown-v2")}
                onClick={() => setIsCountry(!isCountry)}
              >
                <p>
                  <span>
                    <PakistanIcon />
                  </span>
                  +92
                  <span>
                    <DownArrow />
                  </span>
                </p>

                {isCountry && <DropDown dropdown={Country} />}
              </div>
              <Input
                type="text"
                placeholder="123355677"
                value=""
                className="dropdown-search-number"
              />
            </div>
          </div>
          <div className={cx("form-input")}>
            <label>CNIC Number</label>
            <Input
              type="text"
              placeholder="36603-7896543-9"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("from-buttons")}>
            <Button modifier={ButtonModifier.SECONDARY}>
              <UploadIcon /> Upload Business Images
            </Button>
            <Button modifier={ButtonModifier.SECONDARY}>
              <UploadIcon /> Upload Business Documents
            </Button>
          </div>
        </div>
        <div className={cx("business-form_inside_right")}>
          <div className={cx("form-input")}>
            <label>Company Size</label>
            <Input
              type="text"
              placeholder="e.g 20-100"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Registered As</label>
            <Input
              type="text"
              placeholder="e.g private Ltd"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Name of Business Owner</label>
            <Input
              type="text"
              placeholder="Owner Name"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Business Address</label>
            <Input
              type="text"
              placeholder="Address"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx("form-input")}>
            <label>Average Turnover Yearly</label>
            <Input
              type="text"
              placeholder="e.g $40000"
              value=""
              className="add-post-form"
            />
          </div>
          <div className={cx(["form-input", "input-textarea"])}>
            <label>Description</label>
            <textarea id="" cols={20} rows={5} placeholder="e.g Personal bio" />
          </div>
        </div>
      </div>
      <div className={cx("business-form_footer")}>
        <p>
          By clicking submit, you agree to our <span>terms and conditions</span>{" "}
          and that you have read our <span>privacy policy</span>
        </p>
        <p>
          Already Registerd? <span>Log in here</span>
        </p>
      </div>
      <div className={cx("business-form_button")}>
        <Button modifier={ButtonModifier.PRIMARY}>Save Profile</Button>
      </div>
    </div>
  );
};

export default BusinessProfileForm;
