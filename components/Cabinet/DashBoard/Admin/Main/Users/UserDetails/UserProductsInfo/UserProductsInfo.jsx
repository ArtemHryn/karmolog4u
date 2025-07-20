'use client';

import { useState } from 'react';
import styles from './UserProductsInfo.module.scss';
import UserProductsInfoTable from './UserProductsInfoTable/UserProductsInfoTable';
import UserProductAdd from './UserProductAdd/UserProductAdd';

const UserProductsInfo = ({ userDetails }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  if (!userDetails) return <div>Немає продуктів</div>;

  const filterProducts = () => {
    return userDetails.products.map(el => ({ ...el, type: 'Медитації' }));
  };

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.info_part_wrapper}>
        <UserProductsInfoTable list={filterProducts()} />
      </div>
      <div className={styles.info_part_wrapper}>
        <UserProductAdd selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>
    </div>
  );
};

export default UserProductsInfo;
