"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import getTariffs from "@helper/education/karmologistTariffs";

const Slider = () => {
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
        {getTariffs().map((card, index) => (
          <SwiperSlide key={index}>
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;