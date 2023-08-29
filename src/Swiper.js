// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";

export default () => {
  return (
    <Swiper
      className="Swiper"
      spaceBetween={1}
      slidesPerView={6}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiperlist">7</SwiperSlide>
      <SwiperSlide className="swiperlist">8</SwiperSlide>
      <SwiperSlide className="swiperlist">9</SwiperSlide>
      <SwiperSlide className="swiperlist">9.5</SwiperSlide>
      <SwiperSlide className="swiperlist">10</SwiperSlide>
      <SwiperSlide className="swiperlist">10.5</SwiperSlide>
      <SwiperSlide className="swiperlist">11</SwiperSlide>
    </Swiper>
  );
};
