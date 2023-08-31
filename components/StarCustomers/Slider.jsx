"use client";

import React from "react";
import Card from "./Card";
import "swiper/css/pagination";
import styles from "./StarCustomers.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/autoplay";

const content = [
  {
    image: "/assets/images/starCustomers/mikanewton.webp",
    owner: "mikanewton",
    feedback:
      "Сергій - мій друг. Він допоміг мені в фінальному кроці до прийняття себе, за що я дуже вдячна йому.",
    link: "https://www.instagram.com/mikanewton/",
    altImage: "/assets/images/starCustomers/mikanewton_Alt.webp",
  },
  {
    image: "/assets/images/starCustomers/lizagacko.webp",
    owner: "lizagacko",
    feedback:
      "Пройшла трансформацію від Сергія, яка змінила моє життя! Повністю ручаюсь за його послуги.",
    link: "https://www.instagram.com/lizagacko/",
    altImage: "/assets/images/starCustomers/lizagacko_Alt.webp",
  },
  {
    image: "/assets/images/starCustomers/sofia_stuzhuk.webp",
    owner: "sofia_stuzhuk",
    feedback:
      "Мій самий найкращий провідник та вчитель - Сергій Скляренко. Рекомендую від всієї душі.",
    link: "https://www.instagram.com/dashapimakhova/",
    altImage: "/assets/images/starCustomers/sofia_stuzhuk_Alt.webp",
  },
  {
    image: "/assets/images/starCustomers/dashaspok.webp",
    owner: "dashaspok",
    feedback:
      "Я відчула, що зробила мега квантовий стрибок. Все це завдяки трансформації у Сергія.",
    link: "https://www.instagram.com/sofia_stuzhuk/",
    altImage: "/assets/images/starCustomers/dashaspok_Alt.webp",
  },
];

function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };
  return (
    <Swiper
      className={styles.custom_swiper}
      style={{
        "--swiper-pagination-bottom": "0px",
        "--swiper-pagination-bullet-inactive-color": "#454545;",
        "--swiper-pagination-color": "#9D253F",
      }}
      modules={[Pagination]}
      pagination={pagination}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 23,
        },
      }}
    >
      {content.map((item, index) => (
        <SwiperSlide key={index}>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
