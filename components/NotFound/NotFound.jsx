'use client'
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { open_Sans } from '@app/layout';

import styles from './NotFound.module.scss';
import Logo from './Logo';

const NotFoundComponent = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`https://karmolog4u.vercel.app/`);
    }, 10000);
  }, [router]);

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
      <Link
        href={`https://karmolog4u.vercel.app/`}
        className={`${styles.link} ${open_Sans.className}`}
      >
        На головну
      </Link>
    </div>
  );
};

export default NotFoundComponent;
