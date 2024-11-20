'use client';
import { useEffect } from 'react';

const ChangeColor = ({ children }) => {
  useEffect(() => {
    // Змінюємо колір body при завантаженні сторінки
    document.body.style.backgroundColor = '#fdfdfd';

    // Повертаємо початковий колір при розмонтуванні компонента
    return () => {
      document.body.style.backgroundColor = '#101010';
    };
  });
  return <>{children}</>;
};

export default ChangeColor;
