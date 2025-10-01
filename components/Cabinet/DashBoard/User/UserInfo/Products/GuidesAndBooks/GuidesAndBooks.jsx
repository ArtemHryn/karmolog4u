'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Loader from '../../../Loader/Loader';
import FilterList from '../FilterList/FilterList';
import useUserInfo from '@/hooks/useUserInfo';
import ErrorLoading from '../../../ErrorLoading/ErrorLoading';
import ProductItem from '../ProductItem/ProductItem';

import styles from './GuidesAndBooks.module.scss';

const checkboxes = [
  { label: 'Гайди', storageKey: 'user-guide-and-books' },
  { label: 'Книги', storageKey: 'user-books' },
];

const GuidesAndBooks = () => {
  const [filters, setFilters] = useState({});
  const { data: token } = useSession();
  const pathName = usePathname();
  const activePartSplitted = pathName.split('/').filter(Boolean).pop();
  const activePart = activePartSplitted
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  useEffect(() => {
    const book = localStorage.getItem('user-books');
    const guide = localStorage.getItem('user-guide-and-books');
    setFilters({
      'user-books': JSON.parse(book) ?? false,
      'user-guide-and-books': JSON.parse(guide) ?? false,
    });
  }, []);

  const {
    data: guidesAndBooks,
    isLoading,
    isError,
  } = useUserInfo({
    action: 'products',
    queryKey: ['user_products', 'guides-and-books'],
    token: token?.accessToken,
    activePart,
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorLoading />;

  if (!guidesAndBooks) return null;

  const filterData = () => {
    if (!filters['user-books'] && !filters['user-guide-and-books']) return guidesAndBooks;
    const books = filters['user-books'] ? guidesAndBooks.filter(el => el.category === 'BOOKS') : [];
    const guides = filters['user-guide-and-books']
      ? guidesAndBooks.filter(el => el.category !== 'BOOKS')
      : [];

    return [...books, ...guides];
  };

  return (
    <div className={styles.wrapper}>
      <FilterList checkboxes={checkboxes} setFilters={setFilters} />
      <ul className={styles.list}>
        {filterData().map(item => (
          <ProductItem key={item.id} item={item} type={'Гайд'} link={'guides-and-books'} />
        ))}
      </ul>
    </div>
  );
};

export default GuidesAndBooks;
