'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ResearchSlideElement from './ResearchSlideElement';

import styles from './ResearchSlider.module.scss';

//Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//research info
const researchBlock = [
  {
    text: {
      uk: '"Психологічний аналіз особливостей формування асертивної поведінки психологів-консультантів в умовах воєнного стану"',
      ru: '"Психологический анализ особенностей формирования ассертивного поведения психологов-консультантов в условиях военного положения"',
    },
    file: 'http://habitus.od.ua/journals/2023/50-2023/22.pdf',
  },
  {
    text: {
      uk: '"Феномен розвитку емпатії особистості у період дорослішання: соціально-психологічний аспект"',
      ru: '"Феномен развития эмпатии личности в период взросления: социально-психологический аспект"',
    },
    file: 'http://visnyk.nuou.org.ua/article/view/235113/237965',
  },
  {
    text: {
      uk: '"Роль асертивності в професійному становленні психолога-консультанта в умовах соціальних викликів"',
      ru: '"Роль ассертивности в профессиональном становлении психолога-консультанта в условиях социальных вызовов"',
    },
    file: 'http://perspectives.pp.ua/index.php/pis/article/view/5208/5238',
  },
  {
    text: {
      uk: '"Психологічні особливості емпатії особистості у період дорослішання"',
      ru: '"Психологические особенности эмпатии личности в период взросления"',
    },
    file: '/assets/Збірник_7_2020.pdf',
  },
  {
    text: {
      uk: '"The Development of Assertiveness of the Individual as a Subject of Communication"',
      ru: '"The Development of Assertiveness of the Individual as a Subject of Communication"',
    },
    file: 'https://lumenpublishing.com/journals/index.php/rrem/article/view/5175/4293',
  },
  {
    text: {
      uk: '"Медитація як психологічна практика роботи з духом"',
      ru: '"Медитация как психологическая практика работы с духом"',
    },
    file: 'http://perspectives.pp.ua/index.php/np/article/view/4930/4957',
  },
];

const ResearchSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };

  return (
    <div className={styles.swiper_container}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={pagination}
        style={{
          '--swiper-pagination-bullet-inactive-color': '#454545;',
          '--swiper-pagination-color': '#CFB691',
        }}
        speed={1200}
        breakpoints={{
          360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {researchBlock.map((block, index) => (
          <SwiperSlide key={index}>
            <ResearchSlideElement card={block} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResearchSlider;
