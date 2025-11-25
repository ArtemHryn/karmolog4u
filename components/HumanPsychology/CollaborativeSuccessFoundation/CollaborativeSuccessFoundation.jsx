'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { Pagination } from 'swiper';
import Container from '@/components/Common/Container/Container';
import Card from './Card';
import Title from '@/components/Common/Title/Title';
import React from 'react';

import styles from './CollaborativeSuccessFoundation.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const collaborativeSuccess = [
  '/assets/images/humanPsychology/collaborativeFoundation_1.webp',
  '/assets/images/humanPsychology/collaborativeFoundation_2.webp',
  '/assets/images/humanPsychology/collaborativeFoundation_3.webp',
  '/assets/images/humanPsychology/collaborativeFoundation_4.webp',
  '/assets/images/humanPsychology/collaborativeFoundation_5.webp',
];

function CollaborativeSuccessFoundation() {
  const t = useTranslations('Human_psychology.Foundation.collaboration');

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <Title styled={styles.title} variant="h2">
        {t('title')}
      </Title>
      <Swiper
        className={styles.swiper}
        style={{
          '--swiper-pagination-bottom': '0px',
          '--swiper-pagination-bullet-inactive-color': '#454545;',
          '--swiper-pagination-color': '#CFB691',
        }}
        modules={[Pagination]}
        grabCursor={true}
        pagination={pagination}
        spaceBetween={24}
        slidesPerView={'auto'}
        // loop={true}
      >
        {collaborativeSuccess.map((source, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Card source={source} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.spot} />
    </Container>
  );
}

export default CollaborativeSuccessFoundation;
