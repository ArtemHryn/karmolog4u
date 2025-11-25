import { useSwiper } from 'swiper/react';
import styles from './ResearchSlider.module.scss';
import SliderArrow from '@/components/Common/Icons/SliderArrow';

const Button = ({ index }) => {
  const swiper = useSwiper();
  return index === 2 ? (
    <button
      onClick={() => swiper.slideNext()}
      type="button"
      aria-label="Наступний слайд"
      className={`${styles.slider_button} ${styles.slider_button_next}`}
    >
      <SliderArrow styled={`${styles.slider_arrow}`} />
    </button>
  ) : index === 3 ? (
    <button
      onClick={() => swiper.slidePrev()}
      type="button"
      aria-label="Попередній слайд"
      className={`${styles.slider_button} ${styles.slider_button_prev}`}
    >
      <SliderArrow styled={styles.slider_arrow} />
    </button>
  ) : null;
};

export default Button;
