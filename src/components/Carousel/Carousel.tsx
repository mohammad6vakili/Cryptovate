import React from "react";
import { SwiperCarouselProps } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCarousel: React.FC<SwiperCarouselProps> = (props) => {
  const { children } = props;
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return (
        '<span class="' +
        className +
        '" style="background: #c739ea; box-shadow: 0px 0px 4px #C739EA;" >' +
        "</span>"
      );
    },
  };
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        { children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
