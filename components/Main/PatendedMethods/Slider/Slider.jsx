"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import styles from "../PatentedMethods.module.scss";
import Title from "@components/Common/Title/Title";

const slides = [
  { name: "Кармотерапія", link: "/" },
  { name: "Кармотерапія в подружній парі", link: "/" },
];

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };
  return (
    <div>
      <Swiper
        className={styles.swiper}
        modules={[Pagination]}
        spaceBetween={24}
        pagination={pagination}
        centeredSlides={true}
        style={{
          "--swiper-pagination-bullet-inactive-color": "#454545",
          "--swiper-pagination-color": "#9D253F",
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            pagination: false,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
          },
        }}
      >
        {slides.map((el) => (
          <SwiperSlide key={el.name}>
            <div className={styles.wrapper}>
              <Title variant="p" styled={styles.text}>
                {el.name}
              </Title>
              <Link href={el.link} className={styles.button_link}>
                Переглянути
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
