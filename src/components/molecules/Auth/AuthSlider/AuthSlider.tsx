import { Pagination, Autoplay, Navigation } from "swiper";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./AuthSlider.module.scss";
import ExportedImage from "next-image-export-optimizer";
import LeftIcon from "@/src/assets/svg/LeftIcon";
import RightIcon from "@/src/assets/svg/RightIcon";
const cx = createModuleStyleExtractor(styles);
export interface IAuthSlider {
  className?: string;
}

const AuthSlider: FC<IAuthSlider> = ({ className }) => {
  return (
    <div className={cx("auth-slider")}>
      <div className={cx("auth-slider_inside")}>
        <div className="auth-slider-container">
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            className="mySwiper"
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
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
                    src="/images/image1.png"
                    alt="Cover"
                    width={1000}
                    height={1000}
                    className={cx([className, "auth-slider-image"])}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/image2.png"
                    alt="Cover"
                    width={1000}
                    height={1000}
                    className={cx([className, "auth-slider-image"])}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/image1.png"
                    alt="Cover"
                    width={1000}
                    height={1000}
                    className={cx([className, "auth-slider-image"])}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_image")}>
                  <ExportedImage
                    src="/images/image2.png"
                    alt="Cover"
                    width={1000}
                    height={1000}
                    className={cx([className, "auth-slider-image"])}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AuthSlider;
