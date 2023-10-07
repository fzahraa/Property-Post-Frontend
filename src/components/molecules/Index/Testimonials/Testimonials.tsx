import { Pagination, Autoplay, Navigation } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./Testimonials.module.scss";
import RatingIcon from "@/src/assets/svg/RatingIcon";
import LeftIcon from "@/src/assets/svg/LeftIcon";
import RightIcon from "@/src/assets/svg/RightIcon";
const cx = createModuleStyleExtractor(styles);

const Testimonials = () => {
  return (
    <div className={cx("testimonials")}>
      <h1>Reviews &Testimonials</h1>
      <div className={cx("testimonials_inside")}>
        <>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              960: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              630: {
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
              <LeftIcon color="#fff" />
            </div>
            <div className="next" id={cx("right-icon")}>
              <RightIcon color="#fff" />
            </div>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_text")}>
                  <p>Emily V</p>
                  <span>
                    &quot;If I ever had any questions or concerns, I knew that
                    you were immediately available with answers. You were also
                    able to break down some credit jargon for me that I was
                    unaware of prior to working with you in resolving this debt.
                    Thank you so much for helping me through this process!&quot;
                  </span>
                </div>
                <div className={cx("slider_footer")}>
                  <p>June 9, 2020</p>
                  <span>
                    <RatingIcon />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_text")}>
                  <p>Emily V</p>
                  <span>
                    &quot;If I ever had any questions or concerns, I knew that
                    you were immediately available with answers. You were also
                    able to break down some credit jargon for me that I was
                    unaware of prior to working with you in resolving this debt.
                    Thank you so much for helping me through this process!&quot;
                  </span>
                </div>
                <div className={cx("slider_footer")}>
                  <p>June 9, 2020</p>
                  <span>
                    <RatingIcon />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_text")}>
                  <p>Emily V</p>
                  <span>
                    &quot;If I ever had any questions or concerns, I knew that
                    you were immediately available with answers. You were also
                    able to break down some credit jargon for me that I was
                    unaware of prior to working with you in resolving this debt.
                    Thank you so much for helping me through this process!&quot;
                  </span>
                </div>
                <div className={cx("slider_footer")}>
                  <p>June 9, 2020</p>
                  <span>
                    <RatingIcon />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_text")}>
                  <p>Emily V</p>
                  <span>
                    &quot;If I ever had any questions or concerns, I knew that
                    you were immediately available with answers. You were also
                    able to break down some credit jargon for me that I was
                    unaware of prior to working with you in resolving this debt.
                    Thank you so much for helping me through this process!&quot;
                  </span>
                </div>
                <div className={cx("slider_footer")}>
                  <p>June 9, 2020</p>
                  <span>
                    <RatingIcon />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_text")}>
                  <p>Emily V</p>
                  <span>
                    &quot;If I ever had any questions or concerns, I knew that
                    you were immediately available with answers. You were also
                    able to break down some credit jargon for me that I was
                    unaware of prior to working with you in resolving this debt.
                    Thank you so much for helping me through this process!&quot;
                  </span>
                </div>
                <div className={cx("slider_footer")}>
                  <p>June 9, 2020</p>
                  <span>
                    <RatingIcon />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_text")}>
                  <p>Emily V</p>
                  <span>
                    &quot;If I ever had any questions or concerns, I knew that
                    you were immediately available with answers. You were also
                    able to break down some credit jargon for me that I was
                    unaware of prior to working with you in resolving this debt.
                    Thank you so much for helping me through this process!&quot;
                  </span>
                </div>
                <div className={cx("slider_footer")}>
                  <p>June 9, 2020</p>
                  <span>
                    <RatingIcon />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("slider")}>
                <div className={cx("slider_text")}>
                  <p>Emily V</p>
                  <span>
                    &quot;If I ever had any questions or concerns, I knew that
                    you were immediately available with answers. You were also
                    able to break down some credit jargon for me that I was
                    unaware of prior to working with you in resolving this debt.
                    Thank you so much for helping me through this process!&quot;
                  </span>
                </div>
                <div className={cx("slider_footer")}>
                  <p>June 9, 2020</p>
                  <span>
                    <RatingIcon />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Testimonials;
