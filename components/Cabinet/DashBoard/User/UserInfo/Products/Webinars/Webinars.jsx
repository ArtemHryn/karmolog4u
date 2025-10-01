'use client';

import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ErrorLoading from '../../../ErrorLoading/ErrorLoading';
import Loader from '../../../Loader/Loader';
import useUserInfo from '@/hooks/useUserInfo';

import styles from './Webinars.module.scss';
import ProductItem from '../ProductItem/ProductItem';


const Webinars = () => {
  const { data: token } = useSession();
  const pathName = usePathname();
  const activePartSplitted = pathName.split('/').filter(Boolean).pop();
  const activePart = activePartSplitted
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const {
    data: webinars,
    isLoading,
    isError,
  } = useUserInfo({
    action: 'products',
    queryKey: ['user_products', 'webinars'],
    token: token?.accessToken,
    activePart,
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorLoading />;

  if (!webinars) return null;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {webinars.map(item => (
          <ProductItem key={item.id} item={item} type={'Вебінар'} link={'webinars'} />
        ))}
      </ul>
    </div>
  );
};

export default Webinars;
