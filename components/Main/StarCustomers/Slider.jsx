'use client';

import React from 'react';
import Card from './Card';
import 'swiper/css/pagination';
import styles from './StarCustomers.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/autoplay';

const content = [
  {
    image: '/assets/images/starCustomers/mikanewton.webp',
    owner: 'mikanewton',
    feedback:
      'Завдяки дружбі с Сергієм, отримала ще й вчителя та наставника, який допоміг не тільки в знайомстві з собою справжньою, а головне – в прийнятті такою, як є, за що я  дуже йому вдячна.',
    link: 'https://www.instagram.com/mikanewton/',
  },
  {
    image: '/assets/images/starCustomers/lizagacko.webp',
    owner: 'lizagacko',
    feedback:
      'Хочете повної трансформації — тоді вам точно на консультацію до Сергія. Я реальний приклад того, як з його допомогою можна кардинально змінити своє життя — то ж результат гарантований.',
    link: 'https://www.instagram.com/lizagacko/',
  },
  {
    image: '/assets/images/starCustomers/sofia_stuzhuk.webp',
    owner: 'sofia_stuzhuk',
    feedback:
      'Сергій саме той фахівець, який не просто розказав, навчив, а “взяв за руку” та провів до отримання бажаного результату. Тому рекомендую – кращого провідника та вчителя знайти важко.',
    link: 'https://www.instagram.com/sofia_stuzhuk/',
  },
  {
    image: '/assets/images/starCustomers/alessandra_shulgina.webp',
    owner: 'alessandra_shulgina',
    feedback:
      'Раніше думала, що то фантастика, але після трансформації у Сергія зрозуміла та відчула, що зробила мегаквантовий стрибок. Спробуйте – це неймовірні відчуття.',
    link: 'https://www.instagram.com/alessandra_shulgina/',
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
        '--swiper-pagination-bottom': '0px',
        '--swiper-pagination-bullet-inactive-color': '#454545;',
        '--swiper-pagination-color': '#CFB691',
      }}
      modules={[Pagination]}
      pagination={pagination}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 10,
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
