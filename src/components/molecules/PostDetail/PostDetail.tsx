import { Pagination, Autoplay, Navigation } from "swiper";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import { createModuleStyleExtractor } from "@/src/utils/css";
import Map from "./Map/Map";
import ImageFavouriteIcon from "@/src/assets/svg/ImageFavouriteIcon";
import styles from "./PostDetail.tsx.module.scss";
import LocationTargetIcon from "@/src/assets/svg/LocationTargetIcon";
import LeftIcon from "@/src/assets/svg/LeftIcon";
import RightIcon from "@/src/assets/svg/RightIcon";
import ExportedImage from "next-image-export-optimizer";
import ViewIcon from "@/src/assets/svg/ViewIcon";
import ShareIcon from "@/src/assets/svg/ShareIcon";
import BlackFavouriteIcon from "@/src/assets/svg/BlackFavouriteIcon";
import FullViewIcon from "@/src/assets/svg/FullViewIcon";
import KeyFeature from "./KeyFeature/KeyFeature";
import SimpleAccordion from "./Accordion/Accordion";
import InputLabelField from "../../atoms/InputLabelField/InputLabelField";
import { Button, ButtonModifier } from "../../atoms/Button";
import { ISingleCard } from "@/src/context/types";
import SingleSlider from "./SingleSlider.tsx/SingleSlider";
import MultiSlider from "./MultiSlider/MultiSlider";
const cx = createModuleStyleExtractor(styles);
export interface IPostDetail {
  property?: ISingleCard;
}
//AIzaSyBmnOt5N39SC5efqHg5w5ddVubetuiEEOw

const PostDetail: FC<IPostDetail> = ({ property }) => {
  //const address = '118 Jahanzaib Street, Shadab Colony Lodhi Colony, Multan, Pakistan'
  const address = property?.location;
  console.log(address);
  return (
    <div className={cx("post")}>
      <div className={cx("post_inside")}>
        <div className={cx("post_inside_left")}>
          <div className={cx("post_inside_left_heading")}>
            <span>Home/Popular Properties/One Family House</span>
            <h1>{property?.projectName}</h1>
            <p>
              <span>
                <LocationTargetIcon />
              </span>
              {property?.location}
            </p>
          </div>

          <div className="Slider-inside">
            <SingleSlider property={property}/>
          </div>

          <MultiSlider property={property}/>

          <div className={cx("post_inside_left_key-feature")}>
            <KeyFeature property={property} />
          </div>
          <div className={cx("post_inside_left_accordion")}>
            <SimpleAccordion />
          </div>
        </div>
        <div className={cx("post_inside_right")}>
          <div className={cx("post_inside_right_top")}>
          <div>
      <Map address={address} />
    </div>
            {/* <ExportedImage
              src="/images/Mapv2.png"
              alt="Large Image"
              width={490}
              height={600}
              layout="responsive"
              objectFit="contain"
              className={cx("map-image")}
            /> */}
          </div>
          <div className={cx("post_inside_right_bottom")}>
            <h2>More about this Property</h2>

            <div className={cx("post_inside_right_bottom_input")}>
              <InputLabelField label="Name" className="detail-form" />
              <InputLabelField
                label="Email"
                type="email"
                className="detail-form"
              />
              <InputLabelField
                label="Phone"
                type="number"
                className="detail-form"
              />
              <InputLabelField
                label="Description"
                type="text"
                className="description"
              />
              <div className={cx("post_inside_right_bottom_input_button")}>
                <Button modifier={ButtonModifier.PRIMARY}>Email Agent</Button>
              </div>
            </div>
            <p>
              By proceeding, you consent to receive calls and texts at the
              number you provided, including marketing by autodialer and
              prerecorded and artificial voice, and email, from realtor.com and
              others about your inquiry and other home-related matters, but not
              as a condition of any purchase; this applies regardless of whether
              you check, or leave un-checked, any box above. More...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
