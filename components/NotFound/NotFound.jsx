'use client';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { open_Sans } from '@app/[locale]//layout';
import Logo from './Logo';

import styles from './NotFound.module.scss';

const NotFoundComponent = () => {

  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title}>
        <Logo styled={styles.logo} />
        404
      </TitleNoStyles>
      <p className={styles.text}>
        Невідомий шлях. Але саме так народжуються відкриття. Запрошую зануритися в інші розділи
        сайту та знайти ключ до глибокого розуміння себе. Разом ми розкриємо двері до внутрішнього
        світу та гармонії.
      </p>
      <button
        onClick={() => (window.location.href = '/')}
        className={`${styles.link} ${open_Sans.className}`}
      >
        На головну
      </button>
    </div>
  );
};

export default NotFoundComponent;
