import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Linkprocess1 from "./linkprocess";
import Linkprocess2 from "./linkprocess2";
import Linkprocess3 from "./linkprocess3";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../container";
// Import Swiper styles
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function Porcess() {
  return (
    <>
      <Swiper
        cssMode={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper   text-black "
      >
        <Linkprocess1 />
      </Swiper>
    </>
  );
}
