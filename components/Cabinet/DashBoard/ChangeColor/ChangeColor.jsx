'use client';
import { useEffect } from 'react';

import styles from './ChangeColor.module.scss';

const ChangeColor = ({ children }) => {
  useEffect(() => {
    // Змінюємо колір body при завантаженні сторінки
    document.body.style.backgroundColor = '#fdfdfd';
    // Повертаємо початковий колір при розмонтуванні компонента
    return () => {
      document.body.style.backgroundColor = '#101010';
    };
  });
  return <div className={styles.total_wrapper}>{children}</div>;
};

export default ChangeColor;
