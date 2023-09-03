"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import BookSlide from "./BookSlide";

import styles from "./Books.module.scss";

export const books = [
  {
    id: 1,
    image: "/assets/images/book1.webp",
    text: "“Технології тренінгу: улюблений  “складний” учасник”",
    link: "#",
  },
  {
    id: 2,
    image: "/assets/images/book2.webp",
    text: "“Тренінгові вправи для початківців та професіоналів”",
    link: "#",
  },
];

const Books = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };

  return (
    <div className={styles.books_wrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={pagination}
        centeredSlides={true}
        style={{
          "--swiper-pagination-bullet-inactive-color": "#454545;",
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
          },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookSlide book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Books;
