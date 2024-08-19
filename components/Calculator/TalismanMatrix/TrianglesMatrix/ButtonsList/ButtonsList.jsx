import { useLocale } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { open_Sans } from '@app/[locale]/layout';

import 'swiper/css';
import styles from './ButtonsList.module.scss';
import './slider.scss';

const buttons = {
  uk: [
    'Ідейна матриця',
    'Матриця натхнення та дії',
    'Матриця енергетичної  зірки',
    'Матриця матеріально результату',
    'Матриця почесті та слави',
    'Матриця земної зірки процвітання',
    'Матриця процвітання та матеріалізації',
  ],
  ru: [
    'Идейная матрица',
    'Матрица вдохновения и действия',
    'Матрица энергетической звезды',
    'Матрица материального результата',
    'Матрица почестей и славы',
    'Матрица земной звезды процветания',
    'Матрица процветания и материализации',
  ],
};

const ButtonsList = ({ activeTriangle, setActiveTriangle }) => {
  const locale = useLocale();

  return (
    <>
      <ul className={styles.list}>
        {buttons[locale].map((el, index) => (
          <li key={index} className={styles.list_element}>
            <button
              className={`${styles.button} ${open_Sans.className} ${
                activeTriangle === index ? styles.button_active : ''
              }`}
              onClick={() => setActiveTriangle(index)}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
      <Swiper
        className={styles.slider}
        slidesPerView={'auto'}
        loop={true}
        breakpoints={{
          360: {
            spaceBetween: 16,
          },
          768: {
            spaceBetween: 24,
          },
        }}
      >
        {buttons[locale].map((el, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <button
              className={`${styles.button} ${open_Sans.className} ${
                activeTriangle === index ? styles.button_active : ''
              }`}
              onClick={() => setActiveTriangle(index)}
            >
              {el}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ButtonsList;
