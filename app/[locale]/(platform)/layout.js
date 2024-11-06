'use client';
import { useEffect } from 'react';
import './globals.scss';

const CabinetLayout = ({ children }) => {
  useEffect(() => {
    // Змінюємо колір body при завантаженні сторінки
    document.body.style.backgroundColor = '#101010';

    // Повертаємо початковий колір при розмонтуванні компонента
    return () => {
      document.body.style.backgroundColor = '#101010';
    };
  });

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default CabinetLayout;
