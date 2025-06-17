'use client';

import { useState } from 'react';
import Actions from './Actions/Actions';
import Table from './Table/Table';

import styles from './ModulesTable.module.scss';

const ModulesTable = () => {
  const [search, setSearch] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Actions search={search} setSearch={setSearch} selectedProducts={selectedProducts} />
      <Table
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        search={search}
      />
    </div>
  );
};

export default ModulesTable;
