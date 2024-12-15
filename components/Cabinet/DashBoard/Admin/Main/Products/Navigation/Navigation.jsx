'use client';

import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import styles from './Navigation.module.scss';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useSession } from 'next-auth/react';

const defaultNavList = [
  { name: 'Медитації', count: 0, link: 'meditations' },
  { name: 'Вебінари', count: 0, link: 'webinars' },
  { name: 'Гайди та книги', count: 0, link: 'guides-and-books' },
  { name: 'Подарунки студії', count: 0, link: 'gifts' },
];

const fetchProductsCount = async token => {
  const res = await fetch('http://localhost:4499/admin/products/product-count', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const error = {
      message: new Error('Помилка завантаження кількості продуктів'),
      status: res.status,
    };
    throw error;
  }
  return res.json();
};

const Navigation = () => {
  const pathname = usePathname();
  const [navList, setNavList] = useState([]);
  const { data: token } = useSession();

  const { data, isError, error } = useQuery({
    queryKey: ['products-count'],
    queryFn: () => fetchProductsCount(token.accessToken),
  });

  useEffect(() => {
    if (!data) return;

    if (isError) {
      toast.error(error?.message, { autoClose: 2500 });
      setNavList(defaultNavList);
      return;
    }

    const newList = defaultNavList.map(({ name, link, count }) => {
      if (data[link]) {
        return { name, link, count: data[link] };
      }
      return { name, link, count };
    });
    setNavList(newList);
  }, [data, error?.message, isError]);

  return (
    <>
      <ul className={styles.list}>
        {navList.map(({ name, count, link }) => (
          <li key={link} className={`${styles.item}`}>
            <Link
              href={link}
              className={`${styles.link} ${pathname.includes(link) ? styles.link_active : ''}`}
            >
              {name}
              <span
                className={`${styles.counter} ${
                  pathname.includes(link) ? styles.counter_active : ''
                }`}
              >
                {count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};

export default Navigation;
