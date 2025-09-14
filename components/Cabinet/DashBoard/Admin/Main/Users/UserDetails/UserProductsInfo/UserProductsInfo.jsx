'use client';

import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import UserProductsInfoTable from './UserProductsInfoTable/UserProductsInfoTable';
import UserProductAdd from './UserProductAdd/UserProductAdd';

import styles from './UserProductsInfo.module.scss';
import { base_url } from '@/helper/consts';

const fetchUserPurchases = async ({ token, userId }) => {
  const res = await fetch(`${base_url}/admin/productPurchase/get/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Помилка завантаження списку продуктів користувача');
  }
  return res.json();
};

const UserProductsInfo = () => {
  const { data: token } = useSession();
  const { id } = useParams();

  const {
    data: productsPurchase,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products_purchase', 'users'],
    queryFn: () => fetchUserPurchases({ token: token.accessToken, userId: id }),
    placeholderData: prevD => prevD,
  });

  const usedPurchases = () => {
    return productsPurchase?.map(({ productId }) => productId);
  };

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.info_part_wrapper}>
        {isLoading ? (
          <div>Завантаження продуктів...</div>
        ) : (
          <UserProductsInfoTable list={productsPurchase} isError={isError} />
        )}
      </div>
      <div className={styles.info_part_wrapper}>
        <UserProductAdd usedPurchases={usedPurchases()} isLoadingProducts={isLoading} />
      </div>
    </div>
  );
};

export default UserProductsInfo;
