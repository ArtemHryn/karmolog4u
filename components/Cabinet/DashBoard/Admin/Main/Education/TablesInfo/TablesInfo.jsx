import Actions from './Actions/Actions';
import Filters from './Filters/Filters';
import Table from './Table/Table';
import { PUBLISHED } from '@/helper/consts';

import styles from './TablesInfo.module.scss';
import { useState } from 'react';

const TablesInfo = ({ search, setSearch }) => {
  const [activeBtn, setActiveBtn] = useState(PUBLISHED);

  return (
    <div className={styles.wrapper}>
      <Actions search={search} setSearch={setSearch} />
      <Filters activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <Table activeBtn={activeBtn} search={search} />
    </div>
  );
};

export default TablesInfo;
