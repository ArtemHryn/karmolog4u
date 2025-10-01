'use client';

import { useRef } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { base_url } from '@/helper/consts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Slide from './Slide/Slide';
import Arrow from './Arrow';
import ErrorLoading from '../../../../ErrorLoading/ErrorLoading';
import { useBreakpoint } from '@/hooks/useBreakpoint';

import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './RecommendedProducts.module.scss';

const fetchRecommendation = async token => {
  const res = await fetch(`${base_url}/product/get-interesting-products`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження Продуктів');
  }
  return res.json();
};

const RecommendedProducts = ({ token }) => {
  const swiperRef = useRef(null);
  const { data, isError } = useSuspenseQuery({
    queryKey: ['recommendations'],
    queryFn: () => fetchRecommendation(token),
    throwOnError: true,
  });
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  if (isError) {
    return <ErrorLoading />;
  }

  const showArrows = (isMobile && data.length > 2) || ((isTablet || isDesktop) && data.length > 4);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Може Вас зацікавити</h4>
      <div className={styles.buttons_wrapper}>
        {showArrows && (
          <button
            type="button"
            aria-label="prev slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${styles.button} ${styles.button_prev}`}
          >
            <Arrow />
          </button>
        )}
        <div className={styles.slider_wrapper}>
          {' '}
          <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            slidesPerView={2}
            breakpoints={{
              360: { slidesPerView: 2, spaceBetween: 16 },
              560: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 24 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {data.map(el => (
              <SwiperSlide key={el.id}>
                <Slide slide={el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {showArrows && (
          <button
            type="button"
            aria-label="next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className={`${styles.button} `}
          >
            <Arrow />
          </button>
        )}
      </div>
    </div>
  );
};

export default RecommendedProducts;
