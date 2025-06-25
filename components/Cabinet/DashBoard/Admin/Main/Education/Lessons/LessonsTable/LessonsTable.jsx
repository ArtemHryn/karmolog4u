'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Filters from '../../TablesInfo/Filters/Filters';
import Table from './Table/Table';
import Actions from '../../Modules/ModulesTable/Actions/Actions';
import ModulesListButtons from './ModulesListButtons/ModulesListButtons';

import styles from './LessonsTable.module.scss';
import { PUBLISHED } from '@/helper/consts';

const list = [
  { name: 'Teor 1kjfdgsfd', id: '1' },
  { name: 'Pract 1fesferfer', id: '2' },
  { name: ' Ntjh 1 fsdgsd wfwe', id: '3' },
  { name: 'Teor 1kjfdgsfd', id: '4' },
  { name: 'Pract 1fesferfer', id: '5' },
  { name: ' Ntjh 1 fsdgsd wfwe', id: '6' },
  { name: 'Teor 1kjfdgsfd', id: '7' },
  { name: 'Pract 1fesferfer', id: '8' },
  { name: ' Ntjh 1 fsdgsd wfwe', id: '9' },
  { name: 'Teor 1kjfdgsfd', id: '10' },
  { name: 'Pract 1fesferfer', id: '11' },
  { name: ' Ntjh 1 fsdgsd wfwe', id: '12' },
];

const LessonsTable = () => {
  const [search, setSearch] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [activeBtn, setActiveBtn] = useState(PUBLISHED);
  const [numberOsCourses, setNumberOsCourses] = useState(null);
  const params = useParams();
  const moduleId = params.module_id;
  const [activeModule, setActiveModule] = useState(moduleId);

  return (
    <div className={styles.wrapper}>
      <ModulesListButtons
        list={list}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
      />
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
