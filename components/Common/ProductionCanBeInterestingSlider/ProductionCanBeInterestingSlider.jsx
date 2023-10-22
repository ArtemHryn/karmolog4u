"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Meditation from "@components/Products/Meditations/Meditation";

import styles from "./ProductionCanBeInterestingSlider.module.scss";
import "swiper/css";

const ProductionCanBeInterestingSlider = ({ slides }) => {
  if (slides.length === 0) return null;
  return (
    <Swiper
      className={styles.swiper}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {slides.map((el, index) => (
        <SwiperSlide key={index}>
          <div className={styles.meditation_wrapper}>
            <Meditation card={el} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductionCanBeInterestingSlider;
