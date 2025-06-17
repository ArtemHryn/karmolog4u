'use client';
import { useState } from 'react';
import Actions from '../../Modules/ModulesTable/Actions/Actions';
import Filters from '../../TablesInfo/Filters/Filters';

import styles from './LessonsTable.module.scss';
import { PUBLISHED } from '@/helper/consts';
import Table from './Table/Table';

const LessonsTable = () => {
  const [search, setSearch] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [activeBtn, setActiveBtn] = useState(PUBLISHED);
  const [numberOsCourses, setNumberOsCourses] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.actions_wrapper}>
        <Actions search={search} setSearch={setSearch} selectedProducts={selectedProducts} />
        <Filters
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          numberOsCourses={numberOsCourses}
        />
      </div>
      <Table
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        search={search}
        activeBtn={activeBtn}
        setNumberOsCourses={setNumberOsCourses}
      />
    </div>
  );
};

export default LessonsTable;
