'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import Status from '../Meditations/Status/Status';
import GiftsList from './GiftsList/GiftsList';
import SkeletonProducts from '../SkeletonProducts/SkeletonProducts';

import { base_url } from '@helper/consts';
import styles from './Gifts.module.scss';

const fetchGifts = async token => {
  const response = await fetch(`${base_url}/admin/products/gifts/get-all`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Помилка завантаження вебінарів');
  }
  return response.json();
};

const Gifts = () => {
  const [status, setStatus] = useState('all');
  const { data: token } = useSession();

  const {
    data: gifts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['gifts'],
    queryFn: () => fetchGifts(token.accessToken),
  });

  if (isError) return <div>Error...</div>;

  return (
    <div className={styles.wrapper}>
      <Status activeStatus={status} setActiveStatus={setStatus} products={gifts} />
      {isLoading ? <SkeletonProducts /> : <GiftsList status={status} gifts={gifts} />}
    </div>
  );
};

export default Gifts;
