'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Status from '../Meditations/Status/Status';

import styles from './Gifts.module.scss';
import { gifts } from '@helper/db/gifts';
import GiftsList from './GiftsList/GiftsList';

const Gifts = () => {
  const [status, setStatus] = useState('all');
  const { data: token } = useSession();

  //   const {
  //     data: gifts,
  //     isLoading,
  //     isError,
  //   } = useQuery({
  //     queryKey: ['gifts'],
  //     queryFn: () => fetchGuidesAndBooks(token.accessToken),
  //   });
  return (
    <div className={styles.wrapper}>
      <Status activeStatus={status} setActiveStatus={setStatus} products={gifts} />
      <GiftsList status={status} gifts={gifts} />
    </div>
  );
};

export default Gifts;
