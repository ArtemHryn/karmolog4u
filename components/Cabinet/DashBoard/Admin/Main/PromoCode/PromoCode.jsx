'use client';

import { useState } from 'react';
import PromoHead from './PromoHead/PromoHead';

import styles from './PromoCode.module.scss';
import PromoTable from './PromoTable/PromoTable';

const PromoCode = () => {
  const [search, setSearch] = useState('');

  return (
    <main className={styles.main}>
      <PromoHead search={search} setSearch={setSearch} />
      <PromoTable search={search} setSearch={setSearch} />
    </main>
  );
};

export default PromoCode;
