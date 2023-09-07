"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import styles from "./FeedbacksSlider.module.scss";
import Card from "./Card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import NavButtons from "./NavButtons";

const FeedbacksSlider = ({ feedbacks }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };

  return (
    <Swiper
      className={styles.swiper}
      style={{
        "--swiper-pagination-bottom": "0px",
        "--swiper-pagination-bullet-inactive-color": "#454545;",
        "--swiper-pagination-color": "#9D253F",
      }}
      modules={[Pagination]}
      grabCursor={true}
      pagination={pagination}
      spaceBetween={24}
      slidesPerView={"auto"}
      loop={true}
    >
      <NavButtons />
      {feedbacks.map((card, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <Card card={card} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbacksSlider;
