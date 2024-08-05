'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import BookSlide from './BookSlide';

import styles from './Books.module.scss';

export const books = [
  {
    id: 1,
    image: '/assets/images/book1.webp',
    text: {
      uk: '"Філософія 22 енергій світостворення"',
      ru: '"Философия 22 энергий миротворчества"',
    },
    link: 'https://karmolog4u.vercel.app/products/guides-and-books/2',
  },
  {
    id: 2,
    image: '/assets/images/book2.webp',
    text: {
      uk: '"Технології тренінгу: улюблений  “складний” учасник"',
      ru: '"Технологии тренинга: любимый "сложный" участник"',
    },
    link: 'https://karmolog4u.vercel.app/products/guides-and-books/3',
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
          '--swiper-pagination-bullet-inactive-color': '#454545;',
          '--swiper-pagination-color': '#CFB691',
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
        {books.map(book => (
          <SwiperSlide key={book.id}>
            <BookSlide book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Books;
