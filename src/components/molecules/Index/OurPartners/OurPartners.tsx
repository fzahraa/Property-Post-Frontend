import { Pagination, Autoplay, Navigation } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./OurPartners.module.scss";
import ExportedImage from "next-image-export-optimizer";
import LeftIcon from "@/src/assets/svg/LeftIcon";
import RightIcon from "@/src/assets/svg/RightIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
const cx = createModuleStyleExtractor(styles);

const OurPartners = () => {
  return (
    <div className={cx("partners")}>
      <h1>Our Partners</h1>
      <div className={cx("partners_inside")}>
        <>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            className="mySwiper"
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              1100: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              580: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            <div className="prev" id={cx("left-icon")}>
              <LeftIcon color="#c5202f" />
            </div>
            <div className="next" id={cx("right-icon")}>
              <RightIcon color="#c5202f" />
            </div>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/hbl.png"
                    width={107}
                    height={36}
                    alt="Cover"
                  />
                </div>
                <p>Habib Bank Limited</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>

      <div className={cx("partners_button")}>
        <Button modifier={ButtonModifier.TRANSPARENT}>View All Partners</Button>
      </div>
    </div>
  );
};

export default OurPartners;
