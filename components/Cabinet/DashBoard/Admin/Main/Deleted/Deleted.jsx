'use client';

import { useState } from 'react';
import Head from './Head/Head';

import styles from './Deleted.module.scss';
import Table from './Table/Table';

const Deleted = () => {
  const [search, setSearch] = useState('');
  return (
    <main className={styles.main}>
      <Head search={search} setSearch={setSearch} />
      <Table search={search} setSearch={setSearch} />
    </main>
  );
};

export default Deleted;
