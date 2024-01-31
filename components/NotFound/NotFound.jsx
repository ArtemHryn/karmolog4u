import Link from 'next/link';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { open_Sans } from '@app/layout';

import styles from './NotFound.module.scss';
import Logo from './Logo';

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
      <Link href="/" className={`${styles.link} ${open_Sans.className}`}>
        На головну
      </Link>
    </div>
  );
};

export default NotFoundComponent;
