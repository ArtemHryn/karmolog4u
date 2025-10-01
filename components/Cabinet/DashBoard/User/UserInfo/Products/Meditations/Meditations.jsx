'use client';

import { useSession } from 'next-auth/react';
import useUserInfo from '@/hooks/useUserInfo';
import ProductItem from '../ProductItem/ProductItem';
import styles from './Meditations.module.scss';
import { usePathname } from 'next/navigation';
import Loader from '../../../Loader/Loader';
import ErrorLoading from '../../../ErrorLoading/ErrorLoading';

const list = [
  {
    name: 'Meditation 1 Meditation 1 Meditation 1 Meditation 1 Meditation 1',
    cover: '/assets/images/therapySessions/session-insight-desk.webp',
    id: 1,
  },
  {
    name: 'Meditation 2',
    cover: '/assets/images/therapySessions/session-insight-desk.webp',
    id: 2,
  },
  {
    name: 'Meditation 3',
    cover: '/assets/images/therapySessions/session-insight-desk.webp',
    id: 3,
  },
];

const Meditations = () => {
  const { data: token } = useSession();
  const pathName = usePathname();
  const activePartSplitted = pathName.split('/').filter(Boolean).pop();
  const activePart = activePartSplitted
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const {
    data: products,
    isLoading,
    isError,
  } = useUserInfo({
    action: 'products',
    queryKey: ['user_products', 'meditations'],
    token: token?.accessToken,
    activePart,
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorLoading />;

  if (!products) return null;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {products.map(item => (
          <ProductItem key={item.id} item={item} type={'Медитація'} link={'meditations'} />
        ))}
      </ul>
    </div>
  );
};

export default Meditations;
