import React, { FC } from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./MultiSlider.module.scss";
import LeftIcon from "@/src/assets/svg/LeftIcon";
import RightIcon from "@/src/assets/svg/RightIcon";
import ExportedImage from "next-image-export-optimizer";
import { ISingleCard } from "@/src/context/types";

const cx = createModuleStyleExtractor(styles);

export interface IPostDetailMultiSlider {
  property?: ISingleCard;
}
const MultiSlider: FC<IPostDetailMultiSlider> = ({ property}) => {
  return (
    <div className={cx("post_inside_slider-2")}>
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          1000: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          901: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          568: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        <div className="prev" id={cx("left-icon")}>
          <LeftIcon color="#c5202f" />
        </div>
        <div className="next" id={cx("right-icon")}>
          <RightIcon color="#c5202f" />
        </div>
        {property?.photos &&
            property?.photos.map((image : any, index : any) => {
              return (
        <SwiperSlide key={index}>
          <div className={cx("slider-item")}>
            <ExportedImage
              src={`http://localhost:3000/public/uploads/propertyImages/${image.photoURL.split("\\").pop()}`}
              alt="Large Image"
              width={154}
              height={154}
              unoptimized = {true}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
          )})
        }
        {/* <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx("slider-item")}>
            <ExportedImage
              src="/images/Home/MainHome.png"
              alt="Large Image"
              width={154}
              height={154}
              layout="responsive"
              objectFit="contain"
              className={cx("slider-small-image")}
            />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default MultiSlider;
