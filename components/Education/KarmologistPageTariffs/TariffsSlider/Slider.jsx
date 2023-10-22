"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const Slider = ({ tariffs, link }) => {
  return (
    <div>
      <Swiper
        spaceBetween={24}
        breakpoints={{
          360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {tariffs.map((card, index) => (
          <SwiperSlide key={index}>
            <Card card={card} link={link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
