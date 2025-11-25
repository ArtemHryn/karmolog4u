'use client';

import { useSwiper } from 'swiper/react';
import ArrowDownV2 from '@/components/Common/Icons/ArrowDownV2';

import styles from './FeedbacksSlider.module.scss';

const NavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.btn_container}>
      <button onClick={() => swiper.slidePrev()} className={`${styles.btn}`}>
        <ArrowDownV2 styled={`${styles.arrow} ${styles.arrow_left}`} />
      </button>
      <button onClick={() => swiper.slideNext()} className={`${styles.btn}`}>
        <ArrowDownV2 styled={`${styles.arrow} ${styles.arrow_right}`} />
      </button>
    </div>
  );
};

export default NavButtons;
