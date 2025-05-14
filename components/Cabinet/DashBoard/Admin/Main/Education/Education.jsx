'use client';

import { useState } from 'react';
import styles from './Education.module.scss';
import Head from './Head/Head';
import TablesInfo from './TablesInfo/TablesInfo';

const Education = () => {
  const [search, setSearch] = useState('');

  return (
    <main className={styles.main}>
      <Head search={search} setSearch={setSearch} />
      <TablesInfo search={search} setSearch={setSearch} />
    </main>
  );
};

export default Education;
