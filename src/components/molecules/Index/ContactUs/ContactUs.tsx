import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { Input } from "@/src/components/atoms/Input";
import ExportedImage from "next-image-export-optimizer";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./ContactUs.module.scss";
const cx = createModuleStyleExtractor(styles);

const ContactUs = () => {
  return (
    <div className={cx("contact-us")}>
      <h1>Contact Us</h1>
      <div className={cx("contact-us_container")}>
        <div className={cx("contact-us_container_left")}>
          <Input
            type="text"
            value=""
            placeholder="Name"
            className="contact-form"
          />
          <Input
            type="email"
            value=""
            placeholder="Email"
            className="contact-form"
          />
          <Input
            type="text"
            value=""
            placeholder="How did You hear about us?"
            className="contact-form"
          />
          <textarea
            placeholder="Project Description"
            cols={30}
            rows={5}
            className={cx("contact-form-textarea")}
          />
          <div className={cx("contact-us_container_left_button")}>
            <Button modifier={ButtonModifier.PRIMARY}>Submit</Button>
          </div>
        </div>
        <div className={cx("contact-us_container_right")}>
          <ExportedImage
            src="/images/contact.png"
            alt="Large Image"
            width={652}
            height={508}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
