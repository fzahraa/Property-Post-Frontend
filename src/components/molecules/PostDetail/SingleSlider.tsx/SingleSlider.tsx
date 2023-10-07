import React, { FC } from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import { createModuleStyleExtractor } from "@/src/utils/css";
import ImageFavouriteIcon from "@/src/assets/svg/ImageFavouriteIcon";
import styles from "./SingleSlider.module.scss";
import LeftIcon from "@/src/assets/svg/LeftIcon";
import RightIcon from "@/src/assets/svg/RightIcon";
import ExportedImage from "next-image-export-optimizer";
import ViewIcon from "@/src/assets/svg/ViewIcon";
import ShareIcon from "@/src/assets/svg/ShareIcon";
import BlackFavouriteIcon from "@/src/assets/svg/BlackFavouriteIcon";
import FullViewIcon from "@/src/assets/svg/FullViewIcon";
import { ISingleCard } from "@/src/context/types";

const cx = createModuleStyleExtractor(styles);

export interface IPostDetailSingleSlider {
  property?: ISingleCard;
}
const SingleSlider: FC<IPostDetailSingleSlider> = ({ property }) => {
  return (
    <div className="Slider-inside">
      <div className={cx("post_inside_left_slider")}>
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
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
        >
          <div className="prev" id={cx("left-icon")}>
            <LeftIcon color="#c5202f" />
          </div>
          <div className="next" id={cx("right-icon")}>
            <RightIcon color="#c5202f" />
          </div>
          {property?.photos &&
            property?.photos.map((image, index) => {
              return (
                <SwiperSlide  key={index}>
                <div key={index} className={cx("slider")}>
                  <div className={cx("slider_view")}>
                    {/* <span>
                      <FullViewIcon />
                    </span> */}
                  </div>
                  <ExportedImage
                    src={`http://localhost:3000/public/uploads/propertyImages/${image.photoURL.split("\\").pop()}`}
                    alt={property?.type}
                    width={800}
                    height={500}
                    unoptimized = {true}
                    layout="responsive"
                    objectFit="contain"
                    className={cx("slider-image")}
                  />
                  <div className={cx("slider_favourite")}>
                    <span>
                      <ImageFavouriteIcon />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
  )})
}
           {/*<SwiperSlide>
            <div className={cx("slider")}>
              <div className={cx("slider_view")}>
                <span>
                  <FullViewIcon />
                </span>
              </div>
              <ExportedImage
                src="/images/Home/MainHome1.jpg"
                alt="Large Image"
                width={800}
                height={500}
                layout="responsive"
                objectFit="contain"
                className={cx("slider-image")}
              />
              <div className={cx("slider_favourite")}>
                <span>
                  <ImageFavouriteIcon />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("slider")}>
              <div className={cx("slider_view")}>
                <span>
                  <FullViewIcon />
                </span>
              </div>
              <ExportedImage
                src="/images/Home/MainHome2.jpg"
                alt="Large Image"
                width={800}
                height={500}
                layout="responsive"
                objectFit="contain"
                className={cx("slider-image")}
              />
              <div className={cx("slider_favourite")}>
                <span>
                  <ImageFavouriteIcon />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("slider")}>
              <div className={cx("slider_view")}>
                <span>
                  <FullViewIcon />
                </span>
              </div>
              <ExportedImage
                src="/images/Home/MainHome4.jpg"
                alt="Large Image"
                width={800}
                height={500}
                layout="responsive"
                objectFit="contain"
                className={cx("slider-image")}
              />
              <div className={cx("slider_favourite")}>
                <span>
                  <ImageFavouriteIcon />
                </span>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className={cx("slider-footer")}>
        <div className={cx("slider-footer_inside")}>
          <div className={cx("slider-footer_inside_content")}>
            <span>
              <BlackFavouriteIcon />
            </span>
            <p>10</p>
          </div>
          <div className={cx("slider-footer_inside_content")}>
            <span>
              <ViewIcon />
            </span>
            <p>121 Views</p>
          </div>
          <div className={cx("slider-footer_inside_content")}>
            <span>
              <ShareIcon />
            </span>
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
