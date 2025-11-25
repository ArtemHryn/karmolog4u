'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLocale, useTranslations } from 'next-intl';
import { Pagination } from 'swiper';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from '../PatentedMethods.module.scss';

const slides = [
  {
    name: { uk: 'Кармотерапія', ru: 'Кармотерапия' },
    link: 'https://spinoza.in.ua/2023/09/01/%D0%BA%D0%B0%D1%80%D0%BC%D0%BE%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D1%96%D1%8F-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-%D1%81%D0%B5%D1%80%D0%B3%D1%96%D1%8F-%D1%81%D0%BA%D0%BB%D1%8F%D1%80%D0%B5%D0%BD%D0%BA%D0%BE/',
  },
  {
    name: { uk: 'Кармотерапія в подружній парі', ru: 'Кармотерапия в супружеской паре' },
    link: 'https://spinoza.in.ua/2023/10/14/%d0%ba%d0%b0%d1%80%d0%bc%d0%be%d1%82%d0%b5%d1%80%d0%b0%d0%bf%d1%96%d1%8f-%d0%bc%d0%b5%d1%82%d0%be%d0%b4-%d1%81%d0%b5%d1%80%d0%b3%d1%96%d1%8f-%d1%81%d0%ba%d0%bb%d1%8f%d1%80%d0%b5%d0%bd%d0%ba%d0%be-2/',
  },
];

const Slider = () => {
  const locale = useLocale();
  const t = useTranslations('Main.PatentedMethods');
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
          '--swiper-pagination-bullet-inactive-color': '#454545',
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
        {slides.map(el => (
          <SwiperSlide key={el.name[locale]}>
            <div className={styles.wrapper}>
              <TitleNoStyles variant="p" styled={styles.text}>
                {el.name[locale]}
              </TitleNoStyles>
              <Link href={el.link} className={styles.button_link} target="_blank">
                {t('view')}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
