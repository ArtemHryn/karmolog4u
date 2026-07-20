'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import BookSlide from './BookSlide';

import styles from './Books.module.scss';
import ProductsLoading from '../../../Products/ProductsLoading/ProductsLoading';
import { useQuery } from '@tanstack/react-query';
import { base_url, BOOKS } from '../../../../helper/consts';

const getGuidesAndBooksList = async () => {
  const res = await fetch(`${base_url}/products/guides-and-books/get-all`);
  if (!res.ok) {
    throw new Error('Failed to fetch books list');
  }
  return res.json();
};

export const booksTemplate = [
  {
    id: 1,
    cover: '/assets/images/book1.webp',
    name: {
      uk: '"Філософія 22 енергій світостворення"',
      ru: '"Философия 22 энергий миротворчества"',
    },
    link: 'https://karmolog4u.vercel.app/products/guides-and-books/2',
  },
  {
    id: 2,
    cover: '/assets/images/book2.webp',
    name: {
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

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['guidesAndBooks'],
    queryFn: getGuidesAndBooksList,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    select: data => data.filter(b => b.category === BOOKS),
  });

  if (isLoading) return <ProductsLoading />;

  if (isError) return <div>Помилка Завантаження</div>;

  const sliderBooks = !!books && books.length !== 0 ? books : booksTemplate;

  return (
    <div className={styles.books_wrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={pagination}
        style={{
          '--swiper-pagination-bullet-inactive-color': '#454545;',
          '--swiper-pagination-color': '#CFB691',
        }}
        className={styles.swiper}
        breakpoints={{
          360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
          },
        }}
      >
        {sliderBooks.map(book => (
          <SwiperSlide key={book.id}>
            <BookSlide book={book} toList={!(!!books && books.length !== 0)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Books;
