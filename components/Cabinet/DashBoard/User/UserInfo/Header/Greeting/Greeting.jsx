'use client';

import { useSession } from 'next-auth/react';

import styles from './Greeting.module.scss';
import { unbounded } from '@/app/[locale]/layout';

const Greeting = () => {
  const { data } = useSession();
  const user = data?.user || { name: '' };
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.name_text} ${unbounded.className}`}>Привіт, {user.name}</p>
      <p className={`${styles.greeting} ${unbounded.className}`}>
        Ласкаво просимо до особистого кабінету!
      </p>
    </div>
  );
};

export default Greeting;
