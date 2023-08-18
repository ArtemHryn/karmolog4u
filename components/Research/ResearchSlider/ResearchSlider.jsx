"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ResearchSlideElement from "./ResearchSlideElement";

import styles from "./ResearchSlider.module.scss";

//Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//research info
const researchBlock = [
  {
    text: "“Психологічний аналіз особливостей формування асертивної поведінки психологів-консультантів в умовах воєнного стану”",
    file: "#",
  },
  {
    text: "“Феномен розвитку емпатії особистості у період дорослішання: соціально-психологічний аспект”",
    file: "#",
  },
  {
    text: "“Роль асертивності в професійному становленні психолога-консультанта в умовах соціальних викликів”",
    file: "#",
  },
  {
    text: "“Психологічні особливості емпатії особистості у період дорослішання”",
    file: "#",
  },
  {
    text: "“The Development of Assertiveness of the Individual as a Subject of Communication”",
    file: "#",
  },
  {
    text: "“Медитація як психологічна практика роботи з духом”",
    file: "#",
  },
];

const ResearchSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination} bullet"></span>`;
    },
  };

  return (
    <div className={styles.swiper_container}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={pagination}
        breakpoints={{
          360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1440: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {researchBlock.map((block, index) => (
          <SwiperSlide key={index}>
            <ResearchSlideElement card={block} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResearchSlider;
