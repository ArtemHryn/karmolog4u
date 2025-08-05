'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import SectionsTemplate from '../SectionsTemplate/SectionsTemplate';
import Card from './Card';

import styles from './AvailableCourses.module.scss';
import 'swiper/css';

const courses = [
  {
    name: 'САМ СОБІ КАРМОЛОГ',
    mobImg: '/assets/images/consultingCourse/About.webp',
    tableImg: '/assets/images/consultingCourse/about_desc.webp',
    about: [
      'Глибинне проживання 22 енергій в "Матриці долі"',
      'Техніки проживання 22 архетипів',
      'Вібраційні ряди та дзеркальні позиції в матриці',
      'Протокол консультування',
      'Трактування енергій авторським методом "Периферичний зір"',
      'Трансформація трьох рівнів свідомості',
      'Трансформаційний шлях людини',
      'Ініціація в канал яснознавства та кармічного зцілення',
      'Модульний формат навчання — 25 годин на місяць',
      '7-годинні теоретичні модулі — тричі на місяць',
      '4-годинні практичні заняття — один раз на місяць',
    ],
  },
  {
    name: 'КОНСУЛЬТАНТСЬКИЙ',

    mobImg: '/assets/images/therapySessions/session-insight-desk.webp',
    tableImg: '/assets/images/therapySessions/session-insight-desk.webp',
    about: [
      'Зовнішні карми',
      'Внутрішні карми у квадраті особистості',
      'Внутрішні карми у квадраті роду',
      'Любовний та грошовий канали',
      'Карта життя',
      'Карта здоров’я',
      'Карта року',
      'Бінуарні ритми',
      'Трактування 22-х кодів долі',
    ],
  },
  {
    name: 'ПОГЛИБЛЕНИЙ  КУРС',
    mobImg: '/assets/images/about_advanced_course.webp',
    tableImg: '/assets/images/advanced_ser.webp',
    about: [
      'Матриця внутрішньої карми. Матриця усвідомленості',
      'Родова карма: методи розрахунку та трансформації',
      'Батьки та діти',
      'Земна зірка процвітання',
      'Небесна зірка процвітання',
      'Демон. Жертва',
      '16 законів карми. Шлях до брами світла',
      'Брама світла',
      'Матриця року',
      'Регресія та інше',
    ],
  },
];

const AvailableCourses = () => {
  return (
    <SectionsTemplate title="Рекомендації">
      <div className={styles.swiper_wrapper}>
        <Swiper spaceBetween={24} className={styles.slider} loop={true}>
          {courses.map((course, i) => (
            <SwiperSlide key={i}>
              <Card course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionsTemplate>
  );
};

export default AvailableCourses;
