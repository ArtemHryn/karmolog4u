'use client';

import { useQuery } from '@tanstack/react-query';

import { base_url } from '../../../helper/consts';

import styles from './Gifts.module.scss';
import ProductsLoading from '../ProductsLoading/ProductsLoading';
import ProductsError from '../ProductsError/ProductsError';
import ProductElementInList from '../ProductElementInList/ProductElementInList';

const getGifts = async () => {
  const res = await fetch(`${base_url}/products/gifts/get-all`);
  if (!res.ok) {
    throw new Error('Помилка завантаження подарунків');
  }
  return res.json();
};

const Gifts = () => {
  const {
    data: gifts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['gifts'],
    queryFn: () => getGifts(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) return <ProductsLoading />;
  if (isError) return <ProductsError />;

  return (
    <ul className={styles.gifts_list}>
      {gifts.map(el => (
        <li key={el.id} className={styles.gifts_list_item}>
          <ProductElementInList card={el} />
        </li>
      ))}
    </ul>
  );
};

export default Gifts;
